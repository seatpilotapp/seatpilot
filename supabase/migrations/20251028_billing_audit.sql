-- SeatPilot · Billing audit & Stripe integration tables
-- Safe to run multiple times (IF NOT EXISTS + upserts)

create table if not exists tenant_billing_settings (
  tenant_id uuid primary key references tenants(id) on delete cascade,
  stripe_customer_id text not null,
  default_currency text not null default 'usd',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create or replace function set_tenant_billing_settings_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at := now();
  return new;
end;
$$;

drop trigger if exists trg_tenant_billing_settings_updated_at on tenant_billing_settings;
create trigger trg_tenant_billing_settings_updated_at
before update on tenant_billing_settings
for each row
execute function set_tenant_billing_settings_updated_at();

create table if not exists billing_processed (
  id bigserial primary key,
  tenant_id uuid not null references tenants(id) on delete cascade,
  period_key text not null,
  stripe_invoice_id text,
  stripe_payment_intent_id text,
  amount_due_cents int not null default 0,
  currency text not null default 'usd',
  status text not null default 'pending',
  idempotency_key text not null,
  processed_at timestamptz not null default now(),
  error_details text,
  created_at timestamptz not null default now(),
  unique (tenant_id, period_key),
  unique (idempotency_key)
);

alter table if exists billing_processed
  add column if not exists tenant_id uuid references tenants(id) on delete cascade;

alter table if exists billing_processed
  add column if not exists period_key text;

alter table if exists billing_processed
  add column if not exists stripe_invoice_id text;

alter table if exists billing_processed
  add column if not exists stripe_payment_intent_id text;

alter table if exists billing_processed
  add column if not exists amount_due_cents int not null default 0;

alter table if exists billing_processed
  add column if not exists currency text not null default 'usd';

alter table if exists billing_processed
  add column if not exists status text not null default 'pending';

alter table if exists billing_processed
  add column if not exists idempotency_key text;

alter table if exists billing_processed
  add column if not exists processed_at timestamptz not null default now();

alter table if exists billing_processed
  add column if not exists error_details text;

alter table if exists billing_processed
  add column if not exists created_at timestamptz not null default now();

alter table if exists billing_processed
  add constraint uniq_billing_processed_tenant_period
    unique (tenant_id, period_key);

alter table if exists billing_processed
  add constraint uniq_billing_processed_idempotency
    unique (idempotency_key);

alter table if exists billing_processed
  alter column tenant_id set not null;

alter table if exists billing_processed
  alter column period_key set not null;

create index if not exists idx_billing_processed_period
  on billing_processed (period_key);

create table if not exists billing_webhook_audit (
  id bigserial primary key,
  event_id text not null,
  event_type text not null,
  tenant_id uuid,
  status text not null default 'received',
  received_at timestamptz not null default now(),
  processed_at timestamptz,
  payload jsonb not null,
  unique (event_id)
);

create index if not exists idx_billing_webhook_audit_event_type
  on billing_webhook_audit (event_type);
