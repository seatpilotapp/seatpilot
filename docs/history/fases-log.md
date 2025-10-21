# SeatPilot — Auditoría de Fases

Bitácora ligera para registrar cada verificación de avance sobre el plan maestro (Fases 0–6 + F2.1). Usa esta tabla para anotar hallazgos puntuales y enlaza la evidencia correspondiente.

| Fecha | Fases revisadas | Responsable | Hallazgos clave | Acciones / Evidencia |
| --- | --- | --- | --- | --- |
| 2025-10-20 | F0–F6, F2.1 | Ops/PM | Check-in p95 aún >300 ms en picos; falta dashboard trends 7 d y prototipos FE | Regenerar `dashboards/seatpilot-trends-f2.0.json`, documentar p95 ≤300 ms, avanzar prototipos kiosco/TV/PWA |
| 2025-10-21 | F0–F2, Gobernanza | Ops/Platform | CI/CD estabilizada (`.github` workflows Brand/FE/Backend/SQL/Release), secrets + environment `production` configurados; PR smoke en curso | Workflows verdes antes de proteger `main`; preparar PR `release/prod-r1` y tag `v1.0.0-prod-r1` |

> Nota: Mantén esta tabla sincronizada con la sección “4.1 Auditoría de fases” del handoff maestro.
- **2025-10-20 · Release R1 “Licenciamiento & Metering”**  
  - Supabase SQL 100→107 aplicados (`plans`, `plan_entitlements`, `tenant_subscriptions`, metering idempotente, RLS, cron `billing_close_month`, seeds Starter/Pro/Enterprise, `app.seed_metering_demo`, cron diario `ops_metering_seed_daily`).  
  - `.env.prod` externaliza secretos con `.env.prod.template`.  
  - `docker-compose.prod.yml` endurecido (restart policy, límites CPU/mem, logrotate).  
  - `scripts/cold-start.sh` ahora calienta check-in + reload Prometheus.  
  - `alertmanager.yml` usa env vars (`ALERT_SLACK_*`).  
  - UI `/admin/billing` (HTML/CSV) + panel Ops Live v1 con tiles Assign.  
  - Plantillas legales: `ToS_SeatPilot_v1.0.md`, `SLA_SeatPilot_v1.0.md`, `Order_Plan_SeatPilot_v1.0.md`.  
  - Runbook `docs/runbooks/licensing_metering_release.md` actualizado (seed manual `metering_seed.sql`, función `app.seed_metering_demo`, cron diario `107_cron_metering_seed.sql`, `scripts/seed-ops-live.sh`, `pnpm release:notes`).  
  - CHANGELOG v1.1.0 documentado y tag `v1.0.0-prod-r1` preparado.  
