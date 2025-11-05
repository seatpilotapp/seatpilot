import type { Request, Response } from 'express';
import { pgpInstance, withTenant } from '../lib/db.js';
import { notFound, validationError } from '../lib/errors.js';
import {
  planSchema,
  planSnapshotSchema,
  planUpdateSchema,
  type PlanPayload,
  type PlanSnapshotPayload,
  type PlanUpdatePayload
} from '../lib/schemas.js';

const csPlans = new pgpInstance.helpers.ColumnSet(
  [
    'tenant_id',
    'venue_id',
    'version_label',
    'status',
    'is_published',
    'published_at',
    'units',
    'scale',
    'transform',
    'calibration',
    'layers',
    'checklist',
    'metadata',
    'notes',
    'created_by',
    'updated_by'
  ],
  { table: 'venue_plans' }
);

const csPlansUpdate = csPlans.extend(['updated_at']);

const csSnapshots = new pgpInstance.helpers.ColumnSet(
  [
    'tenant_id',
    'plan_id',
    'label',
    'diff',
    'snapshot',
    'created_by'
  ],
  { table: 'venue_plan_snapshots' }
);

type PlanRow = {
  id: string;
  tenant_id: string;
  venue_id: string;
  version_label: string;
  status: string;
  is_published: boolean;
  published_at: string | null;
  units: string;
  scale: string | null;
  transform: Record<string, unknown> | null;
  calibration: Record<string, unknown> | null;
  layers: Record<string, unknown> | null;
  checklist: Record<string, unknown> | null;
  metadata: Record<string, unknown> | null;
  notes: string | null;
  created_by?: string | null;
  updated_by?: string | null;
  created_at: string;
  updated_at: string;
};

function mapPlan(row: PlanRow) {
  return {
    id: row.id,
    venueId: row.venue_id,
    versionLabel: row.version_label,
    status: row.status,
    isPublished: row.is_published,
    publishedAt: row.published_at,
    units: row.units,
    scale: row.scale,
    transform: row.transform ?? {},
    calibration: row.calibration ?? {},
    layers: row.layers ?? {},
    checklist: row.checklist ?? {},
    metadata: row.metadata ?? {},
    notes: row.notes,
    createdAt: row.created_at,
    updatedAt: row.updated_at
  };
}

function buildPlanInsert(payload: PlanPayload, tenantId: string, venueId: string, userId?: string) {
  return {
    tenant_id: tenantId,
    venue_id: venueId,
    version_label: payload.versionLabel,
    status: payload.status ?? 'draft',
    is_published: payload.isPublished ?? false,
    published_at: payload.isPublished ? new Date().toISOString() : null,
    units: payload.units ?? 'metric',
    scale: payload.scale ?? null,
    transform: payload.transform ?? {},
    calibration: payload.calibration ?? {},
    layers: payload.layers ?? {},
    checklist: payload.checklist ?? {},
    metadata: payload.metadata ?? {},
    notes: payload.notes ?? null,
    created_by: userId ?? null,
    updated_by: userId ?? null
  };
}

function buildPlanUpdate(existing: PlanRow, payload: PlanUpdatePayload, userId?: string) {
  return {
    ...existing,
    version_label: payload.versionLabel ?? existing.version_label,
    status: payload.status ?? existing.status,
    units: payload.units ?? existing.units,
    scale: payload.scale ?? existing.scale,
    transform: payload.transform ?? existing.transform ?? {},
    calibration: payload.calibration ?? existing.calibration ?? {},
    layers: payload.layers ?? existing.layers ?? {},
    checklist: payload.checklist ?? existing.checklist ?? {},
    metadata: payload.metadata ?? existing.metadata ?? {},
    notes: payload.notes ?? existing.notes,
    updated_by: userId ?? existing.updated_by,
    is_published: payload.isPublished ?? existing.is_published,
    published_at:
      payload.isPublished === undefined
        ? existing.published_at
        : payload.isPublished
          ? new Date().toISOString()
          : null
  };
}

export async function listPlans(req: Request, res: Response) {
  const tenantId = req.header('x-seatpilot-tenant');
  const { venueId } = req.params;

  const rows = await withTenant(tenantId, async (conn) => {
    return conn.any<PlanRow>(
      `select id, tenant_id, venue_id, version_label, status, is_published, published_at, units,
              scale, transform, calibration, layers, checklist, metadata, notes,
              created_at, updated_at
         from venue_plans
        where venue_id = $1 and tenant_id = $2
        order by created_at desc`,
      [venueId, tenantId]
    );
  });

  res.json({ ok: true, data: rows.map(mapPlan) });
}

export async function createPlan(req: Request, res: Response) {
  const tenantId = req.header('x-seatpilot-tenant');
  const userId = req.header('x-seatpilot-user') ?? undefined;
  const { venueId } = req.params;

  const parseResult = planSchema.safeParse(req.body);
  if (!parseResult.success) {
    throw validationError(parseResult.error.flatten());
  }
  const payload = parseResult.data;

  const row = await withTenant(tenantId, async (conn) => {
    const venue = await conn.oneOrNone('select id from venues where id = $1 and tenant_id = $2', [venueId, tenantId]);
    if (!venue) {
      throw notFound('venue');
    }

    const insert = pgpInstance.helpers.insert(
      buildPlanInsert(payload, tenantId!, venueId, userId),
      csPlans
    ) + ` returning id, tenant_id, venue_id, version_label, status, is_published, published_at, units,
                  scale, transform, calibration, layers, checklist, metadata, notes, created_at, updated_at`;

    return conn.one<PlanRow>(insert);
  });

  res.status(201).json({ ok: true, data: mapPlan(row) });
}

export async function getPlan(req: Request, res: Response) {
  const tenantId = req.header('x-seatpilot-tenant');
  const { planId } = req.params;

  const row = await withTenant(tenantId, async (conn) => {
    return conn.oneOrNone<PlanRow>(
      `select id, tenant_id, venue_id, version_label, status, is_published, published_at, units,
              scale, transform, calibration, layers, checklist, metadata, notes,
              created_at, updated_at
         from venue_plans
        where id = $1 and tenant_id = $2`,
      [planId, tenantId]
    );
  });

  if (!row) {
    throw notFound('plan');
  }

  res.json({ ok: true, data: mapPlan(row) });
}

export async function updatePlan(req: Request, res: Response) {
  const tenantId = req.header('x-seatpilot-tenant');
  const userId = req.header('x-seatpilot-user') ?? undefined;
  const { planId } = req.params;

  const parseResult = planUpdateSchema.safeParse(req.body);
  if (!parseResult.success) {
    throw validationError(parseResult.error.flatten());
  }
  const payload = parseResult.data;

  if (Object.keys(payload).length === 0) {
    res.json({ ok: true });
    return;
  }

  const row = await withTenant(tenantId, async (conn) => {
    const existing = await conn.oneOrNone<PlanRow>(
      'select * from venue_plans where id = $1 and tenant_id = $2',
      [planId, tenantId]
    );

    if (!existing) {
      throw notFound('plan');
    }

    const merged = buildPlanUpdate(existing, payload, userId);
    const update = pgpInstance.helpers.update(
      merged,
      csPlansUpdate,
      'venue_plans'
    ) + ' where id = ${id} returning id, tenant_id, venue_id, version_label, status, is_published, published_at, units, scale, transform, calibration, layers, checklist, metadata, notes, created_at, updated_at';

    return conn.one<PlanRow>(update, merged);
  });

  res.json({ ok: true, data: mapPlan(row) });
}

export async function publishPlan(req: Request, res: Response) {
  const tenantId = req.header('x-seatpilot-tenant');
  const userId = req.header('x-seatpilot-user') ?? undefined;
  const { planId } = req.params;

  const row = await withTenant(tenantId, async (conn) => {
    const plan = await conn.oneOrNone<PlanRow>(
      'select * from venue_plans where id = $1 and tenant_id = $2',
      [planId, tenantId]
    );
    if (!plan) {
      throw notFound('plan');
    }

    const updated = {
      ...plan,
      status: 'published',
      is_published: true,
      published_at: new Date().toISOString(),
      updated_by: userId ?? plan.updated_by
    };

    const update = pgpInstance.helpers.update(
      updated,
      csPlansUpdate,
      'venue_plans'
    ) + ' where id = ${id} returning id, tenant_id, venue_id, version_label, status, is_published, published_at, units, scale, transform, calibration, layers, checklist, metadata, notes, created_at, updated_at';

    return conn.one<PlanRow>(update, updated);
  });

  res.json({ ok: true, data: mapPlan(row) });
}

export async function createSnapshot(req: Request, res: Response) {
  const tenantId = req.header('x-seatpilot-tenant');
  const userId = req.header('x-seatpilot-user') ?? undefined;
  const { planId } = req.params;

  const parseResult = planSnapshotSchema.safeParse(req.body);
  if (!parseResult.success) {
    throw validationError(parseResult.error.flatten());
  }
  const payload = parseResult.data;

  const snapshot = await withTenant(tenantId, async (conn) => {
    const plan = await conn.oneOrNone('select id from venue_plans where id = $1 and tenant_id = $2', [planId, tenantId]);
    if (!plan) {
      throw notFound('plan');
    }

    const insert = pgpInstance.helpers.insert(
      {
        tenant_id: tenantId!,
        plan_id: planId,
        label: payload.label ?? null,
        diff: payload.diff ?? null,
        snapshot: payload.snapshot,
        created_by: userId ?? null
      },
      csSnapshots
    ) + ' returning id, plan_id, label, diff, snapshot, created_by, created_at';

    return conn.one(insert);
  });

  res.status(201).json({ ok: true, data: snapshot });
}

export async function listSnapshots(req: Request, res: Response) {
  const tenantId = req.header('x-seatpilot-tenant');
  const { planId } = req.params;

  const rows = await withTenant(tenantId, async (conn) => {
    return conn.any(
      `select id, plan_id, label, diff, snapshot, created_by, created_at
         from venue_plan_snapshots
        where plan_id = $1 and tenant_id = $2
        order by created_at desc`,
      [planId, tenantId]
    );
  });

  res.json({ ok: true, data: rows });
}
