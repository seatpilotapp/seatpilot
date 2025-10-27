# Metrics Stack Local – docker-compose Walkthrough

Este stack (`docker-compose.metrics.local.yml`) levanta un entorno de observabilidad
cerrado con PostgreSQL + servicios de métricas + Prometheus + Grafana. Es útil
para validar dashboards sin tocar infraestructura compartida.

## Componentes

- `db` (Postgres 15) – aplica automáticamente `supabase/sql/001`–`003`.
- `metrics-api` – expone `/metrics` y endpoints `/observe/*` para generar eventos.
- `telemetry-ingest` – expone `/metrics` y `/v1/events` (HMAC deshabilitado con
  secreto de prueba `dev-metrics-secret`).
- `prometheus` – usa `prometheus.yml` + `seatpilot.rules.yml`.
- `grafana` – provisioning automático (`infra/local-metrics/grafana/provisioning`).
- `metrics-fixture` – job puntual que envía lecturas de ejemplo a `metrics-api`.

## Requisitos previos

- Docker ≥ 24.0
- `apps/metrics-api` y `services/telemetry-ingest` compilables (`pnpm -r build`).
- Archivos `prometheus.yml`, `seatpilot.rules.yml`, `alertmanager.yml` presentes en la raíz.

## Pasos

```bash
# 1. Construir imágenes locales
docker compose -f docker-compose.metrics.local.yml build

# 2. Levantar la pila
docker compose -f docker-compose.metrics.local.yml up -d

# 3. Verificar estado
docker compose -f docker-compose.metrics.local.yml ps
```

Grafana estará en <http://localhost:3000> (`admin` / `admin`). Prometheus expone
<http://localhost:9090>. El fixture deja métricas iniciales; revisa los logs:

```bash
docker compose -f docker-compose.metrics.local.yml logs metrics-fixture
```

Endpoints de salud:

```bash
curl http://localhost:8080/healthz       # metrics-api
curl http://localhost:3001/health        # telemetry-ingest
curl http://localhost:8080/metrics | head
```

## Detener y limpiar

```bash
docker compose -f docker-compose.metrics.local.yml down -v
```

Esto borra contenedores y volúmenes (`metrics-db`, `prometheus-data`, `grafana-data`).
