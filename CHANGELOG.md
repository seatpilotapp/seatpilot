## 1.1.0 – Prod R1 · Licenciamiento & Metering
### Added
- Esquema Supabase `100`–`105` (planes, entitlements, metering events/counters, vistas, RLS, cron y seeds Starter/Pro/Enterprise).
- UI `/admin/billing` (HTML + CSV) usando `v_tenant_billing_report`.
- Plantillas legales `docs/legal/ToS_SeatPilot_v1.0.md`, `SLA_SeatPilot_v1.0.md`, `Order_Plan_SeatPilot_v1.0.md`.
- Tiles de Assign en `dashboards/ops-live-v1.json` y documentación Operativo/Maestro actualizada.
- `.github/` con workflows (Brand lint, FE A11y/PWA, Backend build/tests, Supabase SQL CI, Release, Ops seed), CODEOWNERS, templates de PR/issue y Dependabot para Actions.

### Changed
- `.env.prod` externaliza secretos; nuevo `.env.prod.template`.
- `docker-compose.prod.yml` endurecido (restart policy, límites CPU/Mem, rotación de logs).
- `scripts/cold-start.sh` calienta check-in antes de recargar Prometheus.
- `ops/alertmanager/alertmanager.yml` usa `${ALERTMANAGER_SLACK_*}`.

### Ops / Runbooks
- `docs/runbooks/licensing_metering_release.md` (paso a paso para futuras iteraciones).
- Cron `billing_close_month` idempotente (`pg_cron`).

## 1.0.1 – Housekeeping Baseline
### Added
- Dashboard `seatpilot-trends-f2.0.json` (p95 check-in/door→seat 7d, rechazados %, MV lag, etapas).
- ADR-0004 Brand Center Governance (tokens + iconos + gates AA + proceso PR).
- Runbooks de piloto (`piloto_day_of.md`, `doorlist_1click.md`, `piloto_postmortem.md`).
- Spec `seat-designer-rules.md` y esqueleto de seating-engine (contrato Assign v1).
- `docker-compose.prod.yml` + `.env.prod` plantilla; workflow FE A11y & Offline.

### Changed
- Handoff maestro referencia manifest v0.3.0 y flujo de validación `brand:icons:lint`.

### Pending
- Íconos Lote B (lencería) y dashboard Ops Live v1 por zona.
