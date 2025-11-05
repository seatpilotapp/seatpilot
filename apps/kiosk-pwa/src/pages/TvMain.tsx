import { Link } from 'react-router-dom';

const zones = [
  { id: 'vip', name: 'Zona VIP', occupancy: 61, projector: 'P3', eta: '3 min' },
  { id: 'platino', name: 'Platea Platino', occupancy: 47, projector: 'P1', eta: '6 min' },
  { id: 'general', name: 'Gradas General', occupancy: 78, projector: 'P2', eta: '9 min' }
];

export function TvMainPage() {
  return (
    <section aria-labelledby="tv-title">
      <header>
        <div className="status-pill warn" role="status">
          ● Broadcast interno
        </div>
        <h1 id="tv-title" className="page-title">
          Panel maître (TV)
        </h1>
        <p className="page-subtitle">
          Resumen de zonas con acceso rápido para lanzar indicaciones puntuales. Haz clic en cada
          tarjeta para abrir la vista dedicada (`/tv/:zone`).
        </p>
      </header>

      <div className="grid two-cols" role="list">
        {zones.map((zone) => (
          <Link key={zone.id} to={`/tv/${zone.id}`} className="card" role="listitem">
            <div className="card-title">{zone.name}</div>
            <div className="metric-callout" style={{ color: '#38bdf8' }}>
              {zone.occupancy}%<span>ocupación</span>
            </div>
            <p className="card-description">Projector {zone.projector} · ETA {zone.eta}</p>
            <p style={{ margin: 0, color: '#a5b4fc', fontSize: '0.85rem' }}>Abrir vista dedicada →</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
