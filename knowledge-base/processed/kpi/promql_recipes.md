# KB-PROCESSED: Recetas PromQL (KPIs North Star)
- `checkin_p95_5m = histogram_quantile(0.95, sum by (le,tenant,channel)(rate(seatpilot_checkin_latency_ms_histogram_bucket{tenant=~"$Tenant",channel=~"$Channel"}[5m])))`
- `door_to_seat_p95_15m = histogram_quantile(0.95, sum by (le,tenant,channel)(rate(seatpilot_door_to_seat_seconds_bucket{tenant=~"$Tenant",channel=~"$Channel"}[15m])))`
- `reject_rate_24h = (sum by (tenant,channel)(increase(seatpilot_ingest_rejected_total{tenant=~"$Tenant",channel=~"$Channel"}[24h])) / (sum by (tenant,channel)(increase(seatpilot_ingest_accepted_total{tenant=~"$Tenant",channel=~"$Channel"}[24h])) + sum by (tenant,channel)(increase(seatpilot_ingest_rejected_total{tenant=~"$Tenant",channel=~"$Channel"}[24h])))) or on() vector(0)`
- `mv_lag_avg_5m = avg_over_time(seatpilot_mv_lag_seconds{tenant=~"$Tenant"}[5m])`

> Referencia completa: `docs/handoff/SeatPilot_Master_v1.0.md` secciones 1 y 8 (KPIs/PromQL).
