> Última actualización automática: 2025-10-20 03:14 UTC

> Última actualización automática: 2025-10-20 03:02 UTC

> Última actualización automática: 2025-10-20 03:01 UTC

> Última actualización automática: 2025-10-20 03:00 UTC

# SeatPilot — Master Handoff v1.0

## 0. Portada & Control de cambios
| Campo | Valor |
| --- | --- |
| Versión documento | 1.0.1 |
| Fecha | 2025-10-30 |
| Dueño | Arquitecto de Plataforma / UX Lead |
| Revisores | SRE · Producto · UX · Seguridad |
| Alcance | Consolidación técnica + UX + operación |

### Changelog
| Fecha | Versión | Secciones | Notas |
| --- | --- | --- | --- |
| _(hoy)_ | 1.0.0 | Inicial | Creación de handoff maestro |
| 2025-10-30 | 1.0.1 | 3.8 · 3.9 · 4 · 11 | Panel guía Seat-Designer, PWA Kiosko + wrapper Android, referencias de medición (docs/plan/planos) y ajuste de layout editor |
| 2025-02-14 | 1.0.2 | 3.8 · 5 | Compactación UI Seat-Designer (header, insertar, inspector/guía plegables) + reposicionamiento overlays; ver `docs/history/2025-02-14_ui_compact_header.md` |

> Mantén esta tabla al día (Added / Changed / Removed) cada vez que publiques cambios relevantes.

---

## Índice
0. [Portada & Control de cambios](#0-portada--control-de-cambios)  
1. [Resumen Ejecutivo](#1-resumen-ejecutivo)  
2. [Arquitectura del Sistema](#2-arquitectura-del-sistema)  
3. [UX, Diseño & Accesibilidad](#3-ux-diseño--accesibilidad)  
4. [Fases y Estado Actual](#4-fases-y-estado-actual)  
5. [Operación (Día D)](#5-operación-día-d)  
6. [Rendimiento y Optimización](#6-rendimiento-y-optimización)  
7. [Seguridad & Resiliencia](#7-seguridad--resiliencia)  
8. [Backlog Sugerido (Sprints A/B)](#8-backlog-sugerido-sprints-ab)  
9. [Glosario & Anexos](#9-glosario--anexos)  
10. [Próximas 72 h](#10-próximas-72h)  
11. [Gobernanza y Knowledge base](#11-gobernanza-y-knowledge-base-roadmap)  

---

## 1. Resumen Ejecutivo
SeatPilot es un ecosistema end-to-end que cubre **RSVP → Seating → Check-in → Wayfinding → Ops Live**, con un North Star explícito:
- **Check-in p95 ≤ 300 ms** (feedback visual ≤ 400 ms).
- **Door→Seat p50 ≤ 30 s · p95 ≤ 60 s**.
- **Rechazos de ingestión < 1 %** a 5 min.

### Fórmulas operativas (PromQL)
- `checkin_p95_5m = histogram_quantile(0.95, sum by (le,tenant,channel)(rate(seatpilot_checkin_latency_ms_histogram_bucket[5m])))`
- `door_to_seat_p95_15m = histogram_quantile(0.95, sum by (le,tenant,channel)(rate(seatpilot_door_to_seat_seconds_bucket[15m])))`
- `reject_rate_24h = (sum by (tenant,channel)(increase(seatpilot_ingest_rejected_total{tenant=~"$Tenant",channel=~"$Channel"}[24h])) / (sum by (tenant,channel)(increase(seatpilot_ingest_accepted_total{tenant=~"$Tenant",channel=~"$Channel"}[24h])) + sum by (tenant,channel)(increase(seatpilot_ingest_rejected_total{tenant=~"$Tenant",channel=~"$Channel"}[24h])))) or on() vector(0)`

> Ejemplo: si `checkin_p95_5m` devuelve `0.27`, se interpreta como **270 ms** de p95 en la ventana consultada.

### Qué está operativo hoy
- **Servicios core**: `services/checkin`, `services/wayfinding`, `services/telemetry-ingest`, `services/kpi-refresher`.
- **Observabilidad**: `apps/metrics-api`, Prometheus (`prometheus.yml` + reglas `seatpilot.rules.yml` y `ops/prometheus/rules/seatpilot_slo.rules.yml`), Alertmanager (`ops/alertmanager/alertmanager.yml`), dashboards `dashboards/overview-f1.3.json` y `dashboards/seatpilot-trends-f2.0.json`.
- **Telemetría**: ingest HMAC + anti-replay (`services/telemetry-ingest/src/routes/events.ts`), RLS multi-tenant (`supabase/sql/002_policies_rls.sql`), materialized views KPI.
- **Operación**: scripts de smoke (`scripts/smoke-f1.1.sh`, `scripts/smoke-f1.2.sh`), checklist `scripts/overview-check.sh`, runbook (`docs/runbooks/README.md`).

### Estado de fases
| Fase | Resultado | Comentario |
| --- | --- | --- |
| **F0** · Medición/Hardening | ✅ | Telemetría, dashboards, alertas, HMAC. |
| **F1 (BE)** · Fast-path check-in | ✅ | Caché de lookup, métricas por etapa, smokes. |
| **F1 (FE)** · PWA/Desk/Seat-Designer | ⏳ | IA y tokens definidos; falta implementación. |

**Estado Seat-Designer (F1 FE)**
- Nueva barra de acciones en el editor: `Nuevo diseño`, `Guardar`, `Guardar como…`, `Imprimir` con validación previa y mensajes de tenant.
- Persistencia funcional contra `@seatpilot/venue-base` (headers `x-seatpilot-tenant/user`, metadatos clonados, creación de versiones clean).  
- Herramientas gráficas consolidadas: paredes con vértices redondeados, puertas/muebles renderizados con handles, texto editable inline, inserción de vértices Alt+clic.  
- Backend expone CORS configurable (`CORS_ORIGIN`), docs `.env.local` actualizados para dev (`apps/venue-structure`, `services/venue-base`).
| **F2.0** · Panel ejecutivo 7 d | ✅ | Dashboard Trends F2.0 listo. |
| **F2.1** · Prod segura (TLS, Slack) | 🔶 | Requiere compose prod + smoke post-deploy. |
| **F3–F6** · Assign v1, Ops Live, Offline-first/A11y | ▶ | Planificado, pendiente. |

### Riesgos & próximos pasos
- **Riesgo activo:** p95 check-in ligeramente > 300 ms en picos → bajar con cache warmup, keep-alive, pgBouncer, Redis opcional.
- **Prioridades inmediatas:**  
  1. Reducir p95 check-in ≤ 300 ms sostenido.  
  2. Implementar F1 FE (PWA, Desk, Seat Designer v1).  
  3. Cerrar F2.1 (compose prod + TLS + Slack + rotación de keys).  

### SLOs y métricas (referencia)
| Área | Umbral | PromQL |
| --- | --- | --- |
| Check-in p95 (5 m) | ≤ 0.300 s | `histogram_quantile(0.95, sum by (le,channel,tenant)(rate(seatpilot_checkin_latency_ms_histogram_bucket[5m])))` |
| Door→Seat p95 (15 m) | ≤ 60 s | `histogram_quantile(0.95, sum by (le)(rate(seatpilot_door_to_seat_seconds_bucket[15m])))` |
| Reject rate (5 m) | < 1 % | `seatpilot_ingest_reject_rate_5m / seatpilot_ingest_rate_5m` *(usando las recording rules de `seatpilot.rules.yml`)* |
| MV lag promedio (5 m) | < 10 s | `seatpilot:mv_lag_avg_5m` |

---

## 2. Arquitectura del Sistema

### 2.1 Mapa Door→Seat
```
[Guest/Kiosk/PWA]
  └─ performance.mark: qr_scan_start, ui_feedback
      │
      ▼
[services/checkin]
  ├─ validar payload (Ajv)       → stage=parse
  ├─ lookup cache/DB             → stage=lookup
  ├─ persist sesión (Supabase)   → stage=persist
  └─ total                       → stage=total
      │
      ├─ métricas → apps/metrics-api:/observe/checkin{,-stage}
      └─ sesión/telemetría → Supabase (ops.checkin_sessions, telemetry.events_raw)
      │
      ▼
[services/wayfinding] → calcula door→seat → /observe/door-to-seat
      │
      ▼
[Supabase/Postgres] → MVs KPI (telemetry.mv_kpi_*)
      │
      ▼
[Prometheus] → reglas `seatpilot.rules.yml` → Alertmanager → Slack
      │
      ▼
[Grafana] → dashboards Overview F1.3 + Trends F2.0
```

### 2.2 Servicios (contratos breves)
| Servicio | Endpoint(s) | Función | Flags/Notas |
| --- | --- | --- | --- |
| `@seatpilot/checkin` (`services/checkin/src/server.ts`) | `POST /api/checkin/success`, `GET /health` | Valida payload (Ajv), cachea `ts_scan_start_ms`, upsert sesión (`ops.checkin_sessions`), emite métricas por etapa | `CHECKIN_SCAN_CACHE_ENABLED`, `CHECKIN_SCAN_CACHE_TTL_MS`, `CHECKIN_SLOW_LOOKUP_MS` (test) |
| `@seatpilot/wayfinding` (`services/wayfinding/src/server.ts`) | `POST /api/wayfinding/arrive-table`, `GET /health` | Une sesión + `arrive` para door→seat y publica histogramas | Descarta outliers > 15 min |
| `@seatpilot/telemetry-ingest` (`services/telemetry-ingest/src/server.ts`) | `POST /v1/events`, `GET /metrics`, `GET /health` | Ingesta HMAC/nonce/skew, valida esquema, DLQ/alias, upsert Supabase/Postgres o memoria | `HMAC_TENANT_SECRET`, `METRICS_API_*` |
| `@seatpilot/kpi-refresher` (`services/kpi-refresher/src/jobs/refresh-mvs.ts`) | Job continuo | Refresca `telemetry.mv_kpi_*`, actualiza `mv_metadata`, emite `seatpilot_mv_lag_seconds` | `REFRESH_EVERY_SEC` (default 60) |
| `@seatpilot/venue-base` (`services/venue-base/src/server.ts`) | `GET /api/venue-plans`, `GET/POST /api/venues/*` | Administra venues y backstage de planos; búsqueda por texto/estado/ciudad/tags (`search_text` en Supabase) y paginación (`hasMore`, `nextOffset`) | Requiere headers `x-seatpilot-tenant/user`. SQL soporte: `supabase/sql/110_venue_plan_library.sql` (owner, tags, thumbnail, layout). |
| `apps/metrics-api` (`apps/metrics-api/server.ts`) | `GET /metrics`, `POST /observe/*`, `GET /healthz` | Exposición Prometheus y observabilidad de negocio (check-in, etapas, door→seat, ingest, MV lag) | Protegido vía `x-metrics-key`; `demo/*` en dev |

### 2.3 Observabilidad
- **Prometheus** (`prometheus.yml`): scrape a `metrics-api:8080` y `telemetry-ingest:3001`; reglas en `seatpilot.rules.yml` + `ops/prometheus/rules/seatpilot_slo.rules.yml`.
- **Alertmanager** (`ops/alertmanager/alertmanager.yml`): envía a Slack (`ALERTMANAGER_SLACK_WEBHOOK_URL`, `ALERTMANAGER_SLACK_CHANNEL`).
- **Grafana**: dashboards `overview-f1.3.json` (operación) y `seatpilot-trends-f2.0.json` (7 días).
- **Scripts**: `scripts/smoke-f1.1.sh`, `scripts/smoke-f1.2.sh`, `scripts/overview-check.sh`, `scripts/trigger-stage-latency.sh`.
- **Runbook smoke TLS/CSP/Slack**: `docs/runbooks/observability_smoke.md`.

### 2.4 Datos & Seguridad
| Elemento | Archivo | Descripción |
| --- | --- | --- |
| Esquema base | `supabase/sql/001_schema_core.sql` | `telemetry.events_raw`, `telemetry.events_dlq`, MVs KPI, metadata de refrescos. |
| RLS multi-tenant | `supabase/sql/002_policies_rls.sql` | Uso de `telemetry.claim_tenant_id()` para select/insert aislado por tenant. |
| Vistas KPI | `supabase/sql/003_views_kpi.sql` | `v_mv_staleness`, `v_event_counts_last_hour`, `v_rejected_events_last_hour`. |
| Secreto `service_role` | `.runtime/secrets/supabase_service_role.jwt`, `ops/metrics-proxy/entrypoint.sh`, `ops/metrics-proxy/nginx.conf.template` | Proxy Nginx firma requests a Supabase. |
| Pendiente | — | Rotación HMAC/service-role + mTLS intra-servicios (F2.1/F2.x). |

### 2.5 Infraestructura & despliegue
- **Local/Dev**: `pnpm` workspaces, scripts `pnpm --filter … build/start`.
- **Compose**: `docker-compose.metrics.yml` (dev/stage) agrupa servicios + Prometheus + Alertmanager + proxy.
- **Prod (pendiente)**: `docker-compose.prod.yml` + TLS + Slack alerting (F2.1). Proxy Nginx (`ops/nginx/seatpilot.conf`) termina HTTPS en `ops.seatpilot.<dominio>` y enruta a `metrics-api`/`telemetry-ingest`.
- **Variables** (`.env`, `.env.prod`): `SUPABASE_URL`, `SUPABASE_SERVICE_ROLE`, `SUPABASE_DB_URL`, `DATABASE_URL`, `HMAC_TENANT_SECRET`, `METRICS_INGEST_KEY`, `CHECKIN_SCAN_CACHE_*`, `ALERT_SLACK_*`.
- **Licenciamiento/Metering**: `supabase/sql/100_entitlements_metering.sql`–`107_cron_metering_seed.sql` crean catálogo de planes, entitlements, metering idempotente y vistas de billing; funciones `app.seed_metering_demo` + cron diario `ops_metering_seed_daily`; RLS basada en `app.current_tenant_id()` para aislar por tenant. `supabase/sql/metering_seed.sql` disponible para seed manual rápido.
- **Admin consumo**: `services/telemetry-ingest` incluye `/admin/billing` (HTML) y `/admin/billing/csv` para visualizar `v_tenant_billing_report` (incluido/usado/overage) filtrado por periodo y tenant.
- **CI/CD**: `.github/workflows/brand.yml`, `fe-a11y-offline.yml`, `backend-and-tests.yml`, `supabase-sql-ci.yml`, `release.yml`, `ops-metering-seed.yml`; `CODEOWNERS` alineado a squads. Secrets (`REGISTRY_*`, `ALERTMANAGER_SLACK_WEBHOOK_URL`) y environment `production` (`PROD_DATABASE_URL`, reviewers `seatpilotapp` + `edwinsantiago`) ya configurados; proteger `main` cuando todos los checks estén en verde.

### 2.6 Rutas y recursos clave
- Servicios: `services/checkin`, `services/wayfinding`, `services/telemetry-ingest`, `services/kpi-refresher`.
- Apps actuales: `apps/admin`, `apps/metrics-api`, `apps/signage`, `apps/web` *(esta última servirá como base para PWA/Desk/Seat-Designer)*.
- Apps futuras (pendientes de crear): `apps/checkin`, `apps/desk`, `apps/seat-designer`.
- Dashboards: `dashboards/overview-f1.3.json`, `dashboards/seatpilot-trends-f2.0.json`.
- Dashboard zonas Ops: `dashboards/ops-live-v1.json` (tiles por zona, variables Tenant/Channel/Zone).
- Infra: `docker-compose.metrics.yml`, `prometheus.yml`, `seatpilot.rules.yml`, `ops/prometheus/rules/seatpilot_slo.rules.yml`, `ops/alertmanager/alertmanager.yml`.

---

## 3. UX, Diseño & Accesibilidad

### 3.1 Brand Center (estado actual)
- **Tokens**: definidos en `brand/tokens.json` (versión 0.1.0). Incluye tipografía, colores base/semánticos, spacing, estados y presets de componentes.
- **Iconografía**: manifest `brand/icons/sp-icons.manifest.json` (v0.3.0) + SVGs en `brand/icons/`. Cobertura actual: íconos core (home/search/alert/qr…), eventos/sala (seat/table/kiosk/display…) y lote infraestructura (dancefloor/stage/tent/dj/band/cake-table/gift-table/chair-row). Regla: no borrar íconos existentes sin consenso; toda adición debe pasar `npm run brand:icons:lint`.
- **Copy rules**: mensajes ≤ 7 palabras en kioscos/TV; tono operativo, sin tecnicismos; usar `currentColor` para íconos.
- **Backlog**: subir set lencería (overlay, runner, skirting, drops) + documentar mosaico de previews en README.

### 3.2 Principios
1. **Guide every guest, fast**: decisiones claras, microcopys ≤ 7 palabras.
2. **Consistencia & accesibilidad**: AA por defecto (contraste ≥ 4.5:1, targets ≥ 44 px, foco visible).
3. **Transparencia operativa**: breakdown por etapa, alertas explicables, doorlist 1-clic.

### 3.3 Arquitectura de información (por módulo)
| Módulo | Flujo | Notas UX/DoD |
| --- | --- | --- |
| **PWA Check-in** | Escanear → Confirmar → Mostrar mesa (`OK`, `rechazo`, `lento`) | Layout vertical 9:16 u horizontal 16:9 con selector, lector QR real (ZXing import diferido), bloqueo de duplicados (toast) y modo manual/HID con feedback ≤ 400 ms; cola offline, `lookup_source` visible en dev. |
| **Desk (Mostrador)** | Buscar invitado → Validar → Registrar → Reimprimir (opc.) | Doorlist 1-clic (PDF/CSV), historial y auditoría. |
| **Seat-Designer v1** | Cargar mapa → Editar zonas/mesas → Overlay R/A/V → Publicar | Validadores (pasillos, aforo, PMR), bloquea publicación con rojo, warnings accionables. |
| **Wayfinding / Signage** | Pantalla de bienvenida → Ruta → Confirmación | Redundancia color + letra para daltonismo, CTA “Ver ruta”. |
| **Ops Live** | Cards KPI + Breakdown + Trends | p95 check-in, door→seat, rechazos, MV lag, breakdown por etapa (semáforo). |

### 3.4 Flujos clave (ASCII)
```
[PWA Check-in]
Scan QR → Validar payload → (OK) Mostrar mesa ▸ “Ver ruta”
                    └─(Error) Mostrar mensaje + CTA “Ir a mostrador”
```
```
[Seat-Designer v1]
Cargar mapa → Editar → Validadores (overlay) → Guardar/Publicar
  ├─ rojo: bloquear + explicar regla
  └─ ámbar/verde: permitir con warnings documentados
```

### 3.5 Componentes & tokens
- **tokens.json** (color, tipografía, motion, estados); fuente: `Chat_resumen_projecto_6f6ca7ad209.md`.
- **Componentes previstos** (`packages/ui-kit`, pendiente): Button, Input, QR Scanner, Card KPI, Timeline, Toast, Dialog, Skeleton.
- **Iconografía**: set 24×24 px, estilos line/filled.

### 3.6 Microcopy (ES/EN, ≤ 7 palabras)
- Éxito: “¡Listo! Ve a mesa 12” / “Done! Go to table 12”.
- Error genérico: “No pudimos validar el código”.
- Ticket usado: “Este pase ya fue utilizado”.
- Sin red: “Sin conexión. Usaremos modo offline”.
- CTA ruta: “Ver ruta” / “See directions”.

### 3.7 Checklist A11y & DoD
- Contraste ≥ 4.5:1 (texto normal), ≥ 3:1 (texto grande).
- Foco visible, navegación teclado, skip links.
- Roles/ARIA + `aria-live` en mensajes.
- Tests: Lighthouse ≥ 95, Axe sin issues críticos.
- CI: `.github/workflows/fe-a11y-offline.yml` (`.pa11yci.json`, `scripts/ci/check-lighthouse-pwa.js`, PWA ≥ 90).
- **DoD PWA:** feedback ≤ 400 ms, cola idempotente, fallback offline.
- **DoD Desk:** flujo ≤ 15 s por invitado p95, todas las mutaciones auditadas.
- **DoD Seat-Designer:** sin publicación con rojo, `fix.es` propuestos, guardar warnings.

### 3.8 Seat-Designer · Venue Structure Editor (North Star)
- **Panel guía**: `apps/venue-structure/src/components/GuidancePanel.tsx` documenta metadatos del plano (título, escala, norte, checkboxes de DoD) y checklist AIA + flujo de levantamiento; estilo en `apps/venue-structure/src/components/GuidancePanel.css`.
- **Persistencia**: `apps/venue-structure/src/App.tsx` exporta `projectMeta` junto al layout para handoff FE ↔ Ops; tipo en `apps/venue-structure/src/types.ts`.
- **Layout completo**: ajustes de alto en `apps/venue-structure/src/styles.css`, `components/EditorCanvas.css`, `components/Inspector.css` para que el lienzo ocupe 100 % y paneles tengan scroll interno.
- **Motor WASM estable**: `ensureWasm` ahora usa `init({ module_or_path })` y promesa singleton para quitar el warning de parámetros obsoletos.
- **Canvas sin warnings**: `canvas__svg` aplica `touch-action: none` y listeners `wheel`/`touchmove` se registran como no pasivos para evitar `Unable to preventDefault…`.
- **Inspector consistente**: JSX con forma estable y reseteo mediante `startTransition`, eliminando el error `Expected static flag was present`.
- **Impresión 2 páginas**: el botón `Imprimir` genera PDF con el plano limpio (página 1) y ficha técnica con métricas, checklist y validaciones (página 2) gracias a `PrintPlan.tsx`, `PrintSummary.tsx` y `print/print.css`.
- **Modo bilingüe (ES/EN)**: selector persistente en la cabecera; impresión y métricas usan `i18next` + `Intl` para textos y formatos locales (ft/m, fechas, miles).
- **Base documental**: referencias directas al set `docs/plan/planos/` (checklist AIA, símbolos, guías de medición, manual de dibujo) para alimentar validadores y wizard de levantamiento.
- **Backstage de planos**: vista `PlanLibrary` (`apps/venue-structure/src/components/PlanLibrary.tsx`) consume `GET /api/venue-plans` y permite buscar/filtar por nombre, estado, ciudad o tags; devuelve `thumbnail_svg`, `content_commit_id` y abre el plano seleccionado vía `getPlan`. Ideal para rescatar layouts archivados antes de editar.
- **Próximos pasos**: auto-evaluar checklist (cotas, hatch, secciones) desde el layout; wizard de levantamiento (Sketch → Digital) alineado a `Floor Plan Drawing Manual` + `How to draw a floor plan`; exportes SVG/PDF.
- **2025-02 · UI compacta & flujos insert** *(docs/history/2025-02-14_ui_compact_header.md)*:
  - Tokens compartidos (`styles/tokens.css`) para alturas/espaciados, botones ≥ 48 px.
  - `AppHeader` con breadcrumb, menús Guardar▾/Exportar▾/Más▾ y auto-save/validación visibles.
  - `InsertMenu` con autofocus, recents, tamaños S/M/L persistidos y telemetría `insert_*`.
  - Inspector Arrange en rejilla (ancho/alto/posiciones/rotación) + copiar/pegar estilo; botón para plegar.
  - `GuidancePanel` plegable + checklist sin scroll; chips overlays centrados con badge global (OK/Avisos/Bloqueos).
  - Etiquetas de salas basadas en `room.name` y visibles tanto en canvas como en impresión; export también muestra puertas con arco de apertura (print-friendly).

### 3.9 Kiosko PWA & Wrapper Android
- **PWA base**: `apps/kiosk-pwa` (Vite + React) con rutas `/kiosk`, `/signage`, `/tv/main`, `/tv/:zone`; layout común en `components/Layout.tsx`.
- **Escáner QR**: `pages/Kiosk.tsx` usa ZXing (`@zxing/browser`) con import diferido, fallback manual, control de duplicados, feedback visual/auditivo y modo horizontal/vertical.
- **Signage/TV**: `pages/Signage.tsx`, `pages/TvMain.tsx`, `pages/TvZone.tsx` muestran loops de mensajes, counters y estados por zona; `index.css` replica tokens PWA (tipografía, grid, animaciones).
- **Comandos**: `pnpm --filter @seatpilot/kiosk-pwa dev -- --host 0.0.0.0 --port 4173`; build `pnpm --filter @seatpilot/kiosk-pwa build`.
- **Wrapper Android**: `android/kiosk-demo` (WebView fullscreen) con README detallado, `MainActivity.kt` que expone `KIOSK_URL`, `network_security_config.xml` para HTTP local y tema bloqueado en landscape; pensado para Android Box o emulador `10.0.2.2`.
- **DoD pendiente**: integrar modo offline real (cache strategies), telemetría de scans (`/events`), theming desde tokens y lock task mode en Android.

---

## 4. Fases y Estado Actual
| Fase | Objetivo | Estado | Artefactos / Rutas | Métricas/Alertas | Próximo hito |
| --- | --- | --- | --- | --- | --- |
| **F0** | Telemetría, dashboards, alertas | ✅ | `services/telemetry-ingest`, `supabase/sql`, `seatpilot.rules.yml`, `ops/prometheus/rules/seatpilot_slo.rules.yml`, `ops/alertmanager/alertmanager.yml`, dashboards Overview/Trends | p95 check-in/door→seat, rechazos %, `mv_lag_seconds` | — |
| **F1 (BE)** | Fast-path + métricas por etapa | ✅ | `services/checkin`, `scan-cache.ts`, `validation.ts`, `apps/metrics-api` `/observe/*`, `scripts/smoke-f1.2.sh` | `*_checkin_*`, `*_door_to_seat_*` | Warmup de cache en boot |
| **F1 (FE)** | PWA/Desk/Seat-Designer v1 | ⏳ | `apps/kiosk-pwa` (scan + signage), `apps/checkin`, `apps/desk`, `apps/seat-designer` (estructura vacía), **Venue Structure Editor North Star** (`apps/venue-structure/src/App.tsx`, `components/GuidancePanel.tsx`, `components/Inspector.tsx`), wrapper Android (`android/kiosk-demo`), tokens en `Chat_resumen_projecto_6f6ca7ad209.md` | UI feedback ≤ 400 ms, AA ≥ 95, % auto-assign ≥ 95 (future) | Implementar flows, validadores, microcopys; auto-checklist Seat-Designer + wizard de levantamiento; telemetría kiosko + lock task Android |
| **F2.0** | Dashboard ejecutivo 7 d | ✅ | `dashboards/seatpilot-trends-f2.0.json` | Promedios 7 d, rej % 24 h | — |
| **F2.1** | Prod segura (TLS, Slack, smoke) | ✅ | `.env.prod`, `docker-compose.prod.yml`, `scripts/cold-start.sh`, `scripts/overview-check.sh` | Targets UP, alertas Slack, smoke post-deploy | Endurecer TLS + pipelines despliegue (listo en PR-03) |
| **F3** | Assign v1 (smart reflow + explicable) | ▶ | `services/seating-engine/src/server.ts`, `src/routes/assign.ts`, `src/lib/*`, `test/score.spec.ts` | % auto-assign ≥ 95, explicación de reasignaciones | Feature flag + métricas de calidad |
| **F4** | Ops Live v0.1 | ▶ | SDK eventos, dashboards Extendidos | Alertas en vivo (door→seat, check-in p95) | Integrar telemetría end-to-end |
| **F5/6** | Offline-first, A11y gates, mTLS | ▶ | `docs/runbooks/piloto_day_of.md`, `docs/runbooks/doorlist_1click.md`, `docs/runbooks/piloto_postmortem.md`, `.github/workflows/fe-a11y-offline.yml` | MTTR < 10 min, AA ≥ 95 | Piloto controlado + checklist resiliencia |

### 4.1 Auditoría de fases
> Historico detallado en `docs/history/fases-log.md`.

| Fecha | Responsable | Observaciones | Próximas acciones |
| --- | --- | --- | --- |
| 2025-10-20 | Ops/PM | Revisión integral F0–F6: se confirma telemetría estable; faltan dashboard trends 7 d y prototipos FE | Regenerar `dashboards/seatpilot-trends-f2.0.json`, documentar evidencia de p95 ≤ 300 ms, avanzar prototipos kiosco/TV/PWA |
| 2025-10-21 | Ops/Platform | `.github` con workflows Brand/FE/Backend/SQL/Release y environment `production`; secrets cargados y PR smoke en curso | Verificar workflows verdes, proteger `main`, abrir PR `release/prod-r1` + tag `v1.0.0-prod-r1` |

---

## 5. Operación (Día D)

### 5.1 Arranque local rápido (stack completo)
```bash
# 0) Variables y dependencias básicas
cp .env.example .env
pnpm install

# 1) Prometheus + Alertmanager base (para métricas/alertas)
docker compose -f docker-compose.metrics.yml up -d alertmanager prometheus

# 2) Servicios core (terminales separadas)
pnpm --filter @seatpilot/checkin dev            # http://localhost:3100/health
pnpm --filter @seatpilot/telemetry-ingest dev   # http://localhost:3001/health
pnpm --filter seatpilot-metrics-api dev         # http://localhost:8080/metrics

# 3) Kiosko PWA (layout consistente)
pnpm --filter @seatpilot/kiosk-pwa dev          # http://localhost:4173/kiosk
```
- Semillas rápidas: `METRICS_API_BASE_URL=http://localhost:8080 pnpm --filter @seatpilot/telemetry-ingest push-metrics`.
- Runbook extendido: `docs/runbooks/kiosk_dev.md` (PWA) + `docs/runbooks/observabilidad_smoke.md` (Prometheus/Alertmanager).
- Modo Cámara QR usa ZXing (import diferido) y bloquea lecturas repetidas; el modo Manual/HID comparte el mismo guard para evitar duplicados en el historial.

### 5.2 Compose staging/prod
```bash
docker compose -f docker-compose.metrics.yml --env-file .env up -d --build
docker compose ps
# Producción mínima
docker compose -f docker-compose.prod.yml --env-file .env.prod up -d
```
- Si Prometheus reinicia: `curl -XPOST http://localhost:9090/-/reload`.
- Post deploy: `./scripts/cold-start.sh` (requiere `GRAFANA_API_KEY` para importar dashboards).
- Healthchecks:  
  `curl http://localhost:3100/health` (check-in)  
  `curl http://localhost:3200/health` (wayfinding)  
  `curl http://localhost:8080/healthz` (metrics API)

### 5.3 Dashboards Grafana
1. Importar `dashboards/overview-f1.3.json` y `dashboards/seatpilot-trends-f2.0.json`.
2. Mapea datasource a Prometheus.
3. Variables: `Tenant = All`, `Channel = All`; rango ≥ 15 min; refresh 1–5 min.

### 5.4 Pruebas de humo
```bash
./scripts/smoke-f1.2.sh      # check-in + arrive + rechazo + refresher
./scripts/overview-check.sh  # imprime SLOs y MV metadata
```
Resultados esperados: check-in p95 y door→seat > 0, rechazos 0 % (fallback a 0 si no hay eventos), MV lag ≈ 0.1 s.

### 5.5 Validar alerta por etapa
```bash
export CHECKIN_SLOW_LOOKUP_MS=250
pnpm --filter @seatpilot/checkin start   # reinicia servicio
./scripts/smoke-f1.2.sh
# Restaurar
export CHECKIN_SLOW_LOOKUP_MS=0
```
Debe disparar `SeatPilotCheckinStageP95High` (stage=lookup) y resolverse al volver a 0.

### 5.6 Go / No-Go checklist
| Item | Estado |
| --- | --- |
| Servicios (`metrics-api`, `telemetry-ingest`, `checkin`, `wayfinding`) y observabilidad (`prometheus`, `alertmanager`) **UP** | ✅ |
| Reglas recargadas (`curl -XPOST http://localhost:9090/-/reload`) si hubo reinicio | ✅ |
| Dashboards importados y datasource correcto | ✅ |
| **Smokes OK** (`smoke-f1.2.sh`, `overview-check.sh`) | ✅ |
| Alerta Slack FIRING→RESOLVED validada | ✅ |
| MV lag ≤ 0.2 s · rechazos 24 h < 1 % | ✅ |

> Runbook detallado: `docs/runbooks/piloto_day_of.md`. Doorlist 1-clic y post-mortem en `docs/runbooks/doorlist_1click.md` y `docs/runbooks/piloto_postmortem.md`.

### 5.7 Formularios de preparación de evento
- `docs/forms/event_preparation_checklist.md` — checklist maestro para discovery con clientes (escenarios Backyard / Kids / tablas de dimensionamiento, textiles y operación catering). Coordina su llenado con `docs/runbooks/rsvp_ops.md` y `docs/runbooks/venue_structure_import.md` para que logística, seating y VenuePack partan del mismo conjunto de datos.

---

## 6. Rendimiento y Optimización

### 6.1 Implementado
- Validación con Ajv precompilado, pool Postgres (max 15), payload limited (10 KB).
- Cache `ts_scan_start_ms` (TTL 10 min), métricas fire-and-forget.

### 6.2 Quick wins (≤ 48 h)
1. **Sembrar caché** al boot (últimos N tickets).  
2. **Keep-alive / preconnect** hacia DB y metrics API.  
3. Ajustar TTL cache a 15–20 min en picos.  
4. Auditar `lookup_source` (payload/cache/db) y optimizar índices JSONB.  
5. Desactivar compresión para payloads pequeños (reduce CPU).  

### 6.3 Sostenible (1–2 semanas)
- **pgBouncer** (modo transaction) con pool tuning.  
- Cache compartida (Redis) para escenarios multi-replica.  
- **OTel tracing** UI→BE→DB (trace_id único).  
- Rate-limits y/o mTLS en `/observe/*`.  
- Virtualización de listas/Kioscos (React 18 hydration boundaries).  

### 6.4 Targets después de optimización
- Check-in p95 ≤ 300 ms (24 h) con UI feedback ≤ 400 ms.  
- Door→Seat p95 ≤ 45 s.  
- MV lag ≤ 0.2 s.  
- Reject rate < 0.5 %.  

---

## 7. Seguridad & Resiliencia
- **Ingesta HMAC + anti-replay**: cabeceras `x-key`, `x-sig`, `x-ts`, `x-nonce`; rotación `METRICS_INGEST_KEY` + `NEXT_METRICS_INGEST_KEY`.
- **RLS multi-tenant**: políticas `events_*_tenant_isolation_*`, `checkin_sessions`, tests negativos en CI (pendiente).
- **Offline-first**: colas idempotentes (PWA), Doorlist 1-clic y SOP de contingencia.
- **Alertas & monitoreo**: Slack `stage/tenant/channel`, runbooks versión F1.
- **Hardening planificado**: mTLS intra-servicios/kioscos, CSP restrictiva, A11y gates (CI), rotación programada de claves.

---

## 8. Backlog Sugerido (Sprints A/B)

### Sprint A (2 semanas)
1. Bajar p95 check-in ≤ 300 ms (cache seed, keep-alive, TTL dinámico).  
2. PWA Check-in (scan→confirm→route) + modo offline base.  
3. Desk con Doorlist 1-clic e historial auditado.  
4. Compose prod + TLS + Slack + smoke post-deploy automatizado.  
5. Dashboard UX (web-vitals, ratio éxito, errores UI).

### Sprint B (2 semanas)
6. Seat-Designer v1 (overlay R/A/V, bloqueos y warnings).  
7. Tests RLS negativos + rotación HMAC/service-role.  
8. Redis o pgBouncer en staging (benchmark).  
9. OTel tracing mínimo viable + panel de trazas.  
10. Ops Live v0.1 (cards KPI, alertas vivas por zona).  
11. Runbook final + post-mortem 24 h (pg_cron).  

*(Cada issue debe registrar DoD, KPI esperado y responsable en el tracker que se use).*  

---

## 9. Glosario & Anexos

### 9.1 Variables `.env` principales
| Variable | Uso | Nota |
| --- | --- | --- |
| `SUPABASE_URL` / `SUPABASE_SERVICE_ROLE` | Conexión Supabase | Service role real montado en `.runtime/secrets/…` |
| `SUPABASE_DB_URL` / `DATABASE_URL` | Conexión Postgres directa | Reemplazar `sslmode=no-verify` por `require` en prod |
| `HMAC_TENANT_SECRET` | Firmado de ingest | Rotar junto con `METRICS_INGEST_KEY` |
| `METRICS_INGEST_KEY`, `NEXT_METRICS_INGEST_KEY` | Auth `/observe/*` | Doble clave para rotaciones 7 d |
| `CHECKIN_SCAN_CACHE_ENABLED`, `CHECKIN_SCAN_CACHE_TTL_MS` | Cache lookup check-in | `true` + `600000` (10 min) por defecto |
| `CHECKIN_SLOW_LOOKUP_MS` | Prueba de alertas | Usar 250 ms para staging, 0 en prod |
| `ALERT_SLACK_WEBHOOK`, `ALERT_SLACK_CHANNEL` | Alertmanager | Configurar en F2.1 |

### 9.2 Métricas Prometheus
`seatpilot_checkin_latency_ms`, `seatpilot_checkin_stage_seconds`, `seatpilot_door_to_seat_seconds`, `seatpilot_ingest_{accepted,rejected}_total`, `seatpilot_mv_lag_seconds`, `http_request_duration_seconds`.

### 9.3 PromQL de consulta rápida
```promql
histogram_quantile(0.95,
  sum by (le,tenant,channel)(
    rate(seatpilot_checkin_latency_ms_histogram_bucket{tenant=~"$Tenant",channel=~"$Channel"}[5m])
  )
)
```
```promql
(
  sum by (tenant,channel)(increase(seatpilot_ingest_rejected_total{tenant=~"$Tenant",channel=~"$Channel"}[24h]))
/
  (
    sum by (tenant,channel)(increase(seatpilot_ingest_accepted_total{tenant=~"$Tenant",channel=~"$Channel"}[24h])) +
    sum by (tenant,channel)(increase(seatpilot_ingest_rejected_total{tenant=~"$Tenant",channel=~"$Channel"}[24h]))
  )
) or on() vector(0)
```
```promql
histogram_quantile(0.95,
  sum by (le,stage,tenant,channel)(
    rate(seatpilot_checkin_stage_seconds_bucket{tenant=~"$Tenant",channel=~"$Channel"}[5m])
  )
)
```

### 9.4 Prompt maestro (para IA)
> “Actúa como Lead de Plataforma + UX de SeatPilot. North Star: check-in p95 ≤ 300 ms, door→seat p95 ≤ 60 s, rechazos < 1 %. Prioriza R1–R3 (instrumentación, Brand Center, seguridad) antes de integraciones. Salida: resumen ≤ 8 bullets, decisiones/trade-offs, tareas con DoD+KPI, riesgos/mitigaciones. Respeta copys ≤ 7 palabras, AA (contraste, teclado, foco), usa endpoints reales (/checkin, /arrive-table, /events, /observe/checkin-stage). Si asumes algo, marca 🔶[asumido].”

### 9.5 Referencias rápidas
- **Servicios**: `services/checkin`, `services/wayfinding`, `services/telemetry-ingest`, `services/kpi-refresher`.
- **Apps**: `apps/admin`, `apps/metrics-api`, `apps/signage`, `apps/web`; futuros `apps/checkin`, `apps/desk`, `apps/seat-designer`.
- **Dashboards**: `dashboards/overview-f1.3.json`, `dashboards/seatpilot-trends-f2.0.json`.
- **Infra**: `docker-compose.metrics.yml`, `prometheus.yml`, `seatpilot.rules.yml`, `ops/prometheus/rules/seatpilot_slo.rules.yml`, `ops/alertmanager/alertmanager.yml`.
- **Runbooks/Scripts**: `docs/runbooks/README.md`, `scripts/smoke-f1.2.sh`, `scripts/overview-check.sh`.
- **Estrategia/GTM**: `docs/strategy/SeatPilot_GTM_v1.0.md`.

---

## 10. Próximas 72 h
1. **Reducir p95 check-in ≤ 300 ms**: semilla de caché + keep-alive + TTL 15–20 min; medir `lookup_source` y `seatpilot_checkin_stage_seconds_bucket`.
2. **Validar alerta stage**: `CHECKIN_SLOW_LOOKUP_MS=250` → smoke → confirmar Slack FIRING → restaurar a 0.
3. **Compose staging/prod**: levantar con TLS + Slack, ejecutar `smoke-f1.2.sh` y `overview-check.sh`, documentar resultados.
4. **FE mínimo**: implementar PWA Check-in (scan→confirm→route) + Desk Doorlist 1-clic, audit A11y ≥ 95 (Lighthouse).

---

## 11. Gobernanza y Knowledge base (estado)
- **Governanza/PR template**: disponible en `docs/governance/PR_TEMPLATE.md` (incluye INS/EPIC/DoD/KPI y checklist de riesgos/rollback).
- **ADRs**: creados los primeros dos documentos:  
  - `docs/adr/0001-hmac-ingest.md` (firmas HMAC + anti-replay).  
  - `docs/adr/0002-rls-multi-tenant.md` (políticas RLS multi-tenant).  
  - Próximo: ADR para gobernanza de tokens/Brand (`ADR-0003`).
- **Knowledge base**: estructura inicial en `/knowledge-base/` con `index.json` y buckets `inputs/processed/synthesis`.  
  - Pendiente: poblar entradas (`KB-001`, `KB-002`, etc.) y agregar script de lint/actualización.
  - Nuevo bloque de referencia rápida (`docs/plan/planos/`):  
    - `Architecture_Construction_Floor_Plan_Checklist.pdf` (checklist AIA para cotas/hatch/secciones).  
    - `Floor Plan Drawing Manual.pdf`, `E-Book-How-to-draw-a-floor-plan.pdf`, `How to Read Plan.pdf`, `Hand-drawn-sketch-guidelines.pdf` (metodología de levantamiento y convención de líneas).  
    - `floor-plan-symbols.pdf` (biblioteca de símbolos por categorías) y `DMF_activity_floorplan_200602.pdf` (tutorial onboarding).  
    - `09_slides_CAD-Floor-Plans.pdf`, `how-to-draw-house-plan.pdf` (contexto CAD/planificación).  
  - Integrar estos insumos en la KB como fichas (`KB-010`…`KB-015`) con resumen + DoD Seat-Designer.
  - Añadir síntesis `KB-TypeScript` usando `docs/plan/TypeScript_Modern_JS_Implementation.md` (plan de adopción: tsconfig base, tests TS, patrones, roadmap FE/BE).
  - Añadir ficha `KB-016` para Kiosko PWA (`apps/kiosk-pwa`) y `KB-017` para Wrapper Android (`android/kiosk-demo/README.md`) describiendo setup y dependencias.
  - Añadir ficha `KB-018` con la biblioteca/backstage de planos (`PlanLibrary`, endpoint `GET /api/venue-plans`, SQL `supabase/sql/110_venue_plan_library.sql`, convenciones de búsqueda/etiquetas).
  - Registrar síntesis UI compacta (tokens/header/insertar/inspectores plegables) en `KB-019`, fuente `docs/history/2025-02-14_ui_compact_header.md`.
- **Checklist de subida (al volver)**  
  1. Revisar `git status -sb` y agregar carpetas nuevas (`apps/kiosk-pwa/`, `android/kiosk-demo/`, `docs/plan/planos/`) junto a los documentos actualizados (`docs/handoff/SeatPilot_Master_v1.0.md`, `docs/chat/20251128.md`).  
  2. Validar si `.certs/` u otros directorios locales deben versionarse o quedarse fuera del repo.  
  3. Ejecutar `pnpm --filter @seatpilot/venue-structure build` y `pnpm --filter @seatpilot/kiosk-pwa build` antes de commitear.  
  4. Capturar evidencia (screenshots) del Guidance Panel y kiosko/Android para el PR `release/seatpilot-v1.0.1`.  
  5. Crear fichas KB-010…KB-017 con resumen + DoD y adjuntar enlaces en el PR.
- **Auditorías**: se mantiene recomendación → seguridad (mensual), performance (bimensual), UX/A11y (trimestral); registrar hallazgos futuros en `docs/governance/audits/`.

---

> Mantener este documento sincronizado con `docs/handoff/SeatPilot_Operativo_v1.1.md`, los entregables UX y la estrategia (`docs/strategy/SeatPilot_GTM_v1.0.md`) asegura continuidad sin pérdida de contexto. Actualiza métricas, responsables y enlaces a PRs al cierre de cada fase.

---

### 📝 Nota rápida (recordatorio personal)
- Ejecutar `./scripts/refresh-handbooks.sh` antes de pausar el proyecto o cerrar sesión.
- Subir set inicial de iconos 24×24 (`brand/icons/`) y poblar la knowledge base (`KB-001`, `KB-002`, ...).
- Documentar ADR adicional para gobernanza del Brand Center (`ADR-0003`) y actualizar tokens según evolucione identidad visual.
