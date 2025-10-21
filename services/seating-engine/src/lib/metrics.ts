const baseUrl = process.env.METRICS_API_BASE_URL?.replace(/\/$/, '');
const apiKey = process.env.METRICS_API_KEY ?? process.env.METRICS_INGEST_KEY ?? undefined;

interface AssignObservationPayload {
  tenant: string;
  channel: string;
  duration_ms: number;
  score: number;
  feasible_ratio: number;
  violations_hard: number;
  violations_soft: number;
}

export async function observeAssign(payload: AssignObservationPayload): Promise<void> {
  if (!baseUrl) return;
  try {
    await fetch(`${baseUrl}/observe/assign`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...(apiKey ? { 'x-metrics-key': apiKey } : {})
      },
      body: JSON.stringify(payload)
    });
  } catch {
    // fire-and-forget
  }
}
