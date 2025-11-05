-- SeatPilot · Venue Base Designer schema (PR-05)
-- Multi-tenant tables for venue catalog, layouts, assets and snapshots.

set check_function_bodies = off;

create extension if not exists pgcrypto;
create schema if not exists app;

-- ---------------------------------------------------------------------------
-- VENUES (catálogo multi-tenant)
-- ---------------------------------------------------------------------------

create table if not exists venues (
  id uuid primary key default gen_random_uuid(),
  tenant_id uuid not null references tenants(id) on delete cascade,
  name text not null,
  country_code text not null default 'PR',
  region text,
  city text,
  locality text,
  address text,
  latitude numeric(10,7),
  longitude numeric(10,7),
  tags text[] not null default '{}'::text[],
  capacity_hint int,
  created_by uuid,
  updated_by uuid,
  created_at timestamptz not null default timezone('utc', now()),
  updated_at timestamptz not null default timezone('utc', now())
);

comment on table venues is 'Venue catalog (multi-tenant) used by the SeatPilot Venue Base Designer.';

create index if not exists idx_venues_tenant_name
  on venues (tenant_id, lower(name));

alter table venues enable row level security;

drop policy if exists venues_rw on venues;
create policy venues_rw on venues
  using (tenant_id = app.current_tenant_id())
  with check (tenant_id = app.current_tenant_id());

-- ---------------------------------------------------------------------------
-- TOUCH UPDATED_AT
-- ---------------------------------------------------------------------------

create or replace function app.touch_updated_at()
returns trigger
language plpgsql
security definer
set search_path = public, app
as $$
begin
  new.updated_at := timezone('utc', now());
  return new;
end;$$;

drop trigger if exists trg_venues_touch on venues;
create trigger trg_venues_touch
  before update on venues
  for each row execute function app.touch_updated_at();

-- ---------------------------------------------------------------------------
-- VENUE PLANS (planos base del venue)
-- ---------------------------------------------------------------------------

create table if not exists venue_plans (
  id uuid primary key default gen_random_uuid(),
  tenant_id uuid not null references tenants(id) on delete cascade,
  venue_id uuid not null references venues(id) on delete cascade,
  version_label text not null,
  status text not null default 'draft' check (status in ('draft','published','archived')),
  is_published boolean not null default false,
  published_at timestamptz,
  units text not null default 'metric' check (units in ('metric','imperial')),
  scale text,
  transform jsonb default '{}'::jsonb,
  calibration jsonb default '{}'::jsonb,
  layers jsonb not null default '{}'::jsonb,
  checklist jsonb not null default '{}'::jsonb,
  metadata jsonb not null default '{}'::jsonb,
  notes text,
  created_by uuid,
  updated_by uuid,
  created_at timestamptz not null default timezone('utc', now()),
  updated_at timestamptz not null default timezone('utc', now())
);

comment on table venue_plans is 'Editable base layout document for a venue (multi-tenant).';

create unique index if not exists uniq_venue_plan_version
  on venue_plans (venue_id, version_label);

create index if not exists idx_venue_plans_tenant_status
  on venue_plans (tenant_id, status, is_published);

alter table venue_plans enable row level security;

drop policy if exists venue_plans_rw on venue_plans;
create policy venue_plans_rw on venue_plans
  using (tenant_id = app.current_tenant_id())
  with check (tenant_id = app.current_tenant_id());

drop trigger if exists trg_venue_plans_touch on venue_plans;
create trigger trg_venue_plans_touch
  before update on venue_plans
  for each row execute function app.touch_updated_at();

-- ---------------------------------------------------------------------------
-- SNAPSHOTS
-- ---------------------------------------------------------------------------

create table if not exists venue_plan_snapshots (
  id uuid primary key default gen_random_uuid(),
  tenant_id uuid not null references tenants(id) on delete cascade,
  plan_id uuid not null references venue_plans(id) on delete cascade,
  label text,
  diff jsonb,
  snapshot jsonb not null,
  created_by uuid,
  created_at timestamptz not null default timezone('utc', now())
);

comment on table venue_plan_snapshots is 'Immutable snapshots of layout states for auditing / rollback.';

create index if not exists idx_snapshots_plan_created
  on venue_plan_snapshots (plan_id, created_at desc);

alter table venue_plan_snapshots enable row level security;

drop policy if exists venue_plan_snapshots_rw on venue_plan_snapshots;
create policy venue_plan_snapshots_rw on venue_plan_snapshots
  using (tenant_id = app.current_tenant_id())
  with check (tenant_id = app.current_tenant_id());

-- ---------------------------------------------------------------------------
-- ASSETS (underlays / archivos de referencia)
-- ---------------------------------------------------------------------------

create table if not exists venue_assets (
  id uuid primary key default gen_random_uuid(),
  tenant_id uuid not null references tenants(id) on delete cascade,
  venue_id uuid not null references venues(id) on delete cascade,
  plan_id uuid references venue_plans(id) on delete set null,
  kind text not null check (kind in ('image','pdf','dxf','svg','other')),
  storage_url text not null,
  meta jsonb not null default '{}'::jsonb,
  uploaded_by uuid,
  uploaded_at timestamptz not null default timezone('utc', now())
);

comment on table venue_assets is 'Underlays and reference files linked to a venue and/or plan (multi-tenant).';

create index if not exists idx_venue_assets_venue_kind
  on venue_assets (venue_id, kind);

alter table venue_assets enable row level security;

drop policy if exists venue_assets_rw on venue_assets;
create policy venue_assets_rw on venue_assets
  using (tenant_id = app.current_tenant_id())
  with check (tenant_id = app.current_tenant_id());

-- ---------------------------------------------------------------------------
-- SHARE TOKENS (opcional lectura)
-- ---------------------------------------------------------------------------

create table if not exists venue_plan_shares (
  id uuid primary key default gen_random_uuid(),
  tenant_id uuid not null references tenants(id) on delete cascade,
  plan_id uuid not null references venue_plans(id) on delete cascade,
  role text not null default 'viewer' check (role in ('viewer')),
  token text not null,
  expires_at timestamptz,
  created_by uuid,
  created_at timestamptz not null default timezone('utc', now())
);

create unique index if not exists uniq_plan_share_token
  on venue_plan_shares (token);

alter table venue_plan_shares enable row level security;

drop policy if exists venue_plan_shares_rw on venue_plan_shares;
create policy venue_plan_shares_rw on venue_plan_shares
  using (tenant_id = app.current_tenant_id())
  with check (tenant_id = app.current_tenant_id());

-- ---------------------------------------------------------------------------
-- CLEANUP POLICIES
-- ---------------------------------------------------------------------------

-- Ensure cascades clean up child rows when a venue is deleted.
alter table venue_plan_snapshots
  drop constraint if exists venue_plan_snapshots_plan_id_fkey,
  add constraint venue_plan_snapshots_plan_id_fkey
    foreign key (plan_id) references venue_plans(id) on delete cascade;

alter table venue_assets
  drop constraint if exists venue_assets_plan_id_fkey,
  add constraint venue_assets_plan_id_fkey
    foreign key (plan_id) references venue_plans(id) on delete set null;

alter table venue_assets
  drop constraint if exists venue_assets_venue_id_fkey,
  add constraint venue_assets_venue_id_fkey
    foreign key (venue_id) references venues(id) on delete cascade;

alter table venue_plans
  drop constraint if exists venue_plans_venue_id_fkey,
  add constraint venue_plans_venue_id_fkey
    foreign key (venue_id) references venues(id) on delete cascade;

-- Helpful partial index to fetch published layouts quickly.
create index if not exists idx_venue_plans_published
  on venue_plans (venue_id)
  where is_published;

