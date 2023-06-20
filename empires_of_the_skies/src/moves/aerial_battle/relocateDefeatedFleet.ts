import { MoveFn } from "boardgame.io";
import { MyGameState } from "../../types";

const relocateDefeatedFleet: MoveFn<MyGameState> = (
  { G, ctx, playerID, events, random },
  ...args
) => {
  const location = args[0];
  const defeatedPlayer = args[1];
  G.playerInfo[defeatedPlayer].fleetInfo.forEach((fleet) => {
    if (fleet.location === G.mapState.currentBattle) {
      fleet.location = location;
    }
  });
};

export default relocateDefeatedFleet;
