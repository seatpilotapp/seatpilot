"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.REASON_REASSIGN = exports.OPS_SEVERITY = exports.A11Y_RULE = exports.BROADCAST = exports.STATUS_EXIT = exports.CONFIRM_MODE = exports.PLATFORM = exports.APP_CHANNEL = void 0;
exports.assertEnum = assertEnum;
exports.APP_CHANNEL = ['kiosk', 'ops', 'guest', 'tv'];
exports.PLATFORM = ['web', 'android', 'ios', 'kiosk'];
exports.CONFIRM_MODE = ['qr', 'tap'];
exports.STATUS_EXIT = ['OPEN', 'CLOSED', 'BLOCKED'];
exports.BROADCAST = ['pa', 'screen', 'push', 'sms', 'email'];
exports.A11Y_RULE = ['contrast_ratio', 'focus_trap', 'hit_target', 'aria_label', 'tab_order'];
exports.OPS_SEVERITY = ['low', 'medium', 'high', 'critical'];
exports.REASON_REASSIGN = [
    'vip',
    'mobility',
    'group_cohesion',
    'late_arrival',
    'capacity_balance',
    'staff_override'
];
function assertEnum(value, set, field) {
    if (!set.includes(value)) {
        const message = `invalid_enum: ${field}="${value}" not in [${set.join(',')}]`;
        throw Object.assign(new Error(message), { code: 'INVALID_ENUM', field });
    }
}
