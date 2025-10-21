# HTTP Security Headers — SeatPilot Metrics

Este documento resume los encabezados HTTP mínimos que deben exponerse en los servicios públicos/privados descritos en `proyect.md`.

## 1. Servicios internos (metrics-api, checkin, wayfinding)

Aplicar a nivel de reverse proxy o directamente en Express:

| Cabecera             | Valor recomendado                       | Motivo                                        |
| -------------------- | ---------------------------------------- | --------------------------------------------- |
| `Strict-Transport-Security` | `max-age=63072000; includeSubDomains` | Obliga HTTPS a lo largo de 2 años             |
| `X-Content-Type-Options`   | `nosniff`                            | Previene interpretación errónea de MIME       |
| `X-Frame-Options`          | `DENY`                               | Protege contra clickjacking                   |
| `Referrer-Policy`          | `same-origin`                        | Evita fugas de referrer                       |
| `Content-Security-Policy`  | `default-src 'self'`                 | Base sólida para recursos estáticos internos  |
| `Permissions-Policy`       | `geolocation=()`                     | Bloquea APIs no utilizadas                    |

## 2. Nginx/Envoy para `/observe/*`

Ejemplo Nginx (añadir a `server`/`location`):

```nginx
add_header Strict-Transport-Security "max-age=63072000; includeSubDomains" always;
add_header X-Content-Type-Options "nosniff" always;
add_header X-Frame-Options "DENY" always;
add_header Referrer-Policy "same-origin" always;
add_header Permissions-Policy "geolocation=()" always;
add_header Content-Security-Policy "default-src 'none'; connect-src 'self';" always;
```

## 3. APIs públicas (futuro)

Cuando expongas rutas públicas (RSVP, mapa, etc.), ajusta CSP/Permissions al caso de uso y combina con mecanismos descritos en `/docs/security/transport_mtls.md`.

## 4. Lista de verificación

- [ ] Revisado en cada despliegue (CI/CD).  
- [ ] Cobertura en tests automatizados (linters o zap baseline).  
- [ ] Documentado en runbook de seguridad.
