import { describe, it, expect } from 'vitest';
import { APP_CHANNEL, assertEnum } from '@seatpilot/domain-model';

describe('enums from domain-model', () => {
  it('APP_CHANNEL incluye kiosk', () => {
    expect(APP_CHANNEL).toContain('kiosk');
  });

  it('assertEnum lanza INVALID_ENUM', () => {
    expect(() => assertEnum('xxxxx', APP_CHANNEL, 'app_channel')).toThrowError(/invalid_enum/i);
    try {
      assertEnum('xxxxx', APP_CHANNEL, 'app_channel');
    } catch (e: any) {
      expect(e.code).toBe('INVALID_ENUM');
    }
  });
});
