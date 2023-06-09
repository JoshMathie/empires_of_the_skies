import { INVALID_MOVE } from "boardgame.io/core/";
import { MyGameState } from "../types";
import { MoveFn } from "boardgame.io";

export const discoverTile: MoveFn<MyGameState> = (
  { G, ctx, playerID, events, random: RandomAPI },
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
  let boardered = false;

  boarderingTiles.forEach((coords) => {
    if (G.mapState.discoveredTiles[coords[1]][coords[0]] === true) {
      boardered = true;
    }
  });
  if (boardered === false) {
    return INVALID_MOVE;
  }
  G.mapState.discoveredTiles[y][x] = true;

  events.endTurn();
};

export default discoverTile;
