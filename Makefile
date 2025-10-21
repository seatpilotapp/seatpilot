# ========= SeatPilot — Release Toolkit =========
SHELL := /usr/bin/env bash
.PHONY: help release deploy cold-start verify seed-db seed-ops-live tag rollback env preflight

# Rutas / config (puedes override en CLI: make release PR_NUMBER=4 ...)
COMPOSE           ?= docker-compose.metrics.yml
PR_NUMBER         ?= 4
RELEASE_TAG       ?= v1.0.0-prod-r1
SUPABASE_DB_URL   ?=
METRICS_API_BASE_URL ?=
METRICS_API_KEY      ?=
SEED_TENANT       ?= demo
SEED_CHANNEL      ?= kiosk

help:
	@echo "Targets:"
	@echo "  make env                  # muestra variables esperadas"
	@echo "  make release PR_NUMBER=4 RELEASE_TAG=v1.0.0-prod-r1  # merge PR + tag + deploy + cold-start + verify"
	@echo "  make deploy              # docker compose up -d + logs de salud"
	@echo "  make cold-start          # ejecuta scripts/cold-start.sh"
	@echo "  make verify              # checks DB/cron/Prometheus/Grafana (/admin/billing)"
	@echo "  make seed-db             # ejecuta seed de metering en DB"
	@echo "  make seed-ops-live       # alimenta /observe/* (Prometheus)"
	@echo "  make tag RELEASE_TAG=... # crea y empuja el tag"
	@echo "  make rollback            # desprograma cron y revierte compose al tag previo (manual)"

env:
	@echo "COMPOSE=$(COMPOSE)"
	@echo "PR_NUMBER=$(PR_NUMBER)"
	@echo "RELEASE_TAG=$(RELEASE_TAG)"
	@echo "SUPABASE_DB_URL=$(SUPABASE_DB_URL)"
	@echo "METRICS_API_BASE_URL=$(METRICS_API_BASE_URL)"
	@echo "METRICS_API_KEY=$(METRICS_API_KEY)"
	@echo "SEED_TENANT=$(SEED_TENANT) SEED_CHANNEL=$(SEED_CHANNEL)"

preflight:
	@test -x tools/check-release.sh || chmod +x tools/check-release.sh
	tools/check-release.sh

release: merge tag deploy cold-start verify
	@echo "✅ Release completado: $(RELEASE_TAG)"

merge:
	@test -n "$(PR_NUMBER)" || (echo "❌ PR_NUMBER requerido"; exit 1)
	gh pr view $(PR_NUMBER) --web || true
	gh pr merge $(PR_NUMBER) --merge --delete-branch
	@echo "✅ PR $(PR_NUMBER) mergeado"

tag:
	@test -n "$(RELEASE_TAG)" || (echo "❌ RELEASE_TAG requerido"; exit 1)
	git fetch origin && git checkout main && git pull
	git tag -a $(RELEASE_TAG) -m "SeatPilot $(RELEASE_TAG)"
	git push origin $(RELEASE_TAG)
	@echo "✅ Tag push: $(RELEASE_TAG)"

deploy:
	@test -f $(COMPOSE) || (echo "❌ No existe $(COMPOSE)"; exit 1)
	docker compose -f $(COMPOSE) up -d
	docker compose -f $(COMPOSE) ps
	@echo "🩺 Logs (metrics-api, telemetry-ingest, prometheus):"
	@docker compose -f $(COMPOSE) logs --tail=50 metrics-api telemetry-ingest prometheus || true
	@echo "✅ Deploy OK"

cold-start:
	@test -x scripts/cold-start.sh || chmod +x scripts/cold-start.sh
	./scripts/cold-start.sh
	@echo "✅ Cold-start OK"

verify: verify-db verify-cron verify-prom
	@echo "ℹ️  Abre Grafana (Ops Live v1) y /admin/billing para verificar visualmente."
	@echo "✅ Verificación básica completada"

verify-db:
	@test -n "$(SUPABASE_DB_URL)" || (echo "❌ SUPABASE_DB_URL requerido"; exit 1)
	psql "$(SUPABASE_DB_URL)" -c "select id, display_name, price_cents from plans;"
	psql "$(SUPABASE_DB_URL)" -c "select * from v_tenant_billing_report order by period_key desc limit 5;"

verify-cron:
	@test -n "$(SUPABASE_DB_URL)" || (echo "❌ SUPABASE_DB_URL requerido"; exit 1)
	psql "$(SUPABASE_DB_URL)" -c "select jobid, jobname, schedule, active, command from cron.job where jobname in ('billing_close_month','ops_metering_seed_daily');"

verify-prom:
	@echo "🔎 Consulta targets: http://localhost:9090/targets"
	@echo "   Esperado: metrics-api:8080 y telemetry-ingest:3001 en UP"

seed-db:
	@test -n "$(SUPABASE_DB_URL)" || (echo "❌ SUPABASE_DB_URL requerido"; exit 1)
	psql "$(SUPABASE_DB_URL)" -c "select app.seed_metering_demo(2,25);"
	psql "$(SUPABASE_DB_URL)" -c "select * from v_tenant_billing_report where period_key = to_char(date_trunc('month', now()), 'YYYY-MM') order by tenant_id limit 10;"
	@echo "✅ Seed DB OK"

seed-ops-live:
	@test -n "$(METRICS_API_BASE_URL)" || (echo "❌ METRICS_API_BASE_URL requerido"; exit 1)
	@test -n "$(METRICS_API_KEY)" || (echo "❌ METRICS_API_KEY requerido"; exit 1)
	chmod +x scripts/seed-ops-live.sh
	METRICS_API_BASE_URL="$(METRICS_API_BASE_URL)" \
	METRICS_API_KEY="$(METRICS_API_KEY)" \
	SEED_TENANT="$(SEED_TENANT)" SEED_CHANNEL="$(SEED_CHANNEL)" \
	bash scripts/seed-ops-live.sh
	@echo "✅ Seed Ops Live OK"

rollback:
	@echo "⚠️  RolLBACK (manual asistido)"
	@echo "  1) Desprogramar cron: select cron.unschedule((select jobid from cron.job where jobname='ops_metering_seed_daily'));"
	@echo "  2) Revertir compose al tag previo y docker compose up -d"
	@echo "  3) Reimportar dashboards si fuera necesario"
