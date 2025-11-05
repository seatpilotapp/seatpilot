export type Tool =
  | "select"
  | "wall"
  | "door"
  | "furniture"
  | "zone"
  | "erase"
  | "text";

export type Point = {
  x: number;
  y: number;
  r?: number;
};

export type Wall = {
  id: string;
  points: Point[];
  width: number; // inches
  material: string;
  fireRating: string;
  accessibilityTag?: string;
};

export type Door = {
  id: string;
  position: Point;
  width: number; // inches
  depth: number; // inches
  rotation: number; // degrees
  swing: "left" | "right";
};

export type Room = {
  id: string;
  points: Point[];
  areaSqFt: number;
  name: string;
};

export type Furniture = {
  id: string;
  typeId: string;
  label: string;
  position: Point;
  width: number; // inches
  depth: number; // inches
  rotation: number; // degrees
  category: string;
  classification?: "FOH" | "BOH" | "shared";
  tags?: string[];
  notes?: string;
};

export type CatalogItem = {
  typeId: string;
  name: string;
  category: string;
  width: number;
  depth: number;
  classification?: "FOH" | "BOH" | "shared";
  notes?: string;
};

export type TextElement = {
  id: string;
  position: Point; // center position
  width: number;
  height: number;
  rotation: number;
  value: string;
  fontSize: number;
};

export type EditorElement = Wall | Door | Room | Furniture;

export type Selection =
  | { type: "wall"; id: string }
  | { type: "door"; id: string }
  | { type: "room"; id: string }
  | { type: "furniture"; id: string }
  | { type: "text"; id: string }
  | null;

export type DisplayUnits = "imperial" | "metric";

export type VertexRef = {
  wallId: string;
  index: number;
};

export type ProjectMeta = {
  title: string;
  drawingNumber: string;
  scale: string;
  northReference: string;
  hasNorthArrow: boolean;
  hasSectionMarkers: boolean;
  dimensionsDocumented: boolean;
  hatchApplied: boolean;
  ceilingJoistsDocumented: boolean;
  notes: string;
};

export type Viewport = {
  zoom: number;
  offsetX: number;
  offsetY: number;
};
