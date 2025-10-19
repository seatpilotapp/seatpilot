-- SeatPilot · Supabase schema core (Fase 0)
-- Creates telemetry schema and base tables referenced by dashboards and ingest service.

create schema if not exists telemetry;

create table if not exists telemetry.events_raw (
  id uuid primary key default gen_random_uuid(),
  tenant_id uuid not null,
  event_name text not null,
  session_id uuid,
  guest_id uuid,
  ts_ms bigint not null,
  payload jsonb default '{}'::jsonb,
  received_at timestamptz not null default timezone('utc', now())
);

comment on table telemetry.events_raw is 'Event envelope (accepted). Store raw payloads for analytics and KPIs.';

create index if not exists idx_events_raw_tenant_ts
  on telemetry.events_raw (tenant_id, to_timestamp(ts_ms / 1000.0));

create index if not exists idx_events_raw_event
  on telemetry.events_raw (event_name, tenant_id);

create table if not exists telemetry.events_dlq (
  id uuid primary key default gen_random_uuid(),
  tenant_id uuid,
  reason text not null,
  payload jsonb not null,
  received_at timestamptz not null default timezone('utc', now())
);

comment on table telemetry.events_dlq is 'Dead-letter queue for events rejected by validation.';

create index if not exists idx_events_dlq_tenant_received
  on telemetry.events_dlq (tenant_id, received_at);

-- Placeholder tables for KPIs (materialized views generated later).
create materialized view if not exists telemetry.mv_kpi_checkin
as
select
  tenant_id,
  ts_min,
  p95_checkin_ms
from (
  values
    ('00000000-0000-0000-0000-000000000000'::uuid, date_trunc('minute', timezone('utc', now())), 0::bigint)
) seed(tenant_id, ts_min, p95_checkin_ms)
with no data;

create unique index if not exists ix_mv_kpi_checkin
  on telemetry.mv_kpi_checkin (tenant_id, ts_min);

create materialized view if not exists telemetry.mv_kpi_door2seat
as
select
  tenant_id,
  ts_min,
  p50_ms,
  p95_ms
from (
  values
    ('00000000-0000-0000-0000-000000000000'::uuid, date_trunc('minute', timezone('utc', now())), 0::bigint, 0::bigint)
) seed(tenant_id, ts_min, p50_ms, p95_ms)
with no data;

create unique index if not exists ix_mv_kpi_door2seat
  on telemetry.mv_kpi_door2seat (tenant_id, ts_min);

create table if not exists telemetry.mv_refresh_log (
  view_name text primary key,
  refreshed_at timestamptz not null default timezone('utc', now())
);

comment on table telemetry.mv_refresh_log is 'Tracks last refresh timestamps for KPI materialized views.';
