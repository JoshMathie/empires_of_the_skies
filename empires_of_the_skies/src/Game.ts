import type { Game, Ctx } from "boardgame.io";

import { ActionBoardInfo, MyGameState } from "./types";

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
import discoverTile from "./moves/discovery/discoverTile";
import alterPlayerOrder from "./moves/actions/alterPlayerOrder";
import recruitCounsellors from "./moves/actions/recruitCounsellors";
import recruitRegiments from "./moves/actions/recruitRegiments";
import purchaseSkyships from "./moves/actions/purchaseSkyships";
import foundBuildings from "./moves/actions/foundBuildings";
import {
  checkAndPlaceFort,
  flipCards,
  increaseHeresy,
  increaseOrthodoxy,
} from "./moves/resourceUpdates";
import punishDissenters from "./moves/actions/punishDissenters";
import convertMonarch from "./moves/actions/convertMonarch";
import influencePrelates from "./moves/actions/influencePrelates";
import { fullResetFortuneOfWarCardDeck } from "./helpers/helpers";
import trainTroops from "./moves/actions/trainTroops";
import buildSkyships from "./moves/actions/buildSkyships";
import conscriptLevies from "./moves/actions/conscriptLevies";
import passFleetInfoToPlayerInfo from "./moves/actions/passFleetInfoToPlayerInfo";
import deployFleet from "./moves/actions/deployFleet";
import enableDispatchButtons from "./moves/actions/enableDispatchButtons";
import issueHolyDecree from "./moves/actions/issueHolyDecree";
import pass from "./moves/pass";
import attackOtherPlayersFleet from "./moves/aerialBattle/attackOtherPlayersFleet";
import evadeAttackingFleet from "./moves/aerialBattle/evadeAttackingFleet";
import doNotAttack from "./moves/aerialBattle/doNotAttack";
import retaliate from "./moves/aerialBattle/retaliate";
import drawCard from "./moves/aerialBattle/drawCard";
import pickCard from "./moves/aerialBattle/pickCard";
import relocateDefeatedFleet from "./moves/aerialBattle/relocateDefeatedFleet";
import plunder from "./moves/plunderLegends/plunder";
import doNotPlunder from "./moves/plunderLegends/doNotPlunder";
import { findNextBattle, findNextPlunder } from "./helpers/findNext";

const MyGame: Game<MyGameState> = {
  turn: { minMoves: 1 },

  name: "empires-of-the-skies",
  setup: ({ ctx }): MyGameState => {
    const mapState: MapState = {
      currentTileArray: getRandomisedMapTileArray(),
      discoveredTiles: getInitialDiscoveredTiles(),
      buildings: getInitialOutpostsAndColonysInfo(),
      mostRecentlyDiscoveredTile: [4, 0],
      discoveredRaces: [],
      battleMap: initialBattleMapState(),
      currentBattle: [0, 0],
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
          passed: false,
          resources: {
            gold: 6,
            mithril: 0,
            dragonScales: 0,
            krakenSkin: 0,
            magicDust: 0,
            stickyIchor: 0,
            pipeweed: 0,
            victoryPoints: 10,
            counsellors: 6,
            skyships: 3,
            regiments: 6,
            levies: 0,
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
            {
              fleetId: 1,
              location: [4, 0],
              skyships: 0,
              regiments: 0,
              levies: 0,
            },
            {
              fleetId: 2,
              location: [4, 0],
              skyships: 0,
              regiments: 0,
              levies: 0,
            },
            {
              fleetId: 3,
              location: [4, 0],
              skyships: 0,
              regiments: 0,
              levies: 0,
            },
          ],
          cathedrals: 1,
          palaces: 1,
          heresyTracker: 0,
          prisoners: 0,
          shipyards: 0,
          forts: [],
        };
      });
      return playerIDMap;
    };
    const initialBoardState: ActionBoardInfo = {
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
      issueHolyDecree: false,
    };

    return {
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
      stage: "discovery",
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
    conscriptLevies: { move: conscriptLevies, undoable: true },
    passFleetInfoToPlayerInfo: {
      move: passFleetInfoToPlayerInfo,
      undoable: true,
    },
    deployFleet: { move: deployFleet, undoable: true },
    enableDispatchButtons: { move: enableDispatchButtons, undoable: true },
    issueHolyDecree: { move: issueHolyDecree, undoable: true },
    pass: { move: pass, undoable: false },
    attackOtherPlayersFleet: {
      move: attackOtherPlayersFleet,
      undoable: true,
    },
    evadeAttackingFleet: {
      move: evadeAttackingFleet,
      undoable: true,
    },
    doNotAttack: { move: doNotAttack, undoable: true },
    retaliate: { move: retaliate, undoable: true },
    drawCard: { move: drawCard, undoable: false },
    pickCard: { move: pickCard, undoable: true },
    relocateDefeatedFleet: { move: relocateDefeatedFleet, undoable: true },
    plunder: { move: plunder, undoable: true },
    doNotPlunder: { move: doNotPlunder, undoable: true },
  },
  phases: {
    discovery: {
      start: true,
      onBegin: (context) => {
        context.G.stage = "discovery";
        console.log("Discovery phase has begun");
      },
      moves: {
        discoverTile: { move: discoverTile, undoable: false },
        pass: { move: pass, undoable: false },
      },
      next: "actions",
      onEnd: (context) => {
        Object.values(context.G.playerInfo).forEach((playerInfo) => {
          playerInfo.passed = false;
        });
      },
    },
    actions: {
      onBegin: (context) => {
        context.G.stage = "actions";
        console.log("Actions phase has begun");
      },
      turn: {
        onBegin: (context) => {
          if (context.G.playerInfo[context.ctx.currentPlayer].passed === true) {
            context.events.endTurn();
          }
        },
      },
      moves: {
        alterPlayerOrder,
        recruitCounsellors,
        recruitRegiments,
        purchaseSkyships,
        foundBuildings,
        increaseHeresy,
        increaseOrthodoxy,
        checkAndPlaceFort,
        punishDissenters,
        convertMonarch,
        influencePrelates,
        trainTroops,
        flipCards: { move: flipCards, undoable: false },
        buildSkyships,
        conscriptLevies,
        passFleetInfoToPlayerInfo,
        deployFleet,
        enableDispatchButtons,
        issueHolyDecree,
        pass: { move: pass, undoable: false },
      },
      onEnd: (context) => {
        Object.values(context.G.playerInfo).forEach((playerInfo) => {
          playerInfo.passed = false;
        });
      },
      next: "aerial_battle",
    },
    aerial_battle: {
      onBegin: (context) => {
        findNextBattle(context.G, context.events, context.ctx);
        console.log("Aerial battle phase has begun");
      },
      turn: {
        onBegin: (context) => {
          console.log(
            `It is now player ${context.ctx.currentPlayer}'s turn in the aerial battle phase`
          );
          const [x, y] = context.G.mapState.currentBattle;
          if (
            !context.G.mapState.battleMap[y][x].includes(
              context.ctx.currentPlayer
            )
          ) {
            context.events.endTurn({
              next: context.G.mapState.battleMap[y][x][0],
            });
          }
        },
      },
      next: "plunder_legends",
      moves: {
        doNotAttack,
        attackOtherPlayersFleet,
        retaliate,
        evadeAttackingFleet,
        drawCard,
        pickCard,
        relocateDefeatedFleet,
      },
    },
    plunder_legends: {
      onBegin: (context) => {
        context.G.stage = "plunder legends";
        console.log("Plunder legends phase has begun");

        findNextPlunder(context.G, context.events);
      },
      moves: { plunder, doNotPlunder },
      next: "ground_battle",
      turn: {
        onBegin: (context) => {
          console.log(
            `it is now player ${context.ctx.currentPlayer}'s time to plunder`
          );
          const [x, y] = context.G.mapState.currentBattle;
          if (
            !context.G.mapState.battleMap[y][x].includes(
              context.ctx.currentPlayer
            )
          ) {
            context.events.endTurn({
              next: context.G.mapState.battleMap[y][x][0],
            });
          }
        },
      },
    },
    ground_battle: {},
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
    [...eightBuildingInfo],
    [...eightBuildingInfo],
    [...eightBuildingInfo],
    [...eightBuildingInfo],
  ];
};

const initialBattleMapState = (): string[][][] => {
  const eightEmptySets: string[][] = [[], [], [], [], [], [], [], []];

  return [
    [...eightEmptySets],
    [...eightEmptySets],
    [...eightEmptySets],
    [...eightEmptySets],
  ];
};

const getPlayerColours = (ctx: Ctx) => {
  const colours = [
    PlayerColour.brown,
    PlayerColour.blue,
    PlayerColour.green,
    PlayerColour.red,
    PlayerColour.white,
    PlayerColour.yellow,
  ];
  return colours.slice(0, ctx.numPlayers);
};

export { MyGame };
