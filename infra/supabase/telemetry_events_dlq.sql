-- Dead-letter queue for telemetry ingest rejects
create schema if not exists telemetry;

create table if not exists telemetry.events_dlq (
  id bigserial primary key,
  reason text not null,
  headers jsonb,
  raw jsonb not null,
  received_at timestamptz not null default now()
);
