import { MyGameState } from "../Game";
import { MoveFn } from "boardgame.io";
import { checkCounsellorsNotZero } from "./moveValidation";
import { removeGoldAmount } from "./resourceUpdates";
import { INVALID_MOVE } from "boardgame.io/core";

export const recruitCounsellors: MoveFn<MyGameState> = (
  { G, ctx, playerID, events, random: RandomAPI },
  ...args
) => {
  if (checkCounsellorsNotZero(playerID, G)) {
    return INVALID_MOVE;
  }

  const value: keyof typeof G.boardState.recruitCounsellors = args[1] + 1;
  if (G.boardState.recruitCounsellors[value] !== undefined) {
    console.log("Player selected a move which has already been taken");
    return INVALID_MOVE;
  }
  const costs: { [key: number]: number } = { 1: 0, 2: 1, 3: 3 };
  G.boardState.recruitCounsellors[value] = playerID;
  removeGoldAmount(G, playerID, costs[value]);
  events.endTurn();
};

export default recruitCounsellors;
