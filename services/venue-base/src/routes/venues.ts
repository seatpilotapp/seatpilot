import type { Request, Response } from 'express';
import { pgpInstance, withTenant } from '../lib/db.js';
import { notFound, validationError } from '../lib/errors.js';
import { venueSchema, venueUpdateSchema, type VenuePayload, type VenueUpdatePayload } from '../lib/schemas.js';

const csVenues = new pgpInstance.helpers.ColumnSet(
  [
    'tenant_id',
    'name',
    'country_code',
    'region',
    'city',
    'locality',
    'address',
    'latitude',
    'longitude',
    'tags',
    'capacity_hint',
    'created_by',
    'updated_by'
  ],
  { table: 'venues' }
);

const csVenuesUpdate = csVenues.extend(['updated_at']);

type VenueRow = {
  id: string;
  tenant_id: string;
  name: string;
  country_code: string;
  region: string | null;
  city: string | null;
  locality: string | null;
  address: string | null;
  latitude: number | null;
  longitude: number | null;
  tags: string[] | null;
  capacity_hint: number | null;
  status?: string;
  created_by?: string | null;
  updated_by?: string | null;
  created_at: string;
  updated_at: string;
};

function mapVenue(row: VenueRow) {
  return {
    id: row.id,
    name: row.name,
    location: {
      countryCode: row.country_code,
      region: row.region,
      city: row.city,
      locality: row.locality,
      address: row.address,
      latitude: row.latitude,
      longitude: row.longitude
    },
    tags: row.tags ?? [],
    capacityHint: row.capacity_hint,
    createdAt: row.created_at,
    updatedAt: row.updated_at
  };
}

function pickVenueFields(payload: VenuePayload | VenueUpdatePayload, tenantId: string, userId: string | undefined) {
  return {
    tenant_id: tenantId,
    name: payload.name,
    country_code: payload.countryCode ?? 'PR',
    region: payload.region ?? null,
    city: payload.city ?? null,
    locality: payload.locality ?? null,
    address: payload.address ?? null,
    latitude: payload.latitude ?? null,
    longitude: payload.longitude ?? null,
    tags: payload.tags ?? [],
    capacity_hint: payload.capacityHint ?? null,
    created_by: userId ?? null,
    updated_by: userId ?? null
  };
}

export async function listVenues(req: Request, res: Response) {
  const tenantId = req.header('x-seatpilot-tenant');
  const limit = Math.min(Number.parseInt(String(req.query.limit ?? '50'), 10) || 50, 200);
  const offset = Number.parseInt(String(req.query.offset ?? '0'), 10) || 0;

  const rows = await withTenant(tenantId, async (conn) => {
    return conn.any<VenueRow>(
      `select id, tenant_id, name, country_code, region, city, locality, address,
              latitude, longitude, tags, capacity_hint, created_at, updated_at
         from venues
        where tenant_id = $1
        order by lower(name)
        limit $2 offset $3`,
      [tenantId, limit, Math.max(offset, 0)]
    );
  });

  res.json({ ok: true, data: rows.map(mapVenue) });
}

export async function createVenue(req: Request, res: Response) {
  const tenantId = req.header('x-seatpilot-tenant');
  const userId = req.header('x-seatpilot-user') ?? undefined;

  const parseResult = venueSchema.safeParse(req.body);
  if (!parseResult.success) {
    throw validationError(parseResult.error.flatten());
  }

  const payload = parseResult.data;

  const row = await withTenant(tenantId, async (conn) => {
    const insert = pgpInstance.helpers.insert(
      pickVenueFields(payload, tenantId!, userId),
      csVenues
    ) + ' returning id, tenant_id, name, country_code, region, city, locality, address, latitude, longitude, tags, capacity_hint, created_at, updated_at';

    return conn.one<VenueRow>(insert);
  });

  res.status(201).json({ ok: true, data: mapVenue(row) });
}

export async function getVenue(req: Request, res: Response) {
  const tenantId = req.header('x-seatpilot-tenant');
  const { venueId } = req.params;

  const row = await withTenant(tenantId, async (conn) => {
    return conn.oneOrNone<VenueRow>(
      `select id, tenant_id, name, country_code, region, city, locality, address,
              latitude, longitude, tags, capacity_hint, created_at, updated_at
         from venues
        where id = $1 and tenant_id = $2`,
      [venueId, tenantId]
    );
  });

  if (!row) {
    throw notFound('venue');
  }

  res.json({ ok: true, data: mapVenue(row) });
}

export async function updateVenue(req: Request, res: Response) {
  const tenantId = req.header('x-seatpilot-tenant');
  const userId = req.header('x-seatpilot-user') ?? undefined;
  const { venueId } = req.params;

  const parseResult = venueUpdateSchema.safeParse(req.body);
  if (!parseResult.success) {
    throw validationError(parseResult.error.flatten());
  }

  const payload = parseResult.data;
  if (Object.keys(payload).length === 0) {
    res.json({ ok: true });
    return;
  }

  const row = await withTenant(tenantId, async (conn) => {
    const existing = await conn.oneOrNone<VenueRow>(
      'select * from venues where id = $1 and tenant_id = $2',
      [venueId, tenantId]
    );

    if (!existing) {
      throw notFound('venue');
    }

    const merged = {
      ...existing,
      ...{
        name: payload.name ?? existing.name,
        country_code: payload.countryCode ?? existing.country_code,
        region: payload.region ?? existing.region,
        city: payload.city ?? existing.city,
        locality: payload.locality ?? existing.locality,
        address: payload.address ?? existing.address,
        latitude: payload.latitude ?? existing.latitude,
        longitude: payload.longitude ?? existing.longitude,
        tags: payload.tags ?? existing.tags,
        capacity_hint: payload.capacityHint ?? existing.capacity_hint,
        updated_by: userId ?? existing.updated_by
      }
    };

    const update = pgpInstance.helpers.update(
      merged,
      csVenuesUpdate,
      'venues'
    ) + ' where id = ${id} returning id, tenant_id, name, country_code, region, city, locality, address, latitude, longitude, tags, capacity_hint, created_at, updated_at';

    return conn.one<VenueRow>(update, merged);
  });

  res.json({ ok: true, data: mapVenue(row) });
}
