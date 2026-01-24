from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict, EmailStr
from typing import List
import uuid
from datetime import datetime, timezone
from google.oauth2 import service_account
from googleapiclient.discovery import build
import asyncio

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ.get('MONGO_URL', 'mongodb://localhost:27017')
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ.get('DB_NAME', 'test_database')]

# Google Sheets Configuration
GOOGLE_SHEET_ID = os.environ.get('GOOGLE_SHEET_ID', '')
GOOGLE_SERVICE_ACCOUNT_EMAIL = os.environ.get('GOOGLE_SERVICE_ACCOUNT_EMAIL', '')
GOOGLE_PRIVATE_KEY = os.environ.get('GOOGLE_PRIVATE_KEY', '').replace('\\n', '\n')
GOOGLE_PROJECT_ID = os.environ.get('GOOGLE_PROJECT_ID', '')
GOOGLE_PRIVATE_KEY_ID = os.environ.get('GOOGLE_PRIVATE_KEY_ID', '')
GOOGLE_CLIENT_ID = os.environ.get('GOOGLE_CLIENT_ID', '')

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)


# Define Models
class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class StatusCheckCreate(BaseModel):
    client_name: str

class EmailSubmission(BaseModel):
    email: EmailStr

class EmailSubmissionResponse(BaseModel):
    success: bool
    message: str


# Google Sheets Helper
def get_sheets_service():
    """Create Google Sheets service using service account credentials."""
    try:
        credentials_info = {
            "type": "service_account",
            "project_id": GOOGLE_PROJECT_ID,
            "private_key_id": GOOGLE_PRIVATE_KEY_ID,
            "private_key": GOOGLE_PRIVATE_KEY,
            "client_email": GOOGLE_SERVICE_ACCOUNT_EMAIL,
            "client_id": GOOGLE_CLIENT_ID,
            "auth_uri": "https://accounts.google.com/o/oauth2/auth",
            "token_uri": "https://oauth2.googleapis.com/token",
            "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
            "client_x509_cert_url": f"https://www.googleapis.com/robot/v1/metadata/x509/{GOOGLE_SERVICE_ACCOUNT_EMAIL.replace('@', '%40') if GOOGLE_SERVICE_ACCOUNT_EMAIL else ''}",
            "universe_domain": "googleapis.com"
        }
        
        credentials = service_account.Credentials.from_service_account_info(
            credentials_info,
            scopes=['https://www.googleapis.com/auth/spreadsheets']
        )
        
        service = build('sheets', 'v4', credentials=credentials)
        return service
    except Exception as e:
        logger.error(f"Failed to create Google Sheets service: {e}")
        raise


async def append_to_sheet(email: str, timestamp: str):
    """Append email submission to Google Sheet."""
    try:
        def _append():
            service = get_sheets_service()
            values = [[email, timestamp, "QMDE Access Request"]]
            body = {"values": values}
            
            result = service.spreadsheets().values().append(
                spreadsheetId=GOOGLE_SHEET_ID,
                range="Sheet1!A:C",
                valueInputOption="RAW",
                insertDataOption="INSERT_ROWS",
                body=body
            ).execute()
            
            return result
        
        # Run synchronous Google API call in thread pool
        result = await asyncio.to_thread(_append)
        logger.info(f"Successfully appended email to sheet: {email}")
        return result
    except Exception as e:
        logger.error(f"Failed to append to Google Sheet: {e}")
        raise


# Health check endpoint - REQUIRED for Kubernetes deployment
@app.get("/health")
async def health_check():
    """Health check endpoint for Kubernetes liveness/readiness probes."""
    return {"status": "healthy", "timestamp": datetime.now(timezone.utc).isoformat()}


# Routes
@api_router.get("/")
async def root():
    return {"message": "Hello World"}


@api_router.post("/submit-email", response_model=EmailSubmissionResponse)
async def submit_email(submission: EmailSubmission):
    """Submit email to Google Sheets for QMDE access request."""
    try:
        timestamp = datetime.now(timezone.utc).strftime("%Y-%m-%d %H:%M:%S UTC")
        
        # Append to Google Sheet if configured
        if GOOGLE_SHEET_ID and GOOGLE_SERVICE_ACCOUNT_EMAIL and GOOGLE_PRIVATE_KEY:
            await append_to_sheet(submission.email, timestamp)
        
        # Also store in MongoDB for backup
        await db.email_submissions.insert_one({
            "email": submission.email,
            "timestamp": timestamp,
            "source": "QMDE Landing Page"
        })
        
        return EmailSubmissionResponse(
            success=True,
            message="Application received. Review in 48-72 hours."
        )
    except Exception as e:
        logger.error(f"Email submission failed: {e}")
        raise HTTPException(
            status_code=500,
            detail="Failed to submit application. Please try again."
        )


@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_dict = input.model_dump()
    status_obj = StatusCheck(**status_dict)
    
    doc = status_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    
    _ = await db.status_checks.insert_one(doc)
    return status_obj


@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    status_checks = await db.status_checks.find({}, {"_id": 0}).to_list(100)
    
    for check in status_checks:
        if isinstance(check['timestamp'], str):
            check['timestamp'] = datetime.fromisoformat(check['timestamp'])
    
    return status_checks


# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
