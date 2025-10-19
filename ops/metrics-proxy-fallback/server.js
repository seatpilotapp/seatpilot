const express = require('express');
const app = express();
const PORT = process.env.PORT || 8081;

const SUPABASE_HOST = process.env.SUPABASE_HOST;
const SB_SECRET = process.env.SB_SECRET; // expected sb_secret_xxx or service_role

if (!SUPABASE_HOST || !SB_SECRET) {
  console.error('SUPABASE_HOST and SB_SECRET env vars are required');
}

app.get('/health', (req, res) => res.json({ok: true}));

app.get('/metrics', async (req, res) => {
  try {
    const url = new URL(`/customer/v1/privileged/metrics`, `https://${SUPABASE_HOST}`);
    // forward query params except apikey
    for (const [k, v] of Object.entries(req.query)) {
      if (k.toLowerCase() === 'apikey') continue;
      url.searchParams.append(k, v);
    }
    // inject our key both as header and query param (some endpoints accept either)
    url.searchParams.append('apikey', SB_SECRET);

    const upstream = await fetch(url.toString(), {
      method: 'GET',
      headers: {
        'apikey': SB_SECRET,
        'Authorization': `Bearer ${SB_SECRET}`,
        'Accept': 'text/plain'
      }
    });

    const text = await upstream.text();
    res.status(upstream.status);
    // copy content-type
    const ct = upstream.headers.get('content-type');
    if (ct) res.set('content-type', ct);
    res.send(text);
  } catch (err) {
    console.error('proxy error', err);
    res.status(502).json({error: 'proxy_error', detail: err.message});
  }
});

app.listen(PORT, () => console.log(`metrics-proxy-fallback listening on ${PORT}`));
