import type { Game, Ctx } from "boardgame.io";

import { MyGameState } from "./types";

import {
  TileInfoProps,
  PlayerInfo,
  MapState,
  MapBuildingInfo,
  PlayerColour,
} from "./types";
import {
  unknownWorldTiles,
  oceanTiles,
  legendTiles,
  knownWorldTiles,
} from "./codifiedGameInfo";
import discoverTile from "./moves/discoverTile";
import alterPlayerOrder from "./moves/alterPlayerOrder";
import recruitCounsellors from "./moves/recruitCounsellors";
import recruitRegiments from "./moves/recruitRegiments";
import purchaseSkyships from "./moves/purchaseSkyships";
import foundBuildings from "./moves/foundBuildings";
import {
  checkAndPlaceFort,
  flipCards,
  increaseHeresy,
  increaseOrthodoxy,
} from "./moves/resourceUpdates";
import punishDissenters from "./moves/punishDissenters";
import convertMonarch from "./moves/convertMonarch";
import influencePrelates from "./moves/influencePrelates";
import { fullResetFortuneOfWarCardDeck } from "./helpers/helpers";
import trainTroops from "./moves/trainTroops";
import buildSkyships from "./moves/buildSkyships";

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
    const playerInfos = (ctx: Ctx): { [details: string]: PlayerInfo } => {
      const colours = getPlayerColours(ctx);
      const playerIDMap: { [details: string]: PlayerInfo } = {};
      ctx.playOrder.forEach((playerID) => {
        const playerColour = colours.pop();
        playerIDMap[playerID] = {
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
            fortuneCards: [],
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
          victoryPoints: 10,
          heresyTracker: 0,
          prisoners: 0,
          shipyards: 0,
          forts: [],
        };
      });
      return playerIDMap;
    };
    const initialBoardState = {
      alterPlayerOrder: {
        1: undefined,
        2: undefined,
        3: undefined,
        4: undefined,
        5: undefined,
        6: undefined,
      },
      recruitCounsellors: {
        1: undefined,
        2: undefined,
        3: undefined,

        // free: undefined,
        // oneGold: undefined,
        // threeGold: undefined,
      },
      recruitRegiments: {
        1: undefined,
        2: undefined,
        3: undefined,
        4: undefined,
        5: undefined,
        6: undefined,
        // free: undefined,
        // oneGold: undefined,
        // twoGold: undefined,
        // threeGoldToSevenRegiments: undefined,
        // threeGoldToSixRegiments: undefined,
        // fourGold: undefined,
      },
      trainTroops: {
        1: undefined,
        2: undefined,
        // free: undefined, oneGold: undefined
      },
      purchaseSkyships: {
        1: undefined,
        2: undefined,
        3: undefined,
        4: undefined,
        5: undefined,
        6: undefined,
        // zeelandFourGold: undefined,
        // zeelandThreeGold: undefined,
        // zeelandOneGold: undefined,
        // venoaFourGold: undefined,
        // venoaThreeGold: undefined,
        // venoaOneGold: undefined,
      },
      foundBuildings: {
        1: [],
        2: [],
        3: [],
        4: [],
        // forts: [],
        // palaces: [],
        // cathedrals: [],
        // shipyards: [],
      },
      influencePrelates: {
        1: undefined,
        2: undefined,
        3: undefined,
        4: undefined,
        5: undefined,
        6: undefined,
        7: undefined,
        8: undefined,
        // angland: undefined,
        // gallois: undefined,
        // venoa: undefined,
        // zeeland: undefined,
        // castilia: undefined,
        // constantium: undefined,
        // normark: undefined,
        // ostreich: undefined,
      },
      punishDissenters: {
        1: undefined,
        2: undefined,
        3: undefined,
        4: undefined,
        5: undefined,
        6: undefined,
        // threeVP: undefined,
        // oneGold: undefined,
        // oneVP: undefined,
        // counsellor: undefined,
        // twoVP: undefined,
        // free: undefined,
      },
      convertMonarch: {
        1: undefined,
        2: undefined,
        3: undefined,
        4: undefined,
        5: undefined,
        6: undefined,
        // oneGold: undefined,
        // oneVP: undefined,
        // threeVP: undefined,
        // twoCounsellors: undefined,
        // twoVP: undefined,
        // counsellor: undefined,
      },
    };

    return {
      phase: phase,
      turn: turn,
      playerInfo: playerInfos(ctx),
      mapState: mapState,
      boardState: initialBoardState,
      playerOrder: {
        1: undefined,
        2: undefined,
        3: undefined,
        4: undefined,
        5: undefined,
        6: undefined,
      },
      cardDecks: {
        fortuneOfWarCards: fullResetFortuneOfWarCardDeck(),
        discardedFortuneOfWarCards: [],
      },
    };
  },
  moves: {
    discoverTile: {
      move: discoverTile,
      undoable: false,
    },
    alterPlayerOrder: {
      move: alterPlayerOrder,
      undoable: true,
    },
    recruitCounsellors: {
      move: recruitCounsellors,
      undoable: true,
    },
    recruitRegiments: { move: recruitRegiments, undoable: true },
    purchaseSkyships: { move: purchaseSkyships, undoable: true },
    foundBuildings: { move: foundBuildings, undoable: true },
    increaseHeresy: { move: increaseHeresy, undoable: true },
    increaseOrthodoxy: { move: increaseOrthodoxy, undoable: true },
    checkAndPlaceFort: { move: checkAndPlaceFort, undoable: true },
    punishDissenters: { move: punishDissenters, undoable: true },
    convertMonarch: { move: convertMonarch, undoable: true },
    influencePrelates: { move: influencePrelates, undoable: true },
    trainTroops: { move: trainTroops, undoable: true },
    flipCards: { move: flipCards, undoable: false },
    buildSkyships: { move: buildSkyships, undoable: true },
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
    PlayerColour.purple,
    PlayerColour.blue,
    PlayerColour.green,
    PlayerColour.red,
    PlayerColour.white,
    PlayerColour.yellow,
  ];
  return colours.slice(0, ctx.numPlayers);
};
