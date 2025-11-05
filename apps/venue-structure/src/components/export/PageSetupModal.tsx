import { useState } from "react";
import "./export.css";

type PageSetupModalProps = {
  open: boolean;
  onClose: () => void;
  onApply: (config: { orientation: "portrait" | "landscape"; showGrid: boolean; showGuides: boolean }) => void;
};

export function PageSetupModal({ open, onClose, onApply }: PageSetupModalProps) {
  const [orientation, setOrientation] = useState<"portrait" | "landscape">("portrait");
  const [showGrid, setShowGrid] = useState(true);
  const [showGuides, setShowGuides] = useState(true);

  if (!open) {
    return null;
  }

  return (
    <div className="export-modal" role="dialog" aria-modal="true" aria-label="Page setup">
      <div className="export-modal__body">
        <h3>Page Setup</h3>
        <label className="export-modal__field">
          <span>Orientation</span>
          <select value={orientation} onChange={(event) => setOrientation(event.target.value as "portrait" | "landscape")}>
            <option value="portrait">Portrait</option>
            <option value="landscape">Landscape</option>
          </select>
        </label>
        <label className="export-modal__field export-modal__field--checkbox">
          <input type="checkbox" checked={showGrid} onChange={(event) => setShowGrid(event.target.checked)} />
          <span>Show grid</span>
        </label>
        <label className="export-modal__field export-modal__field--checkbox">
          <input type="checkbox" checked={showGuides} onChange={(event) => setShowGuides(event.target.checked)} />
          <span>Show guides</span>
        </label>
      </div>
      <footer className="export-modal__footer">
        <button type="button" className="app__button app__button--ghost" onClick={onClose}>
          Cancel
        </button>
        <button
          type="button"
          className="app__button"
          onClick={() => onApply({ orientation, showGrid, showGuides })}
        >
          Apply
        </button>
      </footer>
    </div>
  );
}
