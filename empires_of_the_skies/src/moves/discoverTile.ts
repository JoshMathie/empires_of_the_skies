import { INVALID_MOVE } from "boardgame.io/core/";
import { MyGameState } from "../types";
import { MoveFn } from "boardgame.io";
import { advanceAllHeresyTrackers } from "./resourceUpdates";

export const discoverTile: MoveFn<MyGameState> = (
  { G, ctx, playerID, events, random },
  ...args
) => {
  const [x, y] = args[1];
  if (G.mapState.discoveredTiles[y][x] === true) {
    return INVALID_MOVE;
  }
  const boarderingTiles: number[][] = [
    [x, y - 1 < 0 ? 0 : y - 1],
    [x, y + 1 > 3 ? 3 : y + 1],
    [(((x - 1) % 8) + 8) % 8, y],
    [(((x + 1) % 8) + 8) % 8, y],
  ];
  let bordered = false;

  boarderingTiles.forEach((coords) => {
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
  if (currentTile.shield !== 0 || currentTile.sword !== 0) {
    if (ctx.turn === ctx.numPlayers) {
      events.endPhase();
    } else {
      events.endTurn();
    }
  }
};

export default discoverTile;
