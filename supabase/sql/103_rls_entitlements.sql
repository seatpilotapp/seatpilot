-- SeatPilot SaaS entitlements RLS helpers

create schema if not exists app;

create or replace function app.current_tenant_id()
returns uuid
language sql
stable
security definer
set search_path = public, app
as $$
  select coalesce(
    nullif(current_setting('app.tenant_id', true), '')::uuid,
    (current_setting('request.jwt.claims', true)::jsonb ->> 'tenant_id')::uuid
  );
$$;

alter table tenant_subscriptions          enable row level security;
alter table tenant_entitlements_overrides enable row level security;
alter table metering_events               enable row level security;
alter table metering_counters             enable row level security;

drop policy if exists p_sub_select on tenant_subscriptions;
create policy p_sub_select on tenant_subscriptions
  for select using (tenant_id = app.current_tenant_id());

drop policy if exists p_sub_update on tenant_subscriptions;
create policy p_sub_update on tenant_subscriptions
  for update using (tenant_id = app.current_tenant_id());

drop policy if exists p_overrides_rw on tenant_entitlements_overrides;
create policy p_overrides_rw on tenant_entitlements_overrides
  using (tenant_id = app.current_tenant_id())
  with check (tenant_id = app.current_tenant_id());

drop policy if exists p_me_select on metering_events;
create policy p_me_select on metering_events
  for select using (tenant_id = app.current_tenant_id());

drop policy if exists p_me_insert on metering_events;
create policy p_me_insert on metering_events
  for insert with check (tenant_id = app.current_tenant_id());

drop policy if exists p_mc_select on metering_counters;
create policy p_mc_select on metering_counters
  for select using (tenant_id = app.current_tenant_id());
