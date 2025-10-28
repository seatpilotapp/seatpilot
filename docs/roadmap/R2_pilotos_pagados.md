# SeatPilot · Roadmap R2 (Pilotos Pagados)

> Horizonte: 4 semanas – Objetivo: 3 clientes activos (bodas/salones), NPS ≥ 60, facturación recurrente ≥ USD 500/mes.

---

## 1. Comercial & Clientes

| Tarea | Descripción | Owner | ETA |
| --- | --- | --- | --- |
| C1.1 | Crear tenants reales (Boda A, Salón B) en Supabase (`tenants`, `tenant_subscriptions`). | Ops | Semana 1 |
| C1.2 | Preparar orden comercial + ToS/SLA + pricing (Starter/Pro). | Legal / BizDev | Semana 1 |
| C1.3 | Ejecutar demo “Boda Express” (48 h) y “Turno Fin de Semana”. | BizDev | Semana 2 |
| C1.4 | Recoger feedback + NPS post evento piloto. | BizDev | Semana 4 |

## 2. Operaciones / Go-if

| Tarea | Descripción | Owner | ETA |
| --- | --- | --- | --- |
| O2.1 | Verificar SLO check-in p95 ≤ 300 ms (7 días) + alerta Slack. | SRE | Semana 1 |
| O2.2 | Validar seating auto-assign ≥ 95 % (fixtures + métricas). | Backend | Semana 1 |
| O2.3 | Table-top exercise con runbooks (`piloto_day_of`, `doorlist_1click`). | Ops | Semana 2 |
| O2.4 | Documentar postmortem piloto (plantilla existente). | Ops | Semana 4 |

## 3. Producto / Frontend (door→seat)

| Tarea | Descripción | Owner | ETA |
| --- | --- | --- | --- |
| P3.1 | Skeleton PWA check-in (Pa11y/Lighthouse en CI). | Frontend | Semana 2 |
| P3.2 | TV/kiosk signage conectado a Ops Live v1. | Frontend | Semana 3 |
| P3.3 | ✅ Validadores Seat Designer v1 (ring clearance + ADA + fix 0.8 m) en `@seatpilot/seatdesigner-engine`; gate con override opcional documentado. | Backend/UX | Semana 3 |
| P3.4 | Lote B iconografía lencería + wizard “Linen Pro”. | Brand / UX | Semana 4 |

## 4. Billing & Reportes

| Tarea | Descripción | Owner | ETA |
| --- | --- | --- | --- |
| B4.1 | Automatizar seed de consumo (cron) para mantener dashboards vivos. | Backend | Semana 1 |
| B4.2 | Integrar billing con Stripe/Chargebee en sandbox. | Backend / BizOps | Semana 3 |
| B4.3 | Añadir panel de consumo al handoff + KB (capturas reales). | Ops | Semana 4 |

## 5. Evidencias / KPIs

- Facturación mensual base: ≥ USD 500.
- Tiempo de despliegue DFY (demostración → Go-live): ≤ 48 h.
- SLOs piloto: check-in p95 ≤ 300 ms, door→seat p95 ≤ 60 s, assign feasible ≥ 95 %.
- Alertas Slack (checkin stage) y `/admin/billing` operativas.
- Runbooks ejecutados y documentados (día D + postmortem).

---

**Extras (opcional)**  
- Preparar pipeline GHCR para imágenes con digest.  
- Ops Live v2 (tiles por zona, outliers).  
- Caso de éxito (PDF / landing) tras primer piloto pagado.
