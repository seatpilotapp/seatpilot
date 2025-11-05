import { useMemo } from "react";
import type { DisplayUnits, Point, Viewport } from "../types";
import { GRID_SIZE, VIEWBOX_HEIGHT, VIEWBOX_WIDTH } from "../utils/constants";
import { formatLengthInches, formatPosition } from "../utils/measure";
import "./RulerOverlay.css";

type Tick = {
  position: number;
  label: string | null;
  isMajor: boolean;
};

type RulerOverlayProps = {
  viewport: Viewport;
  displayUnits: DisplayUnits;
  hoverPoint: Point | null;
};

const RULER_THICKNESS = 36;

function getTickSpacing(zoom: number): number {
  const candidates = [
    GRID_SIZE / 4,
    GRID_SIZE / 2,
    GRID_SIZE,
    GRID_SIZE * 2,
    GRID_SIZE * 5,
    GRID_SIZE * 10,
    GRID_SIZE * 20,
    GRID_SIZE * 40
  ];
  for (const step of candidates) {
    if (step * zoom >= 30) {
      return step;
    }
  }
  return candidates[candidates.length - 1];
}

function inchesFromCanvasUnits(value: number): number {
  return (value / GRID_SIZE) * 12;
}

export function RulerOverlay({ viewport, displayUnits, hoverPoint }: RulerOverlayProps) {
  const spacing = useMemo(() => getTickSpacing(viewport.zoom), [viewport.zoom]);

  const labelEvery = useMemo(() => {
    const px = spacing * viewport.zoom;
    return Math.max(1, Math.round(140 / px));
  }, [spacing, viewport.zoom]);

  const { horizontalTicks, verticalTicks } = useMemo(() => {
    const startX = (-viewport.offsetX) / viewport.zoom;
    const endX = (VIEWBOX_WIDTH - viewport.offsetX) / viewport.zoom;
    const startY = (-viewport.offsetY) / viewport.zoom;
    const endY = (VIEWBOX_HEIGHT - viewport.offsetY) / viewport.zoom;

    const horizontal: Tick[] = [];
    let index = 0;
    for (
      let value = Math.floor(startX / spacing) * spacing;
      value <= endX;
      value += spacing, index += 1
    ) {
      const screen = value * viewport.zoom + viewport.offsetX;
      if (screen < -spacing * viewport.zoom || screen > VIEWBOX_WIDTH + spacing * viewport.zoom) {
        continue;
      }
      const isMajor = index % labelEvery === 0;
      horizontal.push({
        position: screen,
        isMajor,
        label: isMajor
          ? formatLengthInches(inchesFromCanvasUnits(value), displayUnits)
          : null
      });
    }

    const vertical: Tick[] = [];
    index = 0;
    for (
      let value = Math.floor(startY / spacing) * spacing;
      value <= endY;
      value += spacing, index += 1
    ) {
      const screen = value * viewport.zoom + viewport.offsetY;
      if (screen < -spacing * viewport.zoom || screen > VIEWBOX_HEIGHT + spacing * viewport.zoom) {
        continue;
      }
      const isMajor = index % labelEvery === 0;
      vertical.push({
        position: screen,
        isMajor,
        label: isMajor
          ? formatLengthInches(inchesFromCanvasUnits(value), displayUnits)
          : null
      });
    }

    return { horizontalTicks: horizontal, verticalTicks: vertical };
  }, [
    displayUnits,
    labelEvery,
    spacing,
    viewport.offsetX,
    viewport.offsetY,
    viewport.zoom
  ]);

  const hoverScreenX =
    hoverPoint != null ? hoverPoint.x * viewport.zoom + viewport.offsetX : null;
  const hoverScreenY =
    hoverPoint != null ? hoverPoint.y * viewport.zoom + viewport.offsetY : null;

  const hoverLabel =
    hoverPoint != null
      ? `X ${formatPosition(hoverPoint.x, displayUnits, GRID_SIZE)} · Y ${formatPosition(
          hoverPoint.y,
          displayUnits,
          GRID_SIZE
        )}`
      : null;

  return (
    <div className="ruler-overlay">
      <svg
        className="ruler-overlay__horizontal"
        viewBox={`0 0 ${VIEWBOX_WIDTH} ${RULER_THICKNESS}`}
        preserveAspectRatio="none"
      >
        <rect width={VIEWBOX_WIDTH} height={RULER_THICKNESS} className="ruler-overlay__bg" />
        {horizontalTicks.map((tick, idx) => (
          <line
            key={`ht-${idx}`}
            x1={tick.position}
            x2={tick.position}
            y1={0}
            y2={tick.isMajor ? RULER_THICKNESS : RULER_THICKNESS * 0.55}
            className={`ruler-overlay__tick ${
              tick.isMajor ? "ruler-overlay__tick--major" : ""
            }`}
          />
        ))}
        {horizontalTicks.map(
          (tick, idx) =>
            tick.label && (
              <text
                key={`ht-label-${idx}`}
                x={tick.position + 4}
                y={RULER_THICKNESS * 0.7}
                className="ruler-overlay__label"
              >
                {tick.label}
              </text>
            )
        )}
        {hoverScreenX != null ? (
          <line
            x1={hoverScreenX}
            x2={hoverScreenX}
            y1={0}
            y2={RULER_THICKNESS}
            className="ruler-overlay__hover-line"
          />
        ) : null}
      </svg>

      <svg
        className="ruler-overlay__vertical"
        viewBox={`0 0 ${RULER_THICKNESS} ${VIEWBOX_HEIGHT}`}
        preserveAspectRatio="none"
      >
        <rect width={RULER_THICKNESS} height={VIEWBOX_HEIGHT} className="ruler-overlay__bg" />
        {verticalTicks.map((tick, idx) => (
          <line
            key={`vt-${idx}`}
            x1={0}
            x2={tick.isMajor ? RULER_THICKNESS : RULER_THICKNESS * 0.55}
            y1={tick.position}
            y2={tick.position}
            className={`ruler-overlay__tick ${
              tick.isMajor ? "ruler-overlay__tick--major" : ""
            }`}
          />
        ))}
        {verticalTicks.map(
          (tick, idx) =>
            tick.label && (
              <text
                key={`vt-label-${idx}`}
                x={RULER_THICKNESS * 0.4}
                y={tick.position - 6}
                className="ruler-overlay__label ruler-overlay__label--vertical"
              >
                {tick.label}
              </text>
            )
        )}
        {hoverScreenY != null ? (
          <line
            x1={0}
            x2={RULER_THICKNESS}
            y1={hoverScreenY}
            y2={hoverScreenY}
            className="ruler-overlay__hover-line"
          />
        ) : null}
      </svg>

      {hoverLabel ? <div className="ruler-overlay__hover-coords">{hoverLabel}</div> : null}
    </div>
  );
}
