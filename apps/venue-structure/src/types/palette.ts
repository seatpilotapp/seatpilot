import type { ReactNode } from "react";

export type PaletteCategoryId =
  | "floorplans"
  | "seating"
  | "stage"
  | "safety"
  | "utilities"
  | "service"
  | "general"
  | "basic";

export interface PaletteCategory {
  id: PaletteCategoryId;
  labelKey: string;
  icon?: ReactNode;
  children?: PaletteCategory[];
}

export type IconSize = "S" | "M" | "L";

export interface PaletteItem {
  id: string;
  categoryId: PaletteCategoryId;
  nameKey: string;
  iconName: string;
  tags: string[];
  defaultProps?: Record<string, unknown>;
  hintKey?: string;
  fallbackName?: string;
}

