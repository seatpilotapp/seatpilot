-- KPI Views (materialized) definitions

CREATE MATERIALIZED VIEW IF NOT EXISTS telemetry.mv_kpi_checkin AS
WITH recent AS (
  SELECT *
    FROM telemetry.events_raw
   WHERE event_name_canonical IN ('checkin.qr_scan_start', 'checkin.success')
     AND ts_ms >= (extract(epoch FROM (now() - interval '12 weeks')) * 1000)
)
SELECT tenant_id,
       session_id,
       max(ts_ms) FILTER (WHERE event_name_canonical='checkin.success') as ts_checkin_success_ms,
       max(ts_ms) FILTER (WHERE event_name_canonical='checkin.qr_scan_start') as ts_scan_start_ms
  FROM recent
 GROUP BY tenant_id, session_id;

CREATE MATERIALIZED VIEW IF NOT EXISTS telemetry.mv_kpi_door2seat AS
WITH recent AS (
  SELECT *
    FROM telemetry.events_raw
   WHERE event_name_canonical IN ('checkin.success', 'wayfinding.arrive_table')
     AND ts_ms >= (extract(epoch FROM (now() - interval '12 weeks')) * 1000)
)
SELECT tenant_id,
       session_id,
       max(ts_ms) FILTER (WHERE event_name_canonical='wayfinding.arrive_table') as ts_arrive_ms,
       max(ts_ms) FILTER (WHERE event_name_canonical='checkin.success') as ts_checkin_success_ms
  FROM recent
 GROUP BY tenant_id, session_id;
