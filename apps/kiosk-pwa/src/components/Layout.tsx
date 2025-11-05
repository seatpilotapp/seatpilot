import { NavLink, useLocation } from 'react-router-dom';
import type { ReactNode } from 'react';

type LayoutProps = {
  children: ReactNode;
};

const links = [
  { to: '/kiosk', label: 'Kiosk' },
  { to: '/signage', label: 'Signage' },
  { to: '/tv/main', label: 'TV · Main' }
];

export function Layout({ children }: LayoutProps) {
  const location = useLocation();
  const isKioskRoute = location.pathname.startsWith('/kiosk');

  if (isKioskRoute) {
    return <div className="kiosk-shell">{children}</div>;
  }

  return (
    <div className="main-shell">
      <header className="top-bar">
        <div className="top-bar-inner">
          <div className="brand">
            <img src="/seatpilot.svg" alt="SeatPilot logo" />
            <div>
              <strong>SeatPilot</strong>
              <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>Operational Displays</div>
            </div>
          </div>

          <nav className="nav-links" aria-label="SeatPilot displays">
            {links.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
              >
                {label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>

      <main className="content">
        <div className="content-inner">{children}</div>
      </main>

      <footer className="footer">
        SeatPilot · Operaciones en tiempo real ·{' '}
        <span style={{ color: '#38bdf8' }}>beta</span>
      </footer>
    </div>
  );
}
