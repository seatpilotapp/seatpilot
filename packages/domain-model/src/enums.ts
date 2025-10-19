export const APP_CHANNEL = ['kiosk', 'ops', 'guest', 'tv'] as const;
export const PLATFORM = ['web', 'android', 'ios', 'kiosk'] as const;
export const CONFIRM_MODE = ['qr', 'tap'] as const;
export const STATUS_EXIT = ['OPEN', 'CLOSED', 'BLOCKED'] as const;
export const BROADCAST = ['pa', 'screen', 'push', 'sms', 'email'] as const;
export const A11Y_RULE = ['contrast_ratio', 'focus_trap', 'hit_target', 'aria_label', 'tab_order'] as const;
export const OPS_SEVERITY = ['low', 'medium', 'high', 'critical'] as const;
export const REASON_REASSIGN = [
  'vip',
  'mobility',
  'group_cohesion',
  'late_arrival',
  'capacity_balance',
  'staff_override'
] as const;

export type EnumOf<T extends Readonly<string[]>> = T[number];

export function assertEnum<T extends Readonly<string[]>>(value: string, set: T, field: string): asserts value is EnumOf<T> {
  if (!set.includes(value)) {
    const message = `invalid_enum: ${field}="${value}" not in [${set.join(',')}]`;
    throw Object.assign(new Error(message), { code: 'INVALID_ENUM', field });
  }
}
