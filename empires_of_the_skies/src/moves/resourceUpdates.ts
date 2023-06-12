import { MoveFn } from "boardgame.io";
import { MyGameState } from "../types";
import { INVALID_MOVE } from "boardgame.io/core";

export const removeOneCounsellor = (G: MyGameState, playerID: string) => {
  G.playerInfo[playerID].resources.counsellors -= 1;
};
export const removeVPAmount = (
  G: MyGameState,
  playerID: string,
  vpAmount: number
) => {
  G.playerInfo[playerID].victoryPoints -= vpAmount;
};

export const addVPAmount = (
  G: MyGameState,
  playerID: string,
  vpAmount: number
) => {
  G.playerInfo[playerID].victoryPoints += vpAmount;
};

export const removeGoldAmount = (
  G: MyGameState,
  playerID: string,
  goldAmount: number
) => {
  G.playerInfo[playerID].resources.gold -= goldAmount;
};

export const addGoldAmount = (
  G: MyGameState,
  playerID: string,
  goldAmount: number
) => {
  G.playerInfo[playerID].resources.gold += goldAmount;
};

export const removeSkyship = (G: MyGameState, playerID: string) => {
  G.playerInfo[playerID].resources.skyships -= 1;
};
export const addSkyship = (G: MyGameState, playerID: string) => {
  G.playerInfo[playerID].resources.skyships += 1;
};

export const removeRegiments = (
  G: MyGameState,
  playerID: string,
  amount: number
) => {
  G.playerInfo[playerID].resources.regiments -= amount;
};

export const addRegiments = (
  G: MyGameState,
  playerID: string,
  amount: number
) => {
  G.playerInfo[playerID].resources.regiments += amount;
};

export const increaseHeresy: MoveFn<MyGameState> = (
  { G, ctx, playerID, events, random },
  ...args
) => {
  G.playerInfo[playerID].heresyTracker += 1;
};
export const increaseOrthodoxy: MoveFn<MyGameState> = (
  { G, ctx, playerID, events, random },
  ...args
) => {
  G.playerInfo[playerID].heresyTracker -= 1;
};

export const checkAndPlaceFort: MoveFn<MyGameState> = (
  { G, ctx, playerID, events, random },
  ...args
) => {
  const coords = args[1];
  let tileInfo = G.mapState.buildings[coords[0][1]][coords[0][0]];
  if (tileInfo === undefined) {
    //args[1][1] = fortPlacementFailed reference
    args[1][1].current = true;
    return INVALID_MOVE;
  }
  let hasRelevantPresence = false;
  if (tileInfo.player) {
    if (
      tileInfo.player.id === playerID &&
      (tileInfo.buildings === "colony" || tileInfo.buildings === "outpost") &&
      tileInfo.fort === false &&
      tileInfo.garrisonedRegiments
        ? tileInfo.garrisonedRegiments > 0
        : false
    ) {
      hasRelevantPresence = true;
    }
  }

  let matched = false;
  Object.values(G.playerInfo).forEach((playerInfo) => {
    playerInfo.forts.forEach((fort) => {
      if (fort.location[0] === coords[0] && fort.location[1] === coords[1]) {
        matched = true;
      }
    });
  });

  if (!hasRelevantPresence || matched) {
    //args[1][1] = fortPlacementFailed reference
    args[1][1].current = true;
    return INVALID_MOVE;
  }
  args[1][1].current = false;
  tileInfo.player = G.playerInfo[playerID];
  G.playerInfo[playerID].forts.push(coords[0]);
  tileInfo.fort = true;
};
