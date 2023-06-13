import {
  FortuneOfWarCardInfo,
  MyGameState,
  MyGameProps,
  PlayerInfo,
} from "../types";
import { fortuneOfWarCards } from "../codifiedGameInfo";

export const clearMoves = (props: MyGameProps) => {
  if (props.ctx.numMoves) {
    console.log(`undoing ${props.ctx.numMoves} move(s)`);

    for (let i = 0; i < props.ctx.numMoves; i++) {
      props.undo();
    }
  }
};

export const checkPlayerIDAndReturnPlayerInfo = (
  props: MyGameProps
): PlayerInfo => {
  let playerInfo;
  if (props.playerID) {
    playerInfo = props.G.playerInfo[props.playerID];
  } else {
    throw new Error("No playerID found in props");
  }
  return playerInfo;
};

export const fullResetFortuneOfWarCardDeck = (): FortuneOfWarCardInfo[] => {
  const fullDeck: FortuneOfWarCardInfo[] =
    fortuneOfWarCards.concat(fortuneOfWarCards);

  return [...fullDeck];
};

export const resetFortuneOfWarCardDeck = (props: MyGameState) => {
  props.cardDecks.fortuneOfWarCards = props.cardDecks.fortuneOfWarCards.concat(
    props.cardDecks.discardedFortuneOfWarCards
  );
  props.cardDecks.discardedFortuneOfWarCards = [];
};
