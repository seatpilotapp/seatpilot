-- Telemetry event alias bootstrap (Fase 0)
create schema if not exists telemetry;

create table if not exists telemetry.event_alias (
  legacy_name text primary key,
  canonical_name text not null,
  updated_at timestamptz not null default now()
);

insert into telemetry.event_alias (legacy_name, canonical_name)
values
  ('qr_scan_start', 'checkin.qr_scan_start'),
  ('guest_lookup_done', 'checkin.guest_lookup_done'),
  ('ui_render_done', 'checkin.ui_render_done'),
  ('checkin_success', 'checkin.success'),
  ('map_pin_shown', 'wayfinding.map_pin_shown'),
  ('arrive_table', 'wayfinding.arrive_table')
on conflict (legacy_name) do update
set canonical_name = excluded.canonical_name,
    updated_at = now();

create or replace function telemetry.canonical_event_name(_name text)
returns text
language sql
stable
as $$
  select coalesce(
    (select canonical_name from telemetry.event_alias where legacy_name = _name),
    _name
  );
$$;

create table if not exists telemetry.event_alias_usage (
  used_at timestamptz not null default now(),
  legacy_name text not null,
  canonical_name text not null,
  tenant_id uuid
);
