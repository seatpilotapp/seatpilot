# 2025-10-26 · Observability Hardening (TLS + Slack + SLO)

## Evidencia requerida
- [ ] Slack — alerta **FIRING** (`#seatpilot-alerts`)
- [ ] Slack — alerta **RESOLVED**
- [ ] Prometheus — pestaña *Rules* mostrando `DoorToSeatP95High`
- [ ] Cabeceras TLS/seguridad (`curl -Ik https://ops.localhost/healthz`)

## Capturas
1. **Slack FIRING**  
   _Pega aquí la imagen o el enlace._

2. **Slack RESOLVED**  
   _Pega aquí la imagen o el enlace._

3. **Prometheus — Rules (`DoorToSeatP95High`)**  
   _Pega aquí la captura._

4. **Headers TLS/Seguridad**  
   ```text
   (Pega aquí la salida del curl)
   ```

## Notas
- Ajusta `connect-src` / `style-src` en `ops/nginx/seatpilot.conf` si el dominio final requiere orígenes adicionales.
- Si la alerta no llega a Slack, revisa `docker logs seatpilot-alertmanager-1` y valida el webhook.
