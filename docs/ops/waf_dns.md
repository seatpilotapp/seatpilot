# WAF y DNS — Publicación segura de `/observe/*`

## 1. DNS

- Registrar subdominio dedicado, p. ej. `metrics.seatpilot.test`.
- Apuntar a balanceador/Nginx con certificados TLS (Let's Encrypt o CA interna).
- TTL recomendado: 60 s (permite rotaciones rápidas).

## 2. WAF

1. **Reglas base**: bloquear métodos distintos de POST, limitar payload (`client_max_body_size 256k`).
2. **Rate limit**: 20 req/min por IP para `/observe/*`.
3. **Firewall L7**: rechazar User Agents desconocidos, forzar `Content-Type: application/json`.

Ejemplo Nginx:

```nginx
limit_req_zone $binary_remote_addr zone=observe:10m rate=20r/m;

server {
  listen 443 ssl;
  server_name metrics.seatpilot.test;

  location /observe/ {
    limit_req zone=observe burst=10 nodelay;
    if ($request_method != POST) { return 405; }
    if ($http_content_type != "application/json") { return 415; }
    proxy_pass http://metrics-api:8080;
  }
}
```

## 3. Logging y monitoreo

- Enviar logs a un SIEM (Elastic, Loki + Grafana, etc.).
- Alerts sobre 401 persistentes o spikes de rate-limit.
- Integrar con el smoke (CI/cron) para detectar cortes tempranos.

## 4. Checklist despliegue

- [ ] DNS actualizado y verificado (`dig metrics.seatpilot.test`).
- [ ] Certificado TLS activo.
- [ ] WAF/Rate limit habilitado.
- [ ] Smoke (`pnpm smoke:f1.1`) usando URL pública con mTLS si procede.
