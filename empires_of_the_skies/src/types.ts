import { BoardProps } from "boardgame.io/dist/types/packages/react";

export interface MyGameProps extends BoardProps<MyGameState> {}

export interface MyGameState {
  turn: number;
  phase: string;
  playerInfo: { [details: string]: PlayerInfo };
  mapState: MapState;
  boardState: ActionBoardInfo;
  playerOrder: PlayerOrder;
  cardDecks: CardDeckInfo;
}

export type CardDeckInfo = {
  fortuneOfWarCards: FortuneOfWarCardInfo[];
  discardedFortuneOfWarCards: FortuneOfWarCardInfo[];
};

export type FortuneOfWarCardInfo = {
  image: string;
  sword: number;
  shield: number;
};

export interface PlayerFortuneOfWarCardInfo extends FortuneOfWarCardInfo {
  flipped: boolean;
}
export type PlayerOrder = {
  1: string | undefined;
  2: string | undefined;
  3: string | undefined;
  4: string | undefined;
  5: string | undefined;
  6: string | undefined;
};
export type MapState = {
  currentTileArray: TileInfoProps[][];
  discoveredTiles: boolean[][];
  buildings: MapBuildingInfo[][];
};
export type MapBuildingInfo = {
  player?: PlayerInfo;
  buildings?: "outpost" | "colony";
  fort?: boolean;
  garrisonedRegiments?: number;
};

export type PlayerInfo = {
  id: string;
  colour: (typeof PlayerColour)[keyof typeof PlayerColour];
  ready: boolean;
  resources: Resources;
  isArchprelate: boolean;
  playerBoardCounsellorLocations: PlayerBoardInfo;
  hereticOrOthodox: string;
  fleetInfo: FleetInfo[];
  cathedrals: number;
  palaces: number;
  victoryPoints: number;
  heresyTracker: number;
  prisoners: number;
  shipyards: number;
  forts: FortInfo[];
};

type FortInfo = {
  location: number[];
  garrisonedRegiments: number;
};

export type FleetInfo = {
  fleetId: number;
  location: number[];
  skyships: number;
  regiments: number;
};

export type PlayerBoardInfo = {
  buildSkyships: boolean;
  conscriptLevies: boolean;
  dispatchSkyshipFleet: boolean;
};

export type Resources = {
  gold: number;
  mithril: number;
  dragonScales: number;
  krakenSkin: number;
  magicDust: number;
  stickyIchor: number;
  pipeweed: number;
  counsellors: number;
  skyships: number;
  regiments: number;
  fortuneCards: PlayerFortuneOfWarCardInfo[];
  advantageCard: string;
  eventCards: string[];
  legacyCard: string;
};

export const PlayerColour = {
  red: "#E3000F",
  green: "#478779",
  yellow: "#FFCC00",
  blue: "#51658D",
  purple: "#bc73c9",
  white: "#FFFFFF",
} as const;

export type TileInfoProps = {
  name: string;
  image: string;
  blocked: string[];
  sword: number;
  shield: number;
  loot: LootInfo;
};

type LootInfo = {
  outpost: {
    gold: number;
    mithril: number;
    dragonScales: number;
    krakenSkin: number;
    magicDust: number;
    stickyIchor: number;
    pipeweed: number;
    victoryPoints: number;
  };
  colony: {
    gold: number;
    mithril: number;
    dragonScales: number;
    krakenSkin: number;
    magicDust: number;
    stickyIchor: number;
    pipeweed: number;
    victoryPoints: number;
  };
};

export type ActionBoardInfo = {
  alterPlayerOrder: {
    1: string | undefined;
    2: string | undefined;
    3: string | undefined;
    4: string | undefined;
    5: string | undefined;
    6: string | undefined;
  };
  recruitCounsellors: {
    1: string | undefined;
    2: string | undefined;
    3: string | undefined;

    // free: string | undefined;
    // oneGold: string | undefined;
    // threeGold: string | undefined;
  };
  trainTroops: {
    1: string | undefined;
    2: string | undefined;
    // free: string | undefined;
    // oneGold: string | undefined;
  };
  recruitRegiments: {
    1: string | undefined;
    2: string | undefined;
    3: string | undefined;
    4: string | undefined;
    5: string | undefined;
    6: string | undefined;
    // free: string | undefined;
    // oneGold: string | undefined;
    // twoGold: string | undefined;
    // threeGoldToSixRegiments: string | undefined;
    // threeGoldToSevenRegiments: string | undefined;
    // fourGold: string | undefined;
  };
  purchaseSkyships: {
    1: string | undefined;
    2: string | undefined;
    3: string | undefined;
    4: string | undefined;
    5: string | undefined;
    6: string | undefined;
    // zeelandOneGold: string | undefined;
    // zeelandThreeGold: string | undefined;
    // zeelandFourGold: string | undefined;
    // venoaOneGold: string | undefined;
    // venoaThreeGold: string | undefined;
    // venoaFourGold: string | undefined;
  };
  foundBuildings: {
    1: string[];
    2: string[];
    3: string[];
    4: string[];
    // cathedrals: string[];
    // palaces: string[];
    // shipyards: string[];
    // forts: string[];
  };
  influencePrelates: {
    1: string | undefined;
    2: string | undefined;
    3: string | undefined;
    4: string | undefined;
    5: string | undefined;
    6: string | undefined;
    7: string | undefined;
    8: string | undefined;
    // angland: string | undefined;
    // gallois: string | undefined;
    // castilia: string | undefined;
    // zeeland: string | undefined;
    // venoa: string | undefined;
    // normark: string | undefined;
    // ostreich: string | undefined;
    // constantium: string | undefined;
  };
  punishDissenters: {
    1: string | undefined;
    2: string | undefined;
    3: string | undefined;
    4: string | undefined;
    5: string | undefined;
    6: string | undefined;
    // threeVP: string | undefined;
    // counsellor: string | undefined;
    // twoVP: string | undefined;
    // oneVP: string | undefined;
    // oneGold: string | undefined;
    // free: string | undefined;
  };
  convertMonarch: {
    1: string | undefined;
    2: string | undefined;
    3: string | undefined;
    4: string | undefined;
    5: string | undefined;
    6: string | undefined;
    // twoCounsellors: string | undefined;
    // threeVP: string | undefined;
    // counsellor: string | undefined;
    // twoVP: string | undefined;
    // oneVP: string | undefined;
    // oneGold: string | undefined;
  };
};
