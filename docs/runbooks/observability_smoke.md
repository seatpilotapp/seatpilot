# Runbook — Observabilidad Hardening (TLS, Slack, SLO)

## Propósito
Validar que el reverse proxy sirva cabeceras de seguridad, que Alertmanager entregue notificaciones a Slack y que la regla SLO Door→Seat p95 esté activa en Prometheus.

## Prerrequisitos
- `docker compose` disponible y sin servicios previos en `9090/9093`.
- Variables exportadas en shell (no se versionan):
  ```bash
  export ALERTMANAGER_SLACK_WEBHOOK_URL='https://hooks.slack.com/services/XXX/YYY/ZZZ'
  export ALERTMANAGER_SLACK_CHANNEL='#seatpilot-alerts'
  ```
- Certificados TLS cargados en `/etc/ssl/certs/seatpilot.crt` y `/etc/ssl/private/seatpilot.key` para el proxy (`ops/nginx/seatpilot.conf`).

## Pasos
1. **Arrancar stack observabilidad**
   ```bash
   docker compose -f docker-compose.metrics.yml up -d alertmanager prometheus
   docker compose -f docker-compose.metrics.yml ps
   ```
   > Espera a ver `seatpilot-alertmanager-1` y `seatpilot-prometheus-1` como `Up`.

2. **Recargar Prometheus (si cambiaste reglas/targets)**
   ```bash
   curl -s -X POST http://localhost:9090/-/reload
   ```

3. **Disparar alerta FIRING**
   ```bash
   python3 - <<'PY' > /tmp/seatpilot-alert-firing.json
   import datetime, json
   payload = [{
       "labels": {"alertname": "SeatPilotTest", "severity": "warning"},
       "annotations": {"summary": "Test alert (localhost)"},
       "startsAt": datetime.datetime.utcnow().replace(microsecond=0).isoformat()+"Z"
   }]
   json.dump(payload, open('/tmp/seatpilot-alert-firing.json', 'w'))
   PY
   curl -s -XPOST -H 'Content-Type: application/json' \
     http://localhost:9093/api/v2/alerts -d @/tmp/seatpilot-alert-firing.json
   ```

4. **Cerrar alerta (RESOLVED, opcional pero recomendado)**
   ```bash
   python3 - <<'PY' > /tmp/seatpilot-alert-resolved.json
   import datetime, json
   now = datetime.datetime.utcnow().replace(microsecond=0)
   payload = [{
       "labels": {"alertname": "SeatPilotTest", "severity": "warning"},
       "annotations": {"summary": "Test alert (localhost)"},
       "startsAt": now.isoformat()+"Z",
       "endsAt": (now + datetime.timedelta(minutes=2)).isoformat()+"Z"
   }]
   json.dump(payload, open('/tmp/seatpilot-alert-resolved.json', 'w'))
   PY
   curl -s -XPOST -H 'Content-Type: application/json' \
     http://localhost:9093/api/v2/alerts -d @/tmp/seatpilot-alert-resolved.json
   ```

5. **Capturar evidencia**
   - Slack: mensajes FIRING y RESOLVED en `#seatpilot-alerts`.
   - Prometheus → pestaña *Rules*: regla `DoorToSeatP95High` en estado `Inactive` o `Pending`.
   - Cabeceras TLS/seguridad:
     ```bash
     curl -Ik https://ops.localhost/healthz | egrep -i \
       'strict-transport-security|content-security-policy|x-frame-options|x-content-type-options|referrer-policy'
     ```

6. **Detener servicios (opcional)**
   ```bash
   docker compose -f docker-compose.metrics.yml stop alertmanager prometheus
   ```

## Resultados esperados
- Slack recibe el mensaje con título `[FIRING] Test alert (localhost)` y posteriormente `[RESOLVED]`.
- Prometheus carga `ops/prometheus/rules/seatpilot_slo.rules.yml` y expone la alerta `DoorToSeatP95High`.
- `ops/nginx/seatpilot.conf` devuelve HSTS, CSP, XFO, XCTO y Referrer-Policy en `https://ops.localhost/healthz`.

## Troubleshooting rápido
- **Slack no recibe mensajes** → validar `ALERTMANAGER_SLACK_WEBHOOK_URL` y revisar logs: `docker logs seatpilot-alertmanager-1`.
- **Cabeceras faltantes** → recargar Nginx o revisar template TLS. Si usas otro dominio, actualiza `connect-src` en CSP.
- **Regla no aparece** → confirma que el volumen `ops/prometheus/rules/seatpilot_slo.rules.yml` esté montado y que `prometheus.yml` incluya el archivo en `rule_files`.
