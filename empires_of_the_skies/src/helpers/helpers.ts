import {
  FortuneOfWarCardInfo,
  MyGameState,
  MyGameProps,
  PlayerInfo,
} from "../types";
import { fortuneOfWarCards } from "../codifiedGameInfo";

export const clearMoves = (
  props: MyGameProps,
  setTurnComplete: React.Dispatch<React.SetStateAction<boolean>>
) => {
  if (props.ctx.numMoves) {
    console.log(`undoing ${props.ctx.numMoves} move(s)`);

    for (let i = 0; i < props.ctx.numMoves; i++) {
      props.undo();
    }
    setTurnComplete(false);
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

export const findPossibleDestinations = (
  G: MyGameState,
  startingCoords: number[],
  unlaiden: boolean
): number[][][] => {
  let availableGridLocations: number[][] = [];
  let coordinatesToSearch: number[][] = [startingCoords];
  let coordinatesToSearchNext: number[][] = [];
  let coordsGroupedByCost: number[][][] = [];
  for (let i = 0; i < 3; i++) {
    coordinatesToSearch.forEach((coords) => {
      const [x, y] = coords;
      const coordinatesMap = {
        N: [x, y - 1],
        NE: [(((x + 1) % 8) + 8) % 8, y - 1],
        E: [(((x + 1) % 8) + 8) % 8, y],
        SE: [(((x + 1) % 8) + 8) % 8, y + 1],
        S: [x, y + 1],
        SW: [(((x - 1) % 8) + 8) % 8, y + 1],
        W: [(((x - 1) % 8) + 8) % 8, y],
        NW: [(((x - 1) % 8) + 8) % 8, y - 1],
      };
      const currentTile = G.mapState.currentTileArray[y][x];
      Object.entries(coordinatesMap).forEach(([key, value]) => {
        if (
          (!currentTile.blocked.includes(key) || unlaiden) &&
          value[1] >= 0 &&
          value[1] <= 3 &&
          G.mapState.discoveredTiles[value[1]][value[0]] === true
        ) {
          availableGridLocations.push(value);
          coordinatesToSearchNext.push(value);
        }
      });
    });
    coordsGroupedByCost.push([...coordinatesToSearchNext]);
    coordinatesToSearch = [...coordinatesToSearchNext];
    coordinatesToSearchNext = [];
  }

  return [availableGridLocations, ...coordsGroupedByCost];
};
