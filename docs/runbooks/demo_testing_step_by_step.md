# SeatPilot Demo — Paso a Paso (Modo 17 años)

> 🎯 Objetivo: levantar el stack completo, generar datos sintéticos y ver dashboards/billing en vivo.

---

## 🧩 1. Prepara tu ambiente

1. **Abre VS Code** en la carpeta `SeatPilot`.
2. Lanza una **terminal nueva** dentro de VS Code.

### Instala dependencias (solo una vez)
```bash
pnpm install
pnpm -r build
```

---

## ⚙️ 2. Configura `.release.env`

1. Crea la copia del template:
   ```bash
   cp .release.env.example .release.env
   ```
2. Edita `.release.env` con tus datos reales:
   ```env
   PR_NUMBER=4
   RELEASE_TAG=v1.0.0-prod-r1
   COMPOSE=docker-compose.metrics.yml

   SUPABASE_DB_URL='postgresql://postgres:<PASS>@db.<ref>.supabase.co:5432/postgres?sslmode=require'
   METRICS_API_BASE_URL='http://localhost:9100'
   METRICS_API_KEY='dev-metrics-key'
   SEED_TENANT='demo'
   SEED_CHANNEL='kiosk'
   ```

> ❗️ No subas `.release.env` a Git. `git status` debe mostrarlo como *untracked*.

---

## 🧠 3. Valida tu host

```bash
source .release.env
make preflight
```

✔️ Busca: `✓ Pre-flight OK. Puedes ejecutar: make release`

Si aparece un warning de metrics-api, ignóralo: se corrige cuando levantes el stack.

---

## 🚀 4. Levanta el stack (Docker)

```bash
make deploy
```

- Usa `docker-compose.metrics.yml`, publica puertos:
  | Servicio          | Puerto |
  | ---------------- | ------ |
  | metrics-api      | 9100   |
  | telemetry-ingest | 8081   |
  | Prometheus       | 9090   |
  | Grafana          | 3300   |

Verifica:
```bash
docker compose -f docker-compose.metrics.yml ps
```
`STATUS` debe decir `Up` (healthy).

---

## 🔥 5. Calienta y genera datos

```bash
make cold-start
make seed-ops-live
make seed-db
```

- `cold-start` recarga Prometheus y hace llamadas demo.
- `seed-ops-live` pega a `/observe/*` con la clave `dev-metrics-key`.
- `seed-db` ejecuta `app.seed_metering_demo` en Supabase.

---

## 📈 6. Ver dashboards y métricas

### Prometheus
```
http://localhost:9090/targets
```
Debes ver `metrics-api:8080` y `telemetry-ingest:8081` en **UP**.

### Grafana
```
http://localhost:3300
```
> Usuario: `admin` · contraseña: `admin`

1. Abre **“SeatPilot Ops Live v1 (Zones)”**
2. Rango de tiempo: **Last 15 minutes**
3. Recarga si no ves datos; repite `make seed-ops-live` si hace falta.

### Opcional: Kiosk Demo (QR o manual)

1. Sirve el stub local:
   ```bash
   pnpm demo:kiosk
   ```
   Abre [http://localhost:3000/kiosk-demo.html](http://localhost:3000/kiosk-demo.html).
2. Usa cámara **Start** o escribe manualmente un ticket (`TICKET-001`).
3. Cada escaneo llama a `/checkin`, `/observe/door-to-seat`, `/observe/checkin-stage` y `/observe/assign`, moviendo p95/stages/zones al instante.
4. Si necesitas QR de ejemplo: `npx qrcode -o qr/TICKET-001.png 'TICKET-001'`.

---

## 💰 7. Confirma billing en Supabase

```bash
psql "$SUPABASE_DB_URL" -c "select id, display_name, price_cents from plans;"
psql "$SUPABASE_DB_URL" -c "
select * from v_tenant_billing_report
where period_key = to_char(date_trunc('month', now()), 'YYYY-MM')
order by tenant_id limit 10;"
```

✔️ verás planes (Starter/Pro/Enterprise) y consumo del mes actual.

---

## 🧹 8. Captura evidencia

Checklist sugerido (Issue #8):
- [ ] Captura Grafana (Ops Live v1 — Last 15 min)
- [ ] Resultado `v_tenant_billing_report`
- [ ] Cron jobs listados
- [ ] Comando `make release` con ✅ final

Guarda tus capturas en `docs/history/` o adjunta al Issue.

---

## 🧠 9. Mantén datos “vivos” varias horas

Opciones:
1. **Loop directo**: `./scripts/demo-loop.sh` (usa `DEMO_CYCLE_SECONDS`, default 300s).
2. `timeout 6h ./scripts/demo-loop.sh` (corta solo tras 6 horas).
3. `tmux`/`screen`: deja el loop corriendo y reconéctate luego.
4. `systemd --user`: ver snippet en handoff (`docs/handoff/SeatPilot_Master_v1.0.md`).
5. **CI/cron**: usa `.github/workflows/demo-seed.yml` o `infra/demo-seed.cron` como plantilla.

---

## 🧹 10. Apaga todo al cerrar

```bash
docker compose -f docker-compose.metrics.yml down
systemctl --user disable --now seatpilot-demo.timer 2>/dev/null || true
systemctl --user stop seatpilot-demo.service 2>/dev/null || true
```

El template (`.release.env.example`) queda listo para la próxima sesión.🏁

---

## ❓ FAQ Express

**Q:** Prometheus dice DOWN.
> Revisa que `prometheus.yml` apunte a `metrics-api:8080` y `telemetry-ingest:3001`, luego `curl -X POST http://localhost:9090/-/reload`.

**Q:** Grafana vacío.
> Corre `make seed-ops-live` de nuevo y refresca. Comprueba el rango de tiempo.

**Q:** ¿Dónde están los comandos completos?
> Revisa `docs/handoff/SeatPilot_Master_v1.0.md` (Operación, sección 5) y el `Makefile` (targets `release/deploy/seed/verify`).

---

## 🔁 11. Después de reiniciar la computadora

1. **Baja cualquier stack anterior** (por si la máquina se apagó con algo corriendo):
   ```bash
   docker compose -f docker-compose.metrics.yml down 2>/dev/null || true
   docker compose -f docker-compose.metrics.local.yml down 2>/dev/null || true
   ```
2. **Levanta el stack demo** (Grafana 3300 + metrics-api 8080):
   ```bash
   docker compose -f docker-compose.metrics.local.yml up -d
   ```
3. **Carga variables** y valida host:
   ```bash
   source .release.env
   make preflight
   ```
4. **Recalienta y siembra datos**:
   ```bash
   make cold-start
   make seed-ops-live
   make seed-db
   ```
5. **Abre dashboards**:
   - Prometheus: `http://localhost:9090/targets` (targets UP).
   - Grafana: `http://localhost:3300` (admin/admin, rango “Last 15 minutes”).
6. (Opcional) Lanza `./scripts/demo-loop.sh` o habilita el timer/cron si quieres dejar datos vivos durante horas.

> Si necesitas el stack con `checkin`/`wayfinding` (tiles por zona), usa `docker-compose.metrics.yml up -d` en lugar del local y repite los seeds.

---

## 🧾 12. Checklist antes de apagar

- [ ] `./scripts/demo-loop.sh` detenido (`Ctrl+C`) o `systemctl --user disable --now seatpilot-demo.timer`.
- [ ] `docker compose -f docker-compose.metrics.local.yml down` (y `docker-compose.metrics.yml down` si lo usaste).
- [ ] Secrets/API keys siguen en `.release.env` (no se versiona).
- [ ] Capturas / evidencias guardadas en `docs/history/` o issue correspondiente.

Con esto puedes apagar la máquina con tranquilidad y reanudar el demo siguiendo el punto 11.

Happy shipping 🚀
