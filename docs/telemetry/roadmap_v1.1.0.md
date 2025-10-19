# Seatpilot Telemetry v1.1.0 Roadmap

This note captures the remediation plan required to close the gaps identified in telemetry v0.1.1 while keeping the protocol compatible with existing producers. It focuses on the MVP scope for Ops Live, Assign, and Safety workflows and establishes verifiable definitions of done for each area.

## Gap Analysis

| Área | Falta / Riesgo | Propuesta mínima compatible | DoD verificable |
| --- | --- | --- | --- |
| Envelope | `event_meta` incompleto (sin canal, versión, device signals) | Añadir `app_channel`, `app_version`, `sdk_version`, `platform`, `kiosk_id?`, `device_id?`, `locale?`, `timezone?`, `net_rtt_ms?`, `battery?` | Todos los eventos llegan con `event_meta` válido según esquema |
| Correlación | No existe identificador Door→Seat | Introducir `correlation.door_to_seat_id` abierto en `checkin.success` y propagado hasta `wayfinding.arrive_table` | KPI Door→Seat calculable sin joins frágiles |
| Errores | Catálogo insuficiente (solo `checkin.error_scan_invalid_qr`) | Definir taxonomía completa `family.error_*` con `error_code` enumerado | % de error por tipo visible en Ops Live |
| Safety | Faltan cierre de incidente/evacuación | Emitir `safety.incident_resolved`, `safety.evacuation_ended` | MTTR medido de abierto a resuelto |
| Ops/WS | Sin métricas de WebSocket ni refresh de KPIs | Añadir `ops.ws_client_latency`, `ops.mv_refreshed` | Staleness monitoreado |
| Auth/Licencias | No hay rastreo de login ni gates | Añadir `auth.login_success/error`, `license.gate_denied` | Auditoría L1 soportada |
| Sesiones | No se mide multi-día ni tracks | Emitir `session.start/end`, `attendance.enter_room/leave_room` | KPIs por sesión/track disponibles |
| Seating | Faltan eventos de liberación/locks/VIP | Añadir `seating.seat_released`, `seating.seat_locked`, `seating.vip_lock_set` con `reason_code` | Calidad operativa trazable |
| Wayfinding | No existe telemetría de búsqueda y fallos | Añadir `wayfinding.search_made`, `wayfinding.search_not_found` | UX medible |
| F&B | Falta telemetría de cancelación/pago | Añadir `fb.order_cancelled`, `fb.payment_captured/failed` | SLA de servicio y revenue |
| Timeline | Falta eliminación de bloques y ACK de vendors | Añadir `timeline.block_deleted`, `vendor.ack` | Integridad de agenda confirmada |
| A11y/i18n | Sin rastreo de idioma/tema accesible | Añadir `ux.locale_selected`, `ux.a11y_pref_set` | Cobertura AA/AAA demostrable |

## Implementación

- **Envelope v1.1.0.** Nuevo esquema con versión, correlación extendida e `event_meta` enriquecido. Se mantiene retrocompatibilidad al aceptar campos opcionales marcados con `?`.
- **Enums normalizados.** Conjuntos explícitos para `app_channel`, `confirm_mode`, `reason_code.reassign`, etc. publicados en el Schema Registry.
- **Catálogo de eventos.** Cada familia añade un archivo JSON Schema independiente, consumible por ingestión, validadores y SDKs.
- **Seguridad e idempotencia.** La ingesta exige `x-sig` (HMAC), `x-ts`, `x-nonce` con ventana anti-replay y verificación constant-time. Idempotencia basada en `event_id` o clave compuesta (`tenant_id`, `session_id`, `event_name`, `ts_ms`).

## Definition of Done checklist

- [ ] Envelope v1.1.0 activo y publicado en `packages/domain-model`.
- [ ] Enums incorporados al Schema Registry y reflejados en SDKs.
- [ ] Eventos críticos de Ops Live, Assign y Safety cubiertos por JSON Schema y documentación.
- [ ] Ingesta valida HMAC, nonce, timestamp y rechaza replays.
- [ ] Pipelines de análisis ingestan y derivan KPIs Door→Seat, MTTR, staleness, y seating quality.

