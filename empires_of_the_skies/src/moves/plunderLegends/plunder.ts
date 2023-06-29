import { MoveFn } from "boardgame.io";
import { MyGameState } from "../../types";
import { findNextPlunder } from "../../helpers/findNext";

const plunder: MoveFn<MyGameState> = (
  { G, ctx, playerID, events, random },
  ...args
) => {
  const currentPlayer = G.playerInfo[playerID];
  const [x, y] = G.mapState.currentBattle;
  const currentTile = G.mapState.currentTileArray[y][x];

  Object.entries(currentTile.loot.colony).forEach(([lootName, lootAmount]) => {
    currentPlayer.resources[lootName] += lootAmount;
  });

  findNextPlunder(G, events);
};

export default plunder;
