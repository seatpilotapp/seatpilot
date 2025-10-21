# SeatPilot — Plan Go-To-Market v1.0 (Draft)

> Estado: borrador a refinar. Consolidé el plan estratégico que discutimos para que podamos iterarlo cuando entremos a la fase comercial.

---

## 1. Contexto y Visión
- **North Star**: “Guide every guest, fast” — `door→seat p95 ≤ 60 s`, `check-in p95 ≤ 300 ms`, rechazos `<1 %`.
- **Ecosistema**: Seat Designer · Assign · RSVP · Check-in · Maps/Screens · Ops Live.
- **Arquitectura**: multi-tenant (Supabase/Postgres RLS), servicios Node, telemetría operacional, dashboards (Grafana).

---

## 2. Propuesta de Valor
1. **Velocidad y calma**: SLO visibles (Ops Live).
2. **Designer con validadores**: bloquea layouts peligrosos.
3. **Auto-assign explicable**: reglas duras/blandas, locks, reporte de decisiones.
4. **Telemetría en vivo**: tiles percentiles, alias normalizados, diccionario de eventos.

---

## 3. Público Objetivo (Hipótesis 90 días)
| Segmento | Cuenta inicial | Características | Motivo de encaje |
| --- | --- | --- | --- |
| Venues medianos | 10 | 4–8 eventos/mes, 150–250 pax | KPIs sala + plantillas |
| Wedding planners | 6 | Operan bodas múltiples | Control de seating + doorlist |
| Rental houses | 4 | Inventario propio, coordinación montaje | Reglas de layout + telemetría |

**Volumen meta 90 días**: 120–180 eventos (60/mes a partir del mes 2).

---

## 4. Diferenciación Medible
| KPI | Objetivo | Comentario |
| --- | --- | --- |
| Door→Seat | p50 ≤ 30 s · p95 ≤ 60 s | Por zona/acceso |
| Check-in p95 | ≤ 300 ms | UI y backend |
| Auto-assign sin corrección | ≥ 95 % | Transparencia de reglas |
| Compliance espacial | 0 violaciones críticas | Pasillos/ancho mínimo |
| A11y/Seguridad | AA/AAA, headers de seguridad | Rate-limit, Sentry, no-PII |

---

## 5. Go-To-Market (Canales + Budget + KPIs)
**Canales**
- Directo a venues (demo + primer evento gratis).
- Planners/Rentals (plantillas y calculadoras como lead magnet).
- PLG: micrositio interactivo (layout wizard + Ops Live demo).

**Budget mensual (90 días)**
- Outbound/Inside sales + demos: **USD 1.200**
- Contenido/CRM (plantillas, newsletters): **USD 600**
- Eventos locales/alianzas: **USD 1.200**
  - **Total CAC objetivo**: USD 250–400 por venue activo (~8–10 venues/mes).

**KPIs GTM**
- `MQL → SQL ≥ 30 %`, `SQL → cliente ≥ 25 %`.
- Tiempo a valor (primera asignación + check-in) ≤ 48 h.
- Eventos activos por venue/mes ≥ 4.

---

## 6. Modelo Económico (Hipótesis)
| Plan | Precio | Cobertura |
| --- | --- | --- |
| Starter | USD 149/evento (≤ 200 pax) | RSVP básico + 1 pantalla |
| Pro | USD 299/evento (≤ 400 pax) **o** USD 249/mes/venue | 2 pantallas + Ops Live básico |
| Enterprise | USD 799/mes/venue | SSO/SLAs + dashboards avanzados |

**COGS evento (150 pax)**: infra/logs (7.5), mensajería (6), soporte (10) → **USD ~24** → **margen 84–92 %**.

**Fijos**: USD 12.000/mes (equipo base + infra/herramientas).  
**Break-even central**: ~69 eventos/mes (margen medio USD 175/evento).  
**Escenarios**:
- Prudente: 40 eventos → -40 % BE.
- Central: 70 eventos **o** 30 venues Pro + 30 eventos → BE.
- Alto: 100 eventos + 40 venues Pro → margen positivo.

---

## 7. Plan Operativo (Primeros 30 días)
1. **Seed Library** (10 plantillas, iconografía) + validadores (pasillos/egress).  
2. **Assign v1** (auto-assign, locks, “solo confirmados”).  
3. **Ops Live F1** (tiles check-in/door→seat/auto-assign).  
4. **Check-in seguro** (HMAC/nonce, rate-limit, Sentry).  
5. **Metrics stack** (Prometheus/Grafana + metrics proxy).  
6. **Piloto 3 venues** (≥ 12 eventos/mes, SLA soporte día D).  
7. **Escalar** precio mixto (evento + mensual) después de validar KPIs.

---

## 8. Hitos & KPIs
| Horizonte | Meta | KPI |
| --- | --- | --- |
| D+7 | Seed Library + validadores + 2 demos agendadas | Build CI, fichas UX |
| D+30 | 3 venues piloto, ≥ 20 eventos | `door→seat p95 ≤ 60 s`, `check-in p95 ≤ 300 ms` reales |
| D+90 | 10 venues activos, ≥ 60 eventos/mes | NPS ≥ 60, churn < 5 % |

---

## 9. Riesgos & Mitigaciones
| Riesgo | Señal | Mitigación |
| --- | --- | --- |
| Experiencia “en papel” vs sala | Reclamos en validadores | Bloqueo layouts + pilotos supervisados |
| Telemetría inconsistente | Eventos duplicados/alias mal | Registry, HMAC y validaciones strict |
| Seguridad/carga pico | Spike de errors o 5xx | Headers, rate-limit, observabilidad activa |
| Concentración pocos venues | Ingresos volátiles | Mix pricing (evento + mensual), canal planners |

---

## 10. Mini Pitch (30s)
> **SeatPilot** guía a cada invitado del QR a su asiento en segundos. Editor con reglas de seguridad, auto-asignación explicable y Ops Live reducen colas y errores día D. Métricas claras (`door→seat ≤60 s`, `check-in ≤300 ms`) y plantillas listas aceleran operaciones desde la primera semana. Paga por evento o venue y gana una experiencia impecable.

---

## 11. Pendientes para formalizar
- Validar hipótesis de pricing/CAC con datos reales (Ops Live, ingest).
- Definir métricas PLG y seguimiento CRM.
- Preparar material comercial (deck, caso piloto, one-pager).  
- Alinear este plan con `SeatPilot_Master_v1.0.md` y runbooks antes de lanzamiento.
