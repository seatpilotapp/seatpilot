export const APP_CHANNEL = ['kiosk', 'ops', 'guest', 'tv'];
export const PLATFORM = ['web', 'android', 'ios', 'kiosk'];
export const CONFIRM_MODE = ['qr', 'tap'];
export const STATUS_EXIT = ['OPEN', 'CLOSED', 'BLOCKED'];
export const BROADCAST = ['pa', 'screen', 'push', 'sms', 'email'];
export const A11Y_RULE = ['contrast_ratio', 'focus_trap', 'hit_target', 'aria_label', 'tab_order'];
export const OPS_SEVERITY = ['low', 'medium', 'high', 'critical'];
export const REASON_REASSIGN = [
    'vip',
    'mobility',
    'group_cohesion',
    'late_arrival',
    'capacity_balance',
    'staff_override'
];
export function assertEnum(value, set, field) {
    if (!set.includes(value)) {
        const message = `invalid_enum: ${field}="${value}" not in [${set.join(',')}]`;
        throw Object.assign(new Error(message), { code: 'INVALID_ENUM', field });
    }
}
