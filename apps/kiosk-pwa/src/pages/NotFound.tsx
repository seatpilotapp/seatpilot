import { Link } from 'react-router-dom';

export function NotFoundPage() {
  return (
    <main className="page page--not-found">
      <section className="page__content">
        <h1>Página no encontrada</h1>
        <p>
          La ruta solicitada no existe en el kiosko. Vuelve al menú principal
          para continuar.
        </p>
        <Link to="/kiosk" className="btn btn--primary">
          Ir al kiosko
        </Link>
      </section>
    </main>
  );
}
