import { MoveFn } from "boardgame.io";
import { MyGameState } from "../../types";
import { checkCounsellorsNotZero } from "../moveValidation";
import { INVALID_MOVE } from "boardgame.io/core";
import {
  drawFortuneOfWarCard,
  resetFortuneOfWarCardDeck,
} from "../../helpers/helpers";
import { removeGoldAmount, removeOneCounsellor } from "../resourceUpdates";

const trainTroops: MoveFn<MyGameState> = (
  { G, ctx, playerID, events, random },
  ...args
) => {
  if (checkCounsellorsNotZero(playerID, G) !== undefined) {
    return INVALID_MOVE;
  }
  const value: keyof typeof G.boardState.trainTroops = args[1][0] + 1;

  if (G.boardState.trainTroops[value] !== undefined) {
    console.log("Player has selected a move which has already been taken.");
    return INVALID_MOVE;
  }
  for (let i = 0; i < value; i++) {
    const card = drawFortuneOfWarCard(G, random);

    G.playerInfo[playerID].resources.fortuneCards.push({
      ...card,
      flipped: false,
    });
  }
  removeOneCounsellor(G, playerID);
  if (value === 2) {
    removeGoldAmount(G, playerID, 1);
  }
  G.boardState.trainTroops[value] = playerID;
  args[1][1](true);
};

export default trainTroops;
