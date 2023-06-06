import type { Game, Ctx } from "boardgame.io";
import { INVALID_MOVE } from "boardgame.io/core/";

import {
  TileInfoProps,
  PlayerInfo,
  MapState,
  MapBuildingInfo,
  PlayerColour,
  ActionBoardInfo,
} from "./types";
import {
  unknownWorldTiles,
  oceanTiles,
  legendTiles,
  knownWorldTiles,
} from "./codifiedGameInfo";

export interface MyGameState {
  turn: number;
  phase: string;

  // tileInfo: TileInfoProps[];
  playerInfo: PlayerInfo[];
  mapState: MapState;
  boardState: ActionBoardInfo;
}

export const MyGame: Game<MyGameState> = {
  name: "empires-of-the-skies",
  setup: ({ ctx }): MyGameState => {
    const turn = 0;
    const phase = "not sure yet";
    const mapState: MapState = {
      currentTileArray: getRandomisedMapTileArray(),
      discoveredTiles: getInitialDiscoveredTiles(),
      buildings: getInitialOutpostsAndColonysInfo(),
    };
    const playerInfos = (ctx: Ctx): PlayerInfo[] => {
      const colours = getPlayerColours(ctx);
      const playerColour = colours.pop();
      return ctx.playOrder.map((playerID) => {
        return {
          id: playerID,
          colour: playerColour ? playerColour : PlayerColour.green,
          ready: true, //look into what this should be
          resources: {
            //update this to reflect starting resources
            gold: 6,
            mithril: 0,
            dragonScales: 0,
            krakenSkin: 0,
            magicDust: 0,
            stickyIchor: 0,
            pipeweed: 0,
            counsellors: 6,
            skyships: 3,
            regiments: 6,
            fortuneCards: [""],
            advantageCard: "",
            eventCards: [""],
            legacyCard: "",
          },
          isArchprelate: playerID === ctx.playOrder[ctx.playOrder.length - 1],
          playerBoardCounsellorLocations: {
            buildSkyships: false,
            conscriptLevies: false,
            dispatchSkyshipFleet: false,
          },
          hereticOrOthodox: "orthodox",
          fleetInfo: [
            { fleetId: 1, location: [0, 4], skyships: 0, regiments: 0 },
            { fleetId: 2, location: [0, 4], skyships: 0, regiments: 0 },
            { fleetId: 3, location: [0, 4], skyships: 0, regiments: 0 },
          ],
          cathedrals: 1,
          palaces: 1,
          victoryPoints: 0,
          heresyTracker: [0, 0],
          prisoners: 0,
          shipyards: 0,
        };
      });
    };
    const initialBoardState = {
      alterPlayerOrder: {
        first: undefined,
        second: undefined,
        third: undefined,
        fourth: undefined,
        fifth: undefined,
        sixth: undefined,
      },
      recruitCouncilors: {
        free: undefined,
        oneGold: undefined,
        threeGold: undefined,
      },
      recruitRegiments: {
        free: undefined,
        oneGold: undefined,
        twoGold: undefined,
        threeGoldToSevenRegiments: undefined,
        threeGoldToSixRegiments: undefined,
        fourGold: undefined,
      },
      trainTroops: { free: undefined, oneGold: undefined },
      purchaseSkyships: {
        zeelandFourGold: undefined,
        zeelandThreeGold: undefined,
        zeelandOneGold: undefined,
        venoaFourGold: undefined,
        venoaThreeGold: undefined,
        venoaOneGold: undefined,
      },
      foundBuildings: {
        forts: [],
        palaces: [],
        cathedrals: [],
        shipyards: [],
      },
      inflencePrelates: {
        angland: undefined,
        gallois: undefined,
        venoa: undefined,
        zeeland: undefined,
        castilia: undefined,
        constantium: undefined,
        normark: undefined,
        ostreich: undefined,
      },
      punishDissenters: {
        threeVP: undefined,
        oneGold: undefined,
        oneVP: undefined,
        counsellor: undefined,
        twoVP: undefined,
        free: undefined,
      },
      convertMonarch: {
        oneGold: undefined,
        oneVP: undefined,
        threeVP: undefined,
        twoCounsellors: undefined,
        twoVP: undefined,
        counsellor: undefined,
      },
    };

    return {
      phase: phase,
      turn: turn,
      playerInfo: playerInfos(ctx),
      mapState: mapState,
      boardState: initialBoardState,
    };
  },
  moves: {
    discoverTile: {
      move: ({ G, ctx, playerID, events, random }, ...args) => {
        const [x, y] = args[1];
        if (G.mapState.discoveredTiles[y][x] === true) {
          return INVALID_MOVE;
        }
        G.mapState.discoveredTiles[y][x] = true;

        events.endTurn();
      },
      undoable: true,
    },
  },
  maxPlayers: 6,
  minPlayers: 1,
};

const getRandomisedMapTileArray = () => {
  let randomTiles = oceanTiles.concat(unknownWorldTiles, legendTiles);

  let currentIndex = 28;
  let randomIndex = 0;
  while (currentIndex > 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [randomTiles[currentIndex], randomTiles[randomIndex]] = [
      randomTiles[randomIndex],
      randomTiles[currentIndex],
    ];
  }
  randomTiles.splice(3, 0, knownWorldTiles[0]);
  randomTiles.splice(4, 0, knownWorldTiles[1]);
  randomTiles.splice(11, 0, knownWorldTiles[2]);
  randomTiles.splice(12, 0, knownWorldTiles[3]);
  const twoDimensionalMapArray: TileInfoProps[][] = [
    randomTiles.slice(0, 8),
    randomTiles.slice(8, 16),
    randomTiles.slice(16, 24),
    randomTiles.slice(24, 32),
  ];
  return twoDimensionalMapArray;
};

const getInitialDiscoveredTiles = () => {
  const eightFalses = [false, false, false, false, false, false, false, false];
  const twoDimensionalBooleanArray: boolean[][] = [
    [...eightFalses],
    [...eightFalses],
    [...eightFalses],
    [...eightFalses],
  ];
  twoDimensionalBooleanArray[0][3] = true;
  twoDimensionalBooleanArray[0][4] = true;
  twoDimensionalBooleanArray[1][3] = true;
  twoDimensionalBooleanArray[1][4] = true;

  return twoDimensionalBooleanArray;
};

const getInitialOutpostsAndColonysInfo = () => {
  const buildingInfo: MapBuildingInfo = {};
  const eightBuildingInfo: MapBuildingInfo[] = [
    buildingInfo,
    buildingInfo,
    buildingInfo,
    buildingInfo,
    buildingInfo,
    buildingInfo,
    buildingInfo,
    buildingInfo,
  ];
  return [
    eightBuildingInfo,
    eightBuildingInfo,
    eightBuildingInfo,
    eightBuildingInfo,
  ];
};

const getPlayerColours = (ctx: Ctx) => {
  const colours = [
    PlayerColour.black,
    PlayerColour.blue,
    PlayerColour.green,
    PlayerColour.red,
    PlayerColour.white,
    PlayerColour.yellow,
  ];
  return colours.slice(0, ctx.numPlayers);
};
