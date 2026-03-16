import { NextResponse } from 'next/server';
import { featuredPets } from '@/lib/mock-data';

export async function GET() {
  return NextResponse.json({ data: featuredPets });
}

export async function POST(request: Request) {
  const payload = await request.json();
  if (payload?.price) {
    return NextResponse.json({ error: 'Selling pets is strictly prohibited.' }, { status: 400 });
  }
  return NextResponse.json({ message: 'Listing submitted for moderation review.' }, { status: 201 });
}
