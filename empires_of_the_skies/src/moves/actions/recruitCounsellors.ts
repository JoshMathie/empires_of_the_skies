import { MyGameState } from "../../types";
import { MoveFn } from "boardgame.io";
import { checkCounsellorsNotZero } from "../moveValidation";
import { addOneCounsellor, removeGoldAmount } from "../resourceUpdates";
import { INVALID_MOVE } from "boardgame.io/core";

export const recruitCounsellors: MoveFn<MyGameState> = (
  { G, ctx, playerID, events, random },
  ...args
) => {
  if (checkCounsellorsNotZero(playerID, G)) {
    return INVALID_MOVE;
  }

  const value: keyof typeof G.boardState.recruitCounsellors = args[1][0] + 1;
  if (G.boardState.recruitCounsellors[value] !== undefined) {
    console.log("Player selected a move which has already been taken");
    return INVALID_MOVE;
  }
  const costs: { [key: number]: number } = { 1: 0, 2: 1, 3: 3 };
  if (value === 3) {
    addOneCounsellor(G, playerID);
  }
  G.boardState.recruitCounsellors[value] = playerID;
  removeGoldAmount(G, playerID, costs[value]);
  args[1][1](true);
};

export default recruitCounsellors;
