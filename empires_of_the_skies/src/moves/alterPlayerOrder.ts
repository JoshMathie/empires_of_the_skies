import { MoveFn } from "boardgame.io";
import { PlayerOrder, MyGameState } from "../types";
import { checkCounsellorsNotZero } from "./moveValidation";
import { INVALID_MOVE } from "boardgame.io/core";
import { removeOneCounsellor } from "./resourceUpdates";

export const alterPlayerOrder: MoveFn<MyGameState> = (
  { G, ctx, events, random },
  ...args
) => {
  const newPosition: keyof PlayerOrder = args[1][0] + 1;
  const playerID = ctx.currentPlayer;
  checkCounsellorsNotZero(playerID, G);
  if (ctx.numPlayers < newPosition) {
    console.log("Player has chosen a position that is out of bounds");
    return INVALID_MOVE;
  }
  if (G.playerOrder[newPosition] !== undefined) {
    console.log("Player has chosen a position that is already taken");
    return INVALID_MOVE;
  }
  for (const value of Object.values(G.playerOrder)) {
    if (value === playerID) {
      console.log("Player has already altered their position");
      return INVALID_MOVE;
    }
  }
  removeOneCounsellor(G, playerID);
  G.boardState.alterPlayerOrder[newPosition] = playerID;
  G.playerOrder[newPosition] = playerID;

  events.endTurn();
};

export default alterPlayerOrder;
