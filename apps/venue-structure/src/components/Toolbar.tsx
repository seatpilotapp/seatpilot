import type { DisplayUnits, Tool } from "../types";
import "./Toolbar.css";

type ToolbarProps = {
  activeTool: Tool;
  onSelectTool: (tool: Tool) => void;
  onUndo: () => void;
  onRedo: () => void;
  canUndo: boolean;
  canRedo: boolean;
  displayUnits: DisplayUnits;
  onChangeDisplayUnits: (units: DisplayUnits) => void;
  zoom: number;
  onZoomIn: () => void;
  onZoomOut: () => void;
  onResetView: () => void;
  onDeleteSelection: () => void;
};

const tools: Array<{ tool: Tool; label: string }> = [
  { tool: "select", label: "Select" },
  { tool: "wall", label: "Walls" },
  { tool: "door", label: "Doors" },
  { tool: "furniture", label: "Furniture" },
  { tool: "zone", label: "Zones" },
  { tool: "text", label: "Text" },
  { tool: "erase", label: "Eraser" }
];

export function Toolbar({
  activeTool,
  onSelectTool,
  onUndo,
  onRedo,
  canUndo,
  canRedo,
  displayUnits,
  onChangeDisplayUnits,
  zoom,
  onZoomIn,
  onZoomOut,
  onResetView,
  onDeleteSelection
}: ToolbarProps) {
  return (
    <nav className="toolbar">
      <div className="toolbar__section">
        <h1 className="toolbar__title">Tools</h1>
        <ul className="toolbar__list">
          {tools.map(({ tool, label }) => (
            <li key={tool}>
              <button
                type="button"
                className={`toolbar__button ${
                  activeTool === tool ? "toolbar__button--active" : ""
                }`}
                onClick={() => onSelectTool(tool)}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="toolbar__section toolbar__section--secondary">
        <button
          type="button"
          className="toolbar__control"
          onClick={onUndo}
          disabled={!canUndo}
        >
          Undo
        </button>
        <button
          type="button"
          className="toolbar__control"
          onClick={onRedo}
          disabled={!canRedo}
        >
          Redo
        </button>
        <div className="toolbar__divider" />
        <button type="button" className="toolbar__control" onClick={onZoomOut}>
          -
        </button>
        <span className="toolbar__label">{Math.round(zoom * 100)}%</span>
        <button type="button" className="toolbar__control" onClick={onZoomIn}>
          +
        </button>
        <button type="button" className="toolbar__control" onClick={onResetView}>
          Reset
        </button>
        <button
          type="button"
          className="toolbar__control toolbar__control--danger"
          onClick={onDeleteSelection}
        >
          Delete
        </button>
        <div className="toolbar__divider" />
        <label className="toolbar__label" htmlFor="units-select">
          Units
        </label>
        <select
          id="units-select"
          className="toolbar__select"
          value={displayUnits}
          onChange={(event) =>
            onChangeDisplayUnits(event.target.value as DisplayUnits)
          }
        >
          <option value="imperial">ft / in</option>
          <option value="metric">metric</option>
        </select>
      </div>
    </nav>
  );
}
