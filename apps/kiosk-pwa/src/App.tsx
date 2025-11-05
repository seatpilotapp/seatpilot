import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import { KioskPage } from './pages/Kiosk';
import { SignagePage } from './pages/Signage';
import { TvMainPage } from './pages/TvMain';
import { TvZonePage } from './pages/TvZone';
import { NotFoundPage } from './pages/NotFound';

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate to="/kiosk" replace />} />
        <Route path="/kiosk" element={<KioskPage />} />
        <Route path="/signage" element={<SignagePage />} />
        <Route path="/tv/main" element={<TvMainPage />} />
        <Route path="/tv/:zone" element={<TvZonePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Layout>
  );
}
