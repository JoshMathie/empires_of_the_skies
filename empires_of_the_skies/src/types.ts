import { BoardProps } from "boardgame.io/dist/types/packages/react";
import { FunctionComponent, SVGAttributes } from "react";

export interface MyGameProps extends BoardProps<MyGameState> {}

export interface MyGameState {
  playerInfo: { [details: string]: PlayerInfo };
  mapState: MapState;
  boardState: ActionBoardInfo;
  playerOrder: PlayerOrder;
  cardDecks: CardDeckInfo;
  battleState?: BattleState;
  stage:
    | "discovery"
    | "actions"
    | "attack or pass"
    | "attack or evade"
    | "resolve battle"
    | "plunder legends"
    | "relocate loser"
    | "ground battle"
    | "conquests"
    | "election"
    | "defend or yield"
    | "resolve ground battle"
    | "garrison troops";
}

export type BattleState = {
  attacker: BattlePlayerInfo;
  defender: BattlePlayerInfo;
};

interface BattlePlayerInfo extends PlayerInfo {
  decision: "fight" | "evade" | "undecided";
  fowCard?: FortuneOfWarCardInfo;
  victorious?: boolean;
}

export type CardDeckInfo = {
  fortuneOfWarCards: FortuneOfWarCardInfo[];
  discardedFortuneOfWarCards: FortuneOfWarCardInfo[];
};

export type FortuneOfWarCardInfo = {
  image: FunctionComponent<SVGAttributes<SVGElement>>;
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
  mostRecentlyDiscoveredTile: number[];
  discoveredRaces: string[];
  battleMap: string[][][];
  currentBattle: number[];
};
export type MapBuildingInfo = {
  player?: PlayerInfo;
  buildings?: "outpost" | "colony";
  fort?: boolean;
  garrisonedRegiments?: number;
  garrisonedLevies?: number;
};

export type PlayerInfo = {
  id: string;
  colour: (typeof PlayerColour)[keyof typeof PlayerColour];
  ready: boolean;
  passed: boolean;
  resources: Resources;
  isArchprelate: boolean;
  playerBoardCounsellorLocations: PlayerBoardInfo;
  hereticOrOrthodox: string;
  fleetInfo: FleetInfo[];
  cathedrals: number;
  palaces: number;
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
  levies: number;
};

export type PlayerBoardInfo = {
  buildSkyships: boolean;
  conscriptLevies: boolean;
  dispatchSkyshipFleet: boolean;
};

export type TileLoot = {
  gold: number;
  mithril: number;
  dragonScales: number;
  krakenSkin: number;
  magicDust: number;
  stickyIchor: number;
  pipeweed: number;
  victoryPoints: number;
};

export interface Resources extends TileLoot {
  counsellors: number;
  skyships: number;
  regiments: number;
  levies: number;
  fortuneCards: PlayerFortuneOfWarCardInfo[];
  advantageCard: string;
  eventCards: string[];
  legacyCard: string;
}

export const PlayerColour = {
  red: "#DC5454",
  green: "#478779",
  yellow: "#F5DE48",
  blue: "#51658D",
  brown: "#A0522D",
  white: "#E6EFE9",
} as const;

export type TileInfoProps = {
  name: string;
  image: FunctionComponent<SVGAttributes<SVGElement>>;
  blocked: string[];
  sword: number;
  shield: number;
  loot: LootInfo;
  type: "land" | "ocean" | "legend" | "home" | "infidel_empire";
};

interface LootInfo {
  outpost: TileLoot;
  colony: TileLoot;
}

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
  issueHolyDecree: boolean;
};
