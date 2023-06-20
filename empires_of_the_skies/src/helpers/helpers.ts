import {
  FortuneOfWarCardInfo,
  MyGameState,
  MyGameProps,
  PlayerInfo,
} from "../types";
import { fortuneOfWarCards } from "../codifiedGameInfo";
import { EventsAPI } from "boardgame.io/dist/types/src/plugins/plugin-events";
import { Ctx } from "boardgame.io";

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

export const findMostOrthodoxKingdoms = (G: MyGameState): string[] => {
  let currentLowestHeresyTracker: number = 12;
  let currentLowestKingdoms: string[] = [];

  Object.entries(G.playerInfo).forEach(([id, info]) => {
    if (info.hereticOrOthodox === "orthodox") {
      if (info.heresyTracker < currentLowestHeresyTracker) {
        currentLowestHeresyTracker = info.heresyTracker;
        currentLowestKingdoms = [id];
      } else if (info.heresyTracker === currentLowestHeresyTracker) {
        currentLowestKingdoms.push(id);
      }
    }
  });

  return currentLowestKingdoms;
};

export const findMostHereticalKingdoms = (G: MyGameState): string[] => {
  let currentHighestHeresyTracker: number = -12;
  let currentHighestKingdoms: string[] = [];

  Object.entries(G.playerInfo).forEach(([id, info]) => {
    if (info.hereticOrOthodox === "heretic") {
      if (info.heresyTracker > currentHighestHeresyTracker) {
        currentHighestHeresyTracker = info.heresyTracker;
        currentHighestKingdoms = [id];
      } else if (info.heresyTracker === currentHighestHeresyTracker) {
        currentHighestKingdoms.push(id);
      }
    }
  });

  if (currentHighestKingdoms.length === 0) {
    Object.entries(G.playerInfo).forEach(([id, info]) => {
      if (info.heresyTracker > currentHighestHeresyTracker) {
        currentHighestHeresyTracker = info.heresyTracker;
        currentHighestKingdoms = [id];
      } else if (info.heresyTracker === currentHighestHeresyTracker) {
        currentHighestKingdoms.push(id);
      }
    });
  }

  return currentHighestKingdoms;
};

export const blessingOrCurseVPAmount = (G: MyGameState): number => {
  let total = 0;
  Object.values(G.playerInfo).forEach((info) => {
    if (info.hereticOrOthodox === "orthodox") {
      total += 1;
    }
  });

  return Math.floor(total / 3);
};

export const findNextBattle = (G: MyGameState, events: EventsAPI, ctx: Ctx) => {
  for (let y = G.mapState.currentBattle[1]; y < 4; y++) {
    for (let x = G.mapState.currentBattle[0]; x < 8; x++) {
      if (G.mapState.battleMap[y][x].length > 1) {
        const playerIDs: string[] = [];
        G.mapState.battleMap[y][x].forEach((id) => {
          playerIDs.push(id);
        });
        events.setActivePlayers({
          value: {
            [sortPlayersInPlayerOrder(playerIDs, ctx)[0]]: {
              stage: "attack_or_pass",
            },
          },
        });
        G.mapState.currentBattle = [x, y];
      }
    }
  }
};

export const sortPlayersInPlayerOrder = (playerIDs: string[], ctx: Ctx) => {
  const sortedPlayerIDs: string[] = [];
  ctx.playOrder.forEach((id) => {
    if (playerIDs.includes(id)) {
      sortedPlayerIDs.push(id);
    }
  });

  return sortedPlayerIDs;
};
