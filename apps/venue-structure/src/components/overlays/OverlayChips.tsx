import { useMemo } from "react";
import "./overlays.css";

type OverlayChipsProps = {
  state: Record<string, boolean>;
  onToggle: (key: string) => void;
  status?: "ok" | "warn" | "error";
};

export function OverlayChips({ state, onToggle, status = "ok" }: OverlayChipsProps) {
  const chips = [
    { key: "capacity", label: "Aforo" },
    { key: "aisles", label: "Pasillos" },
    { key: "pmr", label: "PMR" },
    { key: "safety", label: "Safety" }
  ];

  const statusLabel = useMemo(() => {
    if (status === "warn") {
      return "Avisos";
    }
    if (status === "error") {
      return "Bloqueos";
    }
    return "OK";
  }, [status]);

  return (
    <>
      <div className="overlay-chips" role="group" aria-label="Overlays">
        {chips.map((chip) => (
          <button
            key={chip.key}
            type="button"
            className={`overlay-chip ${state[chip.key] ? "is-active" : ""}`}
            onClick={() => onToggle(chip.key)}
          >
            {chip.label}
          </button>
        ))}
      </div>
      <span className={`overlay-status overlay-status--${status}`}>
        {statusLabel}
      </span>
    </>
  );
}
