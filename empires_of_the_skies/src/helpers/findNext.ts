import { Ctx } from "boardgame.io";
import { EventsAPI } from "boardgame.io/dist/types/src/plugins/plugin-events";
import { MyGameState } from "../types";
import { sortPlayersInPlayerOrder } from "./helpers";

export const findNextBattle = (G: MyGameState, events: EventsAPI, ctx: Ctx) => {
  for (let y = G.mapState.currentBattle[1]; y < 4; y++) {
    for (let x = 0; x < 8; x++) {
      if (
        y === G.mapState.currentBattle[1] &&
        x <= G.mapState.currentBattle[0]
      ) {
        continue;
      }
      if (G.mapState.battleMap[y][x].length > 1) {
        const playerIDs: string[] = [...G.mapState.battleMap[y][x]];
        const nextPlayer = sortPlayersInPlayerOrder(playerIDs, ctx)[0];
        G.mapState.currentBattle = [x, y];
        G.battleState = undefined;
        G.stage = "attack or pass";
        console.log(
          `current battle is now ${G.mapState.currentBattle} and next possible attacker is player ${nextPlayer}`
        );
        events.endTurn({ next: nextPlayer });
        return;
      }
    }
  }
  G.mapState.currentBattle = [0, 0];
  G.stage = "plunder legends";
  console.log("finding first plunder of the phase");
  events.endPhase();
};

export const findNextPlunder = (G: MyGameState, events: EventsAPI): void => {
  for (let y = G.mapState.currentBattle[1]; y < 4; y++) {
    for (let x = 0; x < 8; x++) {
      if (
        y === G.mapState.currentBattle[1] &&
        x <= G.mapState.currentBattle[0]
      ) {
        continue;
      } else if (
        G.mapState.currentTileArray[y][x].type === "legend" &&
        G.mapState.battleMap[y][x].length === 1
      ) {
        const nextPlayer = G.mapState.battleMap[y][x][0];
        G.mapState.currentBattle = [x, y];
        console.log(
          `current plunder is now ${G.mapState.currentBattle} with player ${nextPlayer} `
        );
        events.endTurn({ next: nextPlayer });
      }
    }
  }
};

export const findNextPlayerInBattleSequence = (
  playerID: string,
  ctx: Ctx,
  G: MyGameState,
  events: EventsAPI
): void => {
  G.battleState = undefined;
  const playerIDs: string[] = [
    ...G.mapState.battleMap[G.mapState.currentBattle[1]][
      G.mapState.currentBattle[0]
    ],
  ];
  const sortedPlayerIDs = sortPlayersInPlayerOrder(playerIDs, ctx);
  const currentPlayerIndex = sortPlayersInPlayerOrder(playerIDs, ctx).indexOf(
    playerID
  );
  const nextPlayerIndex = currentPlayerIndex + 1;
  const nextPlayer = sortedPlayerIDs[nextPlayerIndex];
  console.log(
    `Next player to attack would be player ID at index ${nextPlayerIndex} of the sorted list if they exist, current number of players in this battle is ${sortedPlayerIDs.length}`
  );

  if (
    nextPlayerIndex >= sortedPlayerIDs.length ||
    sortedPlayerIDs.length === 1
  ) {
    console.log("finding next battle...");
    findNextBattle(G, events, ctx);
  } else {
    console.log(`next player to attack or pass is ${nextPlayer}`);
    events.endTurn({ next: nextPlayer });
    G.stage = "attack or pass";
  }
};
