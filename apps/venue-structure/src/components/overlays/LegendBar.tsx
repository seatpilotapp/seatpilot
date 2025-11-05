import "./overlays.css";

type LegendBarProps = {
  scale: string;
  northDeg: number;
  units: string;
};

export function LegendBar({ scale, northDeg, units }: LegendBarProps) {
  return (
    <footer className="legend-bar" aria-label="Plan legend">
      <span>Escala: {scale || "—"}</span>
      <span>Norte: {Number.isFinite(northDeg) ? `${Math.round(northDeg)}°` : "—"}</span>
      <span>Unidades: {units}</span>
      <span className="legend-bar__sep">•</span>
      <span>Rojo = Bloquea · Ámbar = Revisar · Verde = OK</span>
    </footer>
  );
}

