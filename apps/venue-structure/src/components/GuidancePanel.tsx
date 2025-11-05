import type {
  DisplayUnits,
  Door,
  Furniture,
  ProjectMeta,
  Room,
  Wall
} from "../types";
import "./GuidancePanel.css";

type LayoutSnapshot = {
  walls: Wall[];
  doors: Door[];
  rooms: Room[];
  furniture: Furniture[];
};

type ChecklistItem = {
  id: string;
  label: string;
  description: string;
  status: "complete" | "pending";
};

type GuidancePanelProps = {
  layout: LayoutSnapshot;
  displayUnits: DisplayUnits;
  projectMeta: ProjectMeta;
  onUpdateProjectMeta: (updates: Partial<ProjectMeta>) => void;
  collapsed?: boolean;
  onToggleCollapse?: () => void;
};

export function GuidancePanel({
  layout,
  displayUnits,
  projectMeta,
  onUpdateProjectMeta,
  collapsed = false,
  onToggleCollapse
}: GuidancePanelProps) {
  const totalWalls = layout.walls.length;
  const totalDoors = layout.doors.length;
  const totalRooms = layout.rooms.length;
  const totalFurniture = layout.furniture.length;
  const unlabeledRooms = layout.rooms.filter(
    (room) => !room.name || room.name.trim().length === 0
  );
  const doorsMissingSwing = layout.doors.filter(
    (door) => !door.swing || (door.swing !== "left" && door.swing !== "right")
  );

  const structuralCounts = layout.furniture.reduce(
    (acc, item) => {
      const type = item.typeId;
      if (type.startsWith("stage")) acc.stages += 1;
      if (type.startsWith("dancefloor")) acc.danceFloors += 1;
      if (type.startsWith("av-control")) acc.avBooths += 1;
      if (type.startsWith("bar-fixed")) acc.fixedBars += 1;
      if (type.startsWith("bar-mobile")) acc.mobileBars += 1;
      if (type.startsWith("kitchen-prep")) acc.hotKitchens += 1;
      if (type.startsWith("kitchen-warming")) acc.warmingKitchens += 1;
      if (type.startsWith("storage-backstage")) acc.storage += 1;
      if (type.startsWith("service-corridor")) acc.serviceCorridors += 1;
      if (type.startsWith("floorbox")) acc.floorBoxes += 1;
      if (type.startsWith("extinguisher")) acc.extinguishers += 1;
      if (type.startsWith("hydrant")) acc.hydrants += 1;
      if (type.startsWith("exit-sign")) acc.exitSigns += 1;
      if (type.startsWith("bathroom")) acc.bathrooms += 1;
      if (type.startsWith("closet")) acc.closets += 1;
      if (type.startsWith("shaft")) acc.shafts += 1;
      return acc;
    },
    {
      stages: 0,
      danceFloors: 0,
      avBooths: 0,
      fixedBars: 0,
      mobileBars: 0,
      hotKitchens: 0,
      warmingKitchens: 0,
      storage: 0,
      serviceCorridors: 0,
      floorBoxes: 0,
      extinguishers: 0,
      hydrants: 0,
      exitSigns: 0,
      bathrooms: 0,
      closets: 0,
      shafts: 0
    }
  );

  const checklist: ChecklistItem[] = [
    {
      id: "title",
      label: "Título del dibujo",
      description:
        "Incluye el nombre del venue o área en la carátula (ej. “OFFICE BUILDING”).",
      status: projectMeta.title.trim() ? "complete" : "pending"
    },
    {
      id: "scale",
      label: "Escala definida",
      description:
        "Asegura que la escala figure en la carátula (recomendado 1/4\" = 1'-0\" o equivalente métrico).",
      status: projectMeta.scale.trim() ? "complete" : "pending"
    },
    {
      id: "north-arrow",
      label: "Flecha de norte visible",
      description:
        "Ubica la flecha de norte en la esquina superior izquierda tal como indica el checklist AIA.",
      status:
        projectMeta.hasNorthArrow && projectMeta.northReference.trim()
          ? "complete"
          : "pending"
    },
    {
      id: "sections",
      label: "Marcadores de secciones",
      description:
        "Traza los símbolos de corte que referencian a secciones y detalles (ej. corte A-A).",
      status: projectMeta.hasSectionMarkers ? "complete" : "pending"
    },
    {
      id: "dimensions",
      label: "Cotas registradas",
      description:
        "Todas las aberturas y particiones deberían tener dimensiones según el estándar (cara exterior a borde / centros).",
      status: projectMeta.dimensionsDocumented ? "complete" : "pending"
    },
    {
      id: "hatch",
      label: "Hachurados por material",
      description:
        "Aplica hatch arquitectónico para muros y elementos cortados según el checklist.",
      status: projectMeta.hatchApplied ? "complete" : "pending"
    },
    {
      id: "ceiling",
      label: "Joists y direcciones de techo",
      description:
        "Documenta tamaño, separación y dirección de vigas/joists en la planta.",
      status: projectMeta.ceilingJoistsDocumented ? "complete" : "pending"
    },
    {
      id: "walls",
      label: "Envolvente y particiones",
      description:
        "El plano debe mostrar todos los muros exteriores e interiores (mínimo una envolvente cerrada).",
      status: totalWalls > 0 ? "complete" : "pending"
    },
    {
      id: "door-swing",
      label: "Puertas con giro correcto",
      description:
        "Cada puerta debe mostrar su swing (izquierda/derecha) para cumplir con accesibilidad.",
      status: doorsMissingSwing.length === 0 ? "complete" : "pending"
    },
    {
      id: "room-labels",
      label: "Espacios etiquetados",
      description:
        "Todas las salas y closets deben tener nombre legible y área registrada.",
      status:
        totalRooms > 0 && unlabeledRooms.length === 0 ? "complete" : "pending"
    },
    {
      id: "exit-signs",
      label: "Salidas señalizadas",
      description:
        "Incluye luminarias EXIT sobre puertas principales y rutas de egreso (NFPA 101, Cap. 7).",
      status: structuralCounts.exitSigns > 0 ? "complete" : "pending"
    },
    {
      id: "extinguishers",
      label: "Cobertura de extintores",
      description:
        "Distribuye extintores clase A/B de forma que ningún punto quede a > 75 ft de viaje (NFPA 10).",
      status: structuralCounts.extinguishers > 0 ? "complete" : "pending"
    },
    {
      id: "bathrooms",
      label: "Sanitarios",
      description:
        "Modela los baños operativos (incluye cabina accesible) y vincula con rutas FOH/BOH.",
      status: structuralCounts.bathrooms > 0 ? "complete" : "pending"
    }
  ];

  const unitLabel =
    displayUnits === "imperial" ? "Imperial (ft/in)" : "Métrico (m/cm)";

  const structuralSummary = [
    { id: "stage", label: "Tarimas", value: structuralCounts.stages },
    { id: "dancefloor", label: "Pistas", value: structuralCounts.danceFloors },
    { id: "av", label: "Cabinas AV", value: structuralCounts.avBooths },
    {
      id: "bars",
      label: "Barras fijas / móviles",
      value: structuralCounts.fixedBars + structuralCounts.mobileBars
    },
    {
      id: "kitchens",
      label: "Cocinas (caliente / plating)",
      value: structuralCounts.hotKitchens + structuralCounts.warmingKitchens
    },
    { id: "storage", label: "Storage / Backstage", value: structuralCounts.storage },
    {
      id: "corridors",
      label: "Pasillos servicio",
      value: structuralCounts.serviceCorridors
    },
    { id: "floorbox", label: "Floor boxes", value: structuralCounts.floorBoxes },
    { id: "hydrants", label: "Gabinetes hidrante", value: structuralCounts.hydrants },
    { id: "bathrooms", label: "Baños modelados", value: structuralCounts.bathrooms },
    { id: "closets", label: "Closets limpieza", value: structuralCounts.closets },
    { id: "shafts", label: "Shafts MEP", value: structuralCounts.shafts }
  ].filter((item) => item.value > 0);

  const content = (
    <>
      <section className="guidance__section">
        <h2 className="guidance__title">Datos del plano</h2>
        <div className="guidance__field">
          <label htmlFor="project-title">Título</label>
          <input
            id="project-title"
            type="text"
            value={projectMeta.title}
            placeholder="SeatPilot Venue – Planta nivel 01"
            onChange={(event) =>
              onUpdateProjectMeta({ title: event.target.value })
            }
          />
        </div>
        <div className="guidance__grid">
          <label htmlFor="project-drawing">Plano</label>
          <input
            id="project-drawing"
            type="text"
            value={projectMeta.drawingNumber}
            placeholder="A-102"
            onChange={(event) =>
              onUpdateProjectMeta({ drawingNumber: event.target.value })
            }
          />
          <label htmlFor="project-scale">Escala</label>
          <input
            id="project-scale"
            type="text"
            value={projectMeta.scale}
            placeholder={"1/4\" = 1'-0\""}
            onChange={(event) =>
              onUpdateProjectMeta({ scale: event.target.value })
            }
          />
        </div>
        <div className="guidance__field">
          <label htmlFor="project-north">Referencia norte</label>
          <input
            id="project-north"
            type="text"
            value={projectMeta.northReference}
            placeholder="Ej. Avenida Principal · Azimut 14°"
            onChange={(event) =>
              onUpdateProjectMeta({ northReference: event.target.value })
            }
          />
        </div>
        <div className="guidance__toggle-group">
          <label className="guidance__checkbox">
            <input
              type="checkbox"
              checked={projectMeta.hasNorthArrow}
              onChange={(event) =>
                onUpdateProjectMeta({ hasNorthArrow: event.target.checked })
              }
            />
            <span>Flecha de norte colocada</span>
          </label>
          <label className="guidance__checkbox">
            <input
              type="checkbox"
              checked={projectMeta.hasSectionMarkers}
              onChange={(event) =>
                onUpdateProjectMeta({ hasSectionMarkers: event.target.checked })
              }
            />
            <span>Marcadores de sección añadidos</span>
          </label>
          <label className="guidance__checkbox">
            <input
              type="checkbox"
              checked={projectMeta.dimensionsDocumented}
              onChange={(event) =>
                onUpdateProjectMeta({
                  dimensionsDocumented: event.target.checked
                })
              }
            />
            <span>Dimensiones verificadas</span>
          </label>
          <label className="guidance__checkbox">
            <input
              type="checkbox"
              checked={projectMeta.hatchApplied}
              onChange={(event) =>
                onUpdateProjectMeta({ hatchApplied: event.target.checked })
              }
            />
            <span>Hatch/materiales listos</span>
          </label>
          <label className="guidance__checkbox">
            <input
              type="checkbox"
              checked={projectMeta.ceilingJoistsDocumented}
              onChange={(event) =>
                onUpdateProjectMeta({
                  ceilingJoistsDocumented: event.target.checked
                })
              }
            />
            <span>Joists y dirección de techo</span>
          </label>
        </div>
        <p className="guidance__caption">
          Unidades activas: <strong>{unitLabel}</strong>
        </p>
        <div className="guidance__stats">
          <span>Muros {totalWalls}</span>
          <span>Puertas {totalDoors}</span>
          <span>Salas {totalRooms}</span>
          <span>Muebles {totalFurniture}</span>
        </div>
        <div className="guidance__field">
          <label htmlFor="project-notes">Notas del plano</label>
          <textarea
            id="project-notes"
            rows={3}
            value={projectMeta.notes}
            placeholder="Observaciones del survey, restricciones por ciudad o pendientes de diseño."
            onChange={(event) =>
              onUpdateProjectMeta({ notes: event.target.value })
            }
          />
        </div>
      </section>

      {structuralSummary.length > 0 ? (
        <section className="guidance__section">
          <h2 className="guidance__title">Elementos estructurales</h2>
          <ul className="guidance__structural-list">
            {structuralSummary.map((item) => (
              <li key={item.id} className="guidance__structural-item">
                <span className="guidance__structural-count">{item.value}</span>
                <span className="guidance__structural-label">{item.label}</span>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      <section className="guidance__section">
        <h2 className="guidance__title">Checklist SeatPilot</h2>
        <ul className="guidance__list">
          {checklist.map((item) => (
            <li key={item.id} className="guidance__item">
              <span
                className={`guidance__badge guidance__badge--${item.status}`}
              >
                {item.status === "complete" ? "OK" : "PENDIENTE"}
              </span>
              <div>
                <p className="guidance__item-title">{item.label}</p>
                <p className="guidance__item-desc">{item.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="guidance__section">
        <h2 className="guidance__title">Pasos siguientes</h2>
        <ol className="guidance__steps">
          <li>
            Crea vistas derivadas (plantas de iluminación, seguridad, seating) a
            partir del layout base.
          </li>
          <li>
            Ajusta rutas de evacuación (Door-to-seat, métricas PMR) y valida contra
            NFPA 101 + códigos locales.
          </li>
          <li>
            Genera renders o 3D rápido para walkthrough con el venue/equipo.
          </li>
          <li>
            Añade fixtures y mobiliario clave siguiendo los símbolos normalizados
            (Floor Plan Symbols · secciones 2.3–2.18).
          </li>
          <li>
            Convierte el boceto a plano limpio con escala y norte; carga datos en
            SeatPilot para iterar layouts.
          </li>
        </ol>
      </section>

      <section className="guidance__section">
        <h2 className="guidance__title">Referencias rápidas</h2>
        <ul className="guidance__resources">
          <li>
            <code>docs/plan/planos/Architecture_Construction_Floor_Plan_Checklist.pdf</code>
            <span>Checklist AIA para cotas, hatches y secciones.</span>
          </li>
          <li>
            <code>docs/plan/planos/Floor Plan Drawing Manual.pdf</code>
            <span>Proceso paso a paso de medición y escalado.</span>
          </li>
          <li>
            <code>docs/plan/planos/floor-plan-symbols.pdf</code>
            <span>Biblioteca de símbolos (puertas, HVAC, seguridad, seating).</span>
          </li>
          <li>
            <code>docs/plan/planos/How to Read Plan.pdf</code>
            <span>Convenciones de líneas y lectura 2D/3D.</span>
          </li>
          <li>
            <code>docs/plan/planos/DMF_activity_floorplan_200602.pdf</code>
            <span>Guía didáctica para entrenamiento del equipo.</span>
          </li>
        </ul>
      </section>
    </>
  );

  return (
    <aside className={`guidance ${collapsed ? "guidance--collapsed" : ""}`}>
      <button
        type="button"
        className="guidance__collapse"
        aria-expanded={!collapsed}
        aria-label={collapsed ? "Mostrar panel de datos" : "Ocultar panel de datos"}
        onClick={() => onToggleCollapse?.()}
      >
        {collapsed ? "‹" : "›"}
      </button>
      {!collapsed ? content : null}
    </aside>
  );
}
