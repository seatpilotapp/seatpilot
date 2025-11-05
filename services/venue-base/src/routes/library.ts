import type { Request, Response } from 'express';
import { z } from 'zod';
import { withTenant } from '../lib/db.js';
import { validationError } from '../lib/errors.js';

const querySchema = z.object({
  q: z.string().trim().min(1).max(120).optional(),
  status: z.enum(['draft', 'published', 'archived']).optional(),
  venueId: z.string().uuid().optional(),
  ownerId: z.string().uuid().optional(),
  city: z.string().trim().min(1).max(120).optional(),
  tags: z.union([z.string(), z.array(z.string())]).optional(),
  limit: z.coerce.number().int().positive().max(100).optional(),
  offset: z.coerce.number().int().min(0).optional()
});

type PlanLibraryRow = {
  id: string;
  venue_id: string;
  display_name: string | null;
  version_label: string;
  status: 'draft' | 'published' | 'archived';
  tags: string[] | null;
  thumbnail_svg: string | null;
  owner_id: string | null;
  content_commit_id: string | null;
  updated_at: string;
  published_at: string | null;
  venue_name: string;
  venue_city: string | null;
  venue_region: string | null;
  venue_locality: string | null;
  venue_tags: string[] | null;
  country_code: string | null;
  address: string | null;
};

function mapRow(row: PlanLibraryRow) {
  return {
    id: row.id,
    displayName: row.display_name ?? row.version_label,
    versionLabel: row.version_label,
    status: row.status,
    tags: row.tags ?? [],
    thumbnailSvg: row.thumbnail_svg,
    ownerId: row.owner_id,
    contentCommitId: row.content_commit_id,
    updatedAt: row.updated_at,
    publishedAt: row.published_at,
    venue: {
      id: row.venue_id,
      name: row.venue_name,
      city: row.venue_city,
      region: row.venue_region,
      locality: row.venue_locality,
      countryCode: row.country_code,
      address: row.address,
      tags: row.venue_tags ?? []
    }
  };
}

function parseTags(input: string | string[] | undefined) {
  if (!input) {
    return undefined;
  }
  const values = Array.isArray(input) ? input : input.split(',');
  const cleaned = values.map((tag) => tag.trim()).filter((tag) => tag.length > 0);
  return cleaned.length > 0 ? cleaned : undefined;
}

export async function listLibraryPlans(req: Request, res: Response) {
  const tenantId = req.header('x-seatpilot-tenant');
  const parseResult = querySchema.safeParse(req.query);

  if (!parseResult.success) {
    throw validationError(parseResult.error.flatten());
  }

  const { q, status, venueId, ownerId, city } = parseResult.data;
  const limit = parseResult.data.limit ?? 50;
  const offset = parseResult.data.offset ?? 0;
  const tags = parseTags(parseResult.data.tags);

  const conditions: string[] = ['p.tenant_id = $<tenantId>'];
  const params: Record<string, unknown> = {
    tenantId,
    limit: limit + 1,
    offset
  };

  if (status) {
    conditions.push('p.status = $<status>');
    params.status = status;
  }
  if (venueId) {
    conditions.push('p.venue_id = $<venueId>');
    params.venueId = venueId;
  }
  if (ownerId) {
    conditions.push('p.owner_id = $<ownerId>');
    params.ownerId = ownerId;
  }
  if (city) {
    conditions.push('(v.city ilike $<cityLike> or v.locality ilike $<cityLike>)');
    params.cityLike = `%${city}%`;
  }
  if (tags) {
    conditions.push('p.tags && $<tags>');
    params.tags = tags;
  }
  if (q) {
    conditions.push(`(
      p.search_text @@ plainto_tsquery('simple', $<search>)
      or v.name ilike $<searchLike>
    )`);
    params.search = q;
    params.searchLike = `%${q}%`;
  }

  const whereClause = conditions.join(' and ');

  const rows = await withTenant(tenantId, async (conn) => {
    return conn.any<PlanLibraryRow>(
      `
      select
        p.id,
        p.venue_id,
        p.display_name,
        p.version_label,
        p.status,
        p.tags,
        p.thumbnail_svg,
        p.owner_id,
        p.content_commit_id,
        p.updated_at,
        p.published_at,
        v.name as venue_name,
        v.city as venue_city,
        v.region as venue_region,
        v.locality as venue_locality,
        v.tags as venue_tags,
        v.country_code,
        v.address
      from venue_plans p
      join venues v on v.id = p.venue_id and v.tenant_id = p.tenant_id
      where ${whereClause}
      order by p.updated_at desc
      limit $<limit> offset $<offset>
      `,
      params
    );
  });

  const pageSize = limit;
  const hasMore = rows.length > pageSize;
  const slice = hasMore ? rows.slice(0, pageSize) : rows;

  res.json({
    ok: true,
    data: slice.map(mapRow),
    pagination: {
      nextOffset: hasMore ? offset + pageSize : null,
      pageSize,
      hasMore
    }
  });
}
