import { MoveFn } from "boardgame.io";
import { MyGameState } from "../../types";
import { INVALID_MOVE } from "boardgame.io/core";
import { checkCounsellorsNotZero } from "../moveValidation";
import {
  increaseHeresyWithinMove,
  increaseOrthodoxyWithinMove,
  removeGoldAmount,
  removeOneCounsellor,
  removeVPAmount,
} from "../resourceUpdates";
//TODO: add functionality for executing prisoners
const punishDissenters: MoveFn<MyGameState> = (
  { G, ctx, playerID, events, random },
  ...args
) => {
  const value: keyof typeof G.boardState.punishDissenters = args[1][0] + 1;
  if (checkCounsellorsNotZero(playerID, G) !== undefined) {
    return INVALID_MOVE;
  }
  if (value > ctx.numPlayers) {
    console.log(
      "Player has selected a move which is only available in games with more players"
    );
    return INVALID_MOVE;
  }
  if (G.boardState.punishDissenters[value] !== undefined) {
    console.log("Player has selected a move which is already taken");
    return INVALID_MOVE;
  }
  let hasPunishedDissentersAlready = false;
  Object.values(G.boardState.punishDissenters).forEach((id) => {
    if (id === playerID) hasPunishedDissentersAlready = true;
  });
  if (hasPunishedDissentersAlready) {
    console.log("Player has already punished dissenters");
    return INVALID_MOVE;
  }

  const playerInfo = G.playerInfo[playerID];

  if (playerInfo.prisoners === 3) {
    return INVALID_MOVE;
  }

  const cost = {
    1: () => removeVPAmount(G, playerID, 3),
    2: () => {
      if (playerInfo.resources.counsellors < 2) {
        return INVALID_MOVE;
      } else {
        removeOneCounsellor(G, playerID);
      }
    },
    3: () => removeVPAmount(G, playerID, 2),
    4: () => removeVPAmount(G, playerID, 1),
    5: () => removeGoldAmount(G, playerID, 1),
    6: () => {},
  };
  if (cost[value]() === INVALID_MOVE) {
    return INVALID_MOVE;
  }
  removeOneCounsellor(G, playerID);
  playerInfo.prisoners += 1;

  if (G.playerInfo[playerID].hereticOrOrthodox === "orthodox") {
    increaseOrthodoxyWithinMove(G, playerID);
  } else {
    increaseHeresyWithinMove(G, playerID);
  }

  G.boardState.punishDissenters[value] = playerID;
  args[1][1](true);
};

export default punishDissenters;
