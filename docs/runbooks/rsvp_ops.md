# Runbook · RSVP & Messaging (PR-04)

**Objetivo:** operar campañas de invitaciones SeatPilot (email/SMS), monitorear la cola de envío, revisar métricas básicas y atender opt-out / reenvíos antes del evento.

## 1. Pre-flight checklist
- Credenciales `.env` para `@seatpilot/rsvp-service` (`DATABASE_URL`, `RSVP_TOKEN_SECRET`, `RSVP_PORTAL_BASE_URL`, `RSVP_EMAIL_FROM` / `RSVP_PROVIDER`).
- Verificar DNS de correo (SPF/DKIM/DMARC) y remitente en proveedor externo.
- Confirmar que el evento existe (`select id,name,event_date from events where tenant_id = :tenant`).
- Revisar lista de invitados importada (segmentos, emails y teléfonos completos).

## 2. Enviar campaña inicial
1. Consumir `POST /api/rsvp/send` con encabezado `x-seatpilot-tenant` y cuerpo mínimo:
   ```jsonc
   {
     "eventId": "<uuid>",
     "channel": "email",
     "templateId": "invite_v1",
     "subject": "Confirmación RSVP · {{ event }}",
     "batchKey": "send:invite_v1"
   }
   ```
2. El servicio crea/actualiza filas en `invitations` y encola (`messages_outbox`) con token portal firmado (HMAC) y `portal_url`.
3. Confirmar resumen (`queued`, `skipped`) en respuesta.

### Filtros útiles
- `guestIds`: restringe a lista puntual.
- `segment`: envía solo a (VIP, FAMILY, etc.).
- `scheduledAt`: programa envío futuro (UTC). Mantiene `status = scheduled`.

## 3. Reenviar o recordar
- `POST /api/rsvp/remind` (mismo encabezado). Por defecto `excludeResponded=true` (omite `rsvps.status = 'yes'`).
- Cambiar `batchKey` por corrida (`remind:20250115T1400Z`) para permitir múltiples recordatorios.
- Revisar respuesta para validar `queued` esperado.

## 4. Monitoreo y métricas
- Cola: `messages_outbox` (`status` = pending/sending/failed).
- Invitaciones/RRPP:
  ```sql
  select * from invitations_stats where event_id = :event;
  select * from rsvps_stats where event_id = :event;
  ```
- Dashboard rápido: `https://ops.localhost/rsvp?eventId=<uuid>` (render estático dentro del servicio).
- Ver portal invitado: `https://portal.localhost/g/<event>/<token>` (token se entrega en payload del outbox).

## 5. Opt-out y cumplimiento
**Checklist legal (`CAN-SPAM` / TCPA):**
- Link o instrucción “STOP”/“BAJA” en email/SMS (plantilla).
- Registrar fecha canal en tabla `guests` (`opt_out_at`, `opt_out_channels`).
- `app.guest_allows_channel(guest_id, 'email'|'sms')` bloquea re-envíos.

### Registrar opt-out manual
```sql
update guests
   set opt_out_at = timezone('utc', now()),
       opt_out_channels = array_append(opt_out_channels, 'email')
 where id = :guest_id;
```

### Rehabilitar canal (con prueba de consentimiento)
```sql
update guests
   set opt_out_channels = array_remove(opt_out_channels, 'sms')
 where id = :guest_id;
```

Documentar cada caso en `docs/history/<fecha>_rsvp-optout.md` (fecha, canal, motivo, evidencia de solicitud).

## 6. Portal RSVP
- Tokens firmados (`RSVP_TOKEN_SECRET`, TTL 30 días). `verifyPortalToken()` revisa `event_id`, `exp`.
- Invitado responde vía `POST /api/rsvp/respond`. Actualiza `rsvps` + `guests.status`.
- Estados en invitados: `yes → CONFIRMED`, `no → DECLINED`, `maybe/waitlist → WAITING`.

## 7. Orquestador Outbox
- Worker interno (`processOutboxBatch`) toma `pending`, cambia a `sending`, simula entrega y actualiza `invitations.sent|delivered`.
- Variables:
  - `RSVP_OUTBOX_INTERVAL_MS` (default 4000 ms).
  - `RSVP_OUTBOX_BATCH_SIZE` (default 15).
- Logs: consola del servicio (`[rsvp] delivery failed …`).
- Reintentos manuales: `update messages_outbox set status='pending' where id=…` (reintenta en siguiente ciclo).

## 8. Troubleshooting rápido
| Problema | Diagnóstico | Acción |
| --- | --- | --- |
| Invitaciones no encoladas | Revisar respuesta (`skipped`), `opt_out_channels`, campos vacíos | Completar datos / limpiar opt-out |
| Portal inválido | Revisar token (`verifyPortalToken`), expiración TTL | Reenviar invitación (nuevo token) |
| Cola detenida | Ver logs del worker, estado `sending` sin avanzar | Revisar proveedor externo / reiniciar servicio |
| Métricas vacías | Confirmar `eventId` correcto, RLS (tenant header) | Corregir `x-seatpilot-tenant`, repetir consulta |

## 9. Escalamiento
- On-call Growth Ops: `#seatpilot-ops` Slack (adjuntar `eventId`, `batchKey`, capturas).
- Casos legals / masivos opt-out → `privacy@seatpilot.app`.
- Incidencias de proveedor (Twilio/Postmark) → abrir ticket con ID de mensaje (`messages_outbox.provider_message_id`).

