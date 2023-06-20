import { MoveFn } from "boardgame.io";
import { MyGameState } from "../../types";
import { checkCounsellorsNotZero } from "../moveValidation";
import { INVALID_MOVE } from "boardgame.io/core";
import {
  addRegiments,
  removeGoldAmount,
  removeOneCounsellor,
} from "../resourceUpdates";

const recruitRegiments: MoveFn<MyGameState> = (
  { G, ctx, playerID, events, random },
  ...args
) => {
  if (checkCounsellorsNotZero(playerID, G)) {
    return INVALID_MOVE;
  }
  const value: keyof typeof G.boardState.recruitRegiments = args[1][0] + 1;
  if (G.boardState.recruitRegiments[value] !== undefined) {
    console.log("Player has chosen an action which has already been taken");
    return INVALID_MOVE;
  }
  const cost: { [key: number]: number } = {
    1: 0,
    2: 1,
    3: 2,
    4: 3,
    5: 3,
    6: 4,
  };
  const reward: { [key: number]: number } = {
    1: 1,
    2: 2,
    3: 4,
    4: 6,
    5: 7,
    6: 9,
  };
  removeOneCounsellor(G, playerID);
  removeGoldAmount(G, playerID, cost[value]);
  addRegiments(G, playerID, reward[value]);
  G.boardState.recruitRegiments[value] = playerID;
  args[1][1](true);
};

export default recruitRegiments;
