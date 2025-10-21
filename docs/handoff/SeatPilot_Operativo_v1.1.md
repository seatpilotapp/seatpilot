# SeatPilot Operativo v1.1 — Handoff Técnico

## 1. Propósito
- Dejar un snapshot claro del sistema actual (arquitectura, métricas y runbooks).
- Facilitar onboarding de nuevos responsables técnicos/operativos.
- Documentar pendientes de mayor impacto para las próximas fases.

## 2. North Star y Alcance
- **Promesa**: “Guide every guest, fast”.
- **SLO principales**:
  - Check-in `p95 ≤ 300 ms` (UX feedback < 400 ms).
  - Door→Seat `p50 ≤ 30 s`, `p95 ≤ 60 s`.
  - Rechazos de ingestión `< 1 %` en ventanas de 5 min.
- **Módulos cubiertos en esta versión**: Check-in, Wayfinding, Telemetría/HMAC, Observabilidad (Prometheus + Alertmanager), Supabase `telemetry.*`.

## 3. Arquitectura Actual

### 3.1 Vista resumida
| Capa | Componentes | Función | Repos/Paths |
| --- | --- | --- | --- |
| Servicios backend | `services/checkin`, `services/wayfinding`, `services/telemetry-ingest`, `services/kpi-refresher` | Procesan check-in, door→seat, ingesta firmada y refresco de MVs | `services/*` |
| API de métricas | `apps/metrics-api` | Expone `/metrics` y rutas `/observe/*` para registrar métricas de negocio | `apps/metrics-api/server.ts` |
| Datos | Supabase `telemetry.*`, índices, RLS | Guarda eventos aceptados/DLQ, MVs KPI, politicas por tenant | `supabase/sql/*.sql` |
| Observabilidad | Prometheus, Alertmanager, dashboards, runbooks | Scrapeo, alertas, paneles y pruebas operativas | `prometheus.yml`, `seatpilot.rules.yml`, `docker-compose.metrics.yml`, `docs/runbooks/README.md` |
| Paquetes compartidos | `@seatpilot/domain-model`, SDKs | Enums, helpers y tests comunes para servicios/SDKs | `packages/domain-model`, `packages/sdk-js`, `packages/sdk-server` |

### 3.2 Servicios activos
| Servicio | Endpoint(s) clave | Dependencias | Comentarios |
| --- | --- | --- | --- |
| `@seatpilot/checkin` | `POST /api/checkin/success`, `GET /health` | Supabase (tabla `ops.checkin_sessions`), Metrics API | Ajv, cache TTL 10 min, métricas por etapa (`parse`, `lookup`, `persist`, `total`). |
| `@seatpilot/wayfinding` | `POST /api/wayfinding/arrive-table`, `GET /health` | Supabase (tabla `ops.checkin_sessions`), Metrics API | Calcula door→seat, filtra outliers > 15 min. |
| `@seatpilot/telemetry-ingest` | `POST /v1/events`, `GET /metrics`, `GET /health` | Supabase/Postgres (`telemetry.events_raw`, `events_dlq`), Metrics API | HMAC (`x-key`, `x-ts`, `x-nonce`, `x-sig`), Ajv, DLQ. |
| `@seatpilot/kpi-refresher` | `node dist/.../refresh-mvs.js` | Supabase (`telemetry.refresh_mv`, `mv_metadata`), Metrics API | Loop configurable por `REFRESH_EVERY_SEC` (default 60s). |

### 3.3 API de métricas
| Ruta | Método | Uso | Autenticación |
| --- | --- | --- | --- |
| `/metrics` | GET | Exposición Prometheus (latencias, histogramas, counters) | Pública (interno) |
| `/observe/checkin` | POST | Registra latencia de check-in | Header `x-metrics-key` |
| `/observe/checkin-stage` | POST | Observa duración por etapa | Header `x-metrics-key` |
| `/observe/door-to-seat` | POST | Publica segundos door→seat | Header `x-metrics-key` |
| `/observe/ingest` | POST | Marca ingest accepted/rejected + motivo | Header `x-metrics-key` |
| `/observe/mv-lag` | POST | Actualiza `seatpilot_mv_lag_seconds` | Header `x-metrics-key` |
| `/healthz` | GET | Healthcheck de metrics-api | Pública |

## 4. Datos y Seguridad
- **Telemetry schema** (`supabase/sql/001_schema_core.sql`): `events_raw`, `events_dlq`, MVs `mv_kpi_checkin`, `mv_kpi_door2seat`, `mv_refresh_log`.
- **Vistas auxiliares** (`003_views_kpi.sql`): `v_mv_staleness`, `v_event_counts_last_hour`, `v_rejected_events_last_hour`.
- **RLS** (`002_policies_rls.sql`): políticas `events_*_tenant_isolation_*` basadas en `telemetry.claim_tenant_id()`.
- **Almacenamiento ingest** (`services/telemetry-ingest/src/lib/store.ts`): adapta según disponibilidad (Postgres pool, Supabase REST, fallback memoria).
- **Secreto Supabase**: `metrics-proxy` monta `/run/secrets/supabase_service_role.jwt`, injerta header `apikey` a Supabase (`Dockerfile`, `entrypoint.sh`, `nginx.conf.template`).

## 5. Observabilidad

### 5.1 Métricas principales
| Métrica | Tipo | Fuente | Uso |
| --- | --- | --- | --- |
| `seatpilot_checkin_latency_ms` | Summary | Metrics API (`observeCheckinLatency`) | Check-in p50/p95/p99. |
| `seatpilot_checkin_stage_seconds` | Histogram | Metrics API (`observeCheckinStage`) | Distribución por etapa. |
| `seatpilot_door_to_seat_seconds` | Histogram | Metrics API (`observeDoorToSeat`) | Door→seat p50/p95. |
| `seatpilot_ingest_{accepted,rejected}_total` | Counter | Metrics API (`observe/ingest`) | Ratio de rechazos. |
| `seatpilot_mv_lag_seconds` | Gauge | Metrics API (`observe/mv-lag`) | Staleness de MVs. |
| `seatpilot_assign_duration_ms_histogram` | Histogram | Metrics API (`observe/assign`) | p95 de asignación seating-engine (`seatpilot:assign_p95_5m`). |
| `seatpilot_assign_feasible_ratio` | Gauge | Metrics API (`observe/assign`) | % auto-asignado vs confirmados (por canal). |
| `http_request_duration_seconds` | Histogram | telemetry-ingest | Latencia HTTP /v1/events. |

### 5.2 Reglas y alertas
- **Archivo**: `seatpilot.rules.yml`.
- **Alertas activas**:
  - `SeatPilotCheckinP95Fast` / `SeatPilotCheckinP95Slow`.
  - `SeatPilotDoorToSeatP95`.
  - `SeatPilotMvLagHigh`.
  - `SeatPilotIngestRejectRateHigh`.
  - `SeatPilotCheckinStageP95High` (por etapa/tenant/channel).
- **Recording nuevo**: `seatpilot:assign_p95_5m` (motor seating → p95 5 min, agrupa por tenant/channel).
- **Alertmanager** (`alertmanager.yml`): envío configurable a Slack vía `ALERT_SLACK_WEBHOOK`.

### 5.3 Dashboards y runbooks
- **Dashboards**: `dashboards/overview-f1.2.json`, `dashboards/overview-f1.3.json`, `dashboards/ops-live-v1.json`.
- **Runbook**: `docs/runbooks/README.md` (umbral, queries y pasos de recuperación).
- **Scripts operativos**:
  - `scripts/smoke-f1.1.sh` (check-in + arrive-table + verificación Prom/DB).
  - `scripts/smoke-f1.2.sh` (incluye rechazo controlado y refresco MV).
  - `scripts/trigger-stage-latency.sh` (inyecta delay para validar alertas de etapa).
- **Metering/Planes**: scripts `supabase/sql/100_entitlements_metering.sql`–`107_cron_metering_seed.sql` declaran planes, entitlements, contadores mensuales con RLS + cron `billing_close_month` y cron diario `ops_metering_seed_daily`; función `app.seed_metering_demo` y seed manual `supabase/sql/metering_seed.sql` mantienen `/admin/billing` vivo.
- **Admin Billing**: `services/telemetry-ingest` expone `/admin/billing` (HTML) y `/admin/billing/csv` (CSV) para revisar consumo por tenant/período (`v_tenant_billing_report`). Requiere `DATABASE_URL`/`SUPABASE_DB_URL` configurado.

## 6. Infraestructura (Compose)
| Servicio | Imagen/base | Puerto expuesto | Variables clave |
| --- | --- | --- | --- |
| `telemetry-ingest` | Node 20 (build local) | — | `METRICS_API_BASE_URL`, `HMAC_TENANT_SECRET`, `NODE_OPTIONS=--dns-result-order=ipv4first` |
| `metrics-api` | `seatpilot/metrics-api:latest` | 8080 | `METRICS_INGEST_KEY`, `SERVICE_NAME`, `METRICS_TENANT` |
| `kpi-refresher` | Node 20 | — | `DATABASE_URL`, `METRICS_API_*`, `REFRESH_EVERY_SEC` |
| `checkin` | `seatpilot-checkin:latest` | 3100 | `DATABASE_URL`, `METRICS_API_*` |
| `wayfinding` | `seatpilot-wayfinding:latest` | 3200 | `DATABASE_URL`, `METRICS_API_*` |
| `metrics-proxy` | Nginx alpine | 8081 | `SUPABASE_HOST`, secreto `supabase_service_role.jwt` |
| `prometheus` | `prom/prometheus:v2.54.1` | 9090 | `prometheus.yml`, `seatpilot.rules.yml` montados RO |
| `alertmanager` | `prom/alertmanager:latest` | 9093 | `alertmanager.yml` montado RO |

## 7. Estado y Pendientes
| Área | Estado | Siguientes pasos sugeridos |
| --- | --- | --- |
| Backend misión crítica | ✅ | Afinar performance (cache warmup, pgBouncer, requisitar tracing). |
| Observabilidad | ✅ | Validar alerta Slack en entorno productivo; documentar procedimientos de reload. |
| Supabase / datos | ✅ | Añadir tests de RLS negativos en CI; automatizar refresh logs con pg_cron. |
| UI (web/admin/signage) | ⏳ | Implementar PWA, Desk y Seat Designer v1 con los tokens existentes. |
| Servicios reservados | ⏳ | Poner en marcha `services/audit`, `services/routing`, `services/seating-engine`. |
| Despliegue prod | ⏳ | Preparar `docker-compose.prod.yml` + TLS + smoke post-deploy + manual de rollback. |
| Documentación UX | ⏳ | Incorporar wireframes, design tokens y Brand Center en el repo (`docs/` o `/knowledge-base`). |

## 8. Responsables (placeholder)
| Área | Responsable | Contacto | Notas |
| --- | --- | --- | --- |
| Ingesta y seguridad | _Asignar_ | | Revisar rotación HMAC, manejo DLQ. |
| Observabilidad y SRE | _Asignar_ | | Validar alertas, mantener Prom/Alertmanager. |
| Supabase / Esquemas | _Asignar_ | | Gobernar migraciones y políticas RLS. |
| Frontend / UX | _Asignar_ | | Desarrollar PWA, Desk, Seat Designer. |

## 9. Referencias rápidas
- **Servicios**: `services/checkin`, `services/wayfinding`, `services/telemetry-ingest`, `services/kpi-refresher`.
- **API métricas**: `apps/metrics-api/server.ts`.
- **Paquetes dominio/SDKs**: `packages/domain-model`, `packages/sdk-js`, `packages/sdk-server`.
- **Datos/Supabase**: `supabase/sql`.
- **Infra**: `docker-compose.metrics.yml`, `prometheus.yml`, `seatpilot.rules.yml`, `alertmanager.yml`.
- **Documentación operativa**: `docs/runbooks/README.md`, `scripts/smoke-f1.1.sh`, `scripts/smoke-f1.2.sh`.

> Actualiza este handoff al cierre de cada fase (F1/F2/…) con hitos, métricas y enlaces a PRs relevantes para mantener la trazabilidad.
