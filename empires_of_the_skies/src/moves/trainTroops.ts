import { MoveFn } from "boardgame.io";
import { MyGameState } from "../types";
import { checkCounsellorsNotZero } from "./moveValidation";
import { INVALID_MOVE } from "boardgame.io/core";
import { resetFortuneOfWarCardDeck } from "../helpers/helpers";
import { removeGoldAmount, removeOneCounsellor } from "./resourceUpdates";

const trainTroops: MoveFn<MyGameState> = (
  { G, ctx, playerID, events, random },
  ...args
) => {
  checkCounsellorsNotZero(playerID, G);
  const value: keyof typeof G.boardState.trainTroops = args[1][0] + 1;

  const cardDeck = G.cardDecks.fortuneOfWarCards;

  if (G.boardState.trainTroops[value] !== undefined) {
    console.log("Player has selected a move which has already been taken.");
    return INVALID_MOVE;
  }
  for (let i = 0; i < value; i++) {
    let randomIndex = random.Die(cardDeck.length);

    //checking if the card is a no effect card
    while (
      cardDeck[randomIndex].shield === 0 &&
      cardDeck[randomIndex].sword === 0
    ) {
      resetFortuneOfWarCardDeck(G);
      randomIndex = random.Die(cardDeck.length);
    }

    G.playerInfo[playerID].resources.fortuneCards.push({
      ...cardDeck[randomIndex],
      flipped: false,
    });
    G.cardDecks.discardedFortuneOfWarCards.push(cardDeck[randomIndex]);
    G.cardDecks.fortuneOfWarCards.splice(randomIndex, 1);
  }
  removeOneCounsellor(G, playerID);
  if (value === 2) {
    removeGoldAmount(G, playerID, 1);
  }
  G.boardState.trainTroops[value] = playerID;
};

export default trainTroops;
