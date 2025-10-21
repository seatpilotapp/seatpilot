# Transporte Seguro — mTLS para `/observe/*`

## 1. Objetivo

Proteger la ingesta de métricas cuando los servicios productores estén fuera de la red interna (alineado con la guía de seguridad de `proyect.md`).

## 2. Arquitectura recomendada

```
servicio productor ── mTLS ──► Nginx/Envoy ──► metrics-api (/observe/*)
                                          └──► (opcional) otros backends
```

1. **Reverse proxy** (Nginx o Envoy) expuesto en 443.
2. **mTLS obligatorio** (`ssl_verify_client on;`).
3. `metrics-api` sigue escuchando en HTTP interno (8080) y mantiene `x-metrics-key` como defensa adicional.

## 3. Pasos

1. **Generar CA** interna + certificados cliente:
   ```bash
   openssl genrsa -out ca.key 4096
   openssl req -x509 -new -nodes -key ca.key -sha256 -days 3650 -out ca.crt -subj "/CN=seatpilot-metrics-ca"

   # por servicio (ejemplo telemetry-ingest)
   openssl genrsa -out telemetry.key 2048
   openssl req -new -key telemetry.key -out telemetry.csr -subj "/CN=telemetry-ingest"
   openssl x509 -req -in telemetry.csr -CA ca.crt -CAkey ca.key -CAcreateserial -out telemetry.crt -days 825 -sha256
   ```
2. **Configurar proxy (Nginx)**:
   ```nginx
   server {
     listen 443 ssl;
     ssl_certificate     /etc/nginx/ssl/server.crt;
     ssl_certificate_key /etc/nginx/ssl/server.key;
     ssl_client_certificate /etc/nginx/ssl/ca.crt;
     ssl_verify_client on;

     location /observe/ {
       proxy_set_header X-Metrics-Key $http_x_metrics_key;
       proxy_pass http://metrics-api:8080;
     }
   }
   ```
3. (Opcional) mutuo TLS directo en metrics-api:
   * Define variables de entorno:
     ```env
     METRICS_TLS_CERT_FILE=/etc/seatpilot/tls/server.crt
     METRICS_TLS_KEY_FILE=/etc/seatpilot/tls/server.key
     METRICS_TLS_CA_FILE=/etc/seatpilot/tls/clients-ca.crt
     METRICS_TLS_CLIENT_AUTH=require  # o optional
     ```
   * Monta los ficheros en el contenedor (Docker/compose/k8s) y el servicio se expondrá vía HTTPS con `requestCert` habilitado.
4. Distribuir `telemetry.crt` + `telemetry.key` en el servicio emisor (montar como secret).
5. Verificar:
   ```bash
   curl --cert telemetry.crt --key telemetry.key \
     -H "x-metrics-key: $METRICS_INGEST_KEY" \
     -d '{"view":"mv_kpi_checkin","lagSeconds":5}' \
     https://metrics.example.com/observe/mv-lag
   ```
6. Actualizar runbook (`docs/runbooks/README.md`) y pipeline de despliegue con renovación automática (ej. cada 12 meses).

## 4. Checklist operación

- [ ] Certificados generados y almacenados en Secret Manager/HashiCorp Vault.  
- [ ] Renovación automática (cron o ACME privado).  
- [ ] Tests automatizados (smoke) usan `curl --cert ...` para validar conexión.  
- [ ] Documentación en `/docs/security/headers.md` + rotación de API key.
