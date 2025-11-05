import { useMemo, useState } from "react";
import type { Selection, Furniture, TextElement } from "../../types";
import { Inspector } from "../Inspector";
import { canvasUnitsToInches, inchesToCanvasUnits } from "../../utils/measure";
import "./inspector.css";

type Tab = "style" | "text" | "arrange";

type InspectorTabsProps = React.ComponentProps<typeof Inspector> & {
  onTabChange?: (tab: Tab) => void;
  onCopyStyle?: () => void;
  onPasteStyle?: () => void;
  collapsed?: boolean;
  onToggleCollapse?: () => void;
};

export function InspectorTabs({
  selection,
  selectedElement,
  onChangeText,
  onChangeFurniture,
  onTabChange,
  displayUnits,
  onCopyStyle,
  onPasteStyle,
  collapsed = false,
  onToggleCollapse,
  ...inspectorProps
}: InspectorTabsProps) {
  const [tab, setTab] = useState<Tab>("style");

  const handleTab = (next: Tab) => {
    setTab(next);
    onTabChange?.(next);
  };

  const activeFurniture =
    selection?.type === "furniture" && selectedElement ? (selectedElement as Furniture) : null;
  const activeText =
    selection?.type === "text" && selectedElement ? (selectedElement as TextElement) : null;

  const positionInches = useMemo(() => {
    if (!activeFurniture) {
      return { x: null, y: null };
    }
    return {
      x: canvasUnitsToInches(activeFurniture.position.x),
      y: canvasUnitsToInches(activeFurniture.position.y)
    };
  }, [activeFurniture]);

  const unitLabel = displayUnits === "metric" ? "cm" : "in";
  const sizeStep = displayUnits === "metric" ? 5 : 1;
  const positionStep = displayUnits === "metric" ? 5 : 1;

  const toDisplayUnits = (inches: number | null) => {
    if (inches === null || !Number.isFinite(inches)) {
      return "";
    }
    const factor = displayUnits === "metric" ? 2.54 : 1;
    const decimals = displayUnits === "metric" ? 1 : 2;
    return Number((inches * factor).toFixed(decimals));
  };

  const fromDisplayUnits = (value: number) => {
    const factor = displayUnits === "metric" ? 2.54 : 1;
    return value / factor;
  };

  return (
    <aside className={`inspector-tabs ${collapsed ? "is-collapsed" : ""}`}>
      <button
        type="button"
        className="inspector-tabs__collapse"
        aria-expanded={!collapsed}
        aria-label={collapsed ? "Mostrar inspector" : "Ocultar inspector"}
        onClick={() => onToggleCollapse?.()}
      >
        {collapsed ? "›" : "‹"}
      </button>
      {!collapsed ? (
        <>
          <div className="inspector-tabs__header">
            {([
              "style",
              "text",
              "arrange"
            ] as Tab[]).map((value) => (
              <button
                key={value}
                type="button"
                className={`inspector-tabs__tab ${value === tab ? "is-active" : ""}`}
                onClick={() => handleTab(value)}
              >
                {value.toUpperCase()}
              </button>
            ))}
          </div>

          <div className="inspector-tabs__body">
            {tab === "style" ? (
              <Inspector
                selection={selection}
                selectedElement={selectedElement}
                displayUnits={displayUnits}
                onChangeText={onChangeText}
                onChangeFurniture={onChangeFurniture}
                {...inspectorProps}
              />
            ) : null}

            {tab === "text" ? (
              activeText ? (
                <div className="inspector-panel">
                  <label htmlFor="insp-text-value">Contenido</label>
                  <textarea
                    id="insp-text-value"
                    rows={4}
                    value={activeText.value}
                    onChange={(event) =>
                      onChangeText({ value: event.target.value })
                    }
                  />
                  <small className="inspector-note">
                    Edición rápida de textos (placas, notas, headers).
                  </small>
                </div>
              ) : (
                <EmptyHint label="Selecciona un elemento de texto para editar." />
              )
            ) : null}

            {tab === "arrange" ? (
              activeFurniture ? (
                <div className="inspector-panel inspector-panel--grid">
              <div className="inspector-field">
                <label htmlFor="insp-size-width">{`Ancho (${unitLabel})`}</label>
                <input
                  id="insp-size-width"
                  type="number"
                  step={sizeStep}
                  value={toDisplayUnits(activeFurniture.width)}
                  onChange={(event) => {
                    const parsed = Number.parseFloat(event.target.value);
                    if (Number.isFinite(parsed)) {
                      const inches = fromDisplayUnits(parsed);
                      onChangeFurniture({ width: inches });
                    }
                  }}
                />
              </div>

              <div className="inspector-field">
                <label htmlFor="insp-size-height">{`Alto (${unitLabel})`}</label>
                <input
                  id="insp-size-height"
                  type="number"
                  step={sizeStep}
                  value={toDisplayUnits(activeFurniture.depth)}
                  onChange={(event) => {
                    const parsed = Number.parseFloat(event.target.value);
                    if (Number.isFinite(parsed)) {
                      const inches = fromDisplayUnits(parsed);
                      onChangeFurniture({ depth: inches });
                    }
                  }}
                />
              </div>

              <div className="inspector-field">
                <label htmlFor="insp-arrange-x">{`Pos X (${unitLabel})`}</label>
                <input
                  id="insp-arrange-x"
                  type="number"
                  step={positionStep}
                  value={toDisplayUnits(positionInches.x)}
                  onChange={(event) => {
                    const parsed = Number.parseFloat(event.target.value);
                    if (Number.isFinite(parsed)) {
                      const inches = fromDisplayUnits(parsed);
                      onChangeFurniture({
                        position: {
                          ...activeFurniture.position,
                          x: inchesToCanvasUnits(inches)
                        }
                      });
                    }
                  }}
                />
              </div>

              <div className="inspector-field">
                <label htmlFor="insp-arrange-y">{`Pos Y (${unitLabel})`}</label>
                <input
                  id="insp-arrange-y"
                  type="number"
                  step={positionStep}
                  value={toDisplayUnits(positionInches.y)}
                  onChange={(event) => {
                    const parsed = Number.parseFloat(event.target.value);
                    if (Number.isFinite(parsed)) {
                      const inches = fromDisplayUnits(parsed);
                      onChangeFurniture({
                        position: {
                          ...activeFurniture.position,
                          y: inchesToCanvasUnits(inches)
                        }
                      });
                    }
                  }}
                />
              </div>

              <div className="inspector-field">
                <label htmlFor="insp-arrange-rot">Rotación (°)</label>
                <input
                  id="insp-arrange-rot"
                  type="number"
                  step={1}
                  value={Math.round(activeFurniture.rotation)}
                  onChange={(event) => {
                    const deg = Number.parseFloat(event.target.value);
                    if (Number.isFinite(deg)) {
                      onChangeFurniture({ rotation: deg });
                    }
                  }}
                />
              </div>

              <div className="inspector-field inspector-field--actions">
                <button
                  type="button"
                  className="app__button app__button--secondary"
                  onClick={() => onCopyStyle?.()}
                  disabled={!onCopyStyle}
                >
                  Copiar estilo
                </button>
                <button
                  type="button"
                  className="app__button app__button--ghost"
                  onClick={() => onPasteStyle?.()}
                  disabled={!onPasteStyle}
                >
                  Pegar estilo
                </button>
              </div>
            </div>
              ) : (
                <EmptyHint label="Selecciona un mobiliario para ajustar posición/rotación." />
              )
            ) : null}
          </div>
        </>
      ) : null}
    </aside>
  );
}

function EmptyHint({ label }: { label: string }) {
  return <p className="inspector-empty">{label}</p>;
}
