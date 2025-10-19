# Telemetry v1.1.0 — Alcance Fase 0

## Decisiones clave y Definition of Done

| Tema | Decisión | Razón | DoD (Definition of Done) |
| --- | --- | --- | --- |
| Compatibilidad | Aceptar nombres v0.1.1 y normalizar a `familia.evento` (ej. `qr_scan_start` → `checkin.qr_scan_start`). | Evitar rupturas en SDKs y tableros existentes mientras se migra. | Tabla `telemetry.event_alias` cargada y usada en ingesta; 0 rechazos por nombre legado. |
| Envelope | Enforcing `schema_version`, `event_id` (UUID), `tenant_id`, `session_id`, `ts_ms`, `event_meta` y `payload`. | Garantizar idempotencia, trazabilidad y análisis por canal (`kiosk` / `ops` / `guest`). | Tabla `telemetry.events_raw` operativa con índices + UPSERT basado en `event_id` o clave compuesta. |
| Seguridad de ingesta | HMAC `x-sig` + `x-ts` + `x-nonce` (ventana corta), verificación constant-time, allow-list CORS, rate-limit. | Blindaje anti-replay y protección del bus de eventos. | Replays bloqueados en pruebas; métricas de rechazo por skew/nonce instrumentadas. |
| RLS multi-tenant | Row-Level Security en todas las tablas de telemetría y KPIs, usando `tenant_id` del JWT. | Aislamiento SaaS entre clientes y eventos. | Tests negativos de cross-tenant en CI con 0 filtraciones. |
| Safety addendum | Incorporar familia `safety.*` (egresos, pasillos ≥48", ALERT/EVAC, incidents). | Cumplimiento operativo durante el evento (“day-of”). | Eventos `safety.exit_status_update`, `safety.aisle_clearance_violation`, `safety.emergency_tone_alert` en producción; `VenueRules.json` publicado. |
| KPIs operativos | Materializar Check-in p95, Door→Seat p50/p95, % Auto-assign. | Mantener Ops Live dentro de SLO (~1 min). | Materialized views + refresh; tiles en Ops Live con SLOs definidos y monitorizados. |

## Diccionario v1.1.0 (resumen)

- **Familias núcleo:** `checkin.*`, `wayfinding.*`, `seating.*`, `quality.*`, `nps.*`.
- **Extensiones Fase 0/Fase 1:** `guest.*`, `assign.*`, `safety.*`, `fb.*`, `raffle.*`, `timeline.*`, `ops.*`, `auth.*`, `session.*`.
- **Envelope:** `packages/domain-model/schemas/envelope.v1.1.0.json` incluye correlación Door→Seat y `event_meta` enriquecido (`app_channel`, `platform`, `app_version`, `sdk_version`, `kiosk_id?`, `device_id?`, `locale?`, `timezone?`, `net_rtt_ms?`, `battery?`).
- **Enums publicados:** `source (cache|net)`, `confirm_mode (qr|tap)`, `status_exit (OPEN|CLOSED|BLOCKED)`, `reason_code.reassign (vip|mobility|group_cohesion|late_arrival|capacity_balance|staff_override)`, `app_channel (kiosk|ops|guest|tv)`, `broadcast_channel (pa|screen|push|sms|email)`, `a11y_rule (contrast_ratio|focus_trap|hit_target|aria_label|tab_order)`, `ops_severity (low|medium|high|critical)`.
- **Privacidad:** `guest_id_hash` sin PII; retención de 90 días para operaciones, 365 días para safety/compliance. Ajustar políticas de borrado en el warehouse y lag-buckets en data lake.
- **Governanza:** Publicar JSON Schemas en Registry, validar via ingestion y SDKs (`sdk-js`, `sdk-server`); automatizar pruebas de retrocompatibilidad y linting de eventos en CI/CD.
