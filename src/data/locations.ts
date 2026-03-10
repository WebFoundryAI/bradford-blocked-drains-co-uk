export interface Location {
  slug: string;
  name: string;
  countyOrRegion?: string;
  latitude: number;
  longitude: number;
  noindex?: boolean;
}

export const PRIMARY_LOCATION: Location = {
  slug: "bradford",
  name: "Bradford",
  countyOrRegion: "West Yorkshire",
  latitude: 53.796,
  longitude: -1.7594,
};

export const LOCATIONS: Location[] = [
  PRIMARY_LOCATION,
  {
    slug: "shipley",
    name: "Shipley",
    countyOrRegion: "West Yorkshire",
    latitude: 53.8333,
    longitude: -1.7731,
  },
  {
    slug: "keighley",
    name: "Keighley",
    countyOrRegion: "West Yorkshire",
    latitude: 53.8676,
    longitude: -1.9116,
  },
  {
    slug: "bingley",
    name: "Bingley",
    countyOrRegion: "West Yorkshire",
    latitude: 53.8487,
    longitude: -1.8375,
  },
  {
    slug: "ilkley",
    name: "Ilkley",
    countyOrRegion: "West Yorkshire",
    latitude: 53.9248,
    longitude: -1.8227,
  },
  {
    slug: "saltaire",
    name: "Saltaire",
    countyOrRegion: "West Yorkshire",
    latitude: 53.8389,
    longitude: -1.7895,
  },
  {
    slug: "idle",
    name: "Idle",
    countyOrRegion: "West Yorkshire",
    latitude: 53.829,
    longitude: -1.726,
  },
  {
    slug: "thornton",
    name: "Thornton",
    countyOrRegion: "West Yorkshire",
    latitude: 53.801,
    longitude: -1.842,
  },
  {
    slug: "queensbury",
    name: "Queensbury",
    countyOrRegion: "West Yorkshire",
    latitude: 53.767,
    longitude: -1.851,
  },
];

export const INDEXED_LOCATIONS = LOCATIONS.filter((l) => !l.noindex);

export function getLocationBySlug(slug: string): Location | undefined {
  return LOCATIONS.find((location) => location.slug === slug);
}
