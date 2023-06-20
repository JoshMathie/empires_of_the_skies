import { MoveFn, StageArg } from "boardgame.io";
import { MyGameState } from "../../types";

const retaliate: MoveFn<MyGameState> = (
  { G, ctx, playerID, events, random },
  ...args
) => {
  if (G.battleState) {
    G.battleState.defender = { decision: "fight", ...G.playerInfo[playerID] };

    const activePlayersConfig: Record<string, StageArg> = {};
    activePlayersConfig[G.battleState.attacker.id] = "draw_or_pick_card";
    activePlayersConfig[G.battleState.defender.id] = "draw_or_pick_card";
    events.setActivePlayers({ value: { activePlayersConfig } });
  }
};

export default retaliate;
