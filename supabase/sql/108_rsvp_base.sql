-- SeatPilot · RSVP & Messaging base schema (PR-04)
-- Creates multi-tenant tables for events, parties, guests, invitations,
-- outbound messages and RSVP statuses. Applies RLS using app.current_tenant_id().

set check_function_bodies = off;

create schema if not exists app;
create extension if not exists pgcrypto;

-- ---------------------------------------------------------------------------
-- EVENTS
-- ---------------------------------------------------------------------------

create table if not exists events (
  id uuid primary key default gen_random_uuid(),
  tenant_id uuid not null references tenants(id) on delete cascade,
  name text not null,
  description text,
  event_date date not null,
  event_time time not null,
  tz text not null default 'America/Puerto_Rico',
  venue_id uuid, -- se vinculará a venues.id en PR-05 cuando exista la tabla
  locale text default 'es-PR',
  branding jsonb default '{}'::jsonb,
  status text not null default 'draft' check (status in ('draft','scheduled','live','closed')),
  created_at timestamptz not null default timezone('utc', now()),
  updated_at timestamptz not null default timezone('utc', now())
);

comment on table events is 'Eventos gestionados por SeatPilot (multi-tenant).';
comment on column events.status is 'draft | scheduled | live | closed';
comment on column events.locale is 'ISO locale preferido para copy (ej. es-PR, en-US).';

create index if not exists idx_events_tenant_date
  on events (tenant_id, event_date, event_time);

alter table events enable row level security;

drop policy if exists events_rw on events;
create policy events_rw on events
  using (tenant_id = app.current_tenant_id())
  with check (tenant_id = app.current_tenant_id());

-- ---------------------------------------------------------------------------
-- UPDATED_AT helper
-- ---------------------------------------------------------------------------

create or replace function app.touch_updated_at()
returns trigger
language plpgsql
security definer
set search_path = public, app
as $$
begin
  new.updated_at := timezone('utc', now());
  return new;
end;$$;

drop trigger if exists trg_events_touch on events;
create trigger trg_events_touch
  before update on events
  for each row execute function app.touch_updated_at();

-- ---------------------------------------------------------------------------
-- GUEST PARTIES
-- ---------------------------------------------------------------------------

create table if not exists guest_parties (
  id uuid primary key default gen_random_uuid(),
  event_id uuid not null references events(id) on delete cascade,
  label text not null,
  notes text,
  created_at timestamptz not null default timezone('utc', now())
);

comment on table guest_parties is 'Grupos/households asociados a un evento (VIP, Familia, etc.).';

create index if not exists idx_guest_parties_event
  on guest_parties (event_id);

alter table guest_parties enable row level security;

drop policy if exists party_rw on guest_parties;
create policy party_rw on guest_parties
  using (exists (
    select 1 from events e
    where e.id = guest_parties.event_id
      and e.tenant_id = app.current_tenant_id()
  ))
  with check (exists (
    select 1 from events e
    where e.id = guest_parties.event_id
      and e.tenant_id = app.current_tenant_id()
  ));

-- ---------------------------------------------------------------------------
-- GUESTS
-- ---------------------------------------------------------------------------

create table if not exists guests (
  id uuid primary key default gen_random_uuid(),
  event_id uuid not null references events(id) on delete cascade,
  party_id uuid references guest_parties(id) on delete set null,
  full_name text not null,
  email text,
  phone text,
  segment text check (segment in ('VIP','FAMILY','FRIENDS','VENDOR','OTHER')),
  status text not null default 'INVITED', -- INVITED | CONFIRMED | DECLINED | WAITING | CHECKED_IN
  qr_code text,
  seat_label text,
  locale text,
  dietary jsonb default '[]'::jsonb,
  notes text,
  last_rsvp_at timestamptz,
  opt_out_at timestamptz,
  opt_out_channels text[] default '{}'::text[] check (opt_out_channels <@ array['email','sms','whatsapp']::text[]),
  created_at timestamptz not null default timezone('utc', now()),
  updated_at timestamptz not null default timezone('utc', now())
);

comment on table guests is 'Invitados por evento con estado RSVP, tags y QR codes.';
comment on column guests.status is 'INVITED | CONFIRMED | DECLINED | WAITING | CHECKED_IN';
comment on column guests.opt_out_channels is 'Canales (email/sms/whatsapp) a los que el invitado se dio de baja.';

create index if not exists idx_guests_event
  on guests (event_id);

create index if not exists idx_guests_email
  on guests (lower(email))
  where email is not null;

create unique index if not exists uniq_guests_qr
  on guests (event_id, qr_code)
  where qr_code is not null;

alter table guests enable row level security;

drop policy if exists guests_rw on guests;
create policy guests_rw on guests
  using (exists (
    select 1 from events e
    where e.id = guests.event_id
      and e.tenant_id = app.current_tenant_id()
  ))
  with check (exists (
    select 1 from events e
    where e.id = guests.event_id
      and e.tenant_id = app.current_tenant_id()
  ));

drop trigger if exists trg_guests_touch on guests;
create trigger trg_guests_touch
  before update on guests
  for each row execute function app.touch_updated_at();

create or replace function app.guest_allows_channel(p_guest_id uuid, p_channel text)
returns boolean
language sql
stable
as $$
  select case
    when g.opt_out_at is null then true
    when g.opt_out_channels is null then false
    else not (lower(p_channel) = any(select lower(value) from unnest(g.opt_out_channels) as value))
  end
  from guests g
  where g.id = p_guest_id;
$$;

comment on function app.guest_allows_channel is 'Devuelve true si el invitado no se ha dado de baja del canal indicado.';

-- ---------------------------------------------------------------------------
-- INVITATIONS
-- ---------------------------------------------------------------------------

create table if not exists invitations (
  id uuid primary key default gen_random_uuid(),
  event_id uuid not null references events(id) on delete cascade,
  guest_id uuid references guests(id) on delete cascade,
  channel text not null check (channel in ('email','sms','whatsapp')),
  template_id text,
  subject text,
  payload jsonb not null default '{}'::jsonb,
  status text not null default 'draft' check (status in ('draft','scheduled','sending','sent','delivered','bounced','spam')),
  scheduled_at timestamptz,
  sent_at timestamptz,
  delivered_at timestamptz,
  opened_at timestamptz,
  clicked_at timestamptz,
  bounced_at timestamptz,
  created_at timestamptz not null default timezone('utc', now()),
  updated_at timestamptz not null default timezone('utc', now())
);

create index if not exists idx_invitations_event
  on invitations (event_id, status, channel);

create unique index if not exists uniq_invitation_channel
  on invitations (event_id, guest_id, channel);

alter table invitations enable row level security;

drop policy if exists invitations_rw on invitations;
create policy invitations_rw on invitations
  using (exists (
    select 1 from events e
    where e.id = invitations.event_id
      and e.tenant_id = app.current_tenant_id()
  ))
  with check (exists (
    select 1 from events e
    where e.id = invitations.event_id
      and e.tenant_id = app.current_tenant_id()
  ));

drop trigger if exists trg_invitations_touch on invitations;
create trigger trg_invitations_touch
  before update on invitations
  for each row execute function app.touch_updated_at();

-- ---------------------------------------------------------------------------
-- OUTBOX / MESSAGES
-- ---------------------------------------------------------------------------

create table if not exists messages_outbox (
  id uuid primary key default gen_random_uuid(),
  event_id uuid not null references events(id) on delete cascade,
  invitation_id uuid references invitations(id) on delete cascade,
  guest_id uuid references guests(id) on delete cascade,
  channel text not null check (channel in ('email','sms','whatsapp')),
  provider text,
  provider_message_id text,
  status text not null default 'pending' check (status in ('pending','sending','sent','delivered','failed')),
  attempt int not null default 0,
  idempotency_key text not null,
  scheduled_at timestamptz,
  sent_at timestamptz,
  last_error text,
  payload jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default timezone('utc', now()),
  updated_at timestamptz not null default timezone('utc', now()),
  unique (event_id, idempotency_key)
);

comment on table messages_outbox is 'Cola transaccional para envíos email/SMS con idempotencia y retries.';

create index if not exists idx_messages_status
  on messages_outbox (status, event_id);

alter table messages_outbox enable row level security;

drop policy if exists messages_rw on messages_outbox;
create policy messages_rw on messages_outbox
  using (exists (
    select 1 from events e
    where e.id = messages_outbox.event_id
      and e.tenant_id = app.current_tenant_id()
  ))
  with check (exists (
    select 1 from events e
    where e.id = messages_outbox.event_id
      and e.tenant_id = app.current_tenant_id()
  ));

drop trigger if exists trg_messages_touch on messages_outbox;
create trigger trg_messages_touch
  before update on messages_outbox
  for each row execute function app.touch_updated_at();

-- ---------------------------------------------------------------------------
-- RSVP RESPONSES
-- ---------------------------------------------------------------------------

create table if not exists rsvps (
  id uuid primary key default gen_random_uuid(),
  event_id uuid not null references events(id) on delete cascade,
  guest_id uuid not null references guests(id) on delete cascade,
  status text not null check (status in ('yes','no','maybe','waitlist')),
  party_size int not null default 1,
  preferences jsonb not null default '{}'::jsonb,
  responded_at timestamptz not null default timezone('utc', now()),
  source text default 'portal', -- portal | kiosk | operator | import
  notes text,
  created_at timestamptz not null default timezone('utc', now())
);

create unique index if not exists uniq_rsvp_guest
  on rsvps (event_id, guest_id);

alter table rsvps enable row level security;

drop policy if exists rsvps_rw on rsvps;
create policy rsvps_rw on rsvps
  using (exists (
    select 1 from events e
    where e.id = rsvps.event_id
      and e.tenant_id = app.current_tenant_id()
  ))
  with check (exists (
    select 1 from events e
    where e.id = rsvps.event_id
      and e.tenant_id = app.current_tenant_id()
  ));

-- ---------------------------------------------------------------------------
-- VIEWS
-- ---------------------------------------------------------------------------

create or replace view rsvps_stats
security invoker
as
select
  e.tenant_id,
  r.event_id,
  count(*) filter (where r.status = 'yes')   as confirmed,
  count(*) filter (where r.status = 'no')    as declined,
  count(*) filter (where r.status = 'maybe') as maybe,
  count(*) filter (where r.status = 'waitlist') as waitlist,
  sum(r.party_size) filter (where r.status = 'yes') as confirmed_guests,
  max(r.responded_at) as last_response_at
from rsvps r
join events e on e.id = r.event_id
group by 1,2;

comment on view rsvps_stats is 'Resumen de respuestas RSVP por evento.';

create or replace view invitations_stats
security invoker
as
select
  e.tenant_id,
  i.event_id,
  count(*)                             as total,
  count(*) filter (where i.status in ('scheduled','sending','sent','delivered')) as sent_or_scheduled,
  count(*) filter (where i.status = 'sent')                                     as sent,
  count(*) filter (where i.status = 'delivered')                                as delivered,
  count(*) filter (where i.status = 'bounced')                                  as bounced,
  count(*) filter (where i.status = 'spam')                                     as flagged_spam,
  max(i.sent_at) as last_sent_at
from invitations i
join events e on e.id = i.event_id
group by 1,2;

comment on view invitations_stats is 'Métricas agregadas de invitaciones por evento y tenant.';
