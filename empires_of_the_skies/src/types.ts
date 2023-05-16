export type MapState = {
  currentTileArray: TileInfoProps[][];
  discoveredTiles: boolean[][];
  outposts: string[][];
  colonies: string[][];
};
export type PlayerInfo = {
  id: string;
  colour: PlayerColour;
  ready: boolean;
  resources: Resources;
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

export enum PlayerColour {
  red = "#E3000F",
  green = "#478779",
  yellow = "FFCC00",
  blue = "51658D",
  black = "1A1A18",
  white = "FFFFFF",
}

export type TileInfoProps = {
  name: string;
  image: string;
  blocked: string[];
  sword: number;
  shield: number;
  loot: Object;
};
