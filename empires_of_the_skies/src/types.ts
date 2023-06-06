import { BoardProps } from "boardgame.io/dist/types/packages/react";
import { MyGameState } from "./Game";

export interface MyGameProps extends BoardProps<MyGameState> {}

export type MapState = {
  currentTileArray: TileInfoProps[][];
  discoveredTiles: boolean[][];
  buildings: MapBuildingInfo[][];
};
export type MapBuildingInfo = {
  player?: PlayerInfo;
  buildings?: (typeof BuildingOptions)[keyof typeof BuildingOptions][];
};

const BuildingOptions = {
  outpost: "outpost",
  colony: "colony",
  fort: "fort",
} as const;

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
    first: string | undefined;
    second: string | undefined;
    third: string | undefined;
    fourth: string | undefined;
    fifth: string | undefined;
    sixth: string | undefined;
  };
  recruitCouncilors: {
    free: string | undefined;
    oneGold: string | undefined;
    threeGold: string | undefined;
  };
  trainTroops: {
    free: string | undefined;
    oneGold: string | undefined;
  };
  recruitRegiments: {
    free: string | undefined;
    oneGold: string | undefined;
    twoGold: string | undefined;
    threeGoldToSixRegiments: string | undefined;
    threeGoldToSevenRegiments: string | undefined;
    fourGold: string | undefined;
  };
  purchaseSkyships: {
    zeelandOneGold: string | undefined;
    zeelandThreeGold: string | undefined;
    zeelandFourGold: string | undefined;
    venoaOneGold: string | undefined;
    venoaThreeGold: string | undefined;
    venoaFourGold: string | undefined;
  };
  foundBuildings: {
    cathedrals: string[];
    palaces: string[];
    shipyards: string[];
    forts: string[];
  };
  inflencePrelates: {
    angland: string | undefined;
    gallois: string | undefined;
    castilia: string | undefined;
    zeeland: string | undefined;
    venoa: string | undefined;
    normark: string | undefined;
    ostreich: string | undefined;
    constantium: string | undefined;
  };
  punishDissenters: {
    threeVP: string | undefined;
    counsellor: string | undefined;
    twoVP: string | undefined;
    oneVP: string | undefined;
    oneGold: string | undefined;
    free: string | undefined;
  };
  convertMonarch: {
    twoCounsellors: string | undefined;
    threeVP: string | undefined;
    counsellor: string | undefined;
    twoVP: string | undefined;
    oneVP: string | undefined;
    oneGold: string | undefined;
  };
};
