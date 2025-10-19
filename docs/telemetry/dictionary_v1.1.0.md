# Telemetry Dictionary v1.1.0

Este diccionario consolida el contrato completo de eventos para Seatpilot Telemetry v1.1.0. Se basa en los JSON Schemas publicados en `packages/domain-model/schemas/` y está pensado como referencia operacional y de integración.

## Envelope estándar

| Campo | Tipo | Reglas | Nota |
| --- | --- | --- | --- |
| `schema_version` | string | obligatorio, `1.1.0` | Versiona el contrato del evento. |
| `event_id` | string (UUIDv4) | obligatorio | Usado para idempotencia y trazabilidad. |
| `event_name` | string (`familia.evento`) | obligatorio | Normalizado vía `telemetry.event_alias` para compatibilidad v0.1.1. |
| `ts_ms` | integer | obligatorio, `>= 1` | Epoch en milisegundos (UTC). |
| `tenant_id` | string (UUID) | obligatorio | Propaga aislamiento multi-tenant. |
| `session_id` | string | obligatorio | Sesión de aplicación / staff. |
| `guest_id_hash` | string nullable | opcional | Hash sin PII; retención 90 d (ops) / 365 d (safety). |
| `correlation` | object | opcional | Ver tabla de correlación. |
| `event_meta` | object | obligatorio | Ver tabla de metadatos. |
| `payload` | object | obligatorio | Definición específica por evento. |

### Correlation

| Campo | Tipo | Notas |
| --- | --- | --- |
| `door_to_seat_id` | string (UUID) nullable | Abierto en `checkin.success`, propagado hasta `wayfinding.arrive_table`. |
| `event_id_src` | string (UUID) nullable | Para enlazar eventos originados en hardware o terceros. |
| `event_id_route` | string nullable | Identificador de route planner. |
| `event_id_assign` | string (UUID) nullable | Resolver/assign engine. |
| `correlation_id` | string (UUID) nullable | Incidentes, órdenes, evacuaciones. |

### Event Meta

| Campo | Tipo | Reglas |
| --- | --- | --- |
| `app_channel` | enum (`kiosk`, `ops`, `guest`, `tv`) | obligatorio |
| `platform` | enum (`web`, `android`, `ios`, `kiosk`) | obligatorio |
| `app_version` | string semver | obligatorio |
| `sdk_version` | string semver | obligatorio |
| `kiosk_id` | string nullable | opcional |
| `device_id` | string nullable | opcional |
| `locale` | string nullable (`ll-CC`) | opcional |
| `timezone` | string nullable (`UTC±HH:MM`) | opcional |
| `net_rtt_ms` | integer nullable (`>= 0`) | opcional |
| `battery` | number nullable (`0-1`) | opcional |

### Seguridad e idempotencia

- **Firmas:** `x-sig` (HMAC), `x-ts`, `x-nonce` verificados en ventana corta, comparación constant-time.
- **Idempotencia:** `event_id` como llave primaria; fallback a `(tenant_id, session_id, event_name, ts_ms)`.
- **RLS:** Todo evento persiste `tenant_id` y respeta políticas RLS en warehouse y marts.

## Enumeraciones publicadas

| Enum | Valores |
| --- | --- |
| `app_channel` | `kiosk`, `ops`, `guest`, `tv` |
| `platform` | `web`, `android`, `ios`, `kiosk` |
| `source` | `cache`, `net` |
| `confirm_mode` | `qr`, `tap` |
| `mode` | `auto`, `manual` |
| `status_exit` | `OPEN`, `CLOSED`, `BLOCKED` |
| `reason_code.reassign` | `vip`, `mobility`, `group_cohesion`, `late_arrival`, `capacity_balance`, `staff_override` |
| `a11y_rule` | `contrast_ratio`, `focus_trap`, `hit_target`, `aria_label`, `tab_order` |
| `ops_severity` | `low`, `medium`, `high`, `critical` |
| `broadcast_channel` | `pa`, `screen`, `push`, `sms`, `email` |

## Familias de eventos

### Check-in (`checkin.*`)

| Evento | Descripción | Payload (obligatorios) | Payload (opcionales) | Notas |
| --- | --- | --- | --- | --- |
| `checkin.success` | Invitado validado y, si aplica, asignado a mesa. | `guest_id_hash` | `table_id`, `event_id_src` | Abre `correlation.door_to_seat_id`. |
| `checkin.error_scan_invalid_qr` | QR inválido detectado en kiosk. | `kiosk_id`, `error_code` (`EXPIRED`/`TAMPERED`) | — | `payload.error_family=checkin`. |
| `checkin.error_guest_not_found` | Código no existe en padrón. | `barcode_hash`, `kiosk_id`, `error_code=GUEST_NOT_FOUND` | — | — |
| `checkin.error_rate_limited` | Bloqueo por rate limit. | `kiosk_id`, `limit_bucket`, `error_code=RATE_LIMITED` | — | — |
| `checkin.error_network` | Fallo de red en kiosk. | `kiosk_id`, `last_rtt_ms`, `error_code=NETWORK_FAILURE` | — | — |

### Wayfinding (`wayfinding.*`)

| Evento | Descripción | Payload (obligatorios) | Payload (opcionales) | Notas |
| --- | --- | --- | --- | --- |
| `wayfinding.search_made` | Búsqueda de destino. | `query`, `results_count` | — | Evalúa tasa de “no encontrado”. |
| `wayfinding.search_not_found` | No se localizaron resultados. | `query` | — | — |
| `wayfinding.route_started` | Se inicia ruta hacia mesa. | `route_id`, `origin_zone`, `target_table` | — | — |
| `wayfinding.reroute` | Ruta recalculada. | `route_id`, `cause` (`staff_override`/`blockage`) | — | — |
| `wayfinding.arrive_table` | Invitado llegó a la mesa. | `table_id`, `confirm_mode` (`qr`/`tap`) | — | Requiere `correlation.door_to_seat_id`. |

### Seating (`seating.*`)

| Evento | Descripción | Payload (obligatorios) | Payload (opcionales) |
| --- | --- | --- | --- |
| `seating.seat_assign_suggested` | Sugerencia automática con score. | `guest_id_hash`, `solver_version`, `score` | — |
| `seating.seat_assigned` | Asignación confirmada. | `guest_id_hash`, `mode` (`auto`/`manual`), `table_id` | — |
| `seating.reassign` | Reasignación de mesa. | `from_table`, `to_table`, `reason_code` | `role` |
| `seating.seat_released` | Asiento liberado. | `seat_id` | `reason_code` |
| `seating.seat_locked` | Asiento bloqueado. | `seat_id`, `locked_by` | — |
| `seating.vip_lock_set` | Política VIP aplicada. | `seat_id`, `policy` | — |

### Guest / Assign (`guest.*`, `assign.*`)

| Evento | Descripción | Payload (obligatorios) | Payload (opcionales) |
| --- | --- | --- | --- |
| `guest.profile_updated` | Preferencias invitado. | `guest_id_hash` | `pmr`, `diet` |
| `assign.constraint_violation` | Violación de regla de asignación. | `type` (`pmr`/`diet`/`vip_lock`/`capacity`) | `details` |

### Safety (`safety.*`)

| Evento | Descripción | Payload (obligatorios) | Payload (opcionales) |
| --- | --- | --- | --- |
| `safety.zone_capacity_update` | Ocupación por zona. | `zone_id`, `occupancy`, `design_capacity` | — |
| `safety.aisle_clearance_violation` | Pasillo bajo mínimo. | `aisle_id`, `measured_in` (`in`/`cm`), `width_value` | — |
| `safety.exit_status_update` | Estado de salida de emergencia. | `exit_id`, `status` (`OPEN`/`CLOSED`/`BLOCKED`) | — |
| `safety.emergency_tone_alert` | Broadcast de alerta/evacuación. | `tone` (`alert`/`evacuation`), `source` | — |
| `safety.incident_opened` | Alta de incidente. | `incident_id`, `category`, `priority` | — |
| `safety.incident_acknowledged` | Acknowledge del incidente. | `incident_id`, `role_ack` | — |
| `safety.incident_resolved` | Cierre de incidente. | `incident_id`, `resolution_code` (`false_alarm`/`handled`/`outsourced`/`other`) | — |
| `safety.evacuation_started` | Inicio de evacuación. | `evacuation_id`, `initial_headcount` | — |
| `safety.evacuation_ended` | Cierre de evacuación. | `evacuation_id`, `cleared_headcount` | — |
| `safety.muster_point_status_update` | Estado de punto de reunión. | `muster_point_id`, `headcount_total` | — |
| `safety.announcement_published` | Comunicación multicanal. | `template_id`, `channels[]` (`pa`/`screen`/`push`/`sms`/`email`), `priority` | — |

### Food & Beverage (`fb.*`)

| Evento | Descripción | Payload (obligatorios) | Payload (opcionales) |
| --- | --- | --- | --- |
| `fb.order_cancelled` | Orden cancelada. | `order_id` | `reason_code` |
| `fb.payment_captured` | Pago exitoso. | `order_id`, `amount`, `currency` (ISO-4217) | — |
| `fb.payment_failed` | Pago fallido. | `order_id`, `amount`, `currency`, `error_code` | — |

### Timeline & Vendor (`timeline.*`, `vendor.*`, `ops.rule_cleared`)

| Evento | Descripción | Payload (obligatorios) | Payload (opcionales) |
| --- | --- | --- | --- |
| `timeline.block_deleted` | Bloque eliminado de la agenda. | `block_id`, `deleted_by` | — |
| `vendor.ack` | Vendor confirma recibo. | `vendor_id`, `request_id` | `status` |
| `ops.rule_cleared` | Regla operativa despejada. | `rule_id`, `severity` | — |

### Auth & Licencias (`auth.*`, `license.*`)

| Evento | Descripción | Payload (obligatorios) | Payload (opcionales) |
| --- | --- | --- | --- |
| `auth.login_success` | Inicio de sesión exitoso. | `user_id_hash`, `method` (`password`/`magic_link`/`sso`) | `tenant_role` |
| `auth.login_error` | Fallo de login. | `reason` (`invalid_credentials`/`locked_out`/`expired_link`/`mfa_required`) | `user_id_hash` |
| `license.gate_denied` | Gate de licenciamiento. | `feature`, `plan`, `limit` | `usage` |

### Sesiones & Asistencia (`session.*`, `attendance.*`)

| Evento | Descripción | Payload (obligatorios) | Payload (opcionales) |
| --- | --- | --- | --- |
| `session.start` | Inicio de sesión/track. | `session_code`, `track_id` | `room` |
| `session.end` | Cierre de sesión/track. | `session_code` | `track_id` |
| `attendance.enter_room` | Invitado entra a sala. | `session_code`, `room` | — |
| `attendance.leave_room` | Invitado sale de sala. | `session_code`, `room` | — |

### Operación (WS / KPIs) (`ops.*`)

| Evento | Descripción | Payload (obligatorios) | Payload (opcionales) |
| --- | --- | --- | --- |
| `ops.ws_client_latency` | RTT de cliente WebSocket. | `client_id`, `rtt_ms` | — |
| `ops.mv_refreshed` | Refresh de materialized view. | `view`, `lag_ms` | — |

### UX / Accesibilidad (`ux.*`)

| Evento | Descripción | Payload (obligatorios) | Payload (opcionales) |
| --- | --- | --- | --- |
| `ux.locale_selected` | Usuario cambia idioma. | `locale` (`ll-CC`) | — |
| `ux.a11y_pref_set` | Preferencia accesible. | `rule`, `enabled` | — |

## Referencias

- Envelope: `packages/domain-model/schemas/envelope.v1.1.0.json`
- Enums: `packages/domain-model/schemas/enums.json`
- Eventos: `packages/domain-model/schemas/events/*.json`
- Decisiones de alcance: `docs/telemetry/decisions_v1.1.0.md`
- Roadmap de implementación: `docs/telemetry/roadmap_v1.1.0.md`
