import { describe, it, expect } from 'vitest';
import {
  LOCATIONS,
  INDEXED_LOCATIONS,
  PRIMARY_LOCATION,
  getLocationBySlug,
} from '../../src/data/locations';

describe('Locations Data', () => {
  describe('LOCATIONS array integrity', () => {
    it('contains exactly 9 locations', () => {
      expect(LOCATIONS).toHaveLength(9);
    });

    it('every location has a unique slug', () => {
      const slugs = LOCATIONS.map((l) => l.slug);
      expect(new Set(slugs).size).toBe(slugs.length);
    });

    it('every slug matches URL-safe pattern', () => {
      for (const loc of LOCATIONS) {
        expect(loc.slug).toMatch(/^[a-z0-9-]+$/);
      }
    });

    it('every location has latitude within Bradford & West Yorkshire bounds', () => {
      for (const loc of LOCATIONS) {
        expect(loc.latitude).toBeGreaterThan(53.7);
        expect(loc.latitude).toBeLessThan(54.0);
      }
    });

    it('every location has longitude within Bradford & West Yorkshire bounds', () => {
      for (const loc of LOCATIONS) {
        expect(loc.longitude).toBeGreaterThan(-2.0);
        expect(loc.longitude).toBeLessThan(-1.6);
      }
    });

    it('every location has countyOrRegion defined', () => {
      for (const loc of LOCATIONS) {
        expect(loc.countyOrRegion).toBeTruthy();
      }
    });
  });

  describe('PRIMARY_LOCATION', () => {
    it('is "bradford"', () => {
      expect(PRIMARY_LOCATION.slug).toBe('bradford');
    });

    it('is first in LOCATIONS array', () => {
      expect(LOCATIONS[0]).toBe(PRIMARY_LOCATION);
    });
  });

  describe('INDEXED_LOCATIONS', () => {
    it('contains all 9 locations', () => {
      expect(INDEXED_LOCATIONS).toHaveLength(9);
    });

    it('includes only locations without noindex', () => {
      for (const loc of INDEXED_LOCATIONS) {
        expect(loc.noindex).toBeFalsy();
      }
    });

    it('includes all location slugs', () => {
      const slugs = INDEXED_LOCATIONS.map((l) => l.slug);
      expect(slugs).toContain('bradford');
      expect(slugs).toContain('shipley');
      expect(slugs).toContain('keighley');
      expect(slugs).toContain('bingley');
      expect(slugs).toContain('ilkley');
      expect(slugs).toContain('saltaire');
      expect(slugs).toContain('idle');
      expect(slugs).toContain('thornton');
      expect(slugs).toContain('queensbury');
    });
  });

  describe('getLocationBySlug', () => {
    it('returns correct location for "bradford"', () => {
      const loc = getLocationBySlug('bradford');
      expect(loc).toBeDefined();
      expect(loc!.name).toBe('Bradford');
    });

    it('returns correct location for "shipley"', () => {
      const loc = getLocationBySlug('shipley');
      expect(loc).toBeDefined();
      expect(loc!.name).toBe('Shipley');
    });

    it('returns undefined for non-existent slug', () => {
      expect(getLocationBySlug('nonexistent')).toBeUndefined();
    });

    it('returns undefined for empty string', () => {
      expect(getLocationBySlug('')).toBeUndefined();
    });
  });
});
