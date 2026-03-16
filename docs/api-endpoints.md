# API Endpoints (MVP)

## Auth
- `POST /api/auth/signup` (email/password, role selection)
- `POST /api/auth/google` (Google OAuth)
- `POST /api/auth/phone` (optional phone verification)

## Pets
- `GET /api/pets` list pets with filters (`emirate`, `species`, `breed`, `age`, `size`, `children`, `pets`)
- `POST /api/pets` create listing (owner/shelter only, moderation required)
- `GET /api/pets/:id` pet details
- `PATCH /api/pets/:id` update listing

## Adoption workflow
- `POST /api/adoption-requests` submit request
- `GET /api/adoption-requests?ownerId=` owner/shelter request inbox
- `PATCH /api/adoption-requests/:id` accept/decline/close

## Messaging
- `POST /api/messages` send message
- `GET /api/conversations/:id/messages` list messages

## Moderation/Admin
- `POST /api/moderation` approve/reject listing, verify user, remove content
- `GET /api/moderation/activity` audit and adoption metrics

## Resources + Vets
- `GET /api/resources`
- `GET /api/vets?emirate=`
