import { MoveFn } from "boardgame.io";
import { MyGameState } from "../../types";
import { findNextConquest, findNextGroundBattle } from "../../helpers/findNext";

const garrisonTroops: MoveFn<MyGameState> = (
  { G, ctx, playerID, events, random },
  ...args
) => {
  const [x, y] = G.mapState.currentBattle;
  const troopInfo: GarrisonTroopsInfo = args[0];

  G.mapState.buildings[y][x].garrisonedRegiments =
    troopInfo.regiments + G.mapState.buildings[y][x].garrisonedRegiments;

  G.mapState.buildings[y][x].garrisonedLevies =
    troopInfo.levies + G.mapState.buildings[y][x].garrisonedLevies;

  G.mapState.buildings[y][x].player = G.playerInfo[playerID];
  if (ctx.phase === "ground-attack") {
    findNextGroundBattle(G, events);
  } else if (ctx.phase === "conquest") {
    findNextConquest(G, events);
  }
};

type GarrisonTroopsInfo = {
  regiments: number;
  levies: number;
};

export default garrisonTroops;
