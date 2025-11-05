const experiences = [
  {
    title: 'Accesos Norte',
    occupancy: 72,
    eta: '5 min',
    guidance: 'Utiliza filas 1-4. Equipo de apoyo disponible.'
  },
  {
    title: 'Accesos Sur',
    occupancy: 34,
    eta: '2 min',
    guidance: 'Flujo ligero. Dirige a invitados VIP al carril dedicado.'
  },
  {
    title: 'Mesa de acreditación',
    occupancy: 58,
    eta: '4 min',
    guidance: 'Escaneo + credencial automática. Soporte bilingüe.'
  }
];

export function SignagePage() {
  return (
    <section aria-labelledby="signage-title">
      <header>
        <div className="status-pill" role="status">
          ● Auto-refresh cada 30 s
        </div>
        <h1 id="signage-title" className="page-title">
          Pantallas de señalización
        </h1>
        <p className="page-subtitle">
          Usa esta vista para TV o tablet en modo kiosk. Cada tarjeta refleja el estado de una zona
          crítica del venue.
        </p>
      </header>

      <div className="zone-grid">
        {experiences.map((experience) => (
          <article key={experience.title} className="zone-card">
            <h3>{experience.title}</h3>
            <div className="zone-metric">
              {experience.occupancy}%<span>ocupación</span>
            </div>
            <div className="zone-meta">Tiempo estimado: {experience.eta}</div>
            <p style={{ marginTop: '1rem', color: '#cbd5f5' }}>{experience.guidance}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
