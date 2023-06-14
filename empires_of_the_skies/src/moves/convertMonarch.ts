import { MoveFn } from "boardgame.io";
import { MyGameState } from "../types";
import {
  removeGoldAmount,
  removeOneCounsellor,
  removeVPAmount,
} from "./resourceUpdates";
import { INVALID_MOVE } from "boardgame.io/core";

const convertMonarch: MoveFn<MyGameState> = (
  { G, ctx, playerID, events, random },
  ...args
) => {
  const value: keyof typeof G.boardState.convertMonarch = args[1][0] + 1;
  const playerInfo = G.playerInfo[playerID];

  if (G.boardState.convertMonarch[value] !== undefined) {
    console.log("Player has chosen a move which is already taken");
    return INVALID_MOVE;
  }
  if (value > ctx.numPlayers) {
    console.log(
      "Player has selected a move which is only available in games with more players"
    );
    return INVALID_MOVE;
  }

  let hasConvertedMonarchAlready = false;
  Object.values(G.boardState.convertMonarch).forEach((id) => {
    if (id === playerID) hasConvertedMonarchAlready = true;
  });
  if (hasConvertedMonarchAlready) {
    console.log("Player has already converted monarch");
    return INVALID_MOVE;
  }

  const cost = {
    1: () => {
      if (playerInfo.resources.counsellors < 3) {
        return INVALID_MOVE;
      } else {
        removeOneCounsellor(G, playerID);
        removeOneCounsellor(G, playerID);
      }
    },
    2: () => {
      removeVPAmount(G, playerID, 3);
    },
    3: () => {
      if (playerInfo.resources.counsellors < 2) {
        return INVALID_MOVE;
      } else {
        removeOneCounsellor(G, playerID);
      }
    },
    4: () => {
      removeVPAmount(G, playerID, 2);
    },
    5: () => {
      removeVPAmount(G, playerID, 1);
    },
    6: () => {
      removeGoldAmount(G, playerID, 1);
    },
  };
  if (cost[value]() === INVALID_MOVE) {
    return INVALID_MOVE;
  }
  if (playerInfo.hereticOrOthodox === "heretic") {
    playerInfo.hereticOrOthodox = "orthodox";
    playerInfo.heresyTracker -= playerInfo.prisoners;
    playerInfo.prisoners = 0;
  } else {
    playerInfo.hereticOrOthodox = "heretic";
    playerInfo.heresyTracker += playerInfo.prisoners;
    playerInfo.prisoners = 0;
  }

  removeOneCounsellor(G, playerID);

  G.boardState.convertMonarch[value] = playerID;
  args[1][1](true);
};

export default convertMonarch;
