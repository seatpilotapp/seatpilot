export class HttpError extends Error {
  readonly status: number;
  readonly code: string;
  readonly details?: unknown;

  constructor(status: number, code: string, message?: string, details?: unknown) {
    super(message ?? code);
    this.status = status;
    this.code = code;
    this.details = details;
  }
}

export function validationError(details: unknown) {
  return new HttpError(400, 'invalid_payload', 'Invalid payload', details);
}

export function notFound(resource: string) {
  return new HttpError(404, 'not_found', `${resource} not found`);
}

export function missingTenant() {
  return new HttpError(400, 'tenant_required', 'Missing x-seatpilot-tenant header');
}
