import { MoveFn } from "boardgame.io";
import { MyGameState } from "../types";
import { INVALID_MOVE } from "boardgame.io/core";
import { checkCounsellorsNotZero } from "./moveValidation";
import {
  addSkyship,
  removeGoldAmount,
  removeOneCounsellor,
} from "./resourceUpdates";

const purchaseSkyships: MoveFn<MyGameState> = (
  { G, ctx, playerID, events, random },
  ...args
) => {
  if (checkCounsellorsNotZero(playerID, G)) {
    return INVALID_MOVE;
  }
  const value: keyof typeof G.boardState.purchaseSkyships = args[1][0] + 1;

  if (G.boardState.purchaseSkyships[value] !== undefined) {
    console.log("Player has chosen an action which has already been taken");
    return INVALID_MOVE;
  }
  // update this to reflect rules regarding the orthodox vs heretic issues
  const cost: { [key: number]: number } = {
    1: 1,
    2: 3,
    3: 4,
    4: 1,
    5: 3,
    6: 4,
  };

  const reward: { [key: number]: number } = {
    1: 1,
    2: 2,
    3: 2,
    4: 1,
    5: 2,
    6: 2,
  };

  removeOneCounsellor(G, playerID);
  removeGoldAmount(G, playerID, cost[value]);
  for (let i = 0; i < reward[value]; i++) {
    addSkyship(G, playerID);
  }
  G.boardState.purchaseSkyships[value] = playerID;
};

export default purchaseSkyships;
