import { useState } from "react";
import "./export.css";

type ExportMenuProps = {
  onPdf: () => void;
  onSvg: () => void;
  onJpg: () => void;
  onPageSetup: () => void;
};

export function ExportMenu({ onPdf, onSvg, onJpg, onPageSetup }: ExportMenuProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="export-menu" onMouseLeave={() => setOpen(false)}>
      <button
        type="button"
        className="app__button app__button--ghost"
        onClick={() => setOpen((value) => !value)}
        aria-haspopup="menu"
        aria-expanded={open}
      >
        Exportar ▾
      </button>
      {open ? (
        <div className="export-menu__dropdown" role="menu">
          <button type="button" role="menuitem" onClick={onPdf}>
            PDF
          </button>
          <button type="button" role="menuitem" onClick={onSvg}>
            SVG
          </button>
          <button type="button" role="menuitem" onClick={onJpg}>
            JPG
          </button>
          <hr />
          <button type="button" role="menuitem" onClick={onPageSetup}>
            Page Setup…
          </button>
        </div>
      ) : null}
    </div>
  );
}

