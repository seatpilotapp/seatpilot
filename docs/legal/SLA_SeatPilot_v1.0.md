# Acuerdo de Nivel de Servicio — SeatPilot (v1.0)

> Ajusta métricas y definiciones con tu equipo de operaciones antes de publicar.

## 1. Alcance
Este SLA aplica a los clientes con planes que incluyen soporte gestionado (Pro, Enterprise). Define los objetivos de disponibilidad, tiempos de respuesta y créditos aplicables.

## 2. Disponibilidad del servicio
- **Objetivo mensual (Uptime):** 99.9 %.
- **Exclusiones:** mantenimiento planificado (con aviso ≥ 72 h), cortes de terceros (proveedores cloud, internet), acciones del Cliente, eventos de fuerza mayor.

El uptime se calcula sobre el acceso a los endpoints críticos (`/checkin`, `/assign`, `/healthz`, `/metrics`).

## 3. Soporte y tiempos de respuesta
| Severidad | Ejemplo | Tiempo de respuesta | Tiempo objetivo de mitigación |
| --- | --- | --- | --- |
| 1 – Crítico | Caída total de check-in | ≤ 1 h | ≤ 4 h |
| 2 – Alto | Degradación severa, >20 % rechazos | ≤ 4 h | ≤ 1 día hábil |
| 3 – Medio | Incidencias parciales, dashboards | ≤ 1 día hábil | Según backlog |
| 4 – Bajo | Solicitudes informativas | ≤ 2 días hábiles | Según SL |

Canales: correo soporte@seatpilot.com, Slack/Teams (Enterprise), teléfono de guardia (Enterprise).

## 4. Créditos de servicio
Si el uptime mensual cae por debajo de 99.9 %, el Cliente podrá solicitar un crédito equivalente al X % del pago mensual de la Suscripción afectada (define la escala exacta en producción). Los créditos se aplican al siguiente ciclo de facturación y constituyen el remedio exclusivo por incumplimientos del SLA.

## 5. Monitoreo y notificaciones
SeatPilot operará paneles Ops Live, alertas Prometheus/Alertmanager y canales de notificación (Slack/Email). El Cliente debe proporcionar contactos actualizados para recibir incidentes críticos.

## 6. Escalamiento
1. Soporte Nivel 1 (Frontline)
2. Ingeniería on-call
3. Dirección de Operaciones / CTO

## 7. Vigencia y cambios
Este SLA se mantiene mientras la Suscripción esté activa. SeatPilot puede actualizarlo con previo aviso (≥ 30 días). Las modificaciones se aplican en la renovación de la Suscripción.

---

*Versión 1.0 — valida parámetros de créditos, canales y contactos antes de ofrecer SLA a clientes.* 
