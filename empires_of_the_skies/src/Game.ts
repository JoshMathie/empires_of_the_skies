import type { Game, Move, Ctx } from "boardgame.io";

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
import { isArrayTypeNode } from "typescript";

export interface MyGameState {
  turn: number;
  phase: string;

  // tileInfo: TileInfoProps[];
  playerInfo: PlayerInfo[];
  mapState: MapState;
}

export const MyGame: Game<MyGameState> = {
  name: "empires-of-the-skies",
  setup: ({ ctx }): MyGameState => {
    const turn = 0;
    const phase = "not sure yet";
    // const cty: Ctx = ctx
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
          ready: true, //lookk into what this should be
          resources: {
            //update this to reflect starting resources
            gold: 0,
            mithril: 0,
            dragonScales: 0,
            krakenSkin: 0,
            magicDust: 0,
            stickyIchor: 0,
            pipeweed: 0,
            counsellors: 0,
            skyships: 0,
            regiments: 0,
            fortuneCards: [""],
            advantageCard: "",
            eventCards: [""],
            legacyCard: "",
          },
          isArchprelate: false,
          counsellorLocations: {
            playerBoard: [[false]], //update in future
            actionBoard: [false],
          },
          hereticOrOthodox: "orthodox",
          fleetInfo: [
            { fleetId: 1, location: [1, 1], skyships: 0, regiments: 0 },
          ],
          cathedrals: 0,
          palaces: 0,
          victoryPoints: 0,
          heresyTracker: [0, 0],
          prisoners: 0,
          shipyards: 0,
        };
      });
    };

    return {
      phase: phase,
      turn: turn,
      playerInfo: playerInfos(ctx),
      mapState: mapState,
    };
  },
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
  const twoDimensionalBooleanArray: boolean[][] = [
    Array.prototype.fill(false, 0, 8),
    Array.prototype.fill(false, 0, 8),
    Array.prototype.fill(false, 0, 8),
    Array.prototype.fill(false, 0, 8),
  ];
  twoDimensionalBooleanArray[0][3] = true;
  twoDimensionalBooleanArray[0][4] = true;
  twoDimensionalBooleanArray[1][3] = true;
  twoDimensionalBooleanArray[1][4] = true;

  return twoDimensionalBooleanArray;
};

const getInitialOutpostsAndColonysInfo = () => {
  const buildingInfo: MapBuildingInfo = {};
  return [
    Array.prototype.fill(buildingInfo, 0, 8),
    Array.prototype.fill(buildingInfo, 0, 8),
    Array.prototype.fill(buildingInfo, 0, 8),
    Array.prototype.fill(buildingInfo, 0, 8),
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
