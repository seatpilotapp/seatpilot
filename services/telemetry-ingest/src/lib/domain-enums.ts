export const APP_CHANNEL = ['kiosk', 'ops', 'guest', 'tv'] as const;
export const PLATFORM = ['web', 'android', 'ios', 'kiosk'] as const;
export const CONFIRM_MODE = ['qr', 'tap'] as const;
export const STATUS_EXIT = ['OPEN', 'CLOSED', 'BLOCKED'] as const;
export const REASON_REASSIGN = [
  'vip',
  'mobility',
  'group_cohesion',
  'late_arrival',
  'capacity_balance',
  'staff_override'
] as const;

export type EnumSet = Readonly<string[]>;

export function assertEnum(value: unknown, set: EnumSet, field: string): void {
  if (typeof value !== 'string' || !set.includes(value)) {
    const message = `invalid_enum: ${field}="${value}" not in [${set.join(',')}]`;
    const error = new Error(message) as Error & { code?: string; field?: string };
    error.code = 'INVALID_ENUM';
    error.field = field;
    throw error;
  }
}
