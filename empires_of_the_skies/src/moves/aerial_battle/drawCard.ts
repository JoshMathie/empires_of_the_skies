import { MoveFn } from "boardgame.io";
import { MyGameState } from "../../types";
import { drawFortuneOfWarCard } from "../../helpers/helpers";
//TODO: add possibility to draw a no effect card from the deck
const drawCard: MoveFn<MyGameState> = (
  { G, ctx, playerID, events, random },
  ...args
) => {
  if (G.battleState) {
    Object.values(G.battleState).forEach((battler) => {
      if (battler.id === playerID) {
        battler.fowCard = drawFortuneOfWarCard(G, random);
      }
    });
  }
};

export default drawCard;
