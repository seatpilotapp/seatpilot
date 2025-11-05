const API_BASE = import.meta.env.VITE_VENUE_BASE_URL ?? 'http://localhost:4300';
const DEFAULT_TENANT = import.meta.env.VITE_TENANT_ID ?? '';
const DEFAULT_USER = import.meta.env.VITE_USER_ID ?? '';

type HeadersInput = HeadersInit & { 'x-seatpilot-tenant'?: string };

async function request<T>(path: string, init?: RequestInit & { headers?: HeadersInput }): Promise<T> {
  const tenantHeader = init?.headers && typeof init.headers === 'object' ? (init.headers as Record<string, string>)['x-seatpilot-tenant'] : undefined;
  const tenant = DEFAULT_TENANT || tenantHeader || '';
  if (!tenant) {
    throw new Error('Missing tenant id. Set VITE_TENANT_ID in your environment.');
  }

  const headers = new Headers(init?.headers);
  headers.set('Content-Type', 'application/json');
  headers.set('x-seatpilot-tenant', tenant);
  if (DEFAULT_USER) {
    headers.set('x-seatpilot-user', DEFAULT_USER);
  }

  const response = await fetch(`${API_BASE}${path}`, {
    ...init,
    headers
  });

  if (!response.ok) {
    const error = await response.json().catch(() => null);
    throw new Error(error?.error ?? `Request failed with status ${response.status}`);
  }

  return response.json() as Promise<T>;
}

export interface Venue {
  id: string;
  name: string;
  location: {
    countryCode: string;
    region: string | null;
    city: string | null;
    locality: string | null;
    address: string | null;
    latitude: number | null;
    longitude: number | null;
  };
  tags: string[];
  capacityHint: number | null;
  createdAt: string;
  updatedAt: string;
}

export interface PlanSummary {
  id: string;
  venueId: string;
  versionLabel: string;
  status: 'draft' | 'published' | 'archived';
  isPublished: boolean;
  publishedAt: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface PlanMetadata {
  layout?: unknown;
  projectMeta?: unknown;
  displayUnits?: unknown;
}

export interface PlanDetail extends PlanSummary {
  units: 'metric' | 'imperial';
  scale: string | null;
  transform: Record<string, unknown> | null;
  calibration: Record<string, unknown> | null;
  layers: Record<string, unknown> | null;
  checklist: Record<string, unknown> | null;
  metadata: PlanMetadata | null;
  notes: string | null;
}

export interface PlanPayload {
  versionLabel: string;
  units?: 'metric' | 'imperial';
  scale?: string;
  transform?: Record<string, unknown>;
  calibration?: Record<string, unknown>;
  layers?: Record<string, unknown>;
  checklist?: Record<string, unknown>;
  metadata?: PlanMetadata;
  notes?: string;
  isPublished?: boolean;
}

export interface PlanLibraryEntry {
  id: string;
  displayName: string;
  versionLabel: string;
  status: 'draft' | 'published' | 'archived';
  tags: string[];
  thumbnailSvg: string | null;
  ownerId: string | null;
  contentCommitId: string | null;
  updatedAt: string;
  publishedAt: string | null;
  venue: {
    id: string;
    name: string;
    city: string | null;
    region: string | null;
    locality: string | null;
    countryCode: string | null;
    address: string | null;
    tags: string[];
  };
}

export interface PlanLibraryPagination {
  pageSize: number;
  hasMore: boolean;
  nextOffset: number | null;
}

type SearchPlanLibraryParams = {
  q?: string;
  status?: 'draft' | 'published' | 'archived';
  venueId?: string;
  ownerId?: string;
  city?: string;
  tags?: string[];
  limit?: number;
  offset?: number;
};

export async function listVenues(): Promise<Venue[]> {
  const { data } = await request<{ ok: boolean; data: Venue[] }>('/api/venues');
  return data;
}

export async function getVenue(venueId: string): Promise<Venue> {
  const { data } = await request<{ ok: boolean; data: Venue }>(`/api/venues/${venueId}`);
  return data;
}

export async function createVenue(payload: { name: string; city?: string; countryCode?: string }): Promise<Venue> {
  const { data } = await request<{ ok: boolean; data: Venue }>('/api/venues', {
    method: 'POST',
    body: JSON.stringify(payload)
  });
  return data;
}

export async function listPlans(venueId: string): Promise<PlanSummary[]> {
  const { data } = await request<{ ok: boolean; data: PlanSummary[] }>(`/api/venues/${venueId}/plans`);
  return data;
}

export async function savePlan(planId: string, payload: Partial<PlanPayload>): Promise<PlanSummary> {
  const { data } = await request<{ ok: boolean; data: PlanSummary }>(`/api/plans/${planId}`, {
    method: 'PUT',
    body: JSON.stringify(payload)
  });
  return data;
}

export async function createPlan(venueId: string, payload: PlanPayload): Promise<PlanSummary> {
  const { data } = await request<{ ok: boolean; data: PlanSummary }>(`/api/venues/${venueId}/plans`, {
    method: 'POST',
    body: JSON.stringify(payload)
  });
  return data;
}

export async function getPlan(planId: string): Promise<PlanDetail> {
  const { data } = await request<{ ok: boolean; data: PlanDetail }>(`/api/plans/${planId}`);
  return data;
}

export async function publishPlan(planId: string): Promise<PlanSummary> {
  const { data } = await request<{ ok: boolean; data: PlanSummary }>(`/api/plans/${planId}/publish`, {
    method: 'POST'
  });
  return data;
}

export async function searchPlanLibrary(params: SearchPlanLibraryParams = {}): Promise<{
  data: PlanLibraryEntry[];
  pagination: PlanLibraryPagination;
}> {
  const query = new URLSearchParams();
  if (params.q) {
    query.set('q', params.q);
  }
  if (params.status) {
    query.set('status', params.status);
  }
  if (params.venueId) {
    query.set('venueId', params.venueId);
  }
  if (params.ownerId) {
    query.set('ownerId', params.ownerId);
  }
  if (params.city) {
    query.set('city', params.city);
  }
  if (params.tags && params.tags.length > 0) {
    query.set('tags', params.tags.join(','));
  }
  if (params.limit !== undefined) {
    query.set('limit', String(params.limit));
  }
  if (params.offset !== undefined) {
    query.set('offset', String(params.offset));
  }

  const searchPath = query.toString().length > 0 ? `/api/venue-plans?${query.toString()}` : '/api/venue-plans';
  const response = await request<{ ok: boolean; data: PlanLibraryEntry[]; pagination: PlanLibraryPagination }>(searchPath);
  return { data: response.data, pagination: response.pagination };
}
