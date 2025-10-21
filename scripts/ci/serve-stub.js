const http = require('http');
const fs = require('fs');
const path = require('path');

const html = `<!doctype html>
<html lang="es">
<head>
  <meta charset="utf-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1"/>
  <meta name="theme-color" content="#0F172A"/>
  <link rel="manifest" href="/manifest.webmanifest"/>
  <title>SeatPilot FE Stub</title>
  <style>body{font-family:system-ui,-apple-system,Segoe UI,Roboto,Ubuntu;margin:2rem}.card{border:1px solid #e5e7eb;border-radius:8px;padding:1rem;margin-bottom:1rem}</style>
</head>
<body>
  <h1>SeatPilot FE Stub</h1>
  <div class="card">
    <p>Este stub usa <code>brand/tokens.json</code> y <code>brand/icons/sp-icons.manifest.json</code> para validar Pa11y/Lighthouse en CI.</p>
  </div>
  <script>
    fetch('/brand/tokens.json').then(r=>r.json()).then(j=>console.log('tokens', j)).catch(()=>{});
    fetch('/brand/icons/sp-icons.manifest.json').then(r=>r.json()).then(j=>console.log('icons', j)).catch(()=>{});
  </script>
</body>
</html>`;

const server = http.createServer((req, res) => {
  if (req.url === '/manifest.webmanifest') {
    res.setHeader('Content-Type', 'application/manifest+json');
    res.end(JSON.stringify({
      name: 'SeatPilot Stub',
      short_name: 'SeatPilot',
      start_url: '/',
      display: 'standalone',
      icons: []
    }));
    return;
  }

  if (req.url === '/brand/tokens.json') {
    const tokensPath = path.join(process.cwd(), 'brand', 'tokens.json');
    if (fs.existsSync(tokensPath)) {
      res.setHeader('Content-Type', 'application/json');
      fs.createReadStream(tokensPath).pipe(res);
      return;
    }
  }

  if (req.url === '/brand/icons/sp-icons.manifest.json') {
    const manifestPath = path.join(process.cwd(), 'brand', 'icons', 'sp-icons.manifest.json');
    if (fs.existsSync(manifestPath)) {
      res.setHeader('Content-Type', 'application/json');
      fs.createReadStream(manifestPath).pipe(res);
      return;
    }
  }

  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.end(html);
});

server.listen(3000, () => {
  console.log('Stub UI on http://localhost:3000');
});
