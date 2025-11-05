import type { Request } from 'express';

const TENANT_HEADER_CANDIDATES = ['x-seatpilot-tenant', 'x-tenant-id'];

export function extractTenantId(req: Request): string | undefined {
  for (const header of TENANT_HEADER_CANDIDATES) {
    const value = req.header(header);
    if (value) {
      return value.trim();
    }
  }
  return undefined;
}
