import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type {
  PointerEvent as ReactPointerEvent,
  WheelEvent as ReactWheelEvent,
  MouseEvent as ReactMouseEvent
} from "react";
import type {
  DisplayUnits,
  Door,
  Furniture,
  Point,
  Room,
  Selection,
  TextElement,
  Tool,
  Viewport,
  VertexRef,
  Wall
} from "../types";
import { formatLengthInches } from "../utils/measure";
import { GRID_SIZE, VIEWBOX_HEIGHT, VIEWBOX_WIDTH, MIN_WIDTH_INCHES } from "../utils/constants";
import "./EditorCanvas.css";

const HANDLE_SIZE = 10;
const SNAP_THRESHOLD = GRID_SIZE / 2;
const ROTATE_HANDLE_DISTANCE = GRID_SIZE * 1.8;
const ROTATE_SNAP_DEGREES = 15;
const MIN_TEXT_WIDTH = GRID_SIZE * 2;
const MIN_TEXT_HEIGHT = GRID_SIZE * 1.5;
const INSERT_VERTEX_THRESHOLD = GRID_SIZE * 0.75;
const MAX_TEXT_WIDTH = GRID_SIZE * 24;
const MAX_TEXT_HEIGHT = GRID_SIZE * 18;

type VertexHandle = {
  id: string;
  position: Point;
  refs: VertexRef[];
};

type SegmentInsertion = {
  index: number;
  point: Point;
  distance: number;
};

type RotatePreview = {
  center: Point;
  radius: number;
  startAngle: number;
  endAngle: number;
};

function getCanvasScale(svg: SVGSVGElement) {
  const rect = svg.getBoundingClientRect();
  const scaleX = VIEWBOX_WIDTH / rect.width;
  const scaleY = VIEWBOX_HEIGHT / rect.height;
  return { scaleX, scaleY, rect };
}

type Layout = {
  walls: Wall[];
  doors: Door[];
  rooms: Room[];
  furniture: Furniture[];
  texts: TextElement[];
};

type DragState =
  | { type: "none" }
  | {
      type: "pan";
      pointerId: number;
      startCursor: { x: number; y: number };
      startOffset: { x: number; y: number };
    }
  | {
      type: "door";
      pointerId: number;
      id: string;
      pointerOrigin: Point;
      elementOrigin: Point;
    }
  | {
      type: "furniture";
      pointerId: number;
      id: string;
      pointerOrigin: Point;
      elementOrigin: Point;
    }
  | {
      type: "wall";
      pointerId: number;
      id: string;
      pointerOrigin: Point;
      elementOrigin: Point[];
    }
  | {
      type: "door-resize";
      pointerId: number;
      id: string;
      pointerOrigin: Point;
      initialWidthInches: number;
      rotation: number;
    }
  | {
      type: "furniture-resize";
      pointerId: number;
      id: string;
      pointerOrigin: Point;
      axis: "width" | "depth";
      initialWidthInches: number;
      initialDepthInches: number;
      rotation: number;
    }
  | {
      type: "vertex";
      pointerId: number;
      refs: VertexRef[];
      startPoint: Point;
    }
  | {
      type: "door-rotate";
      pointerId: number;
      id: string;
      center: Point;
      initialRotation: number;
      startAngle: number;
    }
  | {
      type: "furniture-rotate";
      pointerId: number;
      id: string;
      center: Point;
      initialRotation: number;
      startAngle: number;
    }
  | {
      type: "text";
      pointerId: number;
      id: string;
      pointerOrigin: Point;
      elementOrigin: Point;
    }
  | {
      type: "text-rotate";
      pointerId: number;
      id: string;
      center: Point;
      initialRotation: number;
      startAngle: number;
    }
  | {
      type: "text-resize";
      pointerId: number;
      id: string;
      center: Point;
      initialSize: { width: number; height: number };
      initialRotation: number;
    };

type EditorCanvasProps = {
  layout: Layout;
  draftPoints: Point[] | null;
  hoverPoint: Point | null;
  selected: Selection;
  tool: Tool;
  displayUnits: DisplayUnits;
  viewport: Viewport;
  onViewportChange: (viewport: Viewport) => void;
  selectedFurnitureType: string | null;
  onPointAdd: (point: Point, options?: { constrainAxis?: boolean }) => void;
  onHoverPoint: (point: Point | null, options?: { constrainAxis?: boolean }) => void;
  onSelectElement: (selection: Selection | null) => void;
  onPlaceDoor: (point: Point) => void;
  onPlaceFurniture: (point: Point) => void;
  onPlaceText: (point: Point) => void;
  onFinalizeDraft: () => void;
  onUpdateDoor: (id: string, updates: Partial<Door>) => void;
  onUpdateFurniture: (id: string, updates: Partial<Furniture>) => void;
  onUpdateWall: (id: string, updates: Partial<Wall>) => void;
  onUpdateText: (id: string, updates: Partial<TextElement>) => void;
  onVertexDrag: (refs: VertexRef[], point: Point, options?: { constrainAxis?: boolean }) => void;
  onVertexContextMenu: (refs: VertexRef[], screenPosition: { x: number; y: number }) => void;
  onVertexFocus?: (refs: VertexRef[], screenPosition?: { x: number; y: number }) => void;
  onRemoveWall: (id: string) => void;
  onInsertVertex: (wallId: string, segmentIndex: number, point: Point) => void;
  onUpdateRoom: (id: string, updates: Partial<Room>) => void;
};

export function EditorCanvas({
  layout,
  draftPoints,
  hoverPoint,
  selected,
  tool,
  displayUnits,
  viewport,
  onViewportChange,
  selectedFurnitureType,
  onPointAdd,
  onHoverPoint,
  onSelectElement,
  onPlaceDoor,
  onPlaceFurniture,
  onPlaceText,
  onFinalizeDraft,
  onUpdateDoor,
  onUpdateFurniture,
  onUpdateWall,
  onUpdateText,
  onVertexDrag,
  onVertexContextMenu,
  onVertexFocus,
  onRemoveWall,
  onInsertVertex
}: EditorCanvasProps) {
  const svgRef = useRef<SVGSVGElement | null>(null);
  const dragStateRef = useRef<DragState>({ type: "none" });
  const [rotatePreview, setRotatePreview] = useState<RotatePreview | null>(null);
  const [editingText, setEditingText] = useState<{
    id: string;
    value: string;
    width: number;
    height: number;
  } | null>(null);

  const vertexHandles = useMemo<VertexHandle[]>(() => {
    const map = new Map<string, { position: Point; refs: VertexRef[] }>();
    layout.walls.forEach((wall) => {
      wall.points.forEach((point, index) => {
        const key = toVertexKey(point);
        let entry = map.get(key);
        if (!entry) {
          entry = { position: { ...point }, refs: [] };
          map.set(key, entry);
        }
        entry.refs.push({ wallId: wall.id, index });
      });
    });
    return Array.from(map.values()).map((entry, idx) => ({
      id: `vertex-${idx}`,
      position: entry.position,
      refs: entry.refs
    }));
  }, [layout.walls]);

  const curvedVertexKeys = useMemo(() => {
    const set = new Set<string>();
    layout.walls.forEach((wall) => {
      wall.points.forEach((point, index) => {
        if (Math.abs(point.r ?? 0) > 0.01) {
          set.add(`${wall.id}:${index}`);
        }
      });
    });
    return set;
  }, [layout.walls]);

  const findRefsForVertex = useCallback(
    (wallId: string, index: number): VertexRef[] => {
      const handle = vertexHandles.find((candidate) =>
        candidate.refs.some((ref) => ref.wallId === wallId && ref.index === index)
      );
      if (handle) {
        return handle.refs;
      }
      return [{ wallId, index }];
    },
    [vertexHandles]
  );

  const clientToCanvasPoint = useCallback(
    (clientX: number, clientY: number): Point => {
      if (!svgRef.current) {
        return { x: 0, y: 0 };
      }
      const { scaleX, scaleY, rect } = getCanvasScale(svgRef.current);
      const viewX = (clientX - rect.left) * scaleX;
      const viewY = (clientY - rect.top) * scaleY;
      return {
        x: (viewX - viewport.offsetX) / viewport.zoom,
        y: (viewY - viewport.offsetY) / viewport.zoom
      };
    },
    [viewport.offsetX, viewport.offsetY, viewport.zoom]
  );

  function getViewCoordinates(event: PointerEvent | WheelEvent): Point {
    if (!svgRef.current) {
      return { x: 0, y: 0 };
    }
    const { scaleX, scaleY, rect } = getCanvasScale(svgRef.current);
    return {
      x: (event.clientX - rect.left) * scaleX,
      y: (event.clientY - rect.top) * scaleY
    };
  }

  function toCanvasPoint(event: PointerEvent | WheelEvent): Point {
    const view = getViewCoordinates(event);
    const x = (view.x - viewport.offsetX) / viewport.zoom;
    const y = (view.y - viewport.offsetY) / viewport.zoom;
    return { x, y };
  }

  const commitTextEdit = useCallback(
    (shouldPersist: boolean) => {
      setEditingText((current) => {
        if (!current) {
          return null;
        }
        if (shouldPersist) {
          const existing = layout.texts.find((text) => text.id === current.id);
          if (existing) {
            const nextWidth = clamp(current.width, MIN_TEXT_WIDTH, MAX_TEXT_WIDTH);
            const nextHeight = clamp(current.height, MIN_TEXT_HEIGHT, MAX_TEXT_HEIGHT);
            const updates: Partial<TextElement> = { value: current.value };
            if (Math.abs(existing.width - nextWidth) > 0.5) {
              updates.width = nextWidth;
            }
            if (Math.abs(existing.height - nextHeight) > 0.5) {
              updates.height = nextHeight;
            }
            if (
              updates.width !== undefined ||
              updates.height !== undefined ||
              existing.value !== current.value
            ) {
              onUpdateText(current.id, updates);
            }
          }
        }
        return null;
      });
    },
    [layout.texts, onUpdateText]
  );

  const handlePointerDown = useCallback(
    (event: ReactPointerEvent<SVGSVGElement>) => {
      if (!svgRef.current) {
        return;
      }
      svgRef.current.setPointerCapture(event.pointerId);
      const point = toCanvasPoint(event.nativeEvent);
      const rawTarget = event.target;
      const elementTarget =
        rawTarget instanceof Element ? rawTarget.closest("[data-element-type]") : null;
      const handleTarget =
        rawTarget instanceof Element ? rawTarget.closest("[data-handle-type]") : null;
      const elementDataset =
        elementTarget && "dataset" in elementTarget
          ? (elementTarget as HTMLElement).dataset
          : undefined;
      const handleDataset =
        handleTarget && "dataset" in handleTarget
          ? (handleTarget as HTMLElement).dataset
          : undefined;
      if (editingText) {
        const editingId = editingText.id;
        const relatedToEditing =
          elementDataset?.elementId === editingId || handleDataset?.elementId === editingId;
        if (!relatedToEditing || handleDataset) {
          commitTextEdit(true);
        }
      }

      if (
        event.button === 0 &&
        tool === "select" &&
        event.altKey &&
        elementDataset?.elementType === "wall" &&
        elementDataset.elementId
      ) {
        const wall = layout.walls.find((w) => w.id === elementDataset.elementId);
        if (wall) {
          const insertion = findInsertionForPoint(wall.points, point);
          if (insertion && insertion.distance <= INSERT_VERTEX_THRESHOLD) {
            onInsertVertex(wall.id, insertion.index, insertion.point);
            return;
          }
        }
      }

      if (event.button === 1 || (event.button === 0 && event.altKey)) {
        const startView = getViewCoordinates(event.nativeEvent);
        dragStateRef.current = {
          type: "pan",
          pointerId: event.pointerId,
          startCursor: startView,
          startOffset: { x: viewport.offsetX, y: viewport.offsetY }
        };
        return;
      }

      if (tool === "wall") {
        if (event.detail > 1 && draftPoints && draftPoints.length >= 2) {
          onFinalizeDraft();
          return;
        }
        onPointAdd(point, { constrainAxis: event.shiftKey });
        return;
      }

      if (tool === "text") {
        if (handleDataset?.handleType === "text-rotate" && handleDataset.elementId) {
          const text = layout.texts.find((t) => t.id === handleDataset.elementId);
          if (text) {
            onSelectElement({ type: "text", id: text.id });
            const center = { ...text.position };
            const startAngle = toAngleDegrees(center, point);
            const radius = computeTextRotateRadius(text);
            dragStateRef.current = {
              type: "text-rotate",
              pointerId: event.pointerId,
              id: text.id,
              center,
              initialRotation: text.rotation,
              startAngle
            };
            setRotatePreview({
              center,
              radius,
              startAngle: text.rotation,
              endAngle: text.rotation
            });
            return;
          }
        }
        if (handleDataset?.handleType === "text-resize" && handleDataset.elementId) {
          const text = layout.texts.find((t) => t.id === handleDataset.elementId);
          if (text) {
            onSelectElement({ type: "text", id: text.id });
            dragStateRef.current = {
              type: "text-resize",
              pointerId: event.pointerId,
              id: text.id,
              center: { ...text.position },
              initialSize: { width: text.width, height: text.height },
              initialRotation: text.rotation
            };
            return;
          }
        }
        if (elementDataset?.elementType === "text" && elementDataset.elementId) {
          const text = layout.texts.find((t) => t.id === elementDataset.elementId);
          if (text) {
            onSelectElement({ type: "text", id: text.id });
            dragStateRef.current = {
              type: "text",
              pointerId: event.pointerId,
              id: text.id,
              pointerOrigin: point,
              elementOrigin: { ...text.position }
            };
            setEditingText(null);
            return;
          }
        }
        onPlaceText(point);
        return;
      }

      if (tool === "door") {
        onPlaceDoor(point);
        return;
      }

      if (tool === "furniture" && selectedFurnitureType) {
        onPlaceFurniture(point);
        return;
      }

      if (tool === "erase") {
        if (elementDataset?.elementType === "wall" && elementDataset.elementId) {
          onRemoveWall(elementDataset.elementId);
        }
        return;
      }

      if (tool === "select") {
        if (handleDataset?.handleType === "vertex" && handleDataset.vertexIndex) {
          const index = Number.parseInt(handleDataset.vertexIndex, 10);
          if (!Number.isNaN(index)) {
            const handle = vertexHandles[index];
            if (handle) {
              if (handle.refs.length > 0) {
                onSelectElement({ type: "wall", id: handle.refs[0].wallId });
              }
              dragStateRef.current = {
                type: "vertex",
                pointerId: event.pointerId,
                refs: handle.refs,
                startPoint: { ...handle.position }
              };
              return;
            }
          }
        }

        if (elementDataset?.elementType === "text" && elementDataset.elementId) {
          const text = layout.texts.find((t) => t.id === elementDataset.elementId);
          if (text) {
            onSelectElement({ type: "text", id: text.id });
            dragStateRef.current = {
              type: "text",
              pointerId: event.pointerId,
              id: text.id,
              pointerOrigin: point,
              elementOrigin: { ...text.position }
            };
            return;
          }
        }

        if (handleDataset?.handleType === "door-rotate" && handleDataset.elementId) {
          const door = layout.doors.find((d) => d.id === handleDataset.elementId);
          if (door) {
            onSelectElement({ type: "door", id: door.id });
            const center = { ...door.position };
            const startAngle = toAngleDegrees(center, point);
            dragStateRef.current = {
              type: "door-rotate",
              pointerId: event.pointerId,
              id: door.id,
              center,
              initialRotation: door.rotation,
              startAngle
            };
            setRotatePreview({
              center,
              radius: ROTATE_HANDLE_DISTANCE,
              startAngle: door.rotation,
              endAngle: door.rotation
            });
            return;
          }
        }

        if (
          handleDataset?.handleType === "furniture-rotate" &&
          handleDataset.elementId
        ) {
          const furniture = layout.furniture.find((f) => f.id === handleDataset.elementId);
          if (furniture) {
            onSelectElement({ type: "furniture", id: furniture.id });
            const center = { ...furniture.position };
            const startAngle = toAngleDegrees(center, point);
            dragStateRef.current = {
              type: "furniture-rotate",
              pointerId: event.pointerId,
              id: furniture.id,
              center,
              initialRotation: furniture.rotation,
              startAngle
            };
            setRotatePreview({
              center,
              radius: ROTATE_HANDLE_DISTANCE,
              startAngle: furniture.rotation,
              endAngle: furniture.rotation
            });
            return;
          }
        }

        if (handleDataset?.handleType === "text-rotate" && handleDataset.elementId) {
          const text = layout.texts.find((t) => t.id === handleDataset.elementId);
          if (text) {
            onSelectElement({ type: "text", id: text.id });
            const center = { ...text.position };
            const startAngle = toAngleDegrees(center, point);
            const radius = computeTextRotateRadius(text);
            dragStateRef.current = {
              type: "text-rotate",
              pointerId: event.pointerId,
              id: text.id,
              center,
              initialRotation: text.rotation,
              startAngle
            };
            setRotatePreview({
              center,
              radius,
              startAngle: text.rotation,
              endAngle: text.rotation
            });
            return;
          }
        }

        if (handleDataset?.handleType === "text-resize" && handleDataset.elementId) {
          const text = layout.texts.find((t) => t.id === handleDataset.elementId);
          if (text) {
            onSelectElement({ type: "text", id: text.id });
            dragStateRef.current = {
              type: "text-resize",
              pointerId: event.pointerId,
              id: text.id,
              center: { ...text.position },
              initialSize: { width: text.width, height: text.height },
              initialRotation: text.rotation
            };
            return;
          }
        }

        if (handleDataset?.handleType === "door-width" && handleDataset.elementId) {
          const door = layout.doors.find((d) => d.id === handleDataset.elementId);
          if (door) {
            onSelectElement({ type: "door", id: door.id });
            dragStateRef.current = {
              type: "door-resize",
              pointerId: event.pointerId,
              id: door.id,
              pointerOrigin: point,
              initialWidthInches: door.width,
              rotation: door.rotation
            };
            return;
          }
        }
        if (handleDataset?.handleType && handleDataset.elementId) {
          const item = layout.furniture.find((f) => f.id === handleDataset.elementId);
          if (item) {
            if (
              handleDataset.handleType === "furniture-width" ||
              handleDataset.handleType === "furniture-depth"
            ) {
              onSelectElement({ type: "furniture", id: item.id });
              dragStateRef.current = {
                type: "furniture-resize",
                pointerId: event.pointerId,
                id: item.id,
                pointerOrigin: point,
                axis: handleDataset.handleType === "furniture-width" ? "width" : "depth",
                initialWidthInches: item.width,
                initialDepthInches: item.depth,
                rotation: item.rotation
              };
              return;
            }
          }
        }

        if (elementDataset?.elementType === "door" && elementDataset.elementId) {
          onSelectElement({ type: "door", id: elementDataset.elementId });
          dragStateRef.current = {
            type: "door",
            pointerId: event.pointerId,
            id: elementDataset.elementId,
            pointerOrigin: point,
            elementOrigin:
              layout.doors.find((door) => door.id === elementDataset.elementId)?.position ??
              point
          };
          return;
        }
        if (elementDataset?.elementType === "furniture" && elementDataset.elementId) {
          onSelectElement({ type: "furniture", id: elementDataset.elementId });
          dragStateRef.current = {
            type: "furniture",
            pointerId: event.pointerId,
            id: elementDataset.elementId,
            pointerOrigin: point,
            elementOrigin:
              layout.furniture.find((item) => item.id === elementDataset.elementId)?.position ??
              point
          };
          return;
        }
        if (elementDataset?.elementType === "room" && elementDataset.elementId) {
          onSelectElement({ type: "room", id: elementDataset.elementId });
          return;
        }
        if (elementDataset?.elementType === "wall" && elementDataset.elementId) {
          onSelectElement({ type: "wall", id: elementDataset.elementId });
          const wall = layout.walls.find((item) => item.id === elementDataset.elementId);
          if (wall) {
            dragStateRef.current = {
              type: "wall",
              pointerId: event.pointerId,
              id: wall.id,
              pointerOrigin: point,
              elementOrigin: wall.points.map((p) => ({ ...p }))
            };
          }
          return;
        }
        onSelectElement(null);
      }
    },
    [
      layout,
      draftPoints,
      onFinalizeDraft,
      onPointAdd,
      onPlaceDoor,
      onPlaceFurniture,
      onPlaceText,
      onRemoveWall,
      onSelectElement,
      selectedFurnitureType,
      tool,
      vertexHandles,
      viewport.offsetX,
      viewport.offsetY,
      onInsertVertex
    ]
  );

  const handlePointerMove = useCallback(
    (event: ReactPointerEvent<SVGSVGElement>) => {
      const dragState = dragStateRef.current;
      const point = toCanvasPoint(event.nativeEvent);

      if (dragState.type === "vertex" && dragState.pointerId === event.pointerId) {
        let nextPoint = { ...point };
        if (event.shiftKey) {
          nextPoint = constrainToAxis(dragState.startPoint, nextPoint);
        }
        const snapped = snapVertexPoint(nextPoint, vertexHandles, dragState.refs);
        onVertexDrag(dragState.refs, snapped, { constrainAxis: event.shiftKey });
        onHoverPoint(snapped);
        return;
      }

      onHoverPoint(point, { constrainAxis: event.shiftKey });

      if (dragState.type === "pan" && dragState.pointerId === event.pointerId) {
        const currentView = getViewCoordinates(event.nativeEvent);
        const delta = {
          x: currentView.x - dragState.startCursor.x,
          y: currentView.y - dragState.startCursor.y
        };
        onViewportChange({
          zoom: viewport.zoom,
          offsetX: dragState.startOffset.x + delta.x,
          offsetY: dragState.startOffset.y + delta.y
        });
        return;
      }

      if (dragState.type === "door" && dragState.pointerId === event.pointerId) {
        onUpdateDoor(dragState.id, {
          position: {
            x: dragState.elementOrigin.x + (point.x - dragState.pointerOrigin.x),
            y: dragState.elementOrigin.y + (point.y - dragState.pointerOrigin.y)
          }
        });
        return;
      }

      if (dragState.type === "door-rotate" && dragState.pointerId === event.pointerId) {
        const angle = computeRotationAngle(dragState.center, point, event.shiftKey);
        onUpdateDoor(dragState.id, { rotation: angle });
        setRotatePreview({
          center: dragState.center,
          radius: ROTATE_HANDLE_DISTANCE,
          startAngle: dragState.initialRotation,
          endAngle: angle
        });
        return;
      }

      if (dragState.type === "furniture" && dragState.pointerId === event.pointerId) {
        onUpdateFurniture(dragState.id, {
          position: {
            x:
              dragState.elementOrigin.x + (point.x - dragState.pointerOrigin.x),
            y:
              dragState.elementOrigin.y + (point.y - dragState.pointerOrigin.y)
          }
        });
        return;
      }

      if (dragState.type === "furniture-rotate" && dragState.pointerId === event.pointerId) {
        const angle = computeRotationAngle(dragState.center, point, event.shiftKey);
        onUpdateFurniture(dragState.id, { rotation: angle });
        setRotatePreview({
          center: dragState.center,
          radius: ROTATE_HANDLE_DISTANCE,
          startAngle: dragState.initialRotation,
          endAngle: angle
        });
        return;
      }

      if (dragState.type === "text" && dragState.pointerId === event.pointerId) {
        const delta = {
          x: point.x - dragState.pointerOrigin.x,
          y: point.y - dragState.pointerOrigin.y
        };
        onUpdateText(dragState.id, {
          position: {
            x: dragState.elementOrigin.x + delta.x,
            y: dragState.elementOrigin.y + delta.y
          }
        });
        return;
      }

      if (dragState.type === "text-rotate" && dragState.pointerId === event.pointerId) {
        const text = layout.texts.find((t) => t.id === dragState.id);
        if (!text) {
          return;
        }
        const angle = computeRotationAngle(dragState.center, point, event.shiftKey);
        onUpdateText(dragState.id, { rotation: angle });
        setRotatePreview({
          center: dragState.center,
          radius: computeTextRotateRadius(text),
          startAngle: dragState.initialRotation,
          endAngle: angle
        });
        return;
      }

      if (dragState.type === "text-resize" && dragState.pointerId === event.pointerId) {
        const text = layout.texts.find((t) => t.id === dragState.id);
        if (!text) {
          return;
        }
        const local = worldToLocal(text.position, text.rotation, point);
        const halfWidth = Math.max(MIN_TEXT_WIDTH / 2, Math.abs(local.x));
        const halfHeight = Math.max(MIN_TEXT_HEIGHT / 2, Math.abs(local.y));
        onUpdateText(dragState.id, {
          width: halfWidth * 2,
          height: halfHeight * 2
        });
        return;
      }

      if (dragState.type === "wall" && dragState.pointerId === event.pointerId) {
        const delta = {
          x: point.x - dragState.pointerOrigin.x,
          y: point.y - dragState.pointerOrigin.y
        };
        const movedPoints = dragState.elementOrigin.map((original) => ({
          x: original.x + delta.x,
          y: original.y + delta.y
        }));
        onUpdateWall(dragState.id, { points: movedPoints });
        return;
      }

      if (dragState.type === "door-resize" && dragState.pointerId === event.pointerId) {
        const door = layout.doors.find((d) => d.id === dragState.id);
        if (!door) {
          return;
        }
        const delta = {
          x: point.x - dragState.pointerOrigin.x,
          y: point.y - dragState.pointerOrigin.y
        };
        const rad = (dragState.rotation * Math.PI) / 180;
        const local = delta.x * Math.cos(rad) + delta.y * Math.sin(rad);
        const initialWidthPx = inchesToPixels(dragState.initialWidthInches);
        let newHalfPx = initialWidthPx / 2 + local;
        const minHalfPx = inchesToPixels(MIN_WIDTH_INCHES) / 2;
        if (newHalfPx < minHalfPx) {
          newHalfPx = minHalfPx;
        }
        const newWidth = pixelsToInches(newHalfPx * 2);
        onUpdateDoor(dragState.id, { width: newWidth });
        return;
      }

      if (dragState.type === "furniture-resize" && dragState.pointerId === event.pointerId) {
        const item = layout.furniture.find((f) => f.id === dragState.id);
        if (!item) {
          return;
        }
        const delta = {
          x: point.x - dragState.pointerOrigin.x,
          y: point.y - dragState.pointerOrigin.y
        };
        const rad = (dragState.rotation * Math.PI) / 180;
        const localX = delta.x * Math.cos(rad) + delta.y * Math.sin(rad);
        const localY = -delta.x * Math.sin(rad) + delta.y * Math.cos(rad);
        if (dragState.axis === "width") {
          const initialWidthPx = inchesToPixels(dragState.initialWidthInches);
          let newHalfPx = initialWidthPx / 2 + localX;
          const minHalfPx = inchesToPixels(MIN_WIDTH_INCHES) / 2;
          if (newHalfPx < minHalfPx) {
            newHalfPx = minHalfPx;
          }
          const newWidth = pixelsToInches(newHalfPx * 2);
          onUpdateFurniture(dragState.id, { width: newWidth });
        } else {
          const initialDepthPx = inchesToPixels(dragState.initialDepthInches);
          let newHalfPx = initialDepthPx / 2 + localY;
          const minHalfPx = inchesToPixels(MIN_WIDTH_INCHES) / 2;
          if (newHalfPx < minHalfPx) {
            newHalfPx = minHalfPx;
          }
          const newDepth = pixelsToInches(newHalfPx * 2);
          onUpdateFurniture(dragState.id, { depth: newDepth });
        }
      }
    },
    [
      layout.doors,
      layout.furniture,
      layout.texts,
      onHoverPoint,
      onUpdateDoor,
      onUpdateFurniture,
      onUpdateWall,
      onVertexDrag,
      onViewportChange,
      vertexHandles,
      viewport.zoom
    ]
  );

  const handlePointerUp = useCallback((event: ReactPointerEvent<SVGSVGElement>) => {
    if (svgRef.current) {
      svgRef.current.releasePointerCapture(event.pointerId);
    }
    dragStateRef.current = { type: "none" };
    onHoverPoint(null);
    setRotatePreview(null);
  }, [onHoverPoint]);

  const handleWheel = useCallback(
    (event: WheelEvent) => {
      event.preventDefault();
      if (!svgRef.current) {
        return;
      }
      const deltaY = event.deltaY;
      if (deltaY === 0) {
        return;
      }
      const direction = Math.sign(deltaY);
      const magnitude = Math.min(0.06, Math.abs(deltaY) * 0.001);
      const zoomFactor = 1 - direction * magnitude;
      const newZoom = Math.min(Math.max(viewport.zoom * zoomFactor, 0.2), 5);
      const viewCoords = getViewCoordinates(event);
      const mousePoint = toCanvasPoint(event);
      const newOffsetX = viewCoords.x - mousePoint.x * newZoom;
      const newOffsetY = viewCoords.y - mousePoint.y * newZoom;
      onViewportChange({
        zoom: newZoom,
        offsetX: newOffsetX,
        offsetY: newOffsetY
      });
    },
    [onViewportChange, viewport.zoom]
  );

  useEffect(() => {
    const svgElement = svgRef.current;
    if (!svgElement) {
      return;
    }
    const handleTouchMove = (event: TouchEvent) => {
      if (event.cancelable) {
        event.preventDefault();
      }
    };
    svgElement.addEventListener("wheel", handleWheel, { passive: false });
    svgElement.addEventListener("touchmove", handleTouchMove, { passive: false });
    return () => {
      svgElement.removeEventListener("wheel", handleWheel);
      svgElement.removeEventListener("touchmove", handleTouchMove);
    };
  }, [handleWheel]);

  const previewPath = draftPoints && draftPoints.length > 0
    ? `M ${draftPoints[0].x} ${draftPoints[0].y} ${draftPoints
        .slice(1)
        .map((p) => `L ${p.x} ${p.y}`)
        .join(" ")}`
    : "";

  return (
    <div className="canvas">
      <svg
        ref={svgRef}
        className="canvas__svg"
        viewBox={`0 0 ${VIEWBOX_WIDTH} ${VIEWBOX_HEIGHT}`}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onContextMenu={(event) => event.preventDefault()}
        role="presentation"
      >
        <defs>
          <pattern
            id="grid"
            width={GRID_SIZE}
            height={GRID_SIZE}
            patternUnits="userSpaceOnUse"
          >
            <path
              d={`M ${GRID_SIZE} 0 L 0 0 0 ${GRID_SIZE}`}
              fill="none"
              stroke="rgba(33, 52, 70, 0.4)"
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect
          width="100%"
          height="100%"
          fill="url(#grid)"
          stroke="#1b2f3f"
          strokeWidth="2"
        />

        <g transform={`translate(${viewport.offsetX} ${viewport.offsetY}) scale(${viewport.zoom})`}>
          {layout.rooms.map((room) => {
            const centroid = getCentroid(room.points);
            const isSelected = selected?.type === "room" && selected.id === room.id;
            return (
              <g key={room.id}>
                <polygon
                  className={`canvas__room ${isSelected ? "canvas__room--selected" : ""}`}
                  data-element-type="room"
                  data-element-id={room.id}
                  points={pointsToPolygonString(room.points)}
                />
                {centroid && room.name?.trim() ? (
                  <text className="canvas__room-label" x={centroid.x} y={centroid.y}>
                    {room.name}
                  </text>
                ) : null}
              </g>
            );
          })}

          {layout.walls.map((wall) => (
            <path
              key={wall.id}
              className={`canvas__wall ${
                selected?.type === "wall" && selected.id === wall.id
                  ? "canvas__wall--selected"
                  : ""
              }`}
              d={wallToPath(wall)}
              strokeWidth={wall.width}
              data-element-type="wall"
              data-element-id={wall.id}
              onContextMenu={(event) => {
                event.preventDefault();
                const canvasPoint = clientToCanvasPoint(event.clientX, event.clientY);
                const closest = findClosestVertexIndex(wall.points, canvasPoint);
                if (closest !== null) {
                  const refs = findRefsForVertex(wall.id, closest);
                  onVertexFocus?.(refs, { x: event.clientX, y: event.clientY });
                  onVertexContextMenu(refs, { x: event.clientX, y: event.clientY });
                }
              }}
            />
          ))}

          <g className="canvas__vertex-layer" style={{ pointerEvents: "none" }}>
            {vertexHandles.map((handle, index) => {
              const hasCurved = handle.refs.some((ref) =>
                curvedVertexKeys.has(`${ref.wallId}:${ref.index}`)
              );
              return (
                <VertexHandleNode
                  key={handle.id}
                  handle={handle}
                  index={index}
                  isCurved={hasCurved}
                  onOpenMenu={(refs, clientX, clientY) => {
                    onVertexContextMenu(refs, { x: clientX, y: clientY });
                  }}
                  onFocus={onVertexFocus}
                />
              );
            })}
          </g>

          {layout.doors.map((door) => {
            const isSelected = selected?.type === "door" && selected.id === door.id;
            const polygonPoints = doorToPolygon(door)
              .map((p) => `${p.x},${p.y}`)
              .join(" ");
            const widthOffset = handleOffset(door.width, door.rotation);
            const widthHandle = {
              x: door.position.x + widthOffset.x,
              y: door.position.y + widthOffset.y
            };
            const rotateHandle = rotateHandlePosition(door.position, door.rotation);
            return (
              <g key={door.id}>
                <polygon
                  className={`canvas__door ${isSelected ? "canvas__door--selected" : ""}`}
                  points={polygonPoints}
                  data-element-type="door"
                  data-element-id={door.id}
                />
                <path className="canvas__door-swing" d={doorSwingPath(door)} />
                {isSelected ? (
                  <>
                    <rect
                      className="canvas__handle"
                      x={widthHandle.x - HANDLE_SIZE}
                      y={widthHandle.y - HANDLE_SIZE}
                      width={HANDLE_SIZE * 2}
                      height={HANDLE_SIZE * 2}
                      rx={3}
                      ry={3}
                      data-handle-type="door-width"
                      data-element-id={door.id}
                    />
                    <line
                      className="canvas__rotate-link"
                      x1={door.position.x}
                      y1={door.position.y}
                      x2={rotateHandle.x}
                      y2={rotateHandle.y}
                    />
                    <g
                      className="canvas__rotate-handle"
                      data-handle-type="door-rotate"
                      data-element-id={door.id}
                      transform={`translate(${rotateHandle.x} ${rotateHandle.y})`}
                    >
                      <circle
                        r={HANDLE_SIZE * 1.4}
                        data-handle-type="door-rotate"
                        data-element-id={door.id}
                      />
                      <text y={4} textAnchor="middle" fontSize={12} fontWeight={600}>
                        ⟳
                      </text>
                    </g>
                  </>
                ) : null}
              </g>
            );
          })}

          {layout.furniture.map((item) => {
            const isSelected = selected?.type === "furniture" && selected.id === item.id;
            const polygonPoints = furnitureToPolygon(item)
              .map((p) => `${p.x},${p.y}`)
              .join(" ");
            const widthOffset = handleOffset(item.width, item.rotation);
            const depthOffset = handleOffsetDepth(item.depth, item.rotation);
            const widthHandle = {
              x: item.position.x + widthOffset.x,
              y: item.position.y + widthOffset.y
            };
            const depthHandle = {
              x: item.position.x + depthOffset.x,
              y: item.position.y + depthOffset.y
            };
            const rotateHandle = rotateHandlePosition(item.position, item.rotation);
            return (
              <g key={item.id}>
                <polygon
                  className={`canvas__furniture ${isSelected ? "canvas__furniture--selected" : ""}`}
                  points={polygonPoints}
                  data-element-type="furniture"
                  data-element-id={item.id}
                />
                <text
                  className="canvas__furniture-label"
                  x={item.position.x}
                  y={item.position.y + GRID_SIZE * 0.2}
                >
                  {item.label}
                </text>
                {isSelected ? (
                  <>
                    <rect
                      className="canvas__handle"
                      x={widthHandle.x - HANDLE_SIZE}
                      y={widthHandle.y - HANDLE_SIZE}
                      width={HANDLE_SIZE * 2}
                      height={HANDLE_SIZE * 2}
                      rx={3}
                      ry={3}
                      data-handle-type="furniture-width"
                      data-element-id={item.id}
                    />
                    <rect
                      className="canvas__handle"
                      x={depthHandle.x - HANDLE_SIZE}
                      y={depthHandle.y - HANDLE_SIZE}
                      width={HANDLE_SIZE * 2}
                      height={HANDLE_SIZE * 2}
                      rx={3}
                      ry={3}
                      data-handle-type="furniture-depth"
                      data-element-id={item.id}
                    />
                    <line
                      className="canvas__rotate-link"
                      x1={item.position.x}
                      y1={item.position.y}
                      x2={rotateHandle.x}
                      y2={rotateHandle.y}
                    />
                    <g
                      className="canvas__rotate-handle"
                      data-handle-type="furniture-rotate"
                      data-element-id={item.id}
                      transform={`translate(${rotateHandle.x} ${rotateHandle.y})`}
                    >
                      <circle
                        r={HANDLE_SIZE * 1.4}
                        data-handle-type="furniture-rotate"
                        data-element-id={item.id}
                      />
                      <text y={4} textAnchor="middle" fontSize={12} fontWeight={600}>
                        ⟳
                      </text>
                    </g>
                  </>
                ) : null}
              </g>
            );
          })}

          {layout.walls.map((wall) =>
            wall.points.slice(0, -1).map((point, index) => {
              const next = wall.points[index + 1];
              if (!next) {
                return null;
              }
              const dx = next.x - point.x;
              const dy = next.y - point.y;
              const length = Math.hypot(dx, dy);
              if (!Number.isFinite(length) || length < 1) {
                return null;
              }
              const midX = point.x + dx / 2;
              const midY = point.y + dy / 2;
              let angleDeg = (Math.atan2(dy, dx) * 180) / Math.PI;
              if (angleDeg > 90 || angleDeg < -90) {
                angleDeg += 180;
              }
              const label = formatLengthInches(pixelsToInches(length), displayUnits);
              return (
                <g
                  key={`${wall.id}-label-${index}`}
                  transform={`translate(${midX} ${midY}) rotate(${angleDeg})`}
                >
                  <text className="canvas__wall-label" x={0} y={-12}>
                    {label}
                  </text>
                </g>
              );
            })
                    )}


          {layout.texts.map((text) => {
            const isSelected = selected?.type === "text" && selected.id === text.id;
            const isEditing = editingText?.id === text.id;
            const boxWidth = isEditing ? editingText.width : text.width;
            const boxHeight = isEditing ? editingText.height : text.height;
            const halfWidth = boxWidth / 2;
            const halfHeight = boxHeight / 2;
            const rotateRadius = computeTextRotateRadius({
              ...text,
              width: boxWidth,
              height: boxHeight
            });
            const rotateHandle = rotateHandlePosition(text.position, text.rotation, rotateRadius);
            const resizeHandle = localToWorld(text.position, text.rotation, {
              x: halfWidth,
              y: halfHeight
            });
            return (
              <g key={text.id} data-element-type="text" data-element-id={text.id}>
                <g transform={`translate(${text.position.x} ${text.position.y}) rotate(${text.rotation})`}>
                  <rect
                    className="canvas__text-hitbox"
                    x={-halfWidth}
                    y={-halfHeight}
                    width={boxWidth}
                    height={boxHeight}
                    data-element-type="text"
                    data-element-id={text.id}
                  />
                  <rect
                    className={`canvas__text-frame ${isSelected ? "canvas__text-frame--active" : ""}`}
                    x={-halfWidth}
                    y={-halfHeight}
                    width={boxWidth}
                    height={boxHeight}
                    rx={6}
                    ry={6}
                  />
                  <foreignObject
                    x={-halfWidth}
                    y={-halfHeight}
                    width={boxWidth}
                    height={boxHeight}
                    data-element-type="text"
                    data-element-id={text.id}
                    onDoubleClick={(event) => {
                      event.stopPropagation();
                      onSelectElement({ type: "text", id: text.id });
                      setEditingText({
                        id: text.id,
                        value: text.value,
                        width: text.width,
                        height: text.height
                      });
                    }}
                  >
                    {isEditing ? (
                      <textarea
                        className="canvas__text-editor"
                        style={{ fontSize: `${text.fontSize}px` }}
                        value={editingText.value}
                        autoFocus
                        onChange={(event) => {
                          const textarea = event.target;
                          const nextValue = textarea.value;
                          textarea.style.height = "auto";
                          textarea.style.width = "auto";
                          const scrollHeight = textarea.scrollHeight;
                          const scrollWidth = textarea.scrollWidth;
                          textarea.style.height = `${scrollHeight}px`;
                          textarea.style.width = "100%";
                          setEditingText((current) =>
                            current && current.id === text.id
                              ? {
                                  id: current.id,
                                  value: nextValue,
                                  width: clamp(Math.max(current.width, scrollWidth), MIN_TEXT_WIDTH, MAX_TEXT_WIDTH),
                                  height: clamp(Math.max(current.height, scrollHeight), MIN_TEXT_HEIGHT, MAX_TEXT_HEIGHT)
                                }
                              : current
                          );
                        }}
                        onBlur={() => commitTextEdit(true)}
                        onKeyDown={(event) => {
                          if (event.key === "Escape") {
                            event.stopPropagation();
                            event.preventDefault();
                            commitTextEdit(false);
                          }
                          if (event.altKey && event.key === "Enter") {
                            event.preventDefault();
                            commitTextEdit(true);
                          }
                        }}
                        onPointerDown={(event) => event.stopPropagation()}
                      />
                    ) : (
                      <div
                        className="canvas__text-content"
                        style={{ fontSize: `${text.fontSize}px` }}
                      >
                        {text.value}
                      </div>
                    )}
                  </foreignObject>
                </g>
                {isSelected ? (
                  <>
                    <line
                      className="canvas__rotate-link"
                      x1={text.position.x}
                      y1={text.position.y}
                      x2={rotateHandle.x}
                      y2={rotateHandle.y}
                    />
                    <g
                      className="canvas__rotate-handle"
                      data-handle-type="text-rotate"
                      data-element-id={text.id}
                      transform={`translate(${rotateHandle.x} ${rotateHandle.y})`}
                    >
                      <circle
                        r={HANDLE_SIZE * 1.4}
                        data-handle-type="text-rotate"
                        data-element-id={text.id}
                      />
                      <text y={4} textAnchor="middle" fontSize={12} fontWeight={600}>
                        ⟳
                      </text>
                    </g>
                    <g
                      className="canvas__text-resize-handle"
                      data-handle-type="text-resize"
                      data-element-id={text.id}
                      transform={`translate(${resizeHandle.x} ${resizeHandle.y})`}
                    >
                      <circle
                        r={HANDLE_SIZE * 1.2}
                        data-handle-type="text-resize"
                        data-element-id={text.id}
                      />
                      <path
                        className="canvas__text-resize-icon"
                        d="M -4 0 L 0 0 0 -4"
                      />
                    </g>
                  </>
                ) : null}
              </g>
            );
          })}
          {draftPoints && draftPoints.length > 0 ? (
            <>
              <path className="canvas__draft" d={previewPath} />
              {hoverPoint ? (
                <>
                  <line
                    className="canvas__preview"
                    x1={draftPoints[draftPoints.length - 1].x}
                    y1={draftPoints[draftPoints.length - 1].y}
                    x2={hoverPoint.x}
                    y2={hoverPoint.y}
                  />
                  {(() => {
                    const lastPoint = draftPoints[draftPoints.length - 1];
                    const dx = hoverPoint.x - lastPoint.x;
                    const dy = hoverPoint.y - lastPoint.y;
                    const distancePx = Math.hypot(dx, dy);
                    const distanceInches = pixelsToInches(distancePx);
                    const label = formatLengthInches(distanceInches, displayUnits);
                    const textX = lastPoint.x + dx / 2;
                    const textY = lastPoint.y + dy / 2 - 12;
                    if (!Number.isFinite(distancePx) || distancePx < 1) {
                      return null;
                    }
                    return (
                      <text className="canvas__measure" x={textX} y={textY}>
                        {label}
                      </text>
                    );
                  })()}
                </>
              ) : null}
            </>
          ) : null}
        </g>
      </svg>
    </div>
  );
}

function pointsToPolygonString(points: Point[]): string {
  if (points.length === 0) {
    return "";
  }
  const closed = [...points, points[0]];
  return closed.map((p) => `${p.x},${p.y}`).join(" ");
}

function normalizeAngle(angle: number): number {
  const normalized = ((angle % 360) + 360) % 360;
  return Number.isFinite(normalized) ? normalized : 0;
}

function toAngleDegrees(center: Point, target: Point): number {
  const rad = Math.atan2(target.y - center.y, target.x - center.x);
  return normalizeAngle((rad * 180) / Math.PI);
}

function computeRotationAngle(center: Point, target: Point, snap: boolean): number {
  let angle = toAngleDegrees(center, target);
  if (snap) {
    angle = Math.round(angle / ROTATE_SNAP_DEGREES) * ROTATE_SNAP_DEGREES;
  }
  return normalizeAngle(angle);
}

function describeArc(center: Point, radius: number, startAngle: number, endAngle: number): string {
  const start = pointOnCircle(center, radius, startAngle);
  const end = pointOnCircle(center, radius, endAngle);
  const delta = ((endAngle - startAngle + 360) % 360 + 360) % 360;
  const largeArc = delta > 180 ? 1 : 0;
  return `M ${start.x} ${start.y} A ${radius} ${radius} 0 ${largeArc} 1 ${end.x} ${end.y}`;
}

function pointOnCircle(center: Point, radius: number, angleDeg: number): Point {
  const rad = (angleDeg * Math.PI) / 180;
  return {
    x: center.x + Math.cos(rad) * radius,
    y: center.y + Math.sin(rad) * radius
  };
}

function rotateHandlePosition(center: Point, rotation: number, radius = ROTATE_HANDLE_DISTANCE): Point {
  return pointOnCircle(center, radius, rotation - 90);
}

function constrainToAxis(origin: Point, target: Point): Point {
  const deltaX = Math.abs(target.x - origin.x);
  const deltaY = Math.abs(target.y - origin.y);
  if (deltaX === 0 && deltaY === 0) {
    return { ...target };
  }
  return deltaX > deltaY
    ? { x: target.x, y: origin.y }
    : { x: origin.x, y: target.y };
}

function localToWorld(center: Point, rotation: number, local: Point): Point {
  const rad = (rotation * Math.PI) / 180;
  return {
    x: center.x + local.x * Math.cos(rad) - local.y * Math.sin(rad),
    y: center.y + local.x * Math.sin(rad) + local.y * Math.cos(rad)
  };
}

function worldToLocal(center: Point, rotation: number, world: Point): Point {
  const rad = (rotation * Math.PI) / 180;
  const dx = world.x - center.x;
  const dy = world.y - center.y;
  return {
    x: dx * Math.cos(rad) + dy * Math.sin(rad),
    y: -dx * Math.sin(rad) + dy * Math.cos(rad)
  };
}

function computeTextRotateRadius(text: TextElement): number {
  return Math.max(Math.hypot(text.width, text.height) / 2 + GRID_SIZE * 0.5, ROTATE_HANDLE_DISTANCE);
}

function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

function toVertexKey(point: Point): string {
  return `${Math.round(point.x * 1000) / 1000}:${Math.round(point.y * 1000) / 1000}`;
}


function projectPointToSegment(point: Point, start: Point, end: Point): { point: Point; t: number } | null {
  const segX = end.x - start.x;
  const segY = end.y - start.y;
  const lengthSq = segX * segX + segY * segY;
  if (lengthSq <= 1e-6) {
    return null;
  }
  const tRaw = ((point.x - start.x) * segX + (point.y - start.y) * segY) / lengthSq;
  const t = Math.max(0, Math.min(1, tRaw));
  return {
    point: {
      x: start.x + segX * t,
      y: start.y + segY * t
    },
    t
  };
}

function findInsertionForPoint(points: Point[], target: Point): SegmentInsertion | null {
  if (points.length < 2) {
    return null;
  }
  let bestDistance = Number.POSITIVE_INFINITY;
  let bestIndex = -1;
  let bestPoint: Point | null = null;
  for (let i = 0; i < points.length - 1; i += 1) {
    const start = points[i];
    const end = points[i + 1];
    const projection = projectPointToSegment(target, start, end);
    if (!projection) {
      continue;
    }
    const dist = Math.hypot(projection.point.x - target.x, projection.point.y - target.y);
    if (!Number.isFinite(dist)) {
      continue;
    }
    if (dist < bestDistance) {
      bestDistance = dist;
      bestIndex = i;
      bestPoint = projection.point;
    }
  }
  if (bestIndex === -1 || !bestPoint) {
    return null;
  }
  return {
    index: bestIndex,
    point: bestPoint,
    distance: bestDistance
  };
}

function distance(a: Point, b: Point): number {
  return Math.hypot(a.x - b.x, a.y - b.y);
}


function findClosestVertexIndex(points: Point[], target: Point): number | null {
  if (points.length === 0) {
    return null;
  }
  let bestIndex: number | null = null;
  let bestDistance = Number.POSITIVE_INFINITY;
  for (let i = 0; i < points.length; i += 1) {
    const point = points[i];
    const dist = Math.hypot(point.x - target.x, point.y - target.y);
    if (!Number.isFinite(dist)) {
      continue;
    }
    if (dist < bestDistance) {
      bestDistance = dist;
      bestIndex = i;
    }
  }
  return bestIndex;
}

function snapVertexPoint(candidate: Point, handles: VertexHandle[], refs: VertexRef[]): Point {
  let bestPoint = { ...candidate };
  let bestDistance = SNAP_THRESHOLD;
  handles.forEach((handle) => {
    const sharesRef = handle.refs.some((ref) =>
      refs.some((r) => r.wallId === ref.wallId && r.index === ref.index)
    );
    if (sharesRef) {
      return;
    }
    const dist = distance(candidate, handle.position);
    if (dist < bestDistance) {
      bestDistance = dist;
      bestPoint = { ...handle.position };
    }
  });
  return bestPoint;
}

function computeCornerArc(prev: Point, current: Point, next: Point, radius: number) {
  const v1x = current.x - prev.x;
  const v1y = current.y - prev.y;
  const v2x = next.x - current.x;
  const v2y = next.y - current.y;
  const len1 = Math.hypot(v1x, v1y);
  const len2 = Math.hypot(v2x, v2y);
  if (len1 <= 1e-6 || len2 <= 1e-6) {
    return {
      entry: { ...current },
      exit: { ...current },
      radius: 0,
      sweepFlag: 0
    };
  }
  const unit1 = { x: v1x / len1, y: v1y / len1 };
  const unit2 = { x: v2x / len2, y: v2y / len2 };
  const sign = radius < 0 ? -1 : 1;
  const positiveRadius = Math.abs(radius);
  const inwardLimit = Math.min(len1 / 2, len2 / 2);
  const outwardLimit = Math.max(0, Math.min(len1, len2) - 1e-3);
  const cappedRadius =
    sign >= 0 ? Math.min(positiveRadius, inwardLimit) : Math.min(positiveRadius, outwardLimit);
  const magnitude = Math.max(cappedRadius, 0);
  if (magnitude <= 1e-6) {
    return {
      entry: { ...current },
      exit: { ...current },
      radius: 0,
      sweepFlag: 0
    };
  }
  const offsetPrev = magnitude * sign;
  const offsetNext = magnitude * sign;
  const entry = {
    x: current.x - unit1.x * offsetPrev,
    y: current.y - unit1.y * offsetPrev
  };
  const exit = {
    x: current.x + unit2.x * offsetNext,
    y: current.y + unit2.y * offsetNext
  };
  const cross = unit1.x * unit2.y - unit1.y * unit2.x;
  let sweepFlag = cross < 0 ? 0 : 1;
  if (sign < 0) {
    sweepFlag = sweepFlag === 0 ? 1 : 0;
  }
  return { entry, exit, radius: magnitude, sweepFlag };
}

function wallToPath(wall: Wall): string {
  if (wall.points.length === 0) {
    return "";
  }
  const closingDistance = Math.hypot(
    wall.points[0].x - wall.points[wall.points.length - 1].x,
    wall.points[0].y - wall.points[wall.points.length - 1].y
  );
  const isClosed = closingDistance <= 0.5;
  const basePoints = isClosed ? wall.points.slice(0, -1) : wall.points;
  if (basePoints.length === 0) {
    return "";
  }
  const parts: string[] = [];
  let hasStarted = false;
  for (let i = 0; i < basePoints.length; i += 1) {
    const current = basePoints[i];
    const prev = i === 0 ? (isClosed ? basePoints[basePoints.length - 1] : null) : basePoints[i - 1];
    const next = i === basePoints.length - 1 ? (isClosed ? basePoints[0] : null) : basePoints[i + 1];
    const radius = current.r ?? 0;
    if (!prev || !next || Math.abs(radius) <= 0.01) {
      if (!hasStarted) {
        parts.push(`M ${current.x} ${current.y}`);
        hasStarted = true;
      } else {
        parts.push(`L ${current.x} ${current.y}`);
      }
    } else {
      const arc = computeCornerArc(prev, current, next, radius);
      if (!hasStarted) {
        parts.push(`M ${arc.entry.x} ${arc.entry.y}`);
        hasStarted = true;
      } else {
        parts.push(`L ${arc.entry.x} ${arc.entry.y}`);
      }
      parts.push(`A ${arc.radius} ${arc.radius} 0 0 ${arc.sweepFlag} ${arc.exit.x} ${arc.exit.y}`);
    }
  }
  if (isClosed) {
    parts.push("Z");
  }
  return parts.join(" ");
}

function pointsToPath(points: Point[]): string {
  if (points.length === 0) {
    return "";
  }
  const [first, ...rest] = points;
  const restCommands = rest.map((p) => `L ${p.x} ${p.y}`).join(" ");
  return `M ${first.x} ${first.y} ${restCommands}`;
}

function doorToPolygon(door: Door): Point[] {
  const widthFeet = door.width / 12;
  const depthFeet = door.depth / 12;
  const halfWidth = (widthFeet * GRID_SIZE) / 2;
  const halfDepth = (depthFeet * GRID_SIZE) / 2;

  const corners: Point[] = [
    { x: -halfWidth, y: -halfDepth },
    { x: halfWidth, y: -halfDepth },
    { x: halfWidth, y: halfDepth },
    { x: -halfWidth, y: halfDepth }
  ];

  const angle = (door.rotation * Math.PI) / 180;
  const cos = Math.cos(angle);
  const sin = Math.sin(angle);

  return corners.map((corner) => ({
    x: door.position.x + corner.x * cos - corner.y * sin,
    y: door.position.y + corner.x * sin + corner.y * cos
  }));
}

function furnitureToPolygon(item: Furniture): Point[] {
  const widthFeet = item.width / 12;
  const depthFeet = item.depth / 12;
  const halfWidth = (widthFeet * GRID_SIZE) / 2;
  const halfDepth = (depthFeet * GRID_SIZE) / 2;

  const corners: Point[] = [
    { x: -halfWidth, y: -halfDepth },
    { x: halfWidth, y: -halfDepth },
    { x: halfWidth, y: halfDepth },
    { x: -halfWidth, y: halfDepth }
  ];

  const angle = (item.rotation * Math.PI) / 180;
  const cos = Math.cos(angle);
  const sin = Math.sin(angle);

  return corners.map((corner) => ({
    x: item.position.x + corner.x * cos - corner.y * sin,
    y: item.position.y + corner.x * sin + corner.y * cos
  }));
}

const VERTEX_VISIBLE_RADIUS = HANDLE_SIZE * 0.6;
const VERTEX_HIT_RADIUS = HANDLE_SIZE * 1.8;
const VERTEX_LONG_PRESS_MS = 500;

type VertexHandleNodeProps = {
  handle: VertexHandle;
  index: number;
  isCurved: boolean;
  onOpenMenu: (refs: VertexRef[], clientX: number, clientY: number) => void;
  onFocus?: (refs: VertexRef[], position?: { x: number; y: number }) => void;
};

function VertexHandleNode({
  handle,
  index,
  isCurved,
  onOpenMenu,
  onFocus
}: VertexHandleNodeProps) {
  const pressTimerRef = useRef<number | null>(null);
  const pointerRef = useRef<{ clientX: number; clientY: number } | null>(null);

  const clearPressTimer = () => {
    if (pressTimerRef.current !== null) {
      window.clearTimeout(pressTimerRef.current);
      pressTimerRef.current = null;
    }
  };

  const cancelPress = () => {
    clearPressTimer();
    pointerRef.current = null;
  };

  const handlePointerDown = (event: ReactPointerEvent<SVGCircleElement>) => {
    pointerRef.current = { clientX: event.clientX, clientY: event.clientY };
    onFocus?.(handle.refs, { x: event.clientX, y: event.clientY });
    clearPressTimer();
    pressTimerRef.current = window.setTimeout(() => {
      const coords = pointerRef.current;
      if (coords) {
        pressTimerRef.current = null;
        pointerRef.current = null;
        onOpenMenu(handle.refs, coords.clientX, coords.clientY);
      }
    }, VERTEX_LONG_PRESS_MS);
  };

  const handlePointerMove = (event: ReactPointerEvent<SVGCircleElement>) => {
    if (!pointerRef.current || pressTimerRef.current === null) {
      return;
    }
    const { clientX, clientY } = pointerRef.current;
    const distanceMoved = Math.hypot(event.clientX - clientX, event.clientY - clientY);
    if (distanceMoved > 6) {
      cancelPress();
    }
  };

  const handleContextMenu = (event: ReactMouseEvent<SVGCircleElement>) => {
    event.preventDefault();
    event.stopPropagation();
    cancelPress();
    onFocus?.(handle.refs, { x: event.clientX, y: event.clientY });
    onOpenMenu(handle.refs, event.clientX, event.clientY);
  };

  const commonProps = {
    "data-handle-type": "vertex",
    "data-vertex-index": index,
    onPointerDown: handlePointerDown,
    onPointerUp: cancelPress,
    onPointerLeave: cancelPress,
    onPointerCancel: cancelPress,
    onPointerMove: handlePointerMove,
    onContextMenu: handleContextMenu,
    style: { cursor: "pointer" as const }
  };

  return (
    <g
      transform={`translate(${handle.position.x}, ${handle.position.y})`}
      style={{ pointerEvents: "visiblePainted" }}
    >
      <circle r={VERTEX_HIT_RADIUS} fill="transparent" {...commonProps} />
      <circle
        r={VERTEX_VISIBLE_RADIUS}
        className={`canvas__vertex ${isCurved ? "canvas__vertex--curved" : ""}`}
        {...commonProps}
      />
    </g>
  );
}

function getCentroid(points: Point[]): Point | null {
  if (points.length < 3) {
    return null;
  }
  let centroidX = 0;
  let centroidY = 0;
  let area = 0;
  for (let i = 0; i < points.length; i += 1) {
    const current = points[i];
    const next = points[(i + 1) % points.length];
    const cross = current.x * next.y - next.x * current.y;
    area += cross;
    centroidX += (current.x + next.x) * cross;
    centroidY += (current.y + next.y) * cross;
  }
  area *= 0.5;
  if (Math.abs(area) < 1e-5) {
    return null;
  }
  const factor = 1 / (6 * area);
  return {
    x: centroidX * factor,
    y: centroidY * factor
  };
}

function inchesToPixels(inches: number): number {
  return (inches / 12) * GRID_SIZE;
}

function pixelsToInches(px: number): number {
  return (px / GRID_SIZE) * 12;
}

function handleOffset(widthInches: number, rotation: number): Point {
  const halfWidthPx = inchesToPixels(widthInches) / 2;
  const rad = (rotation * Math.PI) / 180;
  return {
    x: Math.cos(rad) * halfWidthPx,
    y: Math.sin(rad) * halfWidthPx
  };
}

function handleOffsetDepth(depthInches: number, rotation: number): Point {
  const halfDepthPx = inchesToPixels(depthInches) / 2;
  const rad = (rotation * Math.PI) / 180 - Math.PI / 2;
  return {
    x: Math.cos(rad) * halfDepthPx,
    y: Math.sin(rad) * halfDepthPx
  };
}

function doorSwingPath(door: Door): string {
  const halfWidthPx = inchesToPixels(door.width) / 2;
  const rad = (door.rotation * Math.PI) / 180;
  const hinge = {
    x: door.position.x - Math.cos(rad) * halfWidthPx,
    y: door.position.y - Math.sin(rad) * halfWidthPx
  };
  const closedEdge = {
    x: door.position.x + Math.cos(rad) * halfWidthPx,
    y: door.position.y + Math.sin(rad) * halfWidthPx
  };
  const openAngle = rad + (door.swing === "left" ? -Math.PI / 2 : Math.PI / 2);
  const arcPoint = {
    x: hinge.x + Math.cos(openAngle) * halfWidthPx * 2,
    y: hinge.y + Math.sin(openAngle) * halfWidthPx * 2
  };
  const sweepFlag = door.swing === "left" ? 0 : 1;
  return `M ${hinge.x} ${hinge.y} L ${closedEdge.x} ${closedEdge.y} A ${halfWidthPx * 2} ${halfWidthPx * 2} 0 0 ${sweepFlag} ${arcPoint.x} ${arcPoint.y}`;
}
