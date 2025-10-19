# metrics-proxy-fallback

Small Express fallback proxy to forward Prometheus scrapes to Supabase privileged metrics endpoint while injecting a key we control.

Usage

1. Build and run locally (requires Node >=18):

   export SUPABASE_HOST=qfwptupwrqdhxegxueuc.supabase.co
   export SB_SECRET=sb_secret_xxx_or_service_role
   node server.js

2. Or via Docker:

   docker build -t metrics-proxy-fallback .
   docker run -p 8081:8081 -e SUPABASE_HOST=$SUPABASE_HOST -e SB_SECRET=$SB_SECRET metrics-proxy-fallback

Prometheus config example:

- job_name: "supabase-privileged"
  static_configs:
    - targets: ['host.docker.internal:8081']

Notes

- This is a fallback for local testing and troubleshooting. For production, run in a secure environment (Cloud Run, Vercel Serverless, or a dedicated VM) and protect the secret (use Secret Manager, Vault).

Docker-compose (example)

Create a `docker-compose.override.yml` next to this file with:

services:
   metrics-proxy-fallback:
      image: metrics-proxy-fallback:local
      build: .
      ports:
         - "8082:8081"
      environment:
         SUPABASE_HOST: ${SUPABASE_HOST}
         SB_SECRET: ${SB_SECRET}

Then run `docker compose -f docker-compose.override.yml up --build` to run on port 8082.
