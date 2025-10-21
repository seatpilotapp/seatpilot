-- SeatPilot SaaS metering helper functions

create or replace function billing_period_key(ts timestamptz default now())
returns text
language sql
stable
as $$
  select to_char(date_trunc('month', coalesce(ts, now())), 'YYYY-MM');
$$;

create or replace function metering_upsert_counter(
  p_tenant uuid,
  p_metric text,
  p_delta bigint,
  p_ts timestamptz default now()
) returns void
language plpgsql
as $$
declare
  k text := billing_period_key(p_ts);
begin
  insert into metering_counters(tenant_id, period_key, metric, value)
  values (p_tenant, k, p_metric, p_delta)
  on conflict (tenant_id, period_key, metric)
  do update set value = metering_counters.value + excluded.value;
end;
$$;

create or replace function metering_ingest(
  p_tenant uuid,
  p_event_type text,
  p_unit int,
  p_idem text,
  p_payload jsonb default '{}'::jsonb,
  p_ts timestamptz default now()
) returns void
language plpgsql
as $$
declare
  m text;
  s int;
begin
  insert into metering_events(tenant_id, event_type, unit, idempotency_key, payload, occurred_at)
  values (p_tenant, p_event_type, coalesce(p_unit, 1), p_idem, coalesce(p_payload, '{}'::jsonb), p_ts);

  select metric, sign into m, s from metering_catalog where event_type = p_event_type;
  if m is null then
    raise exception 'event_type % not mapped', p_event_type using errcode = '22023';
  end if;

  perform metering_upsert_counter(p_tenant, m, coalesce(p_unit, 1) * coalesce(s, 1), p_ts);
end;
$$;
