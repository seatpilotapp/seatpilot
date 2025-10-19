export const APP_CHANNEL = ['kiosk', 'ops', 'guest', 'tv'];
export const PLATFORM = ['web', 'android', 'ios', 'kiosk'];
export const CONFIRM_MODE = ['qr', 'tap'];
export const STATUS_EXIT = ['OPEN', 'CLOSED', 'BLOCKED'];
export const REASON_REASSIGN = [
    'vip',
    'mobility',
    'group_cohesion',
    'late_arrival',
    'capacity_balance',
    'staff_override'
];
export function assertEnum(value, set, field) {
    if (typeof value !== 'string' || !set.includes(value)) {
        const message = `invalid_enum: ${field}="${value}" not in [${set.join(',')}]`;
        const error = new Error(message);
        error.code = 'INVALID_ENUM';
        error.field = field;
        throw error;
    }
}
