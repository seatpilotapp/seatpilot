import Ajv, { type JSONSchemaType } from 'ajv';

export interface CheckinSuccessPayload {
  session_id: string;
  tenant_id?: string;
  channel?: 'kiosk' | 'ops' | 'guest';
  ts_scan_start_ms?: number;
}

interface ValidationResult {
  ok: true;
  value: CheckinSuccessPayload;
}

interface ValidationErrorResult {
  ok: false;
  errors: Array<{ message?: string; path: string }>;
}

const ajv = new Ajv({
  allErrors: true,
  coerceTypes: true,
  removeAdditional: false,
  strict: false,
  code: { es5: true }
});

const schema: JSONSchemaType<CheckinSuccessPayload> = {
  type: 'object',
  additionalProperties: true,
  required: ['session_id'],
  properties: {
    session_id: { type: 'string', minLength: 1 },
    tenant_id: { type: 'string', minLength: 1, nullable: true },
    channel: { type: 'string', nullable: true, enum: ['kiosk', 'ops', 'guest'] },
    ts_scan_start_ms: {
      type: 'number',
      nullable: true
    }
  }
};

const validate = ajv.compile(schema);

export function parseCheckinSuccessPayload(body: unknown): ValidationResult | ValidationErrorResult {
  if (validate(body)) {
    const payload = body as CheckinSuccessPayload;
    if (payload.tenant_id === null) payload.tenant_id = undefined;
    if (payload.channel === null) payload.channel = undefined;
    if (payload.ts_scan_start_ms === null) payload.ts_scan_start_ms = undefined;
    return { ok: true, value: payload };
  }

  const errors = (validate.errors ?? []).map((error) => ({
    message: error.message,
    path: error.instancePath || error.schemaPath
  }));
  return { ok: false, errors };
}

