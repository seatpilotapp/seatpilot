import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import fs from 'node:fs';
import path from 'node:path';

const certDir = path.resolve(__dirname, '../../.certs');
const certPath = path.join(certDir, 'seatpilot-dev.crt');
const keyPath = path.join(certDir, 'seatpilot-dev.key');

export default defineConfig({
  plugins: [react()],
  server: {
    port: 4173,
    host: '0.0.0.0',
    https: fs.existsSync(certPath) && fs.existsSync(keyPath)
      ? {
          cert: fs.readFileSync(certPath),
          key: fs.readFileSync(keyPath)
        }
      : undefined
  },
  preview: {
    port: 4173,
    host: '0.0.0.0'
  }
});
