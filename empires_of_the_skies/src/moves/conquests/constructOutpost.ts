import { MoveFn } from "boardgame.io";
import { MyGameState } from "../../types";

const constructOutpost: MoveFn<MyGameState> = (
  { G, ctx, playerID, events, random },
  ...args
) => {
  const [x, y] = G.mapState.currentBattle;

  G.mapState.buildings[y][x].player = G.playerInfo[playerID];
  G.mapState.buildings[y][x].buildings = "outpost";
  G.stage = "garrison troops";
};

export default constructOutpost;
