# Seatpilot Domain Model

This package centralises the canonical schemas shared across Seatpilot services, apps, and SDKs. Schemas follow JSON Schema draft 2020-12 and are versioned by `schema_version`.

- `schemas/envelope.v1.1.0.json` — base envelope applied to every event.
- `schemas/enums.json` — central enumeration definitions reused by event-specific schemas.
- `schemas/events/*.json` — per-event contracts layered on top of the envelope.
- `src/enums.ts` — single source of truth for enum lists and validation helper (emitted under `dist/`).
- Telemetry references live under `docs/telemetry/` (roadmap, decisions, dictionary).

Publish these files to the Schema Registry and treat them as the source of truth for validation in ingestion pipelines and SDKs.
