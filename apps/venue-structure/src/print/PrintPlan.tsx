import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import type { Door, Furniture, ProjectMeta, Room, Wall } from "../types";
import type { Point, TextElement } from "../types";
import { inchesToCanvasUnits } from "../utils/measure";
import "./print.css";

type LayoutData = {
  walls: Wall[];
  doors: Door[];
  rooms: Room[];
  furniture: Furniture[];
  texts?: TextElement[];
};

type PrintPlanProps = {
  layout: LayoutData;
  projectMeta?: ProjectMeta | null;
  planId?: string | null;
  versionLabel?: string | null;
  lastSavedAt?: Date | null;
  printedAt?: string;
};

type Bounds = {
  minX: number;
  minY: number;
  width: number;
  height: number;
};

type PolyPoint = { x: number; y: number };

function orientedRectangle(center: Point, width: number, depth: number, rotationDeg: number) {
  if (!Number.isFinite(width) || width <= 0 || !Number.isFinite(depth) || depth <= 0) {
    return [];
  }
  const hw = width / 2;
  const hd = depth / 2;
  const rotationRad = (rotationDeg * Math.PI) / 180;
  const cos = Math.cos(rotationRad);
  const sin = Math.sin(rotationRad);
  const { x, y } = center;

  const corners: PolyPoint[] = [
    { x: x - hw * cos + hd * sin, y: y - hw * sin - hd * cos },
    { x: x + hw * cos + hd * sin, y: y + hw * sin - hd * cos },
    { x: x + hw * cos - hd * sin, y: y + hw * sin + hd * cos },
    { x: x - hw * cos - hd * sin, y: y - hw * sin + hd * cos }
  ];

  return corners;
}

function pointsToPolyline(points: PolyPoint[]) {
  if (!points || points.length === 0) {
    return "";
  }
  return points.map((p) => `${p.x},${p.y}`).join(" ");
}

function gatherBounds(layout: LayoutData): Bounds {
  const xs: number[] = [];
  const ys: number[] = [];
  const register = (value: Point | PolyPoint) => {
    xs.push(value.x);
    ys.push(value.y);
  };

  layout.walls.forEach((wall) => wall.points.forEach(register));
  layout.rooms.forEach((room) => room.points.forEach(register));
  layout.doors.forEach((door) => register(door.position));
  layout.furniture.forEach((item) => register(item.position));

  if (xs.length === 0 || ys.length === 0) {
    return { minX: 0, minY: 0, width: 120, height: 90 };
  }

  const minX = Math.min(...xs);
  const maxX = Math.max(...xs);
  const minY = Math.min(...ys);
  const maxY = Math.max(...ys);
  const width = maxX - minX || 120;
  const height = maxY - minY || 90;
  const padding = Math.max(width, height) * 0.05;

  return {
    minX: minX - padding,
    minY: minY - padding,
    width: width + padding * 2,
    height: height + padding * 2
  };
}

function polygonCentroid(points: PolyPoint[]): PolyPoint | null {
  if (!points || points.length < 3) {
    return null;
  }
  let centroidX = 0;
  let centroidY = 0;
  let signedArea = 0;
  for (let i = 0; i < points.length; i += 1) {
    const current = points[i];
    const next = points[(i + 1) % points.length];
    const cross = current.x * next.y - next.x * current.y;
    signedArea += cross;
    centroidX += (current.x + next.x) * cross;
    centroidY += (current.y + next.y) * cross;
  }
  signedArea *= 0.5;
  if (Math.abs(signedArea) < 1e-5) {
    return null;
  }
  const factor = 1 / (6 * signedArea);
  return {
    x: centroidX * factor,
    y: centroidY * factor
  };
}

function doorToPolygonPrint(door: Door): PolyPoint[] {
  const widthUnits = inchesToCanvasUnits(door.width);
  const depthUnits = inchesToCanvasUnits(Math.max(door.depth, 4));
  const halfWidth = widthUnits / 2;
  const halfDepth = depthUnits / 2;
  const angle = (door.rotation * Math.PI) / 180;
  const cos = Math.cos(angle);
  const sin = Math.sin(angle);
  const corners: PolyPoint[] = [
    { x: -halfWidth, y: -halfDepth },
    { x: halfWidth, y: -halfDepth },
    { x: halfWidth, y: halfDepth },
    { x: -halfWidth, y: halfDepth }
  ];
  return corners.map((corner) => ({
    x: door.position.x + corner.x * cos - corner.y * sin,
    y: door.position.y + corner.x * sin + corner.y * cos
  }));
}

function doorSwingPathPrint(door: Door): string {
  const halfWidth = inchesToCanvasUnits(door.width) / 2;
  const angle = (door.rotation * Math.PI) / 180;
  const hinge = {
    x: door.position.x - Math.cos(angle) * halfWidth,
    y: door.position.y - Math.sin(angle) * halfWidth
  };
  const closedEdge = {
    x: door.position.x + Math.cos(angle) * halfWidth,
    y: door.position.y + Math.sin(angle) * halfWidth
  };
  const openAngle = angle + (door.swing === "left" ? -Math.PI / 2 : Math.PI / 2);
  const arcRadius = halfWidth * 2;
  const arcPoint = {
    x: hinge.x + Math.cos(openAngle) * arcRadius,
    y: hinge.y + Math.sin(openAngle) * arcRadius
  };
  const sweepFlag = door.swing === "left" ? 0 : 1;
  return `M ${hinge.x} ${hinge.y} L ${closedEdge.x} ${closedEdge.y} A ${arcRadius} ${arcRadius} 0 0 ${sweepFlag} ${arcPoint.x} ${arcPoint.y}`;
}

export function PrintPlan({
  layout,
  projectMeta,
  planId,
  versionLabel,
  lastSavedAt,
  printedAt
}: PrintPlanProps) {
  const { t, i18n } = useTranslation();
  const locale = i18n.resolvedLanguage ?? i18n.language ?? "es";
  const bounds = useMemo(() => gatherBounds(layout), [layout]);
  const fallbackPrintedLabel = useMemo(
    () =>
      new Intl.DateTimeFormat(locale, {
        dateStyle: "medium",
        timeStyle: "short"
      }).format(new Date()),
    [locale]
  );
  const printedLabel = printedAt ?? fallbackPrintedLabel;

  const title = projectMeta?.title?.trim() || "SeatPilot · Venue Structure Editor";
  const metaLines = [
    projectMeta?.drawingNumber ? `${t("print.planNumber")}: ${projectMeta.drawingNumber}` : "",
    projectMeta?.scale ? `${t("print.scale")}: ${projectMeta.scale}` : "",
    projectMeta?.northReference
      ? `${t("print.northRef")}: ${projectMeta.northReference}`
      : ""
  ].filter(Boolean);

  return (
    <section className="print-plan">
      <header className="print-header">
        <h1>{title}</h1>
        {metaLines.length > 0 ? <div className="print-meta">{metaLines.join(" · ")}</div> : null}
      </header>

      <svg
        className="print-svg"
        viewBox={`${bounds.minX} ${bounds.minY} ${bounds.width} ${bounds.height}`}
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Plano del recinto"
      >
        <rect
          x={bounds.minX}
          y={bounds.minY}
          width={bounds.width}
          height={bounds.height}
          fill="#ffffff"
        />

        <g stroke="#0b1a2a" strokeWidth={2} fill="none">
          {layout.walls.map((wall) => (
            <polyline key={wall.id} points={pointsToPolyline(wall.points)} />
          ))}
        </g>

        <g fill="rgba(47,124,246,0.08)" stroke="#2f7cf6" strokeWidth={1.2}>
          {layout.rooms.map((room: Room) => (
            <g key={room.id}>
              <polygon points={pointsToPolyline(room.points)} />
              {room.name?.trim() ? (
                (() => {
                  const centroid = polygonCentroid(room.points);
                  if (!centroid) {
                    return null;
                  }
                  return (
                    <text
                      className="print-room-label"
                      x={centroid.x}
                      y={centroid.y}
                      textAnchor="middle"
                      dominantBaseline="middle"
                    >
                      {room.name}
                    </text>
                  );
                })()
              ) : null}
            </g>
          ))}
        </g>

        <g fill="rgba(47,124,246,0.2)" stroke="#2f7cf6" strokeWidth={1.4}>
          {layout.doors.map((door: Door) => {
            const corners = doorToPolygonPrint(door);
            if (corners.length === 0) {
              return null;
            }
            return (
              <g key={door.id}>
                <polygon points={pointsToPolyline(corners)} opacity={0.85} />
                <path
                  d={doorSwingPathPrint(door)}
                  fill="none"
                  stroke="#f97316"
                  strokeWidth={1.2}
                  strokeDasharray="6 6"
                  opacity={0.9}
                />
              </g>
            );
          })}
        </g>

        <g fill="rgba(111,66,193,0.18)" stroke="#6f42c1" strokeWidth={1}>
          {layout.furniture.map((item: Furniture) => {
            const widthUnits = inchesToCanvasUnits(item.width || 18);
            const depthUnits = inchesToCanvasUnits(item.depth || 18);
            const corners = orientedRectangle(
              item.position,
              widthUnits,
              depthUnits,
              item.rotation
            );
            if (corners.length === 0) {
              return (
                <circle
                  key={item.id}
                  cx={item.position.x}
                  cy={item.position.y}
                  r={inchesToCanvasUnits(6) / 2}
                />
              );
            }
            return <polygon key={item.id} points={pointsToPolyline(corners)} />;
          })}
        </g>
      </svg>

      <footer className="print-footer">
        {[
          t("print.pageCaption", { current: 1, total: 2 }),
          t("print.footerGenerated", { date: printedLabel }),
          versionLabel ? t("print.footerVersion", { label: versionLabel }) : null,
          planId ? t("print.footerPlan", { id: planId.slice(0, 8) }) : null,
          lastSavedAt
            ? t("print.footerUpdated", {
                date: new Intl.DateTimeFormat(locale, {
                  dateStyle: "medium",
                  timeStyle: "short"
                }).format(lastSavedAt)
              })
            : null
        ].filter(Boolean).join(" · ")}
      </footer>
    </section>
  );
}
