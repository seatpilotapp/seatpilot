import { useEffect, useState, type ReactNode } from "react";
import type {
  DisplayUnits,
  Door,
  Furniture,
  Room,
  Selection,
  TextElement,
  Wall
} from "../types";
import "./Inspector.css";
import {
  formatLengthInches,
  parseLengthToInches,
  formatPosition,
  canvasUnitsToInches,
  inchesToCanvasUnits
} from "../utils/measure";
import { GRID_SIZE } from "../utils/constants";

type InspectorProps = {
  selection: Selection;
  selectedElement: Wall | Door | Room | Furniture | TextElement | null;
  onChangeWall: (updates: Partial<Wall>) => void;
  onChangeDoor: (updates: Partial<Door>) => void;
  onChangeRoom: (updates: Partial<Room>) => void;
  onChangeFurniture: (updates: Partial<Furniture>) => void;
  onChangeText: (updates: Partial<TextElement>) => void;
  displayUnits: DisplayUnits;
  onCheckAccessibility: () => void;
  focusedCorner?:
    | {
        wallId: string;
        index: number;
        radiusCanvas: number;
        candidateCanvas: number | null;
        sharedCount: number;
        direction: "adentro" | "afuera" | null;
      }
    | null;
  onUpdateCornerRadius?: (radiusCanvas: number) => void;
  onResetCornerRadius?: () => void;
  onApplyCandidateRadius?: () => void;
  onApplyChamfer?: (distanceCanvas: number) => void;
  onFlipCornerRadius?: () => void;
};

export function Inspector({
  selection,
  selectedElement,
  onChangeWall,
  onChangeDoor,
  onChangeRoom,
  onChangeFurniture,
  onChangeText,
  displayUnits,
  onCheckAccessibility,
  focusedCorner,
  onUpdateCornerRadius,
  onResetCornerRadius,
  onApplyCandidateRadius,
  onApplyChamfer,
  onFlipCornerRadius
}: InspectorProps) {
  const isDoorSelection = selection?.type === "door" && selectedElement;
  const isRoomSelection = selection?.type === "room" && selectedElement;
  const isFurnitureSelection = selection?.type === "furniture" && selectedElement;
  const isTextSelection = selection?.type === "text" && selectedElement;
  const isWallSelection = selection?.type === "wall" && selectedElement;

  const wall = isWallSelection ? (selectedElement as Wall) : null;
  const cornerSectionEnabled =
    !!(wall && focusedCorner && focusedCorner.wallId === wall.id && focusedCorner.sharedCount > 0);
  const currentCornerInches =
    cornerSectionEnabled && focusedCorner
      ? canvasUnitsToInches(focusedCorner.radiusCanvas)
      : 0;
  const candidateCornerInches =
    cornerSectionEnabled && focusedCorner && focusedCorner.candidateCanvas
      ? canvasUnitsToInches(focusedCorner.candidateCanvas)
      : null;
  const candidateCanvasValue =
    cornerSectionEnabled && focusedCorner && focusedCorner.candidateCanvas
      ? focusedCorner.candidateCanvas
      : null;
  const hasCornerRadius =
    cornerSectionEnabled && focusedCorner
      ? Math.abs(focusedCorner.radiusCanvas) > 0.01
      : false;
  const cornerDirection =
    hasCornerRadius && focusedCorner
      ? focusedCorner.direction ?? (focusedCorner.radiusCanvas < 0 ? "afuera" : "adentro")
      : null;
  const candidateDirection =
    candidateCanvasValue && candidateCanvasValue > 0.01 ? "adentro" : null;
  const canFlipCorner =
    !!onFlipCornerRadius &&
    cornerSectionEnabled &&
    (hasCornerRadius || (candidateCanvasValue !== null && candidateCanvasValue > 0.01));
  const flipLabel =
    cornerDirection === "afuera" ? "Invertir -> adentro" : "Invertir -> afuera";

  const [cornerInput, setCornerInput] = useState<string>(() =>
    cornerSectionEnabled ? formatLengthInches(currentCornerInches, displayUnits) : ""
  );
  const [chamferInput, setChamferInput] = useState<string>(() =>
    displayUnits === "metric" ? "20 cm" : "8 in"
  );

  useEffect(() => {
    if (cornerSectionEnabled && focusedCorner) {
      setCornerInput(formatLengthInches(currentCornerInches, displayUnits));
    } else {
      setCornerInput("");
    }
  }, [cornerSectionEnabled, currentCornerInches, displayUnits, focusedCorner]);

  const handleCornerInputChange = (value: string) => {
    setCornerInput(value);
    if (!cornerSectionEnabled || !onUpdateCornerRadius) {
      return;
    }
    const inches = parseLengthToInches(value, displayUnits, currentCornerInches);
    const canvasRadius = inchesToCanvasUnits(inches);
    onUpdateCornerRadius(canvasRadius);
  };

  const handleApplyCornerInput = () => {
    if (!cornerSectionEnabled || !onUpdateCornerRadius) {
      return;
    }
    const inches = parseLengthToInches(cornerInput, displayUnits, currentCornerInches);
    const canvasRadius = inchesToCanvasUnits(inches);
    onUpdateCornerRadius(canvasRadius);
  };

  const handleChamferApply = () => {
    if (!cornerSectionEnabled || !onApplyChamfer) {
      return;
    }
    const fallbackInches = canvasUnitsToInches(GRID_SIZE);
    const inches = parseLengthToInches(chamferInput, displayUnits, fallbackInches);
    const canvasDistance = inchesToCanvasUnits(inches);
    onApplyChamfer(canvasDistance);
  };

  let title = "Properties";
  let body: ReactNode = (
    <p className="inspector__empty">
      Select an element to inspect its properties.
    </p>
  );
  let actions: ReactNode = null;

  if (isDoorSelection) {
    const door = selectedElement as Door;
    title = "Door Properties";
    body = (
      <dl className="inspector__grid">
        <dt>ID</dt>
        <dd>{door.id}</dd>

        <dt>Width</dt>
        <dd>
          <input
            type="text"
            value={formatLengthInches(door.width, displayUnits)}
            onChange={(event) =>
              onChangeDoor({
                width: parseLengthToInches(
                  event.target.value,
                  displayUnits,
                  door.width
                )
              })
            }
          />
        </dd>

        <dt>Depth</dt>
        <dd>
          <input
            type="text"
            value={formatLengthInches(door.depth, displayUnits)}
            onChange={(event) =>
              onChangeDoor({
                depth: parseLengthToInches(
                  event.target.value,
                  displayUnits,
                  door.depth
                )
              })
            }
          />
        </dd>

        <dt>Rotation (°)</dt>
        <dd>
          <input
            type="number"
            min={-180}
            max={180}
            step={1}
            value={door.rotation}
            onChange={(event) =>
              onChangeDoor({ rotation: Number(event.target.value) })
            }
          />
        </dd>

        <dt>Swing</dt>
        <dd>
          <select
            value={door.swing}
            onChange={(event) =>
              onChangeDoor({ swing: event.target.value as Door["swing"] })
            }
          >
            <option value="left">Left</option>
            <option value="right">Right</option>
          </select>
        </dd>

        <dt>Pos X</dt>
        <dd>{formatPosition(door.position.x, displayUnits)}</dd>

        <dt>Pos Y</dt>
        <dd>{formatPosition(door.position.y, displayUnits)}</dd>
      </dl>
    );
    actions = (
      <button type="button" className="inspector__action" onClick={onCheckAccessibility}>
        Validate Clearance
      </button>
    );
  } else if (isRoomSelection) {
    const room = selectedElement as Room;
    title = "Room Properties";
    body = (
      <dl className="inspector__grid">
        <dt>ID</dt>
        <dd>{room.id}</dd>

        <dt>Name</dt>
        <dd>
          <input
            type="text"
            value={room.name}
            onChange={(event) =>
              onChangeRoom({ name: event.target.value })
            }
          />
        </dd>

        <dt>Area (ft²)</dt>
        <dd>{room.areaSqFt.toFixed(2)}</dd>

        <dt>Vertices</dt>
        <dd>{room.points.length}</dd>
      </dl>
    );
    actions = (
      <button type="button" className="inspector__action" onClick={onCheckAccessibility}>
        Validate Space Rules
      </button>
    );
  } else if (isFurnitureSelection) {
    const furniture = selectedElement as Furniture;
    title = "Furniture Properties";
    body = (
      <dl className="inspector__grid">
        <dt>ID</dt>
        <dd>{furniture.id}</dd>

        <dt>Label</dt>
        <dd>
          <input
            type="text"
            value={furniture.label}
            onChange={(event) =>
              onChangeFurniture({ label: event.target.value })
            }
          />
        </dd>

        <dt>Width</dt>
        <dd>
          <input
            type="text"
            value={formatLengthInches(furniture.width, displayUnits)}
            onChange={(event) =>
              onChangeFurniture({
                width: parseLengthToInches(
                  event.target.value,
                  displayUnits,
                  furniture.width
                )
              })
            }
          />
        </dd>

        <dt>Depth</dt>
        <dd>
          <input
            type="text"
            value={formatLengthInches(furniture.depth, displayUnits)}
            onChange={(event) =>
              onChangeFurniture({
                depth: parseLengthToInches(
                  event.target.value,
                  displayUnits,
                  furniture.depth
                )
              })
            }
          />
        </dd>

        <dt>Rotation (°)</dt>
        <dd>
          <input
            type="number"
            min={-180}
            max={180}
            step={1}
            value={furniture.rotation}
            onChange={(event) =>
              onChangeFurniture({ rotation: Number(event.target.value) })
            }
          />
        </dd>

        <dt>Pos X</dt>
        <dd>{formatPosition(furniture.position.x, displayUnits)}</dd>

        <dt>Pos Y</dt>
        <dd>{formatPosition(furniture.position.y, displayUnits)}</dd>

        <dt>Category</dt>
        <dd>{furniture.category}</dd>
      </dl>
    );
    actions = (
      <button type="button" className="inspector__action" onClick={onCheckAccessibility}>
        Validate Placement
      </button>
    );
  } else if (isTextSelection) {
    const text = selectedElement as TextElement;
    const minWidthUnits = GRID_SIZE * 2;
    const minHeightUnits = GRID_SIZE * 1.5;
    const widthDisplay = formatLengthInches(
      canvasUnitsToInches(text.width),
      displayUnits
    );
    const heightDisplay = formatLengthInches(
      canvasUnitsToInches(text.height),
      displayUnits
    );
    title = "Text Properties";
    body = (
      <dl className="inspector__grid">
        <dt>ID</dt>
        <dd>{text.id}</dd>

        <dt>Contenido</dt>
        <dd>
          <textarea
            value={text.value}
            rows={4}
            onChange={(event) =>
              onChangeText({ value: event.target.value })
            }
          />
        </dd>

        <dt>Width</dt>
        <dd>
          <input
            type="text"
            value={widthDisplay}
            onChange={(event) => {
              const parsed = parseLengthToInches(
                event.target.value,
                displayUnits,
                canvasUnitsToInches(text.width)
              );
              const widthUnits = Math.max(
                minWidthUnits,
                inchesToCanvasUnits(parsed)
              );
              onChangeText({ width: widthUnits });
            }}
          />
        </dd>

        <dt>Height</dt>
        <dd>
          <input
            type="text"
            value={heightDisplay}
            onChange={(event) => {
              const parsed = parseLengthToInches(
                event.target.value,
                displayUnits,
                canvasUnitsToInches(text.height)
              );
              const heightUnits = Math.max(
                minHeightUnits,
                inchesToCanvasUnits(parsed)
              );
              onChangeText({ height: heightUnits });
            }}
          />
        </dd>

        <dt>Rotation (°)</dt>
        <dd>
          <input
            type="number"
            min={-180}
            max={180}
            step={1}
            value={text.rotation}
            onChange={(event) =>
              onChangeText({ rotation: Number(event.target.value) })
            }
          />
        </dd>

        <dt>Font size</dt>
        <dd>
          <input
            type="number"
            min={10}
            max={64}
            step={1}
            value={text.fontSize}
            onChange={(event) =>
              onChangeText({ fontSize: Number(event.target.value) })
            }
          />
        </dd>

        <dt>Pos X</dt>
        <dd>{formatPosition(text.position.x, displayUnits)}</dd>

        <dt>Pos Y</dt>
        <dd>{formatPosition(text.position.y, displayUnits)}</dd>
      </dl>
    );
  } else if (isWallSelection && wall) {
    const cornerActualText = hasCornerRadius && focusedCorner
      ? `${formatLengthInches(currentCornerInches, displayUnits)} (${cornerDirection})`
      : "Recta";
    const candidateText = candidateCornerInches
      ? `${formatLengthInches(candidateCornerInches, displayUnits)} (${candidateDirection ?? "adentro"})`
      : "No disponible";

    title = "Wall Properties";
    body = (
      <>
        <dl className="inspector__grid">
          <dt>ID</dt>
          <dd>{wall.id}</dd>

          <dt>Segments</dt>
          <dd>{wall.points.length - 1}</dd>

          <dt>Width</dt>
          <dd>
            <input
              type="text"
              value={formatLengthInches(wall.width, displayUnits)}
              onChange={(event) =>
                onChangeWall({
                  width: parseLengthToInches(
                    event.target.value,
                    displayUnits,
                    wall.width
                  )
                })
              }
            />
          </dd>

          <dt>Material</dt>
          <dd>
            <select
              value={wall.material}
              onChange={(event) =>
                onChangeWall({ material: event.target.value })
              }
            >
              <option value="gwb">Gypsum Board</option>
              <option value="cmu">CMU</option>
              <option value="glass">Glass</option>
              <option value="temporary">Temporary Partition</option>
            </select>
          </dd>

          <dt>Fire Rating</dt>
          <dd>
            <select
              value={wall.fireRating}
              onChange={(event) =>
                onChangeWall({ fireRating: event.target.value })
              }
            >
              <option value="NR">Not Rated</option>
              <option value="1h">1 hour</option>
              <option value="2h">2 hour</option>
              <option value="3h">3 hour</option>
            </select>
          </dd>
        </dl>

        {cornerSectionEnabled ? (
          <>
            <h3 className="inspector__subtitle">Corner Fillet</h3>
            <dl className="inspector__grid inspector__grid--compact">
              <dt>Vertex</dt>
              <dd>
                #{focusedCorner!.index + 1}
                {focusedCorner!.sharedCount > 1 ? ` (${focusedCorner!.sharedCount} walls)` : ""}
              </dd>

              <dt>Radius</dt>
              <dd>
                <input
                  type="text"
                  value={cornerInput}
                  onChange={(event) => handleCornerInputChange(event.target.value)}
                  placeholder={displayUnits === "metric" ? "0 cm" : "0 in"}
                />
              </dd>

              <dt>Actual</dt>
              <dd>{cornerActualText}</dd>

              <dt>Sugerido (semicírculo)</dt>
              <dd>{candidateText}</dd>
            </dl>

            <div className="inspector__corner-actions">
              <button
                type="button"
                className="inspector__action"
                onClick={handleApplyCornerInput}
              >
                Aplicar valor manual
              </button>
              <button
                type="button"
                className="inspector__action"
                disabled={!candidateCornerInches}
                onClick={() => candidateCornerInches && onApplyCandidateRadius?.()}
              >
                Semicírculo adentro
              </button>
              <button
                type="button"
                className="inspector__action"
                disabled={!candidateCornerInches || !onUpdateCornerRadius}
                onClick={() => {
                  if (candidateCanvasValue && onUpdateCornerRadius) {
                    onUpdateCornerRadius(-candidateCanvasValue);
                  }
                }}
              >
                Semicírculo afuera
              </button>
              <button
                type="button"
                className="inspector__action"
                disabled={!canFlipCorner}
                onClick={() => onFlipCornerRadius?.()}
              >
                {flipLabel}
              </button>
              <button
                type="button"
                className="inspector__action inspector__action--danger"
                onClick={() => onResetCornerRadius?.()}
              >
                Volver a recta
              </button>
            </div>

            <h4 className="inspector__subtitle">Chaflán rápido</h4>
            <div className="inspector__corner-chamfer">
              <input
                type="text"
                value={chamferInput}
                onChange={(event) => setChamferInput(event.target.value)}
                placeholder={displayUnits === "metric" ? "20 cm" : "8 in"}
              />
              <button type="button" className="inspector__action" onClick={handleChamferApply}>
                Aplicar chaflán
              </button>
            </div>
          </>
        ) : null}
      </>
    );
    actions = (
      <button type="button" className="inspector__action" onClick={onCheckAccessibility}>
        Validate Accessibility
      </button>
    );
  }

  return (
    <aside className="inspector">
      <h2 className="inspector__title">{title}</h2>
      <div className="inspector__content">{body}</div>
      {actions ? <div className="inspector__actions">{actions}</div> : null}
    </aside>
  );
}
