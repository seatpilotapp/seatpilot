-- SeatPilot · Supabase RLS policies (Fase 0)
-- Applies tenant isolation based on the `tenant_id` claim present in the JWT.

-- Helper policy predicate: claim_tenant_id()
create or replace function telemetry.claim_tenant_id()
returns uuid
language sql
stable
as $$
  select nullif(current_setting('request.jwt.claim.tenant_id', true), '')::uuid;
$$;

grant usage on schema telemetry to postgres, anon, authenticated, service_role;

alter table telemetry.events_raw enable row level security;
alter table telemetry.events_dlq enable row level security;
alter materialized view telemetry.mv_kpi_checkin owner to postgres;
alter materialized view telemetry.mv_kpi_door2seat owner to postgres;

create policy if not exists events_raw_tenant_isolation_select
  on telemetry.events_raw
  for select
  using (tenant_id is not distinct from telemetry.claim_tenant_id());

create policy if not exists events_raw_tenant_isolation_insert
  on telemetry.events_raw
  for insert
  with check (tenant_id is not distinct from telemetry.claim_tenant_id());

create policy if not exists events_dlq_tenant_isolation_select
  on telemetry.events_dlq
  for select
  using (tenant_id is null or tenant_id is not distinct from telemetry.claim_tenant_id());

create policy if not exists events_dlq_tenant_isolation_insert
  on telemetry.events_dlq
  for insert
  with check (tenant_id is null or tenant_id is not distinct from telemetry.claim_tenant_id());

-- Read-only access for Grafana read-only role (set up separately).
grant usage on schema telemetry to grafana_ro;
grant select on all tables in schema telemetry to grafana_ro;
grant select on all sequences in schema telemetry to grafana_ro;
