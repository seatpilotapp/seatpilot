## Stage Alert Verification Pack

Uso estándar para demostrar que la alerta `SeatPilotCheckinStageP95High` funciona end-to-end.

### 1. Script de disparo

```bash
./scripts/trigger-stage-latency.sh 250
```

El script:

1. Actualiza `CHECKIN_SLOW_LOOKUP_MS` en `.env` (valor por defecto 250 ms).
2. Reinicia `docker compose up -d checkin`.
3. Espera 5 s y ejecuta `pnpm smoke:f1.2.sh`.
4. Restaura el valor original y reinicia de nuevo el servicio.

### 2. Evidencias esperadas

Guarda las capturas en este directorio:

| Archivo | Descripción |
| ------- | ----------- |
| `lookup-red.png` | Panel *Time Breakdown UI* con el stage `lookup` en rojo. |
| `alerts-firing.png` | `http://localhost:9090/alerts` mostrando `SeatPilotCheckinStageP95High` en estado FIRING. |
| `slack-stage.png` | Mensaje recibido en Slack con `stage`, `tenant`, `channel`. |
| `alerts-resolved.png` | La misma alerta en estado RESOLVED después de devolver a 0 ms. |

> Nota: Si prefieres texto plano, añade comentarios en `docs/ops/stage-alerts/evidence.md` describiendo cada evento con timestamp y enlace al panel.

### 3. Handoff on-call

- Asegura que el equipo de guardia conozca este script y la ubicación de las capturas.
- Registra la última fecha de prueba en `docs/ops/stage-alerts/evidence.md` (crea el archivo si no existe, formato libre).
- Durante auditorías, incluye las imágenes y el comando ejecutado (salida de consola) como evidencia.

