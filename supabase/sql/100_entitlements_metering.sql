-- SeatPilot SaaS entitlements & metering schema
-- Idempotent: safe to run multiple times

-- UUID helpers
create extension if not exists pgcrypto;

-- Base tenants catalog (if not created elsewhere)
create table if not exists tenants (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  status text not null default 'active', -- active | suspended | trial
  created_at timestamptz not null default now()
);

-- Plans catalog (starter | pro | enterprise ...)
create table if not exists plans (
  id text primary key,
  display_name text not null,
  billing_period text not null, -- monthly | annual | event
  currency text not null default 'USD',
  price_cents int not null,
  description text,
  created_at timestamptz not null default now()
);

-- Plan entitlements (key/value dictionary)
create table if not exists plan_entitlements (
  plan_id text references plans(id) on delete cascade,
  key text not null,
  value text not null,
  primary key (plan_id, key)
);

-- Tenant subscriptions (one active/trial per tenant)
create table if not exists tenant_subscriptions (
  id uuid primary key default gen_random_uuid(),
  tenant_id uuid not null references tenants(id) on delete cascade,
  plan_id text not null references plans(id),
  started_at timestamptz not null default now(),
  renews_at timestamptz,
  status text not null default 'active', -- trial | active | past_due | canceled
  trial_ends_at timestamptz
);

create unique index if not exists uniq_tenant_active_or_trial
  on tenant_subscriptions (tenant_id)
  where status in ('trial', 'active');

-- Tenant overrides (per-customer exceptions)
create table if not exists tenant_entitlements_overrides (
  tenant_id uuid references tenants(id) on delete cascade,
  key text not null,
  value text not null,
  note text,
  primary key (tenant_id, key)
);

-- Metering catalog (maps event_type -> metric, sign)
create table if not exists metering_catalog (
  event_type text primary key,
  metric text not null,
  sign int not null default 1 -- 1 sum, -1 subtract
);

insert into metering_catalog(event_type, metric, sign) values
  ('event_created',  'events',   1),
  ('event_closed',   'events',  -1),
  ('checkin',        'checkins', 1),
  ('screen_active',  'screens',  1),
  ('screen_inactive','screens', -1)
on conflict (event_type) do update
  set metric = excluded.metric,
      sign   = excluded.sign;

-- Metering events (idempotent ingestion log)
create table if not exists metering_events (
  id bigserial primary key,
  tenant_id uuid not null references tenants(id) on delete cascade,
  event_type text not null references metering_catalog(event_type),
  unit int not null default 1,
  occurred_at timestamptz not null default now(),
  idempotency_key text not null,
  payload jsonb not null default '{}'::jsonb,
  unique (tenant_id, idempotency_key)
);

-- Aggregated counters (per tenant/period/metric)
create table if not exists metering_counters (
  tenant_id uuid not null references tenants(id) on delete cascade,
  period_key text not null,
  metric text not null,
  value bigint not null default 0,
  primary key (tenant_id, period_key, metric)
);

-- Optional snapshots table for monthly closures
create table if not exists billing_snapshots (
  tenant_id uuid not null,
  period_key text not null,
  created_at timestamptz not null default now(),
  report jsonb not null
);
