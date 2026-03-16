create type user_role as enum ('owner', 'adopter', 'shelter', 'admin');
create type listing_status as enum ('draft', 'pending_review', 'approved', 'rejected', 'adopted');
create type request_status as enum ('submitted', 'under_review', 'accepted', 'declined', 'closed');

create table profiles (
  id uuid primary key,
  role user_role not null,
  full_name text not null,
  email text unique not null,
  phone text,
  emirate text,
  living_type text check (living_type in ('Apartment', 'Villa')),
  pet_experience text,
  preferred_pet_type text,
  gov_id_verified boolean default false,
  created_at timestamptz default now()
);

create table organizations (
  id uuid primary key default gen_random_uuid(),
  owner_id uuid references profiles(id),
  name text not null,
  description text,
  emirate text,
  verified boolean default false,
  created_at timestamptz default now()
);

create table pets (
  id uuid primary key default gen_random_uuid(),
  owner_id uuid references profiles(id),
  organization_id uuid references organizations(id),
  name text not null,
  species text not null,
  breed text,
  age_months int,
  gender text,
  vaccination_status text,
  microchip_status text,
  neutered_spayed boolean,
  temperament text[],
  medical_conditions text,
  reason_for_rehoming text,
  emirate text not null,
  size text,
  compatible_with_children boolean,
  compatible_with_pets boolean,
  status listing_status default 'pending_review',
  created_at timestamptz default now()
);

create table pet_media (
  id uuid primary key default gen_random_uuid(),
  pet_id uuid references pets(id) on delete cascade,
  media_type text check (media_type in ('photo', 'video', 'certificate')),
  storage_path text not null,
  created_at timestamptz default now()
);

create table adoption_requests (
  id uuid primary key default gen_random_uuid(),
  pet_id uuid references pets(id) on delete cascade,
  adopter_id uuid references profiles(id),
  motivation text not null,
  living_situation text not null,
  pet_experience text not null,
  status request_status default 'submitted',
  created_at timestamptz default now()
);

create table conversations (
  id uuid primary key default gen_random_uuid(),
  request_id uuid references adoption_requests(id) on delete cascade,
  owner_id uuid references profiles(id),
  adopter_id uuid references profiles(id),
  is_open boolean default true,
  created_at timestamptz default now()
);

create table messages (
  id uuid primary key default gen_random_uuid(),
  conversation_id uuid references conversations(id) on delete cascade,
  sender_id uuid references profiles(id),
  body text not null,
  created_at timestamptz default now()
);

create table reports (
  id uuid primary key default gen_random_uuid(),
  reporter_id uuid references profiles(id),
  target_pet_id uuid references pets(id),
  reason text not null,
  status text default 'open',
  created_at timestamptz default now()
);
