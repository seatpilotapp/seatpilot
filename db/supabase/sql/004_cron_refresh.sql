-- Cron scheduling for materialized views refresh (Supabase pg_cron example)

SELECT cron.schedule('refresh_mv_kpi_checkin', '*/1 * * * *', $$
  SELECT telemetry.refresh_mv('telemetry.mv_kpi_checkin'::regclass, true);
$$);

SELECT cron.schedule('refresh_mv_kpi_door2seat', '*/1 * * * *', $$
  SELECT telemetry.refresh_mv('telemetry.mv_kpi_door2seat'::regclass, true);
$$);
