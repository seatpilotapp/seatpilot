-- SeatPilot · Venue Plan Library Enhancements
-- Adds richer metadata for plan backstage (display name, owner, tags, layout snapshots)
-- and maintains a search vector for quick lookups.

begin;

-- Optional owner of the plan (creator/maintainer)
alter table public.venue_plans
  add column if not exists owner_id uuid;

-- Friendly name for the plano (defaults to version_label if empty)
alter table public.venue_plans
  add column if not exists display_name text;

-- Tags para clasificar (gala, corporativo, etc.)
alter table public.venue_plans
  add column if not exists tags text[] not null default '{}'::text[];

-- Miniatura SVG (data-url / snippet)
alter table public.venue_plans
  add column if not exists thumbnail_svg text;

-- Hash/commit del contenido (para comparar vs editor)
alter table public.venue_plans
  add column if not exists content_commit_id text;

-- Layout serializado que usa el editor (geo + meta)
alter table public.venue_plans
  add column if not exists layout jsonb not null default '{}'::jsonb;

-- Texto de búsqueda (se mantiene via trigger)
alter table public.venue_plans
  add column if not exists search_text tsvector;

-- Ajustar datos existentes: si no hay display_name, usar version_label
update public.venue_plans
   set display_name = coalesce(display_name, version_label)
 where display_name is null;

-- Función para mantener el search_text actualizado
create or replace function app.venue_plans_search_trigger()
returns trigger
language plpgsql
as $$
declare
  base_text text;
begin
  base_text := coalesce(new.display_name, '') || ' '
             || coalesce(new.version_label, '') || ' '
             || coalesce(array_to_string(new.tags, ' '), '');

  new.search_text := to_tsvector('simple', base_text);
  return new;
end;
$$;

-- Re-crear trigger (antes se llamaba trg_venue_plans_tsv en algunos entornos)
drop trigger if exists trg_venue_plans_tsv on public.venue_plans;
drop trigger if exists trg_venue_plans_search on public.venue_plans;
create trigger trg_venue_plans_search
  before insert or update on public.venue_plans
  for each row execute function app.venue_plans_search_trigger();

-- Reprocesar registros existentes para llenar el vector
update public.venue_plans
   set search_text = to_tsvector(
     'simple',
     coalesce(display_name, '') || ' '
       || coalesce(version_label, '') || ' '
       || coalesce(array_to_string(tags, ' '), '')
   );

-- Índice GIN para búsquedas rápidas
create index if not exists idx_venue_plans_search_text
  on public.venue_plans
  using gin (search_text);

commit;
