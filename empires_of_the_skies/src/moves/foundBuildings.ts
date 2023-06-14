import { MoveFn } from "boardgame.io";
import { MyGameState } from "../types";
import { INVALID_MOVE } from "boardgame.io/core";
import { checkCounsellorsNotZero } from "./moveValidation";
import { removeOneCounsellor } from "./resourceUpdates";
import { EventsAPI } from "boardgame.io/dist/types/src/plugins/plugin-events";

// needs a stage where the player selects a map tile to place the fort onto and that tile is verified to ensure they can build on it
const foundBuildings: MoveFn<MyGameState> = (
  { G, ctx, playerID, events, random },
  ...args
) => {
  if (checkCounsellorsNotZero(playerID, G)) {
    return INVALID_MOVE;
  }
  const value: keyof typeof G.boardState.foundBuildings = args[1][0] + 1;

  if (value === 4) {
    for (let playerInfo of Object.values(G.playerInfo)) {
      playerInfo.forts.forEach((coord) => {});
    }
  }

  const specialisedBuildingFunctions = {
    1: foundCathedral,
    2: foundPalace,
    3: foundShipyard,
    4: foundFort,
  };

  return specialisedBuildingFunctions[value](G, playerID, events, args);
};

const foundCathedral = (
  G: MyGameState,
  playerID: string,
  events: EventsAPI,
  args: any[]
) => {
  if (G.playerInfo[playerID].cathedrals === 6) {
    return INVALID_MOVE;
  }
  if (G.playerInfo[playerID].hereticOrOthodox === "heretic") {
    return INVALID_MOVE;
  }
  const cost = 5 + G.boardState.foundBuildings[1].length;
  G.playerInfo[playerID].resources.gold -= cost;
  G.playerInfo[playerID].cathedrals += 1;
  G.playerInfo[playerID].victoryPoints += 2;
  if (G.playerInfo[playerID].heresyTracker > -11) {
    G.playerInfo[playerID].heresyTracker -= 1;
  }
  G.boardState.foundBuildings[1].push(playerID);
  removeOneCounsellor(G, playerID);
  args[1][3](true);
};
//TODO: add a input for the user to select the heresy tracker movement direction
const foundPalace = (
  G: MyGameState,
  playerID: string,
  events: EventsAPI,
  args: any[]
) => {
  if (G.playerInfo[playerID].palaces === 6) {
    return INVALID_MOVE;
  }

  const cost = 5 + G.boardState.foundBuildings[2].length;

  G.playerInfo[playerID].resources.gold -= cost;
  G.playerInfo[playerID].palaces += 1;
  if (G.playerInfo[playerID].hereticOrOthodox === "heretic") {
    G.playerInfo[playerID].victoryPoints += 2;
  } else {
    G.playerInfo[playerID].victoryPoints += 1;
  }
  G.boardState.foundBuildings[2].push(playerID);
  removeOneCounsellor(G, playerID);
  args[1][2] = playerID;
  args[1][1](true);
  //should be setTurnComplete
  args[1][3](true);
};

const foundShipyard = (
  G: MyGameState,
  playerID: string,
  events: EventsAPI,
  args: any[]
) => {
  if (G.playerInfo[playerID].shipyards === 3) {
    return INVALID_MOVE;
  }
  const cost = 3 + G.boardState.foundBuildings[3].length;

  G.playerInfo[playerID].resources.gold -= cost;
  G.playerInfo[playerID].shipyards += 1;
  G.boardState.foundBuildings[3].push(playerID);
  removeOneCounsellor(G, playerID);
  console.log(args[1][3]);
  args[1][3](true);
};
//TODO: add capability for the user to select the map tile to build the fort on
// and validate that they have either an outpost or colony on that tile as well as regiments
const foundFort = (
  G: MyGameState,
  playerID: string,
  events: EventsAPI,
  args: any[]
) => {
  const cost = 3;

  G.playerInfo[playerID].resources.gold -= cost;
  removeOneCounsellor(G, playerID);
  args[1][2] = playerID;
  args[1][1](true);
  //should be setTurnComplete
  args[1][3](true);
};
export default foundBuildings;
