-- SeatPilot · KPI views and helpers (Fase 0)

set search_path to telemetry, public;

create or replace view v_mv_staleness as
with refreshes as (
  select view_name, refreshed_at
  from telemetry.mv_refresh_log
)
select
  coalesce(max(extract(epoch from (timezone('utc', now()) - refreshed_at))), 0)::bigint as lag_sec
from refreshes;

create view if not exists v_event_counts_last_hour as
select
  tenant_id,
  date_trunc('minute', to_timestamp(ts_ms / 1000.0)) as bucket_minute,
  count(*) as accepted_events
from telemetry.events_raw
where to_timestamp(ts_ms / 1000.0) > timezone('utc', now()) - interval '1 hour'
group by tenant_id, bucket_minute
order by tenant_id, bucket_minute;

create view if not exists v_rejected_events_last_hour as
select
  tenant_id,
  date_trunc('minute', received_at) as bucket_minute,
  reason,
  count(*) as rejected_events
from telemetry.events_dlq
where received_at > timezone('utc', now()) - interval '1 hour'
group by tenant_id, bucket_minute, reason
order by tenant_id, bucket_minute, reason;
