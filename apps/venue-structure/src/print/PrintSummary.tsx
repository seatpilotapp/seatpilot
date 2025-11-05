import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import type { ValidationResult } from "@seatpilot/seatdesigner-engine";
import type {
  DisplayUnits,
  Furniture,
  ProjectMeta,
  Room,
  Wall,
  Door
} from "../types";
import { canvasUnitsToInches } from "../utils/measure";
import "./print.css";

type LayoutData = {
  walls: Wall[];
  doors: Door[];
  rooms: Room[];
  furniture: Furniture[];
};

type PrintSummaryProps = {
  layout: LayoutData;
  projectMeta?: ProjectMeta | null;
  validation?: ValidationResult | null;
  planId?: string | null;
  versionLabel?: string | null;
  printedAt?: string;
  displayUnits: DisplayUnits;
};

type WallMetrics = {
  totalLengthFeet: number;
};

type RoomMetrics = {
  name: string;
  areaSqFt: number;
};

type FurnitureMetrics = {
  category: string;
  count: number;
};

const FT_TO_M = 0.3048;
const FT2_TO_M2 = 0.09290304;

function computeWallMetrics(walls: Wall[]): WallMetrics {
  const totalLengthInches = walls.reduce((sum, wall) => {
    if (!wall.points || wall.points.length < 2) {
      return sum;
    }
    let length = 0;
    for (let i = 1; i < wall.points.length; i++) {
      const a = wall.points[i - 1];
      const b = wall.points[i];
      const dx = b.x - a.x;
      const dy = b.y - a.y;
      length += Math.hypot(dx, dy);
    }
    return sum + canvasUnitsToInches(length);
  }, 0);

  return {
    totalLengthFeet: totalLengthInches / 12
  };
}

function computeRoomMetrics(rooms: Room[]): RoomMetrics[] {
  return rooms.map((room) => ({
    name: room.name?.trim() || "",
    areaSqFt: room.areaSqFt ?? 0
  }));
}

function computeFurnitureMetrics(furniture: Furniture[]): FurnitureMetrics[] {
  const counts = new Map<string, number>();
  furniture.forEach((item) => {
    const key = item.category?.trim() || "General";
    counts.set(key, (counts.get(key) ?? 0) + 1);
  });
  return Array.from(counts.entries()).map(([category, count]) => ({
    category,
    count
  }));
}

export function PrintSummary({
  layout,
  projectMeta,
  validation,
  planId,
  versionLabel,
  printedAt,
  displayUnits
}: PrintSummaryProps) {
  const { t, i18n } = useTranslation();
  const locale = i18n.resolvedLanguage ?? i18n.language ?? "es";

  const wallMetrics = useMemo(() => computeWallMetrics(layout.walls), [layout.walls]);
  const roomMetrics = useMemo(() => computeRoomMetrics(layout.rooms), [layout.rooms]);
  const furnitureMetrics = useMemo(
    () => computeFurnitureMetrics(layout.furniture),
    [layout.furniture]
  );

  const totalDoors = layout.doors.length;
  const totalFurniture = layout.furniture.length;
  const totalRooms = layout.rooms.length;
  const totalAreaSqFt = roomMetrics.reduce((sum, room) => sum + room.areaSqFt, 0);

  const fallbackPrintedLabel = useMemo(
    () =>
      new Intl.DateTimeFormat(locale, {
        dateStyle: "medium",
        timeStyle: "short"
      }).format(new Date()),
    [locale]
  );
  const printedLabel = printedAt ?? fallbackPrintedLabel;

  const checklist = [
    { label: t("print.checks.north"), value: projectMeta?.hasNorthArrow },
    { label: t("print.checks.sections"), value: projectMeta?.hasSectionMarkers },
    { label: t("print.checks.dimensions"), value: projectMeta?.dimensionsDocumented },
    { label: t("print.checks.hatch"), value: projectMeta?.hatchApplied },
    { label: t("print.checks.joists"), value: projectMeta?.ceilingJoistsDocumented }
  ];

  return (
    <section className="print-summary">
      <header className="print-header">
        <h1>{t("print.sheetTitle")}</h1>
      </header>

      <div className="print-summary__section">
        <h2>{t("print.planData")}</h2>
        <table>
          <tbody>
            <tr>
              <th>{t("print.title")}</th>
              <td>{projectMeta?.title?.trim() || "—"}</td>
            </tr>
            <tr>
              <th>{t("print.planNumber")}</th>
              <td>{projectMeta?.drawingNumber || "—"}</td>
            </tr>
            <tr>
              <th>{t("print.scale")}</th>
              <td>{projectMeta?.scale || "—"}</td>
            </tr>
            <tr>
              <th>{t("print.northRef")}</th>
              <td>{projectMeta?.northReference || "—"}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="print-summary__section">
        <h2>{t("print.prepChecklist")}</h2>
        <ul className="print-summary__checklist">
          {checklist.map((item) => (
            <li key={item.label}>
              <strong>{item.value ? "✓" : "○"}</strong> {item.label}
            </li>
          ))}
        </ul>
      </div>

      <div className="print-summary__section">
        <h2>{t("print.generalSummary")}</h2>
        <table>
          <tbody>
            <tr>
              <th>{t("print.wallsTotal")}</th>
              <td>{formatLength(wallMetrics.totalLengthFeet, displayUnits, locale)}</td>
            </tr>
            <tr>
              <th>{t("print.doorsTotal")}</th>
              <td>{formatInteger(totalDoors, locale)}</td>
            </tr>
            <tr>
              <th>{t("print.roomsTotal")}</th>
              <td>{formatInteger(totalRooms, locale)}</td>
            </tr>
            <tr>
              <th>{t("print.furnitureTotal")}</th>
              <td>{formatInteger(totalFurniture, locale)}</td>
            </tr>
            <tr>
              <th>{t("print.totalArea")}</th>
              <td>{formatArea(totalAreaSqFt, displayUnits, locale)}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="print-summary__section">
        <h2>{t("print.byRoom")}</h2>
        <table>
          <thead>
            <tr>
              <th>{t("print.name")}</th>
              <th>{t("print.area")}</th>
            </tr>
          </thead>
          <tbody>
            {roomMetrics.length > 0 ? (
              roomMetrics.map((room, index) => {
                const resolvedName =
                  room.name && room.name.trim().length > 0
                    ? room.name
                    : `${t("print.name")} ${index + 1}`;
                return (
                  <tr key={`${resolvedName}-${index}`}>
                    <td>{resolvedName}</td>
                    <td>{formatArea(room.areaSqFt, displayUnits, locale)}</td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan={2}>{t("print.noRooms")}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="print-summary__section">
        <h2>{t("print.byCategory")}</h2>
        <table>
          <thead>
            <tr>
              <th>{t("print.category")}</th>
              <th>{t("print.count")}</th>
            </tr>
          </thead>
          <tbody>
            {furnitureMetrics.length > 0 ? (
              furnitureMetrics.map((item, index) => {
                const label =
                  item.category === "General"
                    ? `${t("print.category")} ${index + 1}`
                    : item.category;
                return (
                  <tr key={`${label}-${index}`}>
                    <td>{label}</td>
                    <td>{formatInteger(item.count, locale)}</td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan={2}>{t("print.noFurniture")}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="print-summary__section">
        <h2>{t("print.notes")}</h2>
        <p>{projectMeta?.notes?.trim() || t("print.noNotes")}</p>
      </div>

      <div className="print-summary__section">
        <h2>{t("print.validations")}</h2>
        <ul className="print-summary__validations">
          {validation?.issues?.length ? (
            validation.issues.map((issue, index) => (
              <li key={`${issue.code}-${index}`}>
                <strong>{issue.level.toUpperCase()}:</strong> {issue.message}
              </li>
            ))
          ) : (
            <li>{t("print.noValidations")}</li>
          )}
        </ul>
      </div>

      <footer className="print-footer">
        {[
          t("print.pageCaption", { current: 2, total: 2 }),
          t("print.footerGenerated", { date: printedLabel }),
          versionLabel ? t("print.footerVersion", { label: versionLabel }) : null,
          planId ? t("print.footerPlan", { id: planId.slice(0, 8) }) : null
        ]
          .filter(Boolean)
          .join(" · ")}
      </footer>
    </section>
  );
}

function formatInteger(value: number, locale: string) {
  return new Intl.NumberFormat(locale, { maximumFractionDigits: 0 }).format(value);
}

function formatLength(lengthFeet: number, units: DisplayUnits, locale: string) {
  if (!Number.isFinite(lengthFeet)) {
    return "—";
  }
  if (units === "metric") {
    const meters = lengthFeet * FT_TO_M;
    return `${new Intl.NumberFormat(locale, { maximumFractionDigits: 2 }).format(meters)} m`;
  }
  return `${new Intl.NumberFormat(locale, { maximumFractionDigits: 2 }).format(lengthFeet)} ft`;
}

function formatArea(areaSqFt: number, units: DisplayUnits, locale: string) {
  if (!Number.isFinite(areaSqFt)) {
    return "—";
  }
  if (units === "metric") {
    const areaSquareMeters = areaSqFt * FT2_TO_M2;
    return `${new Intl.NumberFormat(locale, { maximumFractionDigits: 2 }).format(areaSquareMeters)} m²`;
  }
  return `${new Intl.NumberFormat(locale, { maximumFractionDigits: 2 }).format(areaSqFt)} ft²`;
}
