# KB-INPUT: Diccionario de eventos v0.1
## Check-in
- `qr_scan_start`
- `qr_scan_success` `{ ticket_id, tenant_id, channel, ts_ms }`
- `qr_scan_error` `{ reason, tenant_id, channel, ts_ms }`

## Seating / Designer
- `seat_assign_suggested` `{ session_id, reason_codes[], score, tenant_id }`
- `seat_assign_committed` `{ user_id, rationale, tenant_id, ts_ms }`
- `layout_publish_attempt` `{ view, version, tenant_id }`
- `layout_publish_blocked` `{ validator, value, min_required, tenant_id }`

## Wayfinding
- `arrive_table` `{ seconds_from_checkin, zone, table, tenant_id }`

> Aliasing y nombres canónicos definidos en `docs/handoff/SeatPilot_Master_v1.0.md` (tabla de KPIs y dimensiones).
