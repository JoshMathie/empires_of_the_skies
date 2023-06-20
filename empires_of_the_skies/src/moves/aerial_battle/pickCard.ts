import { MoveFn } from "boardgame.io";
import { MyGameState } from "../../types";

const pickCard: MoveFn<MyGameState> = (
  { G, ctx, playerID, events, random },
  ...args
) => {
  const value = args[0];

  const card = G.playerInfo[playerID].resources.fortuneCards[value];

  if (G.battleState) {
    Object.values(G.battleState).forEach((battler) => {
      if (battler.id === playerID) {
        battler.fowCard = card;
      }
    });
  }

  G.playerInfo[playerID].resources.fortuneCards.splice(value, 1);
};

export default pickCard;
