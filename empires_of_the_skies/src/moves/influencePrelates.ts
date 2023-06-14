import { MoveFn } from "boardgame.io";
import { MyGameState, PlayerColour } from "../types";
import { checkCounsellorsNotZero } from "./moveValidation";
import { INVALID_MOVE } from "boardgame.io/core";
import { addGoldAmount, removeGoldAmount } from "./resourceUpdates";

export const influencePrelates: MoveFn<MyGameState> = (
  { G, ctx, playerID, events, random },
  ...args
) => {
  const value: keyof typeof G.boardState.influencePrelates = args[1][0] + 1;

  checkCounsellorsNotZero(playerID, G);

  if (G.boardState.influencePrelates[value] !== undefined) {
    console.log("Player has selected a move which has already been taken");
    return INVALID_MOVE;
  }
  let recipientOfPayment;
  let cost = 1;

  const kingdomToIDMap = {
    1: PlayerColour.red,
    2: PlayerColour.blue,
    3: PlayerColour.yellow,
    4: null,
    5: null,
    6: PlayerColour.brown,
    7: PlayerColour.white,
    8: PlayerColour.green,
  };

  Object.entries(G.playerInfo).forEach(([id, playerInfo]) => {
    if (playerInfo.colour === kingdomToIDMap[value]) {
      recipientOfPayment = id;
      cost = playerInfo.cathedrals;
    }
  });

  if (recipientOfPayment) {
    addGoldAmount(G, recipientOfPayment, cost);
  }
  removeGoldAmount(G, playerID, cost);

  G.boardState.influencePrelates[value] = playerID;
  args[1][1](true);
};

export default influencePrelates;
