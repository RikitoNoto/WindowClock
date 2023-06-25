import {describe, expect, test} from '@jest/globals';
import TimeUtil from '../helper/TimeUtil';

describe('TimeUtil', () => {
  describe('Time to degree', () => {

    describe('Seconds to degree', () => {
      test('should be 0s convert to 0deg', () => {
        expect(TimeUtil.secToDeg(0)).toBe(0);
      });

      test('should be 1s convert to 6deg', () => {
        expect(TimeUtil.secToDeg(1)).toBe(6);
      });

      test('should be 1.1s convert to 6deg', () => {
        expect(TimeUtil.secToDeg(1.1)).toBe(6.6);
      });
    });

    describe('Minutes to degree', () => {
      test('should be 0m0s convert to 0deg', () => {
        expect(TimeUtil.minuteToDeg(0, 0)).toBe(0);
      });

      test('should be 1m0s convert to 6deg', () => {
        expect(TimeUtil.minuteToDeg(1, 0)).toBe(6);
      });

      test('should be 1m30s convert to 9deg', () => {
        expect(TimeUtil.minuteToDeg(1, 30)).toBe(9);
      });

      test('should be 30m20s convert to 182deg', () => {
        expect(TimeUtil.minuteToDeg(30, 20)).toBe(182);
      });
    });

    describe('Hours to degree', () => {
      test('should be 0h0m0s convert to 0deg', () => {
        expect(TimeUtil.hourToDeg(0, 0, 0)).toBe(0);
      });

      test('should be 1h0m0s convert to 30deg', () => {
        expect(TimeUtil.hourToDeg(1, 0, 0)).toBe(30);
      });

      test('should be 1h30m0s convert to 45deg', () => {
        expect(TimeUtil.hourToDeg(1, 30, 0)).toBe(45);
      });

      test('should be 1h20m12s convert to 40.1deg', () => {
        expect(TimeUtil.hourToDeg(1, 20, 12)).toBe(40.1);
      });
    });
  });
});
