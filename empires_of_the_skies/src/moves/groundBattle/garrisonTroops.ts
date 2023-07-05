import { MoveFn } from "boardgame.io";
import { MyGameState } from "../../types";

const garrisonTroops: MoveFn<MyGameState> = (
  { G, ctx, playerID, events, random },
  ...args
) => {
  const [x, y] = G.mapState.currentBattle;
  const troopInfo: GarrisonTroopsInfo = args[0];

  G.mapState.buildings[y][x].garrisonedRegiments =
    troopInfo.regiments + (G.mapState.buildings[y][x].garrisonedRegiments ?? 0);

  G.mapState.buildings[y][x].garrisonedLevies =
    troopInfo.levies + (G.mapState.buildings[y][x].garrisonedLevies ?? 0);

  G.mapState.buildings[y][x].player = G.playerInfo[playerID];
};

type GarrisonTroopsInfo = {
  regiments: number;
  levies: number;
};

export default garrisonTroops;
