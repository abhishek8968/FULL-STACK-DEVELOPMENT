# Pet Haven UAE - Production Architecture

## Website Structure
- `/` Home with hero, featured pets, trust sections, shelters, and responsible adoption messaging.
- `/pets` Discovery marketplace with filters and pet cards.
- `/pets/[id]` SEO-friendly listing profile pages.
- `/rehome` Listing submission for owners and shelters.
- `/resources` Pet care educational hub.
- `/vets` Veterinary directory filtered by emirate.
- `/admin` Moderator dashboard.

## Technical Stack
- Next.js App Router + React + TailwindCSS (responsive and SEO-friendly).
- Node.js runtime via Next.js route handlers.
- Supabase adapter in `lib/supabase.ts` for Postgres + Auth.
- Cloud-ready deployment targets: Vercel/Netlify + Supabase.

## Scalability Notes
- Use ISR for high-traffic pet listing pages.
- Edge caching for discovery endpoints.
- Store media in object storage (Supabase Storage or S3).
- Queue moderation and notification jobs with background workers.
