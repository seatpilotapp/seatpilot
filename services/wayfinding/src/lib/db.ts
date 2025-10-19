// TODO: Replace with the actual database client used by the wayfinding service.
export const db: {
  oneOrNone: (query: string, values: unknown[]) => Promise<{ ts_checkin_success_ms: number } | null>;
} = {
  async oneOrNone() {
    throw new Error('db.oneOrNone not implemented — connect to your database client');
  }
};
