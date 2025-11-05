type DesignerEventPayload = Record<string, unknown>;

export function emitDesignerEvent(name: string, payload: DesignerEventPayload = {}) {
  try {
    if (typeof window !== "undefined") {
      const detail = { name, timestamp: Date.now(), payload };
      window.dispatchEvent(new CustomEvent("seatdesigner:event", { detail }));
    }
    if (typeof console !== "undefined") {
      // eslint-disable-next-line no-console
      console.debug(`[seat-designer] ${name}`, payload);
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.warn("[seat-designer] telemetry emit failed", error);
  }
}

