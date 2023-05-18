export type MapState = {
  currentTileArray: TileInfoProps[][];
  discoveredTiles: boolean[][];
  outposts: string[][];
  colonies: string[][];
};
export type PlayerInfo = {
  id: string;
  colour: (typeof PlayerColour)[keyof typeof PlayerColour];
  ready: boolean;
  resources: Resources;
  isArchprelate: boolean;
  counsellorLocations: counsellorLocations;
  hereticOrOthodox: string;
  fleetInfo: FleetInfo[];
  cathedrals: number;
  palaces: number;
  victoryPoints: number;
  heresyTracker: number[];
  prisoners: number;
  shipyards: number;
};

export type FleetInfo = {
  fleetId: number;
  location: number[];
  skyships: number;
  regiments: number;
};

export type counsellorLocations = {
  playerBoard: boolean[];
  actionBoard: boolean[];
};

export type Resources = {
  gold: number;
  mithril: number;
  dragonScales: number;
  krakenSkin: number;
  magicDust: number;
  stickyIchor: number;
  pipeweed: number;
  counsillors: number;
  skyships: number;
  regiments: number;
  fortuneCards: string[];
  advantageCard: string;
  eventCards: string[];
  legacyCard: string;
};

export const PlayerColour = {
  red: "#E3000F",
  green: "#478779",
  yellow: "#FFCC00",
  blue: "#51658D",
  black: "#1A1A18",
  white: "#FFFFFF",
} as const;

export type TileInfoProps = {
  name: string;
  image: string;
  blocked: string[];
  sword: number;
  shield: number;
  loot: Object;
};
