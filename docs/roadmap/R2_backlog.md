# SeatPilot · Backlog operativo R2 (Pilotos Pagados)

> **Sprint R2 (4 semanas)** – objetivo: 3 clientes activos, NPS ≥ 60, MRR ≥ USD 500, SLOs en verde 7 d.

## 1. Comercial / Clientes
- [ ] C1.1 Crear tenants reales en Supabase  
  - SQL referencia: ver `docs/runbooks/licensing_metering_release.md` (seed tenants).  
  - Owners: BizDev / Ops.
- [ ] C1.2 Preparar paquete comercial (ToS, SLA, Orden, pricing tiers).  
  - Owners: BizDev / Legal.
- [ ] C1.3 Ejecutar demos “Boda Express” y “Turno Fin de Semana”.  
  - Incluir `/admin/billing` + Ops Live.  
- [ ] C1.4 Recoger NPS y feedback post evento piloto.

## 2. Operaciones / Go-if
- [ ] O2.1 Monitor SLO check-in p95 ≤ 300 ms (7 d) + alerta Slack verificada.  
  - Scripts: `scripts/overview-check.sh`, `CHECKIN_SLOW_LOOKUP_MS=250`.
- [ ] O2.2 Seating auto-assign ≥ 95 % (fixtures + métricas) — revisar Prometheus rule `seatpilot_assign_feasible_ratio`.  
- [ ] O2.3 Table-top exercise con `piloto_day_of.md` y `doorlist_1click.md`.  
- [ ] O2.4 Postmortem piloto documentado (`piloto_postmortem.md`).

## 3. Producto / UX
- [ ] P3.1 Skeleton PWA Check-in (AA/AAA, offline-first, CI Pa11y/Lighthouse).  
  - Repo target: `apps/checkin` (crear si no existe).  
- [ ] P3.2 TV/Signage conectado a Ops Live (zones + trends).  
- [x] P3.3 Validadores Seat Designer v1 (mínimo ring clearance + ADA) – motor `@seatpilot/seatdesigner-engine` con gate opcional documentado en `docs/history/2025-10-28_seat_designer_validators.md`.  
- [ ] P3.4 Lote B iconografía lencería + wizard `Linen Pro`.

## 4. Licenciamiento / Billing
- [ ] B4.1 Seeds de consumo recurrentes (`app.seed_metering_demo`).  
  - Programar cron/GA si se requiere vitrina constante.  
- [ ] B4.2 Integración Stripe/Chargebee (sandbox) → mapping `plans.id`.  
- [ ] B4.3 Evidencias `/admin/billing` y cron `billing_snapshots` en KB.

## 5. Observabilidad / Infra
- [ ] Ops Live v2 (tiles por zona, outliers door→seat).  
- [ ] GHCR pipeline (imágenes con digest).  
- [ ] Policies de backup/retention (billing_snapshots + Prometheus).

## 6. Estados & KPIs
| KPI | Meta R2 | Estado |
| --- | --- | --- |
| Clientes activos | 3 | ☐ |
| Facturación mensual | ≥ USD 500 | ☐ |
| NPS | ≥ 60 | ☐ |
| SLO check-in p95 | ≤ 300 ms (7 d) | ☐ |
| Door→Seat p95 | ≤ 60 s (7 d) | ☐ |
| Assign feasible | ≥ 95 % | ☐ |

## Notas
- Para tareas SQL/seed consulta `docs/runbooks/licensing_metering_release.md`.
- Para pricing/offers usar `docs/legal/*.md` y el micrositio en preparación.
- Actualiza este backlog al cierre de cada semana (lunes stand-up).
