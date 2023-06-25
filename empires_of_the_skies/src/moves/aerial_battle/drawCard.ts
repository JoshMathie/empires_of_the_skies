import { MoveFn } from "boardgame.io";
import { MyGameState } from "../../types";
import {
  drawFortuneOfWarCard,
  resolveBattleAndReturnWinner,
} from "../../helpers/helpers";
//TODO: add possibility to draw a no effect card from the deck
const drawCard: MoveFn<MyGameState> = (
  { G, ctx, playerID, events, random },
  ...args
) => {
  if (G.battleState) {
    Object.values(G.battleState).forEach((battler) => {
      if (battler.id === playerID) {
        //draw card function currently never returns a no effect card
        battler.fowCard = drawFortuneOfWarCard(G, random);
      }
    });

    if (G.battleState.attacker.fowCard && G.battleState.defender.fowCard) {
      resolveBattleAndReturnWinner(G, events, ctx);
    } else if (!G.battleState.attacker.fowCard) {
      events.endTurn({ next: G.battleState.attacker.id });
    } else if (!G.battleState.defender.fowCard) {
      events.endTurn({ next: G.battleState.defender.id });
    }
  }
};

export default drawCard;
