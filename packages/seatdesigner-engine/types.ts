export type ValidationStatus = 'ok' | 'warn' | 'error';

export type IssueLevel = 'info' | 'warn' | 'error';

export interface SuggestedFix {
  action: string;
  target_id: string;
  description?: string;
  dx_inches?: number;
  dy_inches?: number;
  reference_id?: string;
}

export interface ValidationIssue {
  level: IssueLevel;
  code: string;
  message: string;
  hint?: string;
  fix?: SuggestedFix;
}

export interface ValidationResult {
  status: ValidationStatus;
  issues: ValidationIssue[];
}

/**
 * Shared TypeScript contract for the WASM validator.
 * The WASM entry point (`validate_plan_json`) serializes instances of this interface
 * using `serde_json`.
 */
export interface ValidationEngine {
  validatePlanJson(planJson: string): ValidationResult;
}

export declare function ensureWasm(): Promise<void>;
export declare function validatePlan(planJson: string): Promise<ValidationResult>;
