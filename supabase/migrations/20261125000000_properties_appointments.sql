create table if not exists public.property_listings (
  id uuid primary key default gen_random_uuid(),
  owner_id uuid not null references auth.users (id) on delete cascade,
  title text not null check (char_length(title) between 1 and 70),
  area text not null,
  city text not null,
  kind text not null check (kind in ('للبيع', 'للإيجار')),
  property_type text not null,
  price numeric(14, 2) not null check (price > 0),
  beds integer not null check (beds between 0 and 30),
  baths integer not null check (baths between 0 and 20),
  size numeric(10, 2) not null check (size > 0),
  description text not null default '' check (char_length(description) <= 1500),
  images text[] not null default '{}',
  lat double precision check (lat is null or lat between -90 and 90),
  lng double precision check (lng is null or lng between -180 and 180),
  publisher text not null check (char_length(publisher) between 1 and 40),
  phone text not null check (phone ~ '^20[0-9]{10}$'),
  status text not null default 'published' check (status = 'published'),
  created_at timestamptz not null default now(),
  check ((lat is null) = (lng is null)),
  check (cardinality(images) <= 20)
);

create index if not exists property_listings_area_idx on public.property_listings (area);
create index if not exists property_listings_city_idx on public.property_listings (city);
create index if not exists property_listings_price_idx on public.property_listings (price);
create index if not exists property_listings_owner_idx on public.property_listings (owner_id);

alter table public.property_listings enable row level security;
revoke all on public.property_listings from public, anon, authenticated;
grant select (id, title, area, city, kind, property_type, price, beds, baths, size, description, images, lat, lng, publisher, phone, status, created_at)
  on public.property_listings to anon, authenticated;
grant insert (owner_id, title, area, city, kind, property_type, price, beds, baths, size, description, images, lat, lng, publisher, phone)
  on public.property_listings to authenticated;
grant delete on public.property_listings to authenticated;

drop policy if exists "Anyone can view published properties" on public.property_listings;
create policy "Anyone can view published properties"
  on public.property_listings for select
  to anon, authenticated
  using (status = 'published');

drop policy if exists "Users can publish their own properties" on public.property_listings;
create policy "Users can publish their own properties"
  on public.property_listings for insert
  to authenticated
  with check ((select auth.uid()) = owner_id);

drop policy if exists "Owners can remove their own properties" on public.property_listings;
create policy "Owners can remove their own properties"
  on public.property_listings for delete
  to authenticated
  using ((select auth.uid()) = owner_id);

create table if not exists public.property_appointments (
  id uuid primary key default gen_random_uuid(),
  property_id uuid not null references public.property_listings (id) on delete cascade,
  owner_id uuid not null references auth.users (id) on delete cascade,
  requester_id uuid not null references auth.users (id) on delete cascade,
  requester_name text not null check (char_length(requester_name) between 1 and 60),
  requester_email text not null check (char_length(requester_email) <= 254),
  requester_phone text not null check (requester_phone ~ '^[0-9+() -]{7,20}$'),
  scheduled_at timestamptz not null,
  note text not null default '' check (char_length(note) <= 500),
  status text not null default 'pending' check (status in ('pending', 'approved', 'rejected')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  check (owner_id <> requester_id)
);

create index if not exists property_appointments_owner_idx
  on public.property_appointments (owner_id, scheduled_at);
create index if not exists property_appointments_requester_idx
  on public.property_appointments (requester_id, scheduled_at);
create unique index if not exists property_appointments_active_slot_idx
  on public.property_appointments (property_id, scheduled_at)
  where status in ('pending', 'approved');

create or replace function public.prepare_property_appointment()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
begin
  if new.requester_id is distinct from auth.uid() then
    raise exception 'Appointment requester must be the authenticated user.';
  end if;

  select listing.owner_id
    into new.owner_id
    from public.property_listings as listing
    where listing.id = new.property_id
      and listing.status = 'published';

  if new.owner_id is null then
    raise exception 'The property is not available for appointments.';
  end if;
  if new.owner_id = new.requester_id then
    raise exception 'Property owners cannot book their own property.';
  end if;
  if new.scheduled_at <= now() or new.scheduled_at > now() + interval '180 days' then
    raise exception 'Appointment time must be within the next 180 days.';
  end if;

  select account.email,
         left(coalesce(nullif(profile.display_name, ''), split_part(account.email, '@', 1)), 60)
    into new.requester_email, new.requester_name
    from auth.users as account
    left join public.profiles as profile on profile.id = account.id
    where account.id = new.requester_id;
  if new.requester_email is null then
    raise exception 'The authenticated account needs an email address.';
  end if;

  new.status := 'pending';
  return new;
end;
$$;

revoke execute on function public.prepare_property_appointment() from public, anon, authenticated;

drop trigger if exists prepare_property_appointment on public.property_appointments;
create trigger prepare_property_appointment
  before insert on public.property_appointments
  for each row execute procedure public.prepare_property_appointment();

create or replace function public.update_property_appointment_timestamp()
returns trigger
language plpgsql
set search_path = ''
as $$
begin
  new.updated_at := now();
  return new;
end;
$$;

revoke execute on function public.update_property_appointment_timestamp() from public, anon, authenticated;

drop trigger if exists update_property_appointment_timestamp on public.property_appointments;
create trigger update_property_appointment_timestamp
  before update on public.property_appointments
  for each row execute procedure public.update_property_appointment_timestamp();

alter table public.property_appointments enable row level security;
revoke all on public.property_appointments from public, anon, authenticated;
grant select on public.property_appointments to authenticated;
grant insert (property_id, requester_id, requester_phone, scheduled_at, note)
  on public.property_appointments to authenticated;
grant update (status) on public.property_appointments to authenticated;

drop policy if exists "Participants can view appointments" on public.property_appointments;
create policy "Participants can view appointments"
  on public.property_appointments for select
  to authenticated
  using ((select auth.uid()) in (owner_id, requester_id));

drop policy if exists "Users can request property appointments" on public.property_appointments;
create policy "Users can request property appointments"
  on public.property_appointments for insert
  to authenticated
  with check (
    requester_id = (select auth.uid())
    and owner_id <> requester_id
    and status = 'pending'
  );

drop policy if exists "Owners can respond to pending appointments" on public.property_appointments;
create policy "Owners can respond to pending appointments"
  on public.property_appointments for update
  to authenticated
  using ((select auth.uid()) = owner_id and status = 'pending')
  with check ((select auth.uid()) = owner_id and status in ('approved', 'rejected'));
