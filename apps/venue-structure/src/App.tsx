import {
  startTransition,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ChangeEvent
} from "react";
import deepEqual from "fast-deep-equal";
import { useTranslation } from "react-i18next";
import { Toolbar } from "./components/Toolbar";
import { EditorCanvas } from "./components/EditorCanvas";
import { InspectorTabs } from "./components/inspector/InspectorTabs";
import { GuidancePanel } from "./components/GuidancePanel";
import { RulerOverlay } from "./components/RulerOverlay";
import { PlanLibrary } from "./components/PlanLibrary";
import { CommandPalette } from "./components/insert/CommandPalette";
import { InsertMenu } from "./components/insert/InsertMenu";
import { OverlayChips } from "./components/overlays/OverlayChips";
import { LegendBar } from "./components/overlays/LegendBar";
import { PageSetupModal } from "./components/export/PageSetupModal";
import { AppHeader } from "./components/AppHeader";
import { PrintPlan } from "./print/PrintPlan";
import { PrintSummary } from "./print/PrintSummary";
import { persistLanguage } from "./i18n";
import "./print/print.css";
import {
  createPlan,
  createVenue,
  getPlan,
  getVenue,
  listPlans,
  listVenues,
  savePlan,
  type PlanLibraryEntry,
  type PlanDetail,
  type PlanMetadata,
  type PlanSummary,
  type Venue
} from "./utils/api";
import {
  ensureWasm,
  validatePlan,
  type ValidationIssue,
  type ValidationResult
} from "@seatpilot/seatdesigner-engine";
import type {
  DisplayUnits,
  Door,
  Furniture,
  Point,
  ProjectMeta,
  Room,
  Selection,
  Tool,
  Viewport,
  VertexRef,
  TextElement,
  Wall
} from "./types";
import type { CatalogItem } from "./palette/catalog";
import { FurniturePalette } from "./components/FurniturePalette";
import { nextId } from "./utils/id";
import { GRID_SIZE } from "./utils/constants";
import { canvasUnitsToInches, inchesToCanvasUnits } from "./utils/measure";
import { CATALOG_ITEMS, CATEGORIES } from "./palette/catalog";
import { emitDesignerEvent } from "./utils/telemetry";
import { useRecents } from "./components/insert/useRecents";

const INITIAL_UNITS: DisplayUnits = "metric";
const MAX_HISTORY = 50;
const SNAP_THRESHOLD = GRID_SIZE / 2;
const RECENT_TYPES_KEY = "seatpilot.designer.recentTypes";
const MAX_RECENT_TYPES = 8;

const DEFAULT_WALL: Pick<Wall, "width" | "material" | "fireRating"> = {
  width: 24,
  material: "gwb",
  fireRating: "NR"
};

const DEFAULT_DOOR: Pick<Door, "width" | "depth" | "rotation" | "swing"> = {
  width: 36,
  depth: 6,
  rotation: 0,
  swing: "right"
};

const DEFAULT_TEXT_CONTENT = "Add notes here...";
const DEFAULT_TEXT_WIDTH = GRID_SIZE * 6;
const DEFAULT_TEXT_HEIGHT = GRID_SIZE * 3;
const MIN_TEXT_WIDTH = GRID_SIZE * 2;
const MIN_TEXT_HEIGHT = GRID_SIZE * 1.5;

type Layout = {
  walls: Wall[];
  doors: Door[];
  rooms: Room[];
  furniture: Furniture[];
  texts: TextElement[];
};

const EMPTY_LAYOUT: Layout = {
  walls: [],
  doors: [],
  rooms: [],
  furniture: [],
  texts: []
};

const INITIAL_VIEWPORT: Viewport = {
  zoom: 1,
  offsetX: 0,
  offsetY: 0
};

const DEFAULT_PROJECT_META: ProjectMeta = {
  title: "",
  drawingNumber: "A-102",
  scale: '1/4" = 1\'-0"',
  northReference: "",
  hasNorthArrow: false,
  hasSectionMarkers: false,
  dimensionsDocumented: false,
  hatchApplied: false,
  ceilingJoistsDocumented: false,
  notes: ""
};

const CM_PER_FOOT = 30.48;

function cloneLayout(layout: Layout): Layout {
  return {
    walls: layout.walls.map((wall) => ({
      ...wall,
      points: wall.points.map((p) => ({ ...p }))
    })),
    doors: layout.doors.map((door) => ({
      ...door,
      position: { ...door.position }
    })),
    rooms: layout.rooms.map((room) => ({
      ...room,
      points: room.points.map((p) => ({ ...p }))
    })),
    furniture: layout.furniture.map((item) => ({
      ...item,
      position: { ...item.position }
    })),
    texts: layout.texts.map((text) => ({
      ...text,
      position: { ...text.position }
    }))
  };
}

function normalizeLayoutStructure(candidate: Layout): Layout {
  return {
    walls: Array.isArray(candidate.walls) ? candidate.walls : [],
    doors: Array.isArray(candidate.doors) ? candidate.doors : [],
    rooms: Array.isArray(candidate.rooms) ? candidate.rooms : [],
    furniture: Array.isArray(candidate.furniture) ? candidate.furniture : [],
    texts: Array.isArray(candidate.texts) ? candidate.texts : []
  };
}

function normalizePolygon(points: Point[]): Point[] {
  if (points.length > 1) {
    const first = points[0];
    const last = points[points.length - 1];
    if (first.x === last.x && first.y === last.y) {
      return points.slice(0, -1);
    }
  }
  return points;
}

function pointsMatch(a: Point[], b: Point[], tolerance = 0.5): boolean {
  if (a.length !== b.length) {
    return false;
  }
  return a.every(
    (point, index) =>
      Math.abs(point.x - b[index].x) <= tolerance &&
      Math.abs(point.y - b[index].y) <= tolerance
  );
}

function pointsEqual(a: Point, b: Point, tolerance = 0.5): boolean {
  return Math.abs(a.x - b.x) <= tolerance && Math.abs(a.y - b.y) <= tolerance;
}

function cmToCanvasUnits(cm: number): number {
  return (cm / CM_PER_FOOT) * GRID_SIZE;
}

function groupRefsByWall(refs: VertexRef[]): Map<string, Set<number>> {
  const map = new Map<string, Set<number>>();
  refs.forEach((ref) => {
    const set = map.get(ref.wallId);
    if (set) {
      set.add(ref.index);
    } else {
      map.set(ref.wallId, new Set([ref.index]));
    }
  });
  return map;
}

function isClosedLoop(points: Point[]): boolean {
  if (points.length < 2) {
    return false;
  }
  return pointsEqual(points[0], points[points.length - 1]);
}

function chamferCorner(points: Point[], index: number, distance: number): {
  points: Point[];
  changed: boolean;
} {
  if (points.length < 3) {
    return { points, changed: false };
  }
  const closed = isClosedLoop(points);
  const lastIndex = points.length - 1;
  const isFirst = index === 0;
  const isLast = index === lastIndex;
  const prevIndex = isFirst ? (closed ? lastIndex - 1 : -1) : index - 1;
  const nextIndex = isLast ? (closed ? 1 : -1) : index + 1;
  if (prevIndex < 0 || nextIndex < 0 || prevIndex >= points.length || nextIndex >= points.length) {
    return { points, changed: false };
  }

  const prev = points[prevIndex];
  const current = points[index];
  const next = points[nextIndex];

  const distPrev = Math.hypot(current.x - prev.x, current.y - prev.y);
  const distNext = Math.hypot(next.x - current.x, next.y - current.y);
  if (distPrev <= 1e-3 || distNext <= 1e-3) {
    return { points, changed: false };
  }

  const maxDistance = Math.min(distPrev, distNext) / 2;
  const effective = Math.min(distance, maxDistance);
  if (!Number.isFinite(effective) || effective <= 0.01) {
    return { points, changed: false };
  }

  const dirPrev = { x: (prev.x - current.x) / distPrev, y: (prev.y - current.y) / distPrev };
  const dirNext = { x: (next.x - current.x) / distNext, y: (next.y - current.y) / distNext };

  const entry: Point = {
    x: current.x + dirPrev.x * effective,
    y: current.y + dirPrev.y * effective,
    r: 0
  };
  const exit: Point = {
    x: current.x + dirNext.x * effective,
    y: current.y + dirNext.y * effective,
    r: 0
  };

  const result = points.slice();
  result.splice(index, 1, entry, exit);

  if (closed) {
    const first = result[0];
    result[result.length - 1] = { ...first };
  }

  if (countUniquePoints(result) < 3) {
    return { points, changed: false };
  }

  return { points: result, changed: true };
}

function computeSemiCircleRadius(points: Point[], index: number): number | null {
  if (points.length < 3) {
    return null;
  }
  const lastIndex = points.length - 1;
  const isClosed = pointsEqual(points[0], points[lastIndex]);
  const isFirst = index === 0;
  const isLast = index === lastIndex;
  const prevIndex = isFirst ? (isClosed ? lastIndex - 1 : -1) : index - 1;
  const nextIndex = isLast ? (isClosed ? 1 : -1) : index + 1;
  if (prevIndex < 0 || nextIndex < 0 || prevIndex >= points.length || nextIndex >= points.length) {
    return null;
  }
  const prev = points[prevIndex];
  const current = points[index];
  const next = points[nextIndex];
  if (pointsEqual(prev, current) || pointsEqual(next, current)) {
    return null;
  }
  const distPrev = Math.hypot(current.x - prev.x, current.y - prev.y);
  const distNext = Math.hypot(next.x - current.x, next.y - current.y);
  if (!Number.isFinite(distPrev) || !Number.isFinite(distNext)) {
    return null;
  }
  const minDistance = Math.min(distPrev, distNext);
  if (minDistance <= 0.01) {
    return null;
  }
  return minDistance / 2;
}

function countUniquePoints(points: Point[]): number {
  if (points.length === 0) {
    return 0;
  }
  if (points.length === 1) {
    return 1;
  }
  let unique = points.length;
  if (pointsEqual(points[0], points[points.length - 1])) {
    unique -= 1;
  }
  return unique;
}

function isLayout(candidate: unknown): candidate is Layout {
  if (!candidate || typeof candidate !== "object") {
    return false;
  }
  const value = candidate as Layout;
  const textsField = (value as { texts?: unknown }).texts;
  const hasTexts = textsField === undefined || Array.isArray(textsField);
  return (
    Array.isArray(value.walls) &&
    Array.isArray(value.doors) &&
    Array.isArray(value.rooms) &&
    Array.isArray(value.furniture) &&
    hasTexts
  );
}

const ADA_ZONE_KEYWORDS = ["ada", "no-place", "noplace", "no place"];

type SerializedZone = {
  id: string;
  name: string;
  kind: string;
  polygon: Array<[number, number]>;
};

function inferZoneKind(roomName: string): string | null {
  const normalized = roomName.trim().toLowerCase();
  if (!normalized) {
    return null;
  }
  const matchesAda = ADA_ZONE_KEYWORDS.every((keyword) => normalized.includes(keyword));
  if (matchesAda) {
    return "ada_no_place";
  }
  if (normalized.includes("ada") && normalized.includes("no")) {
    return "ada_no_place";
  }
  return null;
}

function serializeLayoutForValidation(layout: Layout, units: DisplayUnits) {
  const rooms = layout.rooms.map((room) => {
    const polygon = room.points.map(
      (point) =>
        [
          canvasUnitsToInches(point.x),
          canvasUnitsToInches(point.y)
        ] as [number, number]
    );
    return {
      id: room.id,
      name: room.name,
      polygon
    };
  });

  const zones: SerializedZone[] = rooms
    .map((room): SerializedZone | null => {
      const kind = inferZoneKind(room.name);
      if (!kind) {
        return null;
      }
      return {
        id: room.id,
        name: room.name,
        kind,
        polygon: room.polygon
      };
    })
    .filter((zone): zone is SerializedZone => zone !== null);

  return {
    units,
    rooms,
    zones,
    furniture: layout.furniture.map((item) => ({
      id: item.id,
      typeId: item.typeId,
      category: item.category,
      widthInches: item.width,
      depthInches: item.depth,
      rotationDeg: item.rotation,
      classification: item.classification,
      notes: item.notes,
      center: [
        canvasUnitsToInches(item.position.x),
        canvasUnitsToInches(item.position.y)
      ] as [number, number]
    })),
    layers: {
      envelope: rooms.map((room) => ({
        type: "polygon",
        points: room.polygon
      }))
    }
  };
}

type StoredMetadata = PlanMetadata & {
  layout?: Layout;
  projectMeta?: ProjectMeta;
  displayUnits?: DisplayUnits;
};

export default function App() {
  const canvasWrapperRef = useRef<HTMLDivElement | null>(null);
  const vertexMenuRef = useRef<HTMLDivElement | null>(null);
  const { t, i18n } = useTranslation();
  const locale = i18n.resolvedLanguage ?? i18n.language ?? "es";
  const [layout, setLayout] = useState<Layout>(EMPTY_LAYOUT);
  const [projectMeta, setProjectMeta] =
    useState<ProjectMeta>(() => ({ ...DEFAULT_PROJECT_META }));
  const [currentVenue, setCurrentVenue] = useState<Venue | null>(null);
  const [currentPlan, setCurrentPlan] = useState<PlanDetail | null>(null);
  const historyRef = useRef<Layout[]>([cloneLayout(EMPTY_LAYOUT)]);
  const historyIndexRef = useRef(0);
  const [historyIndex, setHistoryIndex] = useState(0);

  const [activeTool, setActiveTool] = useState<Tool>("select");
  const [displayUnits, setDisplayUnits] = useState<DisplayUnits>(INITIAL_UNITS);
  const [viewport, setViewport] = useState<Viewport>(INITIAL_VIEWPORT);
  const [selectedFurnitureType, setSelectedFurnitureType] =
    useState<string | null>(null);
  const [selection, setSelection] = useState<Selection>(null);
  const [draftPoints, setDraftPoints] = useState<Point[] | null>(null);
  const [hoverPoint, setHoverPoint] = useState<Point | null>(null);
  const [isBootstrapping, setIsBootstrapping] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [lastSavedAt, setLastSavedAt] = useState<Date | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [validation, setValidation] = useState<ValidationResult | null>(null);
  const [pendingFixKey, setPendingFixKey] = useState<string | null>(null);
  const [vertexMenu, setVertexMenu] = useState<
    | {
        position: { x: number; y: number };
        refs: VertexRef[];
      }
    | null
  >(null);
  const [focusedVertex, setFocusedVertex] = useState<{
    refs: VertexRef[];
    clientX?: number;
    clientY?: number;
  } | null>(null);
  const [activeView, setActiveView] = useState<"editor" | "library">("editor");
  const [isPrinting, setIsPrinting] = useState(false);
  const [printedAtLabel, setPrintedAtLabel] = useState<string | null>(null);
  const [isCommandPaletteOpen, setCommandPaletteOpen] = useState(false);
  const [isInsertMenuOpen, setInsertMenuOpen] = useState(false);
  const [overlayState, setOverlayState] = useState({
    capacity: false,
    aisles: false,
    pmr: false,
    safety: false
  });
  const [isPageSetupOpen, setPageSetupOpen] = useState(false);
  const [_pageSetupConfig, setPageSetupConfig] = useState<{
    orientation: "portrait" | "landscape";
    showGrid: boolean;
    showGuides: boolean;
  }>({
    orientation: "portrait",
    showGrid: true,
    showGuides: true
  });
  const [copiedFurnitureStyle, setCopiedFurnitureStyle] = useState<
    Pick<Furniture, "width" | "depth" | "rotation"> | null
  >(null);
  const [inspectorCollapsed, setInspectorCollapsed] = useState(false);
  const [guidanceCollapsed, setGuidanceCollapsed] = useState(false);
  const { ids: recentFurnitureTypes, pushRecent: pushRecentType } = useRecents(
    RECENT_TYPES_KEY
  );
  const languageValue = locale.startsWith("es") ? "es" : "en";

  const savedTimestamp = useMemo(
    () =>
      lastSavedAt
        ? new Intl.DateTimeFormat(locale, { timeStyle: "short" }).format(lastSavedAt)
        : null,
    [lastSavedAt, locale]
  );

  const catalogMap = useMemo(() => {
    const entries = CATALOG_ITEMS.map((item) => [item.typeId, item] as const);
    return new Map(entries);
  }, []);

  const recentPaletteItems = useMemo(
    () =>
      recentFurnitureTypes
        .map((typeId) => catalogMap.get(typeId))
        .filter((item): item is CatalogItem => Boolean(item)),
    [catalogMap, recentFurnitureTypes]
  );

  const northDegrees = useMemo(() => {
    const candidate = Number.parseFloat(projectMeta.northReference);
    return Number.isFinite(candidate) ? candidate : Number.NaN;
  }, [projectMeta.northReference]);

  const legendUnits = displayUnits === "metric" ? "m" : "ft/in";

  const handleInsertMenuSearch = useCallback((value: string) => {
    emitDesignerEvent("insert_search", { queryLen: value.trim().length });
  }, []);

  const addRecentType = useCallback(
    (typeId: string) => {
      pushRecentType(typeId, MAX_RECENT_TYPES);
    },
    [pushRecentType]
  );

  const handleToggleOverlay = useCallback((key: string) => {
    setOverlayState((current) => {
      if (!(key in current)) {
        return current;
      }
      const typedKey = key as keyof typeof current;
      const nextValue = !current[typedKey];
      const next = { ...current, [typedKey]: nextValue };
      emitDesignerEvent("overlay_toggle", { key: typedKey, active: nextValue });
      return next;
    });
  }, []);

  type ApplyPlanOptions = {
    layoutOverride?: Layout;
    displayUnitsOverride?: DisplayUnits;
    projectMetaOverride?: Partial<ProjectMeta>;
  };
  type PendingPlan = {
    detail: PlanDetail;
    options: ApplyPlanOptions;
  };
  const [pendingPlan, setPendingPlan] = useState<PendingPlan | null>(null);

  const applyPlanDetail = useCallback(
    (detail: PlanDetail, options: ApplyPlanOptions = {}) => {
      setPendingPlan({ detail, options });
    },
    []
  );

  useEffect(() => {
    if (!pendingPlan) {
      return;
    }
    const { detail, options } = pendingPlan;
    const metadata = (detail.metadata ?? {}) as StoredMetadata;
    const layoutSource =
      options.layoutOverride ??
      (isLayout(metadata.layout) ? (metadata.layout as Layout) : EMPTY_LAYOUT);
    const sanitizedLayout: Layout = {
      walls: layoutSource.walls ?? [],
      doors: layoutSource.doors ?? [],
      rooms: layoutSource.rooms ?? [],
      furniture: layoutSource.furniture ?? [],
      texts: layoutSource.texts ?? []
    };
    const baseLayout = cloneLayout(sanitizedLayout);

    const projectMetaSource =
      options.projectMetaOverride && Object.keys(options.projectMetaOverride).length > 0
        ? { ...DEFAULT_PROJECT_META, ...options.projectMetaOverride }
        : metadata.projectMeta && typeof metadata.projectMeta === "object"
          ? { ...DEFAULT_PROJECT_META, ...(metadata.projectMeta as Partial<ProjectMeta>) }
          : { ...DEFAULT_PROJECT_META };

    const resolvedUnits =
      options.displayUnitsOverride ??
      (metadata.displayUnits === "metric" || metadata.displayUnits === "imperial"
        ? metadata.displayUnits
        : detail.units === "metric" || detail.units === "imperial"
          ? detail.units
          : INITIAL_UNITS);

    const nextSavedAt = detail.updatedAt ? new Date(detail.updatedAt) : null;

    historyRef.current = [cloneLayout(baseLayout)];
    historyIndexRef.current = 0;

    startTransition(() => {
      setLayout((previous) => (deepEqual(previous, baseLayout) ? previous : baseLayout));
      setProjectMeta((previous) =>
        deepEqual(previous, projectMetaSource) ? previous : projectMetaSource
      );
      setDisplayUnits((previous) => (previous === resolvedUnits ? previous : resolvedUnits));
      setCurrentPlan((previous) =>
        previous && deepEqual(previous, detail) ? previous : detail
      );
      setLastSavedAt((previous) => {
        if (previous === null && nextSavedAt === null) {
          return previous;
        }
        if (previous && nextSavedAt && previous.getTime() === nextSavedAt.getTime()) {
          return previous;
        }
        return nextSavedAt;
      });
      setHistoryIndex(0);
      setSelection(null);
      setDraftPoints(null);
      setHoverPoint(null);
      setVertexMenu(null);
    });

    setPendingPlan(null);
  }, [
    pendingPlan,
    setDraftPoints,
    setDisplayUnits,
    setHistoryIndex,
    setHoverPoint,
    setLayout,
    setProjectMeta,
    setSelection,
    setVertexMenu,
    setCurrentPlan,
    setLastSavedAt
  ]);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        await ensureWasm();
      } catch (err) {
        if (!cancelled) {
          console.error(err);
          setError((err as Error).message);
        }
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    const handleBeforePrint = () => setIsPrinting(true);
    const handleAfterPrint = () => {
      setIsPrinting(false);
      setPrintedAtLabel(null);
    };
    window.addEventListener("beforeprint", handleBeforePrint);
    window.addEventListener("afterprint", handleAfterPrint);

    const mediaQueryList = typeof window.matchMedia === "function" ? window.matchMedia("print") : null;
    const handleMediaChange = (event: MediaQueryListEvent) => {
      if (event.matches) {
        setIsPrinting(true);
      } else {
        setIsPrinting(false);
        setPrintedAtLabel(null);
      }
    };
    if (mediaQueryList) {
      if (typeof mediaQueryList.addEventListener === "function") {
        mediaQueryList.addEventListener("change", handleMediaChange);
      } else if (typeof mediaQueryList.addListener === "function") {
        mediaQueryList.addListener(handleMediaChange);
      }
    }

    return () => {
      window.removeEventListener("beforeprint", handleBeforePrint);
      window.removeEventListener("afterprint", handleAfterPrint);
      if (mediaQueryList) {
        if (typeof mediaQueryList.removeEventListener === "function") {
          mediaQueryList.removeEventListener("change", handleMediaChange);
        } else if (typeof mediaQueryList.removeListener === "function") {
          mediaQueryList.removeListener(handleMediaChange);
        }
      }
    };
  }, []);

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = locale;
    }
  }, [locale]);

  useEffect(() => {
    let cancelled = false;

    async function bootstrap() {
      try {
        setIsBootstrapping(true);
        setError(null);

        let venue: Venue;
        const venues = await listVenues();
        if (venues.length === 0) {
          venue = await createVenue({
            name: "Demo Venue",
            city: "San Juan",
            countryCode: "PR"
          });
        } else {
          venue = venues[0];
        }
        if (cancelled) {
          return;
        }
        setCurrentVenue(venue);

        let planSummary: PlanSummary;
        const plans = await listPlans(venue.id);
        if (plans.length === 0) {
          planSummary = await createPlan(venue.id, {
            versionLabel: "v1",
            units: INITIAL_UNITS,
            metadata: {
              layout: cloneLayout(EMPTY_LAYOUT),
              projectMeta: { ...DEFAULT_PROJECT_META },
              displayUnits: INITIAL_UNITS
            }
          });
        } else {
          planSummary = plans[0];
        }

        const detail = await getPlan(planSummary.id);
        if (cancelled) {
          return;
        }

        const metadata = (detail.metadata ?? {}) as StoredMetadata;
        const storedLayout = isLayout(metadata.layout)
          ? (metadata.layout as Layout)
          : EMPTY_LAYOUT;
        const sanitizedLayout: Layout = {
          walls: storedLayout.walls ?? [],
          doors: storedLayout.doors ?? [],
          rooms: storedLayout.rooms ?? [],
          furniture: storedLayout.furniture ?? [],
          texts: storedLayout.texts ?? []
        };
        const baseLayout = cloneLayout(sanitizedLayout);
        const storedUnits = metadata.displayUnits;
        const resolvedUnits =
          storedUnits === "metric" || storedUnits === "imperial"
            ? storedUnits
            : detail.units === "metric" || detail.units === "imperial"
              ? detail.units
              : INITIAL_UNITS;

        applyPlanDetail(detail, {
          layoutOverride: baseLayout,
          displayUnitsOverride: resolvedUnits
        });

        const validationPayload = serializeLayoutForValidation(baseLayout, resolvedUnits);
        const validationResult = await validatePlan(JSON.stringify(validationPayload));
        if (!cancelled) {
          setValidation(validationResult);
        }
      } catch (err) {
        if (!cancelled) {
          console.error(err);
          setError((err as Error).message);
        }
      } finally {
        if (!cancelled) {
          setIsBootstrapping(false);
        }
      }
    }

    void bootstrap();

    return () => {
      cancelled = true;
    };
  }, [applyPlanDetail]);

  const selected = useMemo(() => {
    if (!selection) {
      return null;
    }
    if (selection.type === "wall") {
      return layout.walls.find((wall) => wall.id === selection.id) ?? null;
    }
    if (selection.type === "door") {
      return layout.doors.find((door) => door.id === selection.id) ?? null;
    }
    if (selection.type === "room") {
      return layout.rooms.find((room) => room.id === selection.id) ?? null;
    }
    if (selection.type === "furniture") {
      return layout.furniture.find((item) => item.id === selection.id) ?? null;
    }
    if (selection.type === "text") {
      return layout.texts.find((item) => item.id === selection.id) ?? null;
    }
    return null;
  }, [layout, selection]);

  const canUndo = historyIndexRef.current > 0;
  const canRedo =
    historyIndexRef.current < historyRef.current.length - 1 &&
    historyRef.current.length > 1;

  const applyLayoutChange = useCallback(
    (mutator: (current: Layout) => Layout): Layout => {
      let nextLayout: Layout | null = null;
      let encounteredError: Error | null = null;

      setLayout((current) => {
        try {
          const nextRaw = mutator(current);
          if (!nextRaw || typeof nextRaw !== "object") {
            throw new Error("Layout mutator returned an invalid layout.");
          }
          const next = normalizeLayoutStructure(nextRaw as Layout);

          const snapshot = cloneLayout(next);
          const history = historyRef.current
            .slice(0, historyIndexRef.current + 1)
            .concat(snapshot);
          if (history.length > MAX_HISTORY) {
            history.shift();
          }
          historyRef.current = history;
          historyIndexRef.current = history.length - 1;
          setHistoryIndex(historyIndexRef.current);
          nextLayout = next;
          return next;
        } catch (error) {
          const normalized =
            error instanceof Error ? error : new Error(String(error ?? "Unknown layout error"));
          encounteredError = normalized;
          console.error("[SeatPilot] Layout update failed", normalized);
          if (typeof window !== "undefined") {
            const win = window as unknown as {
              __seatpilotLayoutErrors?: Array<{ message: string; stack?: string; ts: number }>;
            };
            if (!Array.isArray(win.__seatpilotLayoutErrors)) {
              win.__seatpilotLayoutErrors = [];
            }
            win.__seatpilotLayoutErrors.push({
              message: normalized.message,
              stack: normalized.stack,
              ts: Date.now()
            });
          }
          nextLayout = current;
          return current;
        }
      });

      if (encounteredError) {
        setError((prev) =>
          encounteredError && encounteredError.message
            ? encounteredError.message
            : prev ?? "No pudimos actualizar el plano. Revisa los últimos cambios."
        );
      }

      if (!nextLayout) {
        return historyRef.current[historyIndexRef.current] ?? cloneLayout(EMPTY_LAYOUT);
      }
      return nextLayout;
    },
    [setError]
  );

  const runValidationForLayout = useCallback(
    async (candidate: Layout) => {
      const validationPayload = serializeLayoutForValidation(candidate, displayUnits);
      const validationResult = await validatePlan(JSON.stringify(validationPayload));
      setValidation(validationResult);
      return validationResult;
    },
    [displayUnits]
  );

  const handleUndo = useCallback(() => {
    if (!canUndo) {
      return;
    }
    const newIndex = historyIndexRef.current - 1;
    historyIndexRef.current = newIndex;
    const snapshot = historyRef.current[newIndex];
    setLayout(cloneLayout(snapshot));
    setHistoryIndex(newIndex);
    setSelection(null);
  }, [canUndo]);

  const handleRedo = useCallback(() => {
    if (!canRedo) {
      return;
    }
    const newIndex = historyIndexRef.current + 1;
    historyIndexRef.current = newIndex;
    const snapshot = historyRef.current[newIndex];
    setLayout(cloneLayout(snapshot));
    setHistoryIndex(newIndex);
    setSelection(null);
  }, [canRedo]);

  const instruction = useMemo(() => {
    if (activeTool === "wall") {
      if (!draftPoints) {
        return "Wall tool • Click to set the first point. Usa Shift para alinear horizontal o vertical.";
      }
      if (draftPoints.length === 1) {
        return "Wall tool • Click to continuar. Shift = líneas rectas · Double-click o Enter = finalizar.";
      }
      return "Wall tool • Click para agregar segmentos (se ajusta a paredes cercanas). Shift=recto · Double-click/Enter=finish · Esc=cancel · Backspace=undo.";
    }
    if (activeTool === "door") {
      return "Door tool • Click to place a door. Adjust width/rotation in the inspector.";
    }
    if (activeTool === "furniture") {
      if (!selectedFurnitureType) {
        return "Furniture tool • Selecciona un elemento en la paleta y haz clic en el lienzo para colocarlo.";
      }
      const base = catalogMap.get(selectedFurnitureType);
      const label = base ? t(base.nameKey, base.fallbackName) : selectedFurnitureType;
      return `Furniture tool • Haz clic para colocar ${label}. Usa el inspector para ajustar posición y rotación.`;
    }
    if (activeTool === "text") {
      return "Text tool • Haz clic para insertar una nota. Ajusta tamaño y rotación con los manejos, edita el contenido en el inspector.";
    }
    if (activeTool === "erase") {
      return "Eraser tool • Haz clic sobre una pared para eliminarla (Shift mantiene snap activo).";
    }
    return "Select tool • Click an element to inspect and edit its properties. Alt+click sobre un tramo inserta un vértice.";
  }, [activeTool, catalogMap, draftPoints, selectedFurnitureType, t]);

  const handlePointAdd = useCallback(
    (point: Point, options?: { constrainAxis?: boolean }) => {
      if (activeTool !== "wall") {
        return;
      }
      setDraftPoints((current) => {
        const draft = current ?? [];
        let nextPoint: Point = { ...point };

        if (options?.constrainAxis && draft.length > 0) {
          const last = draft[draft.length - 1];
          const deltaX = Math.abs(nextPoint.x - last.x);
          const deltaY = Math.abs(nextPoint.y - last.y);
          nextPoint =
            deltaX > deltaY
              ? { x: nextPoint.x, y: last.y }
              : { x: last.x, y: nextPoint.y };
        }

        const snapCandidate = (candidate: Point): Point => {
          let snapped = candidate;
          let bestDistance = SNAP_THRESHOLD;
          const consider = (p: Point) => {
            const distance = Math.hypot(candidate.x - p.x, candidate.y - p.y);
            if (distance < bestDistance) {
              snapped = { x: p.x, y: p.y };
              bestDistance = distance;
            }
          };
          if (draft.length > 0) {
            consider(draft[0]);
            consider(draft[draft.length - 1]);
          }
          layout.walls.forEach((wall) => {
            wall.points.forEach(consider);
          });
          return snapped;
        };

        const adjusted = snapCandidate(nextPoint);

        if (draft.length > 0) {
          const lastPoint = draft[draft.length - 1];
          if (lastPoint.x === adjusted.x && lastPoint.y === adjusted.y) {
            return draft;
          }
        }

        return [...draft, adjusted];
      });
    },
    [activeTool, layout.walls]
  );

  const handleHoverPoint = useCallback(
    (point: Point | null, options?: { constrainAxis?: boolean }) => {
      if (!point) {
        setHoverPoint(null);
        return;
      }
      if (activeTool !== "wall" || !draftPoints || draftPoints.length === 0) {
        setHoverPoint({ ...point });
        return;
      }
      const last = draftPoints[draftPoints.length - 1];
      let nextPoint: Point = { ...point };
      if (options?.constrainAxis) {
        const deltaX = Math.abs(nextPoint.x - last.x);
        const deltaY = Math.abs(nextPoint.y - last.y);
        nextPoint =
          deltaX > deltaY
            ? { x: nextPoint.x, y: last.y }
            : { x: last.x, y: nextPoint.y };
      }
      let bestDistance = SNAP_THRESHOLD;
      let snapped = nextPoint;
      const consider = (candidate: Point) => {
        const distance = Math.hypot(nextPoint.x - candidate.x, nextPoint.y - candidate.y);
        if (distance < bestDistance) {
          bestDistance = distance;
          snapped = { x: candidate.x, y: candidate.y };
        }
      };
      consider(last);
      consider(draftPoints[0]);
      layout.walls.forEach((wall) => wall.points.forEach(consider));
      setHoverPoint(snapped);
    },
    [activeTool, draftPoints, layout.walls]
  );

  const finalizeDraft = useCallback(() => {
    setDraftPoints((current) => {
      if (!current || current.length < 2) {
        return null;
      }
      const roomCandidate = createRoomFromPoints(current);
      const wallPoints = roomCandidate
        ? [...roomCandidate.points, roomCandidate.points[0]]
        : current;
      const newWallId = nextId("wall");

      applyLayoutChange((layoutDraft) => ({
        ...layoutDraft,
        walls: [
          ...layoutDraft.walls,
          {
            id: newWallId,
            points: wallPoints.map((p) => ({ ...p })),
            width: DEFAULT_WALL.width,
            material: DEFAULT_WALL.material,
            fireRating: DEFAULT_WALL.fireRating
          }
        ],
        rooms: roomCandidate
          ? [
              ...layoutDraft.rooms,
              {
                ...roomCandidate,
                name: roomCandidate.name || `Room ${layoutDraft.rooms.length + 1}`
              }
            ]
          : layoutDraft.rooms
      }));

      setSelection({ type: "wall", id: newWallId });
      return null;
    });
    setHoverPoint(null);
  }, [applyLayoutChange]);

  const updateWall = useCallback(
    (wallId: string, updates: Partial<Wall>) => {
      applyLayoutChange((current) => {
        const existing = current.walls.find((wall) => wall.id === wallId);
        if (!existing) {
          return current;
        }
        const updatedPoints = updates.points
          ? updates.points.map((p) => ({ ...p }))
          : existing.points.map((p) => ({ ...p }));

        const nextWalls = current.walls.map((wall) =>
          wall.id === wallId
            ? {
                ...wall,
                ...updates,
                points: updatedPoints
              }
            : wall
        );

        let nextRooms = current.rooms;
        if (updates.points) {
          const normalizedOriginal = normalizePolygon(existing.points);
          const normalizedUpdated = normalizePolygon(updatedPoints);
          nextRooms = current.rooms.map((room) =>
            pointsMatch(room.points, normalizedOriginal)
              ? {
                  ...room,
                  points: normalizedUpdated.map((point) => ({ ...point }))
                }
              : room
          );
        }

        return {
          ...current,
          walls: nextWalls,
          rooms: nextRooms
        };
      });
    },
    [applyLayoutChange]
  );

  const updateDoor = useCallback(
    (doorId: string, updates: Partial<Door>) => {
      applyLayoutChange((current) => ({
        ...current,
        doors: current.doors.map((door) =>
          door.id === doorId
            ? {
                ...door,
                ...updates,
                position: updates.position ?? door.position
              }
            : door
        )
      }));
    },
    [applyLayoutChange]
  );

  const updateRoom = useCallback(
    (roomId: string, updates: Partial<Room>) => {
      applyLayoutChange((current) => ({
        ...current,
        rooms: current.rooms.map((room) =>
          room.id === roomId
            ? {
                ...room,
                ...updates,
                points: updates.points ?? room.points
              }
            : room
        )
      }));
    },
    [applyLayoutChange]
  );

  const updateFurniture = useCallback(
    (furnitureId: string, updates: Partial<Furniture>) => {
      applyLayoutChange((current) => ({
        ...current,
        furniture: current.furniture.map((item) =>
          item.id === furnitureId
            ? {
                ...item,
                ...updates,
                position: updates.position ?? item.position
              }
            : item
        )
      }));
    },
    [applyLayoutChange]
  );

  const handleCopyFurnitureStyle = useCallback(() => {
    if (selection?.type !== "furniture" || !selected || selection.type !== "furniture") {
      return;
    }
    const furniture = selected as Furniture;
    setCopiedFurnitureStyle({
      width: furniture.width,
      depth: furniture.depth,
      rotation: furniture.rotation
    });
  }, [selected, selection]);

  const handlePasteFurnitureStyle = useCallback(() => {
    if (selection?.type !== "furniture" || !selection.id || !copiedFurnitureStyle) {
      return;
    }
    updateFurniture(selection.id, {
      width: copiedFurnitureStyle.width,
      depth: copiedFurnitureStyle.depth,
      rotation: copiedFurnitureStyle.rotation
    });
  }, [copiedFurnitureStyle, selection, updateFurniture]);

  const updateText = useCallback(
    (textId: string, updates: Partial<TextElement>) => {
      applyLayoutChange((current) => ({
        ...current,
        texts: current.texts.map((text) =>
          text.id === textId
            ? {
                ...text,
                ...updates,
                position: updates.position
                  ? { ...updates.position }
                  : text.position
              }
            : text
        )
      }));
    },
    [applyLayoutChange]
  );

  const handlePlaceText = useCallback(
    (point: Point) => {
      const snapped = {
        x: Math.round(point.x / GRID_SIZE) * GRID_SIZE,
        y: Math.round(point.y / GRID_SIZE) * GRID_SIZE
      };
      const newText: TextElement = {
        id: nextId("text"),
        position: snapped,
        width: DEFAULT_TEXT_WIDTH,
        height: DEFAULT_TEXT_HEIGHT,
        rotation: 0,
        value: DEFAULT_TEXT_CONTENT,
        fontSize: 16
      };
      applyLayoutChange((current) => ({
        ...current,
        texts: [...current.texts, newText]
      }));
      setSelection({ type: "text", id: newText.id });
    },
    [applyLayoutChange]
  );

  const handleRemoveText = useCallback(
    (textId: string) => {
      applyLayoutChange((current) => ({
        ...current,
        texts: current.texts.filter((text) => text.id !== textId)
      }));
    },
    [applyLayoutChange]
  );

  const handlePlaceDoor = useCallback(
    (point: Point) => {
      const newDoor: Door = {
        id: nextId("door"),
        position: point,
        width: DEFAULT_DOOR.width,
        depth: DEFAULT_DOOR.depth,
        rotation: DEFAULT_DOOR.rotation,
        swing: DEFAULT_DOOR.swing
      };
      applyLayoutChange((current) => ({
        ...current,
        doors: [...current.doors, newDoor]
      }));
      setSelection({ type: "door", id: newDoor.id });
    },
    [applyLayoutChange]
  );

  const handlePlaceFurniture = useCallback(
    (point: Point) => {
      if (!selectedFurnitureType) {
        return;
      }
      const base = catalogMap.get(selectedFurnitureType);
      if (!base) {
        return;
      }
      const newFurniture: Furniture = {
        id: nextId("furn"),
        typeId: base.typeId,
        label: t(base.nameKey, base.fallbackName),
        position: point,
        width: base.widthInches,
        depth: base.depthInches,
        rotation: 0,
        category: t(`palette.${base.categoryId}`, base.categoryLabel),
        classification: base.classification,
        notes: base.notes
      };
      applyLayoutChange((current) => ({
        ...current,
        furniture: [...current.furniture, newFurniture]
      }));
      setSelection({ type: "furniture", id: newFurniture.id });
      addRecentType(base.typeId);
    },
    [addRecentType, applyLayoutChange, catalogMap, selectedFurnitureType, t]
  );

  const handleToolSwitch = useCallback((tool: Tool) => {
    setActiveTool(tool);
    setDraftPoints(null);
    setHoverPoint(null);
    setVertexMenu(null);
    if (tool !== "furniture") {
      setSelectedFurnitureType(null);
    }
  }, []);

  const handleViewportChange = useCallback((next: Viewport) => {
    setViewport(next);
  }, []);

  const handleZoomIn = useCallback(() => {
    setViewport((current) => ({
      ...current,
      zoom: Math.min(current.zoom * 1.06, 5)
    }));
  }, []);

  const handleZoomOut = useCallback(() => {
    setViewport((current) => ({
      ...current,
      zoom: Math.max(current.zoom / 1.06, 0.2)
    }));
  }, []);

  const handleResetView = useCallback(() => {
    setViewport(INITIAL_VIEWPORT);
  }, []);

  const handleProjectMetaChange = useCallback(
    (updates: Partial<ProjectMeta>) => {
      setProjectMeta((current) => ({
        ...current,
        ...updates
      }));
    },
    []
  );

  const handleCheckAccessibility = useCallback(() => {
    void runValidationForLayout(layout);
  }, [layout, runValidationForLayout]);

  const handleToggleInsertMenu = useCallback(() => {
    setInsertMenuOpen((current) => {
      const next = !current;
      emitDesignerEvent("insert_open", { via: "button", open: next });
      return next;
    });
  }, []);

  const handleCloseInsertMenu = useCallback(() => {
    emitDesignerEvent("insert_open", { via: "button", open: false });
    setInsertMenuOpen(false);
  }, []);

  const handleOpenCommandPalette = useCallback(() => {
    emitDesignerEvent("insert_open", { via: "cmdk" });
    setInsertMenuOpen(false);
    setCommandPaletteOpen(true);
  }, []);

  const handleCloseCommandPalette = useCallback(() => {
    setCommandPaletteOpen(false);
  }, []);

  const activateCatalogItem = useCallback(
    (item: CatalogItem, source: "palette" | "menu" | "dock") => {
      setActiveView("editor");
      setActiveTool("furniture");
      setSelectedFurnitureType(item.typeId);
      addRecentType(item.typeId);
      emitDesignerEvent("insert_pick", {
        itemId: item.typeId,
        categoryId: item.categoryId,
        via: source
      });
      if (source === "palette") {
        setCommandPaletteOpen(false);
      } else {
        setInsertMenuOpen(false);
      }
    },
    [addRecentType, t]
  );

  const handleCommandPaletteSelect = useCallback(
    (item: CatalogItem) => {
      activateCatalogItem(item, "palette");
    },
    [activateCatalogItem]
  );

  const handleInsertMenuSelect = useCallback(
    (item: CatalogItem) => {
      activateCatalogItem(item, "menu");
    },
    [activateCatalogItem]
  );

  const handleApplyFix = useCallback(
    async (issue: ValidationIssue) => {
      const fix = issue.fix;
      if (!fix || fix.action !== "offset" || fix.dx_inches == null || fix.dy_inches == null) {
        return;
      }
      const targetId = fix.target_id;
      if (!targetId) {
        return;
      }
      const fixKey = `${issue.code}-${targetId}`;
      if (pendingFixKey === fixKey) {
        return;
      }
      setPendingFixKey(fixKey);
      try {
        const dxCanvas = inchesToCanvasUnits(fix.dx_inches);
        const dyCanvas = inchesToCanvasUnits(fix.dy_inches);
        const nextLayout = applyLayoutChange((current) => ({
          ...current,
          furniture: current.furniture.map((item) =>
            item.id === targetId
              ? {
                  ...item,
                  position: {
                    ...item.position,
                    x: item.position.x + dxCanvas,
                    y: item.position.y + dyCanvas
                  }
                }
              : item
          )
        }));
        await runValidationForLayout(nextLayout);
        setError(null);
      } catch (err) {
        console.error(err);
        setError((err as Error).message);
      } finally {
        setPendingFixKey(null);
      }
    },
    [applyLayoutChange, pendingFixKey, runValidationForLayout]
  );

  const preparePlanMetadata = useCallback(async (): Promise<StoredMetadata> => {
    const validationResult = await runValidationForLayout(layout);
    if (validationResult.status === "error") {
      const blocking = validationResult.issues.find((issue) => issue.level === "error");
      throw new Error(blocking?.message ?? "El plano tiene errores de validación.");
    }

    return {
      layout: cloneLayout(layout),
      projectMeta,
      displayUnits
    };
  }, [layout, projectMeta, runValidationForLayout]);

  const handleExport = useCallback(async () => {
    try {
      const metadata = await preparePlanMetadata();
      const payload = {
        layout: metadata.layout,
        displayUnits,
        projectMeta: metadata.projectMeta ?? projectMeta,
        exportedAt: new Date().toISOString()
      };
      const blob = new Blob([JSON.stringify(payload, null, 2)], {
        type: "application/json"
      });
      const url = URL.createObjectURL(blob);
      const anchor = document.createElement("a");
      anchor.href = url;
      anchor.download = `seatpilot-layout-${Date.now()}.json`;
      anchor.click();
      URL.revokeObjectURL(url);
      setError(null);
    } catch (err) {
      setError((err as Error).message);
    }
  }, [displayUnits, preparePlanMetadata, projectMeta]);

  const handleSavePlan = useCallback(async () => {
    if (!currentPlan) {
      return;
    }
    setIsSaving(true);
    try {
      const metadata = await preparePlanMetadata();
      await savePlan(currentPlan.id, {
        units: displayUnits,
        metadata,
        notes: projectMeta.notes
      });

      const refreshed = await getPlan(currentPlan.id);
      setCurrentPlan(refreshed);
      setLastSavedAt(refreshed.updatedAt ? new Date(refreshed.updatedAt) : new Date());
      setError(null);
    } catch (err) {
      console.error(err);
      setError((err as Error).message);
    } finally {
      setIsSaving(false);
    }
  }, [currentPlan, displayUnits, preparePlanMetadata, projectMeta.notes]);

  const handleSaveAs = useCallback(async () => {
    if (!currentPlan || !currentVenue) {
      return;
    }
    const suggested = `${currentPlan.versionLabel} copia`;
    const versionLabelInput = window.prompt("Guardar como…", suggested);
    const versionLabel = versionLabelInput?.trim();
    if (!versionLabel) {
      return;
    }
    setIsSaving(true);
    try {
      const metadata = await preparePlanMetadata();
      const createdPlan = await createPlan(currentVenue.id, {
        versionLabel,
        units: displayUnits,
        metadata,
        notes: projectMeta.notes
      });
      const detail = await getPlan(createdPlan.id);
      applyPlanDetail(detail);
      setValidation(null);
      setError(null);
    } catch (err) {
      console.error(err);
      setError((err as Error).message);
    } finally {
      setIsSaving(false);
    }
  }, [
    applyPlanDetail,
    currentPlan,
    currentVenue,
    displayUnits,
    preparePlanMetadata,
    projectMeta.notes,
    setError,
    setValidation
  ]);

  const handleNewPlan = useCallback(async () => {
    if (!currentVenue) {
      setError("No hay un venue activo para crear un diseño.");
      return;
    }
    if (
      currentPlan &&
      !window.confirm(
        "Esto creará un nuevo diseño en blanco. Los cambios no guardados se perderán. ¿Continuar?"
      )
    ) {
      return;
    }
    const suggestion = `Plan ${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}`;
    const versionLabelInput = window.prompt("Nombre para el nuevo plano", suggestion);
    const versionLabel = versionLabelInput?.trim();
    if (!versionLabel) {
      return;
    }
    setIsSaving(true);
    try {
      const metadata: StoredMetadata = {
        layout: cloneLayout(EMPTY_LAYOUT),
        projectMeta: { ...DEFAULT_PROJECT_META },
        displayUnits
      };
      const createdPlan = await createPlan(currentVenue.id, {
        versionLabel,
        units: displayUnits,
        metadata,
        notes: DEFAULT_PROJECT_META.notes
      });
      const detail = await getPlan(createdPlan.id);
      applyPlanDetail(detail, {
        layoutOverride: cloneLayout(EMPTY_LAYOUT),
        displayUnitsOverride: displayUnits,
        projectMetaOverride: DEFAULT_PROJECT_META
      });
      setActiveTool("select");
      setSelectedFurnitureType(null);
      setValidation(null);
      setError(null);
    } catch (err) {
      console.error(err);
      setError((err as Error).message);
    } finally {
      setIsSaving(false);
    }
  }, [
    applyPlanDetail,
    currentPlan,
    currentVenue,
    displayUnits,
    setActiveTool,
    setSelectedFurnitureType,
    setError,
    setValidation
  ]);

  const handlePrint = useCallback(() => {
    const timestamp = new Intl.DateTimeFormat(locale, {
      dateStyle: "medium",
      timeStyle: "short"
    }).format(new Date());
    setPrintedAtLabel(timestamp);
    setIsPrinting(true);
    // Espera un frame para asegurar que la vista de impresión se renderice.
    setTimeout(() => {
      window.print();
    }, 0);
  }, [locale]);

  const handleExportPdf = useCallback(() => {
    emitDesignerEvent("export_click", { fmt: "pdf" });
    handlePrint();
  }, [handlePrint]);

  const handleExportSvg = useCallback(async () => {
    emitDesignerEvent("export_click", { fmt: "svg" });
    await handleExport();
  }, [handleExport]);

  const handleExportPng = useCallback(async () => {
    emitDesignerEvent("export_click", { fmt: "png" });
    await handleExport();
  }, [handleExport]);

  const handleOpenPageSetup = useCallback(() => {
    emitDesignerEvent("export_click", { fmt: "page_setup" });
    setPageSetupOpen(true);
  }, []);

  const handleClosePageSetup = useCallback(() => {
    setPageSetupOpen(false);
  }, []);

  const handleApplyPageSetup = useCallback(
    (config: { orientation: "portrait" | "landscape"; showGrid: boolean; showGuides: boolean }) => {
      setPageSetupConfig(config);
      setPageSetupOpen(false);
      emitDesignerEvent("page_setup_apply", config);
    },
    []
  );

  const handleLanguageChange = useCallback(
    (event: ChangeEvent<HTMLSelectElement>) => {
      const next = event.target.value;
      if (i18n.language !== next) {
        persistLanguage(next);
        void i18n.changeLanguage(next);
      }
    },
    [i18n]
  );

  const handleOpenLibrary = useCallback(() => {
    setSelection(null);
    setVertexMenu(null);
    setActiveView("library");
  }, []);

  const handleCloseLibrary = useCallback(() => {
    setActiveView("editor");
  }, []);

  const handleSelectLibraryPlan = useCallback(
    async (entry: PlanLibraryEntry) => {
      if (
        currentPlan &&
        !window.confirm(
          "Esto reemplazará el diseño actual. Los cambios no guardados se perderán. ¿Continuar?"
        )
      ) {
        return;
      }
      setIsBootstrapping(true);
      try {
        const [detail, venue] = await Promise.all([getPlan(entry.id), getVenue(entry.venue.id)]);
        setCurrentVenue(venue);
        applyPlanDetail(detail);
        setValidation(null);
        setError(null);
        setActiveTool("select");
        setSelectedFurnitureType(null);
        setActiveView("editor");
      } catch (err) {
        console.error(err);
        setError((err as Error).message);
      } finally {
        setIsBootstrapping(false);
      }
    },
    [
      applyPlanDetail,
      currentPlan,
      setActiveTool,
      setSelectedFurnitureType,
      setError,
      setValidation
    ]
  );

  const handleVertexFocus = useCallback(
    (refs: VertexRef[], clientPosition?: { x: number; y: number }) => {
      if (!refs || refs.length === 0) {
        setFocusedVertex(null);
        return;
      }
      setFocusedVertex({
        refs: refs.map((ref) => ({ ...ref })),
        clientX: clientPosition?.x,
        clientY: clientPosition?.y
      });
    },
    []
  );

  const handleVertexDrag = useCallback(
    (refs: VertexRef[], nextPoint: Point) => {
      if (refs.length === 0) {
        return;
      }
      setVertexMenu(null);
      applyLayoutChange((current) => {
        const updatedWalls = current.walls.map((wall) => {
          const matches = refs.filter((ref) => ref.wallId === wall.id);
          if (matches.length === 0) {
            return wall;
          }
          const points = wall.points.map((point, index) => {
            const hasExplicitMatch = matches.some((ref) => ref.index === index);
            const isClosingPoint =
              index === wall.points.length - 1 &&
              matches.some((ref) => ref.index === 0) &&
              pointsEqual(point, wall.points[0], 0.01);
            if (hasExplicitMatch || isClosingPoint) {
              return { ...point, x: nextPoint.x, y: nextPoint.y };
            }
            return { ...point };
          });
          return {
            ...wall,
            points
          };
        });

        const originalWallMap = new Map(current.walls.map((wall) => [wall.id, wall]));
        const updatedWallMap = new Map(updatedWalls.map((wall) => [wall.id, wall]));

        const updatedRooms = current.rooms.map((room) => {
          let updatedRoom = room;
          refs.forEach((ref) => {
            const originalWall = originalWallMap.get(ref.wallId);
            const nextWall = updatedWallMap.get(ref.wallId);
            if (!originalWall || !nextWall) {
              return;
            }
            const normalizedOriginal = normalizePolygon(originalWall.points);
            if (pointsMatch(room.points, normalizedOriginal)) {
              const normalizedUpdated = normalizePolygon(nextWall.points);
              updatedRoom = {
                ...room,
                points: normalizedUpdated.map((point) => ({ ...point }))
              };
            }
          });
          return updatedRoom;
        });

        return {
          ...current,
          walls: updatedWalls,
          rooms: updatedRooms
        };
      });
    },
    [applyLayoutChange]
  );

  const handleVertexContextMenu = useCallback(
    (refs: VertexRef[], screenPosition: { x: number; y: number }) => {
      if (!canvasWrapperRef.current) {
        return;
      }
      const rect = canvasWrapperRef.current.getBoundingClientRect();
      if (refs.length > 0) {
        setSelection({ type: "wall", id: refs[0].wallId });
        handleVertexFocus(refs, screenPosition);
      }
      setVertexMenu({
        refs,
        position: {
          x: screenPosition.x - rect.left,
          y: screenPosition.y - rect.top
        }
      });
    },
    [handleVertexFocus, setSelection]
  );

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!focusedVertex || focusedVertex.refs.length === 0) {
        return;
      }
      const isShortcut =
        (event.altKey && event.key === "Enter") || (event.ctrlKey && event.key === "Enter");
      if (!isShortcut) {
        return;
      }
      const { clientX, clientY } = focusedVertex;
      if (clientX === undefined || clientY === undefined) {
        return;
      }
      event.preventDefault();
      handleVertexContextMenu(focusedVertex.refs, { x: clientX, y: clientY });
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [focusedVertex, handleVertexContextMenu]);

  const handleInsertVertex = useCallback(
    (wallId: string, segmentIndex: number, point: Point) => {
      applyLayoutChange((current) => {
        const originalWall = current.walls.find((wall) => wall.id === wallId);
        if (!originalWall) {
          return current;
        }
        const points = originalWall.points.map((p) => ({ ...p }));
        const insertionIndex = Math.min(segmentIndex + 1, points.length - 1);
        points.splice(insertionIndex, 0, { x: point.x, y: point.y, r: 0 });
        const updatedWall = {
          ...originalWall,
          points
        };
        const nextWalls = current.walls.map((wall) =>
          wall.id === wallId ? updatedWall : wall
        );

        const normalizedOriginal = normalizePolygon(originalWall.points);
        const normalizedUpdated = normalizePolygon(points);
        const nextRooms = current.rooms.map((room) =>
          pointsMatch(room.points, normalizedOriginal)
            ? {
                ...room,
                points: normalizedUpdated.map((p) => ({ ...p }))
              }
            : room
        );

        return {
          ...current,
          walls: nextWalls,
          rooms: nextRooms
        };
      });
      setSelection({ type: "wall", id: wallId });
      setVertexMenu(null);
    },
    [applyLayoutChange]
  );

  const handleRemoveVertex = useCallback(
    (refs: VertexRef[]) => {
      if (refs.length === 0) {
        return;
      }
      applyLayoutChange((current) => {
        const grouped = new Map<string, number[]>();
        refs.forEach((ref) => {
          const list = grouped.get(ref.wallId) ?? [];
          list.push(ref.index);
          grouped.set(ref.wallId, list);
        });

        let changed = false;
        const originalWallMap = new Map(current.walls.map((wall) => [wall.id, wall]));

        const updatedWalls = current.walls.map((wall) => {
          const indices = grouped.get(wall.id);
          if (!indices || indices.length === 0) {
            return wall;
          }

          const uniqueBefore = countUniquePoints(wall.points);
          if (uniqueBefore <= 3) {
            return wall;
          }

          const uniqueIndices = Array.from(new Set(indices));
          if (uniqueIndices.length >= uniqueBefore) {
            return wall;
          }

          const points = wall.points.map((point) => ({ ...point }));
          const sorted = uniqueIndices.sort((a, b) => b - a);
          sorted.forEach((index) => {
            if (index >= 0 && index < points.length) {
              points.splice(index, 1);
            }
          });

          if (points.length === 0) {
            return wall;
          }

          if (!pointsEqual(points[0], points[points.length - 1])) {
            points.push({ ...points[0] });
          }

          if (countUniquePoints(points) < 3) {
            return wall;
          }

          changed = true;
          return {
            ...wall,
            points
          };
        });

        if (!changed) {
          return current;
        }

        const updatedWallMap = new Map(updatedWalls.map((wall) => [wall.id, wall]));

        const updatedRooms = current.rooms.map((room) => {
          let updatedRoom = room;
          refs.forEach((ref) => {
            const originalWall = originalWallMap.get(ref.wallId);
            const updatedWall = updatedWallMap.get(ref.wallId);
            if (!originalWall || !updatedWall) {
              return;
            }
            const normalizedOriginal = normalizePolygon(originalWall.points);
            if (pointsMatch(room.points, normalizedOriginal)) {
              const normalizedUpdated = normalizePolygon(updatedWall.points);
              if (normalizedUpdated.length >= 3) {
                updatedRoom = {
                  ...room,
                  points: normalizedUpdated.map((point) => ({ ...point }))
                };
              }
            }
          });
          return updatedRoom;
        });

        return {
          ...current,
          walls: updatedWalls,
          rooms: updatedRooms
        };
      });
      setFocusedVertex(null);
    },
    [applyLayoutChange]
  );

  const handleApplyVertexRadius = useCallback(
    (refs: VertexRef[], radius: number) => {
      if (refs.length === 0) {
        return;
      }
      applyLayoutChange((current) => {
        const groups = groupRefsByWall(refs);
        let changed = false;
        const nextWalls = current.walls.map((wall) => {
          const indices = groups.get(wall.id);
          if (!indices || indices.size === 0) {
            return wall;
          }
          let wallChanged = false;
          const points = wall.points.map((point, index) => {
            if (!indices.has(index)) {
              return point;
            }
            const nextPoint = { ...point };
            if (Math.abs(radius) > 0.01) {
              nextPoint.r = radius;
            } else if (nextPoint.r !== undefined) {
              delete nextPoint.r;
            }
            if ((point.r ?? 0) !== (nextPoint.r ?? 0)) {
              wallChanged = true;
            }
            return nextPoint;
          });
          if (!wallChanged) {
            return wall;
          }
          changed = true;
          return {
            ...wall,
            points
          };
        });
        if (!changed) {
          return current;
        }
        return {
          ...current,
          walls: nextWalls
        };
      });
      setVertexMenu(null);
    },
    [applyLayoutChange]
  );

  const handleApplySemiCircle = useCallback(
    (refs: VertexRef[]) => {
      if (refs.length === 0) {
        return;
      }
      applyLayoutChange((current) => {
        const groups = groupRefsByWall(refs);
        let changed = false;
        const nextWalls = current.walls.map((wall) => {
          const indices = groups.get(wall.id);
          if (!indices || indices.size === 0) {
            return wall;
          }
          let wallChanged = false;
          const points = wall.points.slice();
          indices.forEach((index) => {
            if (index < 0 || index >= points.length) {
              return;
            }
            const candidate = computeSemiCircleRadius(points, index);
            const currentRadius = points[index].r ?? 0;
            if (!candidate || candidate <= 0.01) {
              if (Math.abs(currentRadius) > 0.01) {
                const nextPoint = { ...points[index] };
                delete nextPoint.r;
                points[index] = nextPoint;
                wallChanged = true;
              }
              return;
            }
            if (Math.abs(currentRadius - candidate) > 0.01) {
              points[index] = { ...points[index], r: candidate };
              wallChanged = true;
            }
          });
          if (!wallChanged) {
            return wall;
          }
          changed = true;
          return {
            ...wall,
            points
          };
        });
        if (!changed) {
          return current;
        }
        return {
          ...current,
          walls: nextWalls
        };
      });
      setVertexMenu(null);
    },
    [applyLayoutChange]
  );

  const handleApplyChamfer = useCallback(
    (refs: VertexRef[], distance: number) => {
      if (refs.length === 0) {
        return;
      }
      applyLayoutChange((current) => {
        const groups = groupRefsByWall(refs);
        const originalWallMap = new Map(current.walls.map((wall) => [wall.id, wall]));
        let changed = false;
        const updatedWalls = current.walls.map((wall) => {
          const indicesSet = groups.get(wall.id);
          if (!indicesSet || indicesSet.size === 0) {
            return wall;
          }
          const sortedIndices = Array.from(indicesSet).sort((a, b) => b - a);
          const filteredIndices =
            sortedIndices.length > 1 &&
            sortedIndices.includes(0) &&
            sortedIndices.includes(wall.points.length - 1) &&
            pointsEqual(wall.points[0], wall.points[wall.points.length - 1])
              ? sortedIndices.filter((index) => index !== wall.points.length - 1)
              : sortedIndices;
          let wallPoints = wall.points.map((point) => ({ ...point }));
          let wallChanged = false;
          filteredIndices.forEach((index) => {
            if (index < 0 || index >= wallPoints.length) {
              return;
            }
            const result = chamferCorner(wallPoints, index, distance);
            if (result.changed) {
              wallPoints = result.points;
              wallChanged = true;
            }
          });
          if (!wallChanged) {
            return wall;
          }
          changed = true;
          return {
            ...wall,
            points: wallPoints
          };
        });
        if (!changed) {
          return current;
        }
        const updatedWallMap = new Map(updatedWalls.map((wall) => [wall.id, wall]));
        const updatedRooms = current.rooms.map((room) => {
          let updatedRoom = room;
          groups.forEach((_indices, wallId) => {
            const originalWall = originalWallMap.get(wallId);
            const nextWall = updatedWallMap.get(wallId);
            if (!originalWall || !nextWall) {
              return;
            }
            const normalizedOriginal = normalizePolygon(originalWall.points);
            if (pointsMatch(room.points, normalizedOriginal)) {
              const normalizedUpdated = normalizePolygon(nextWall.points);
              if (normalizedUpdated.length >= 3) {
                updatedRoom = {
                  ...room,
                  points: normalizedUpdated.map((point) => ({ ...point }))
                };
              }
            }
          });
          return updatedRoom;
        });
        return {
          ...current,
          walls: updatedWalls,
          rooms: updatedRooms
        };
      });
      setVertexMenu(null);
    },
    [applyLayoutChange]
  );

  useEffect(() => {
    if (!vertexMenu) {
      return;
    }
    const handleMouseDown = (event: MouseEvent) => {
      if (vertexMenuRef.current && vertexMenuRef.current.contains(event.target as Node)) {
        return;
      }
      setVertexMenu(null);
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setVertexMenu(null);
      }
    };
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [vertexMenu]);

  const handleRemoveWall = useCallback(
    (wallId: string) => {
      applyLayoutChange((current) => {
        const wall = current.walls.find((item) => item.id === wallId);
        if (!wall) {
          return current;
        }
        const normalizedWall = normalizePolygon(wall.points);
        return {
          ...current,
          walls: current.walls.filter((item) => item.id !== wallId),
          rooms: current.rooms.filter(
            (room) => !pointsMatch(room.points, normalizedWall)
          )
        };
      });
      setSelection((prev) =>
        prev?.type === "wall" && prev.id === wallId ? null : prev
      );
    },
    [applyLayoutChange]
  );

  const handleDeleteSelection = useCallback(() => {
    if (!selection) {
      return;
    }
    if (selection.type === "wall") {
      handleRemoveWall(selection.id);
      return;
    }
    if (selection.type === "door") {
      applyLayoutChange((current) => ({
        ...current,
        doors: current.doors.filter((door) => door.id !== selection.id)
      }));
    }
    if (selection.type === "room") {
      applyLayoutChange((current) => ({
        ...current,
        rooms: current.rooms.filter((room) => room.id !== selection.id)
      }));
    }
    if (selection.type === "furniture") {
      applyLayoutChange((current) => ({
        ...current,
        furniture: current.furniture.filter((item) => item.id !== selection.id)
      }));
      setSelection(null);
      return;
    }
    if (selection.type === "text") {
      handleRemoveText(selection.id);
      setSelection(null);
      return;
    }
    setSelection(null);
  }, [applyLayoutChange, handleRemoveText, handleRemoveWall, selection]);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (isCommandPaletteOpen) {
        return;
      }
      const key = event.key.toLowerCase();
      if ((event.ctrlKey || event.metaKey) && key === "z") {
        event.preventDefault();
        if (event.shiftKey) {
          handleRedo();
        } else {
          handleUndo();
        }
        return;
      }
      if ((event.ctrlKey || event.metaKey) && key === "y") {
        event.preventDefault();
        handleRedo();
        return;
      }
      if (event.key === "Escape") {
        setDraftPoints(null);
        setSelection(null);
      }
      if (event.key === "Enter") {
        finalizeDraft();
      }
      if (
        event.key === "Backspace" &&
        draftPoints &&
        draftPoints.length > 0
      ) {
        event.preventDefault();
        setDraftPoints((current) => current?.slice(0, -1) ?? null);
        return;
      }
      if (event.key === "Delete" || event.key === "Backspace") {
        if (!draftPoints || draftPoints.length === 0) {
          event.preventDefault();
          handleDeleteSelection();
        }
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [
    draftPoints,
    finalizeDraft,
    handleDeleteSelection,
    handleRedo,
    handleUndo,
    isCommandPaletteOpen
  ]);

  useEffect(() => {
    const handleShortcut = (event: KeyboardEvent) => {
      const key = event.key.toLowerCase();
      const isMeta = event.metaKey || event.ctrlKey;
      if (isMeta && key === "k") {
        event.preventDefault();
        setCommandPaletteOpen(true);
      } else if (!isMeta && !event.altKey && key === "/" && !isCommandPaletteOpen) {
        if (
          event.target instanceof HTMLInputElement ||
          event.target instanceof HTMLTextAreaElement ||
          (event.target as HTMLElement)?.isContentEditable
        ) {
          return;
        }
        event.preventDefault();
        setCommandPaletteOpen(true);
      }
    };
    window.addEventListener("keydown", handleShortcut);
    return () => window.removeEventListener("keydown", handleShortcut);
  }, [isCommandPaletteOpen]);


  const primaryVertexRef = vertexMenu?.refs[0] ?? null;
  const primaryVertexWall = primaryVertexRef
    ? layout.walls.find((wall) => wall.id === primaryVertexRef.wallId)
    : null;
  const primaryPoint =
    primaryVertexRef && primaryVertexWall
      ? primaryVertexWall.points[primaryVertexRef.index]
      : null;
  const primaryCornerValue = primaryPoint?.r ?? 0;
  const primaryCornerMagnitude = Math.abs(primaryCornerValue);
  const primaryCornerSign = Math.sign(primaryCornerValue);
  const primaryCornerDirection =
    primaryCornerMagnitude > 0.01
      ? primaryCornerSign < 0
        ? "afuera"
        : "adentro"
      : null;
  const primaryCornerCandidate =
    primaryVertexRef && primaryVertexWall
      ? computeSemiCircleRadius(primaryVertexWall.points, primaryVertexRef.index)
      : null;
  const canApplySemiCircle =
    primaryVertexRef !== null &&
    primaryCornerCandidate !== null &&
    primaryCornerCandidate > 0.01;
  const currentRadiusCm =
    primaryCornerMagnitude > 0.01
      ? (primaryCornerMagnitude / GRID_SIZE) * CM_PER_FOOT
      : 0;
  const currentRadiusHint =
    primaryCornerDirection !== null
      ? `Radio actual: ${primaryCornerSign < 0 ? "-" : ""}${currentRadiusCm.toFixed(
          1
        )} cm (${primaryCornerDirection})`
      : "Radio actual: recta";
  const hasPrimaryCornerRadius = primaryCornerMagnitude > 0.01;
  const invertCornerLabel = hasPrimaryCornerRadius
    ? primaryCornerDirection === "afuera"
      ? "Invertir radio -> adentro"
      : "Invertir radio -> afuera"
    : "Invertir radio";
  const focusedCornerData = useMemo(() => {
    if (!focusedVertex || focusedVertex.refs.length === 0) {
      return null;
    }
    const primaryRef = focusedVertex.refs[0];
    const wall = layout.walls.find((item) => item.id === primaryRef.wallId);
    if (!wall) {
      return null;
    }
    const point = wall.points[primaryRef.index];
    if (!point) {
      return null;
    }
    const radiusCanvas = point.r ?? 0;
    const candidate = computeSemiCircleRadius(wall.points, primaryRef.index);
    let direction: "adentro" | "afuera" | null = null;
    if (radiusCanvas > 0.01) {
      direction = "adentro";
    } else if (radiusCanvas < -0.01) {
      direction = "afuera";
    }
    return {
      wallId: wall.id,
      index: primaryRef.index,
      radiusCanvas,
      candidateCanvas: candidate ?? null,
      sharedCount: focusedVertex.refs.length,
      direction
    };
  }, [focusedVertex, layout.walls]);

  const handleInspectorCornerRadius = useCallback(
    (radiusCanvas: number) => {
      if (!focusedVertex) {
        return;
      }
      handleApplyVertexRadius(focusedVertex.refs, radiusCanvas);
    },
    [focusedVertex, handleApplyVertexRadius]
  );

  const handleInspectorResetCorner = useCallback(() => {
    handleInspectorCornerRadius(0);
  }, [handleInspectorCornerRadius]);

  const handleInspectorApplyCandidate = useCallback(() => {
    if (!focusedVertex || !focusedCornerData?.candidateCanvas) {
      return;
    }
    handleApplyVertexRadius(focusedVertex.refs, focusedCornerData.candidateCanvas);
  }, [focusedCornerData, focusedVertex, handleApplyVertexRadius]);

  const handleInspectorFlipCorner = useCallback(() => {
    if (!focusedVertex) {
      return;
    }
    const currentRadius = focusedCornerData?.radiusCanvas ?? 0;
    if (Math.abs(currentRadius) > 0.01) {
      handleApplyVertexRadius(focusedVertex.refs, -currentRadius);
      return;
    }
    if (focusedCornerData?.candidateCanvas) {
      handleApplyVertexRadius(focusedVertex.refs, -focusedCornerData.candidateCanvas);
    }
  }, [focusedCornerData, focusedVertex, handleApplyVertexRadius]);

  const handleInspectorChamfer = useCallback(
    (distanceCanvas: number) => {
      if (!focusedVertex) {
        return;
      }
      handleApplyChamfer(focusedVertex.refs, distanceCanvas);
    },
    [focusedVertex, handleApplyChamfer]
  );

  const handleInspectorTabChange = useCallback((tab: "style" | "text" | "arrange") => {
    emitDesignerEvent("inspector_tab", { tab });
  }, []);

  const hasTenantConfigured = Boolean(import.meta.env.VITE_TENANT_ID ?? "");
  if (isBootstrapping) {
    return (
      <div className="app app--loading">
        <div className="app__loading">{t("status.loadingEditor")}</div>
        {error ? <div className="app__loading-error">{error}</div> : null}
      </div>
    );
  }

  const printSection = (
    <div className="print-root" aria-hidden={!isPrinting}>
      <PrintPlan
        layout={layout}
        projectMeta={projectMeta}
        planId={currentPlan?.id ?? null}
        versionLabel={currentPlan?.versionLabel ?? null}
        lastSavedAt={lastSavedAt}
        printedAt={printedAtLabel ?? undefined}
      />
      <PrintSummary
        layout={layout}
        projectMeta={projectMeta}
        validation={validation}
        planId={currentPlan?.id ?? null}
        versionLabel={currentPlan?.versionLabel ?? null}
        printedAt={printedAtLabel ?? undefined}
        displayUnits={displayUnits}
      />
    </div>
  );

  const venueName = currentVenue ? currentVenue.name : t("status.noVenue");
  const planName = currentPlan ? currentPlan.versionLabel : t("toolbar.newPlan");
  const validationStatus = validation?.status ?? null;
  const validationLabel = validation
    ? `Validación: ${validation.status.toUpperCase()}`
    : null;
  const savedStatusLabel = savedTimestamp
    ? t("toolbar.savedAt", { time: savedTimestamp })
    : null;

  return (
    <>
      <div className="app app-root">
        <CommandPalette
          open={isCommandPaletteOpen}
          items={CATALOG_ITEMS}
          recentItems={recentPaletteItems}
          selectedType={selectedFurnitureType}
          onSelect={handleCommandPaletteSelect}
          onClose={handleCloseCommandPalette}
        />
        <InsertMenu
          open={isInsertMenuOpen}
          onClose={handleCloseInsertMenu}
          items={CATALOG_ITEMS}
          categories={CATEGORIES}
          recentItems={recentPaletteItems}
          onPick={handleInsertMenuSelect}
          onSearch={handleInsertMenuSearch}
        />
        <PageSetupModal
          open={isPageSetupOpen}
          onClose={handleClosePageSetup}
          onApply={handleApplyPageSetup}
        />
        <Toolbar
          activeTool={activeTool}
          onSelectTool={handleToolSwitch}
          onUndo={handleUndo}
          onRedo={handleRedo}
          canUndo={canUndo}
          canRedo={canRedo}
          displayUnits={displayUnits}
          onChangeDisplayUnits={setDisplayUnits}
          zoom={viewport.zoom}
          onZoomIn={handleZoomIn}
          onZoomOut={handleZoomOut}
          onResetView={handleResetView}
          onDeleteSelection={handleDeleteSelection}
        />

      <div className="app__center">
        <AppHeader
          venueName={venueName}
          planName={planName}
          onInsert={handleToggleInsertMenu}
          isInsertDisabled={isBootstrapping || activeView !== "editor"}
          onSave={handleSavePlan}
          canSave={Boolean(currentPlan)}
          isSaving={isSaving}
          onSaveAs={handleSaveAs}
          onNewPlan={handleNewPlan}
          libraryOpen={activeView === "library"}
          onOpenLibrary={handleOpenLibrary}
          onCloseLibrary={handleCloseLibrary}
          onExportPdf={handleExportPdf}
          onExportSvg={handleExportSvg}
          onExportPng={handleExportPng}
          onOpenPageSetup={handleOpenPageSetup}
          onPrint={handlePrint}
          languageValue={languageValue}
          onLanguageChange={handleLanguageChange}
          hasTenantConfigured={hasTenantConfigured}
          validationStatus={validationStatus}
          validationLabel={validationLabel}
          savedStatusLabel={savedStatusLabel}
          errorMessage={error}
        />

        {activeView === "editor" && validation && validation.issues.length > 0 ? (
          <div className="app__validation-panel">
            <div className="app__validation-header">
              <div>
                <strong>{validation.status === "error" ? "Problemas críticos" : "Revisiones pendientes"}</strong>
                <span className={`app__validation-pill app__validation-pill--${validation.status}`}>
                  {validation.status.toUpperCase()}
                </span>
              </div>
              <button
                type="button"
                className="app__button app__button--ghost app__validation-refresh"
                onClick={handleCheckAccessibility}
              >
                Revalidar
              </button>
            </div>
            <ul className="app__validation-list">
              {validation.issues.map((issue, index) => {
                const fix = issue.fix;
                const itemKey = `${issue.code}-${index}`;
                const fixKey = fix ? `${issue.code}-${fix.target_id ?? index}` : null;
                const showFix =
                  fix &&
                  fix.action === "offset" &&
                  fix.dx_inches !== undefined &&
                  fix.dy_inches !== undefined;
                return (
                  <li
                    key={itemKey}
                    className={`app__validation-item app__validation-item--${issue.level}`}
                  >
                    <div className="app__validation-copy">
                      <span className="app__validation-code">{issue.code}</span>
                      <p>{issue.message}</p>
                      {issue.hint ? <small>{issue.hint}</small> : null}
                    </div>
                    {showFix ? (
                      <button
                        type="button"
                        className="app__button app__button--secondary app__validation-fix"
                        onClick={() => void handleApplyFix(issue)}
                        disabled={pendingFixKey === fixKey}
                      >
                        {pendingFixKey === fixKey ? "Aplicando…" : "Aplicar fix 0.8 m"}
                      </button>
                    ) : null}
                  </li>
                );
              })}
            </ul>
          </div>
        ) : null}

        {activeView === "library" ? (
          <div className="app__workspace app__workspace--library">
            <PlanLibrary
              onSelect={handleSelectLibraryPlan}
              onClose={handleCloseLibrary}
            />
          </div>
        ) : (
          <>
            {activeTool === "furniture" ? (
              <FurniturePalette
                items={CATALOG_ITEMS}
                selectedType={selectedFurnitureType}
                onSelectType={(typeId) =>
                  setSelectedFurnitureType((prev) => (prev === typeId ? null : typeId))
                }
              />
            ) : null}

            <div className="app__workspace">
              <div className="app__canvas-wrapper" ref={canvasWrapperRef}>
                <OverlayChips
                  state={overlayState}
                  onToggle={handleToggleOverlay}
                  status={validation?.status ?? "ok"}
                />
                <EditorCanvas
                  layout={layout}
                  draftPoints={draftPoints}
                  hoverPoint={hoverPoint}
                  selected={selection}
                  tool={activeTool}
                  displayUnits={displayUnits}
                  viewport={viewport}
                  onViewportChange={handleViewportChange}
                  selectedFurnitureType={selectedFurnitureType}
                  onPointAdd={handlePointAdd}
                  onHoverPoint={handleHoverPoint}
                  onSelectElement={setSelection}
                  onPlaceDoor={handlePlaceDoor}
                  onPlaceFurniture={handlePlaceFurniture}
                  onPlaceText={handlePlaceText}
                  onFinalizeDraft={finalizeDraft}
                  onUpdateDoor={updateDoor}
                  onUpdateFurniture={updateFurniture}
                  onUpdateWall={updateWall}
                  onUpdateText={updateText}
                  onVertexDrag={handleVertexDrag}
                  onVertexContextMenu={handleVertexContextMenu}
                  onVertexFocus={handleVertexFocus}
                  onRemoveWall={handleRemoveWall}
                  onInsertVertex={handleInsertVertex}
                  onUpdateRoom={updateRoom}
                />
                <RulerOverlay
                  viewport={viewport}
                  displayUnits={displayUnits}
                  hoverPoint={hoverPoint}
                />
                <LegendBar scale={projectMeta.scale} northDeg={northDegrees} units={legendUnits} />
                {vertexMenu ? (
                  <div
                    ref={vertexMenuRef}
                    className="context-menu"
                    style={{ left: vertexMenu.position.x, top: vertexMenu.position.y }}
                    onMouseDown={(event) => event.stopPropagation()}
                    onMouseLeave={() => setVertexMenu(null)}
                  >
                    <div className="context-menu__section">
                      <div className="context-menu__label">Esquina</div>
                      {primaryVertexRef ? (
                        <div className="context-menu__hint">{currentRadiusHint}</div>
                      ) : null}
                      <button
                        type="button"
                        className="context-menu__item"
                        onClick={() =>
                          handleApplyVertexRadius(vertexMenu.refs, cmToCanvasUnits(20))
                        }
                      >
                        Redondear 20&nbsp;cm (adentro)
                      </button>
                      <button
                        type="button"
                        className="context-menu__item"
                        onClick={() =>
                          handleApplyVertexRadius(vertexMenu.refs, -cmToCanvasUnits(20))
                        }
                      >
                        Redondear 20&nbsp;cm (afuera)
                      </button>
                      <button
                        type="button"
                        className="context-menu__item"
                        onClick={() =>
                          handleApplyVertexRadius(vertexMenu.refs, cmToCanvasUnits(50))
                        }
                      >
                        Redondear 50&nbsp;cm (adentro)
                      </button>
                      <button
                        type="button"
                        className="context-menu__item"
                        onClick={() =>
                          handleApplyVertexRadius(vertexMenu.refs, -cmToCanvasUnits(50))
                        }
                      >
                        Redondear 50&nbsp;cm (afuera)
                      </button>
                      <button
                        type="button"
                        className="context-menu__item"
                        disabled={!canApplySemiCircle}
                        onClick={() => handleApplySemiCircle(vertexMenu.refs)}
                      >
                        Semicírculo (adentro)
                      </button>
                      <button
                        type="button"
                        className="context-menu__item"
                        disabled={!canApplySemiCircle}
                        onClick={() => {
                          if (primaryCornerCandidate) {
                            handleApplyVertexRadius(vertexMenu.refs, -primaryCornerCandidate);
                          }
                        }}
                      >
                        Semicírculo (afuera)
                      </button>
                      {hasPrimaryCornerRadius ? (
                        <button
                          type="button"
                          className="context-menu__item"
                          onClick={() =>
                            handleApplyVertexRadius(vertexMenu.refs, -primaryCornerValue)
                          }
                        >
                          {invertCornerLabel}
                        </button>
                      ) : null}
                      <button
                        type="button"
                        className="context-menu__item"
                        onClick={() =>
                          handleApplyChamfer(vertexMenu.refs, cmToCanvasUnits(30))
                        }
                      >
                        Chaflán 30&nbsp;cm
                      </button>
                      <button
                        type="button"
                        className="context-menu__item"
                        onClick={() => handleApplyVertexRadius(vertexMenu.refs, 0)}
                      >
                        Volver a recta
                      </button>
                    </div>
                    <div className="context-menu__separator" />
                    <button
                      type="button"
                      className="context-menu__item context-menu__item--danger"
                      onClick={() => {
                        handleRemoveVertex(vertexMenu.refs);
                        setVertexMenu(null);
                      }}
                    >
                      Eliminar vértice
                    </button>
                    <button
                      type="button"
                      className="context-menu__item"
                    onClick={() => setVertexMenu(null)}
                  >
                    Cancelar
                  </button>
                </div>
              ) : null}
            </div>
              <InspectorTabs
                selection={selection}
                selectedElement={selected}
                onChangeWall={(updates) => {
                  if (selection?.type === "wall" && selection.id) {
                    updateWall(selection.id, updates);
                  }
                }}
                onChangeDoor={(updates) => {
                  if (selection?.type === "door" && selection.id) {
                    updateDoor(selection.id, updates);
                  }
                }}
                onChangeRoom={(updates) => {
                  if (selection?.type === "room" && selection.id) {
                    updateRoom(selection.id, updates);
                  }
                }}
                onChangeFurniture={(updates) => {
                  if (selection?.type === "furniture" && selection.id) {
                    updateFurniture(selection.id, updates);
                  }
                }}
                onChangeText={(updates) => {
                  if (selection?.type === "text" && selection.id) {
                    updateText(selection.id, updates);
                  }
                }}
                displayUnits={displayUnits}
                onTabChange={handleInspectorTabChange}
                onCheckAccessibility={handleCheckAccessibility}
                focusedCorner={focusedCornerData}
                onUpdateCornerRadius={handleInspectorCornerRadius}
                onResetCornerRadius={handleInspectorResetCorner}
                onApplyCandidateRadius={handleInspectorApplyCandidate}
                onApplyChamfer={handleInspectorChamfer}
                onFlipCornerRadius={handleInspectorFlipCorner}
                onCopyStyle={
                  selection?.type === "furniture" ? handleCopyFurnitureStyle : undefined
                }
                onPasteStyle={
                  selection?.type === "furniture" && copiedFurnitureStyle
                    ? handlePasteFurnitureStyle
                    : undefined
                }
                collapsed={inspectorCollapsed}
                onToggleCollapse={() => setInspectorCollapsed((current) => !current)}
              />
              <GuidancePanel
                layout={layout}
                displayUnits={displayUnits}
                projectMeta={projectMeta}
                onUpdateProjectMeta={handleProjectMetaChange}
                collapsed={guidanceCollapsed}
                onToggleCollapse={() => setGuidanceCollapsed((current) => !current)}
              />
            </div>
          </>
        )}

        <footer className="app__statusbar">
          <span>{instruction}</span>
          {hoverPoint ? (
            <span className="status-tag">
              Cursor {hoverPoint.x.toFixed(0)}, {hoverPoint.y.toFixed(0)}
            </span>
          ) : null}
            <span className="status-tag">
              Walls: {layout.walls.length} · Doors: {layout.doors.length} · Rooms: {layout.rooms.length} · Furniture: {layout.furniture.length}
            </span>
          </footer>
        </div>
      </div>
      {printSection}
    </>
  );
}

function createRoomFromPoints(points: Point[]): Room | null {
  if (points.length < 3) {
    return null;
  }
  const first = points[0];
  const last = points[points.length - 1];
  const distance = Math.hypot(first.x - last.x, first.y - last.y);
  if (distance > GRID_SIZE / 2) {
    return null;
  }
  const uniquePoints = [...points];
  uniquePoints[uniquePoints.length - 1] = first;
  const polygon = uniquePoints.slice(0, uniquePoints.length - 1);
  const areaUnits = Math.abs(
    polygon.reduce((sum, point, index) => {
      const next = polygon[(index + 1) % polygon.length];
      return sum + (point.x * next.y - next.x * point.y);
    }, 0) / 2
  );
  const areaSqFt = areaUnits / (GRID_SIZE * GRID_SIZE);
  if (areaSqFt < 1) {
    return null;
  }
  return {
    id: nextId("room"),
    points: polygon,
    areaSqFt,
    name: ""
  };
}
