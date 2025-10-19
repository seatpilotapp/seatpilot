export declare const APP_CHANNEL: readonly ["kiosk", "ops", "guest", "tv"];
export declare const PLATFORM: readonly ["web", "android", "ios", "kiosk"];
export declare const CONFIRM_MODE: readonly ["qr", "tap"];
export declare const STATUS_EXIT: readonly ["OPEN", "CLOSED", "BLOCKED"];
export declare const BROADCAST: readonly ["pa", "screen", "push", "sms", "email"];
export declare const A11Y_RULE: readonly ["contrast_ratio", "focus_trap", "hit_target", "aria_label", "tab_order"];
export declare const OPS_SEVERITY: readonly ["low", "medium", "high", "critical"];
export declare const REASON_REASSIGN: readonly ["vip", "mobility", "group_cohesion", "late_arrival", "capacity_balance", "staff_override"];
export type EnumOf<T extends Readonly<string[]>> = T[number];
export declare function assertEnum<T extends Readonly<string[]>>(value: string, set: T, field: string): asserts value is EnumOf<T>;
//# sourceMappingURL=enums.d.ts.map