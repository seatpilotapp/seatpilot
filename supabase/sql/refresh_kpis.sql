-- SeatPilot telemetry cron + housekeeping setup
-- Run this in the Supabase SQL editor or psql connected with the service-role.

-- Ensure pg_cron and metadata tables exist.
create extension if not exists pg_cron;

create schema if not exists analytics;

create table if not exists analytics.mv_last_refresh (
  view text primary key,
  refreshed_at timestamptz not null default now()
);

-- Refresh materialized views and record staleness timestamps.
create or replace function analytics.refresh_kpi_mvs()
returns void
language plpgsql
as $$
begin
  begin
    refresh materialized view concurrently telemetry.mv_kpi_checkin;
    insert into analytics.mv_last_refresh(view, refreshed_at)
    values ('mv_kpi_checkin', now())
    on conflict (view) do update set refreshed_at = excluded.refreshed_at;
  exception when others then
    null;
  end;

  begin
    refresh materialized view concurrently telemetry.mv_kpi_door2seat;
    insert into analytics.mv_last_refresh(view, refreshed_at)
    values ('mv_kpi_door2seat', now())
    on conflict (view) do update set refreshed_at = excluded.refreshed_at;
  exception when others then
    null;
  end;
end;
$$;

-- Schedule refresh every minute (adjust cadence as needed).
select cron.schedule(
  'refresh_kpis_every_minute',
  '*/1 * * * *',
  $$ call analytics.refresh_kpi_mvs(); $$
);

-- Dead-letter queue retention (7 days).
select cron.schedule(
  'purge_dlq_daily',
  '0 3 * * *',
  $$ delete from telemetry.events_dlq where received_at < now() - interval '7 days'; $$
);

-- Raw events retention (90 days).
select cron.schedule(
  'purge_raw_daily',
  '15 3 * * *',
  $$ delete from telemetry.events_raw where to_timestamp(ts_ms/1000.0) < now() - interval '90 days'; $$
);

-- Useful verification queries
-- Active jobs
-- select jobid, schedule, command, active from cron.job order by jobid;
--
-- Last run per job (version-safe)
-- select
--   j.jobid,
--   j.schedule,
--   j.command,
--   r.start_time as last_run,
--   coalesce(
--     to_jsonb(r)->>'status',
--     case when (to_jsonb(r)->>'success')::bool is true  then 'succeeded'
--          when (to_jsonb(r)->>'success')::bool is false then 'failed'
--          when r.return_message ilike '%succeed%' then 'succeeded'
--          when r.return_message ilike '%fail%'     then 'failed'
--          else coalesce(r.return_message, 'unknown')
--     end
--   ) as last_status
-- from cron.job j
-- left join lateral (
--   select *
--   from cron.job_run_details d
--   where d.jobid = j.jobid
--   order by d.start_time desc
--   limit 1
-- ) r on true
-- order by j.jobid;

