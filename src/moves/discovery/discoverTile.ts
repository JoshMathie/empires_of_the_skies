import { INVALID_MOVE } from "boardgame.io/core/";
import { MyGameState } from "../../types";
import { Move } from "boardgame.io";
import { advanceAllHeresyTrackers } from "../resourceUpdates";
import { EventsAPI } from "boardgame.io/dist/types/src/plugins/plugin-events";
import { RandomAPI } from "boardgame.io/dist/types/src/plugins/random/random";
import { Ctx } from "boardgame.io/dist/types/src/types";

export const discoverTile: Move<MyGameState> = (
  {
    G,
    ctx,
    playerID,
    events,
    random,
  }: {
    G: MyGameState;
    ctx: Ctx;
    playerID: string;
    events: EventsAPI;
    random: RandomAPI;
  },
  ...args: any[]
) => {
  const [x, y] = args[0];
  if (G.mapState.discoveredTiles[y][x] === true) {
    return INVALID_MOVE;
  }
  const borderingTiles: number[][] = [
    [x, y - 1 < 0 ? 0 : y - 1],
    [x, y + 1 > 3 ? 3 : y + 1],
    [(((x - 1) % 8) + 8) % 8, y],
    [(((x + 1) % 8) + 8) % 8, y],
  ];
  let bordered = false;

  borderingTiles.forEach((coords) => {
    if (ctx.numMoves === 0) {
      if (G.mapState.discoveredTiles[coords[1]][coords[0]] === true) {
        bordered = true;
      }
    } else {
      if (
        coords[0] === G.mapState.mostRecentlyDiscoveredTile[0] &&
        coords[1] === G.mapState.mostRecentlyDiscoveredTile[1]
      ) {
        bordered = true;
      }
    }
  });
  if (bordered === false) {
    return INVALID_MOVE;
  }
  const currentTile = G.mapState.currentTileArray[y][x];
  // splits the tile name on any number
  const tileRace = currentTile.name.split(/(\d+)/)[0].toLowerCase();

  if (tileRace !== "ocean" && !G.mapState.discoveredRaces.includes(tileRace)) {
    advanceAllHeresyTrackers(G);
    G.mapState.discoveredRaces.push(tileRace);
  }
  G.mapState.discoveredTiles[y][x] = true;
  G.mapState.mostRecentlyDiscoveredTile = [x, y];
  G.firstTurnOfRound = false;

  let allDiscovered = true;
  Object.values(G.mapState.discoveredTiles).forEach((tileRow) => {
    tileRow.forEach((tile) => {
      if (tile === false) {
        allDiscovered = false;
      }
    });
  });

  if (allDiscovered) events.endPhase();

  if (currentTile.shield !== 0 || currentTile.sword !== 0) {
    if (ctx.currentPlayer === ctx.playOrder[ctx.playOrder.length - 1]) {
      events.endPhase();
    } else {
      events.endTurn();
    }
  }
};

export default discoverTile;
