# 2025-10-26 · Kiosk demo smoke

- `pnpm -w build`
- Manual: `pnpm demo:kiosk` + POST a ticket (`TICKET-001`) → check-in + stages + assign + door→seat seeded
- `curl http://localhost:8080/healthz` → `ok`
