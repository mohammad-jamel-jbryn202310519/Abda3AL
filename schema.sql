-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- 1. Universities Table
create table public.universities (
  id uuid default uuid_generate_v4() primary key,
  name text not null,
  type text check (type in ('public', 'private')) not null,
  description text,
  ranking integer not null,
  logo_url text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 2. Specialties Table
create table public.specialties (
  id uuid default uuid_generate_v4() primary key,
  university_id uuid references public.universities(id) on delete cascade not null,
  name text not null,
  description text,
  image_url text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 3. Required Documents Table
create table public.required_documents (
  id uuid default uuid_generate_v4() primary key,
  university_id uuid references public.universities(id) on delete cascade not null,
  student_type text check (student_type in ('jordanian', 'international')) not null,
  document_name text not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Row Level Security (RLS) setup
-- We want anyone to be able to read these tables, but only authenticated admins can edit them.

alter table public.universities enable row level security;
alter table public.specialties enable row level security;
alter table public.required_documents enable row level security;

-- Policies for public reading
create policy "Allow public read access on universities" on public.universities for select using (true);
create policy "Allow public read access on specialties" on public.specialties for select using (true);
create policy "Allow public read access on required_documents" on public.required_documents for select using (true);

-- Policies for admin writing (requires user to be authenticated)
-- Note: In a real production setup, you'd check a custom claim or a profiles table for "is_admin".
-- For now, we allow any authenticated user to modify, assuming you are the only one with an account.
create policy "Allow authenticated insert universities" on public.universities for insert with check (auth.role() = 'authenticated');
create policy "Allow authenticated update universities" on public.universities for update using (auth.role() = 'authenticated');
create policy "Allow authenticated delete universities" on public.universities for delete using (auth.role() = 'authenticated');

create policy "Allow authenticated insert specialties" on public.specialties for insert with check (auth.role() = 'authenticated');
create policy "Allow authenticated update specialties" on public.specialties for update using (auth.role() = 'authenticated');
create policy "Allow authenticated delete specialties" on public.specialties for delete using (auth.role() = 'authenticated');

create policy "Allow authenticated insert required_documents" on public.required_documents for insert with check (auth.role() = 'authenticated');
create policy "Allow authenticated update required_documents" on public.required_documents for update using (auth.role() = 'authenticated');
create policy "Allow authenticated delete required_documents" on public.required_documents for delete using (auth.role() = 'authenticated');
