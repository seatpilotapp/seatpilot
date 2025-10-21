# Criptografía y secretos — SeatPilot

## 1. Principios

- Minimizar exposición de claves (usar Secret Manager / GitHub Secrets / Docker Secrets).
- Rotar claves sensibles (HMAC, métricas) trimestralmente o en incidentes.
- Auditar accesos y mantener registros (WAF/ingress + logs de servicios).

## 2. Inventario de secretos clave

| Clave                      | Uso                                  | Rotación | Ubicación recomendada              |
| -------------------------- | ------------------------------------ | -------- | ---------------------------------- |
| `SUPABASE_SERVICE_ROLE`    | backend Supabase                      | 90 días  | Secret Manager / Docker secret     |
| `DATABASE_URL`             | conexión Postgres                     | 90 días  | Secret Manager / Docker secret     |
| `HMAC_TENANT_SECRET`       | firma eventos ingest                  | 90 días  | Secret Manager                     |
| `METRICS_INGEST_KEY`       | `/observe/*`                          | 30 días  | Secret Manager / env deployment    |
| `NEXT_METRICS_INGEST_KEY`  | rotación en curso                     | 30 días  | Secret Manager                     |
| Certificados mTLS          | transporte métricas                   | 12 meses | Vault / Secret Manager             |

## 3. Rotaciones automatizadas

1. Generar nueva clave/secret (`openssl rand -base64 32`).
2. Actualizar secrets en provider (AWS/GCP/Azure/GitHub).
3. Desplegar servicios con variable `NEXT_*` activa.
4. Ejecutar smoke para confirmar 202/401.
5. Retirar secret anterior y redeploy.

## 4. Auditoría

- Guardar evidencia de rotaciones en Git (`docs/security/CHANGELOG.md` o issues).
- Monitorear logs de acceso y alertar por intentos 401 repetidos (WAF).

## 5. Herramientas recomendadas

- HashiCorp Vault o AWS Secrets Manager para producción.
- SOPs para manual/urgente (almacenados en repos privado).
- Plugins pnpm/tsc para detectar uso directo de secrets en código (linting).
