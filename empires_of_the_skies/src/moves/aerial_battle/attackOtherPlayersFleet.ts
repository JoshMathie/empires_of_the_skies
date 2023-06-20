import { MoveFn, StageArg } from "boardgame.io";
import { MyGameState } from "../../types";

const attackOtherPlayersFleet: MoveFn<MyGameState> = (
  { G, ctx, playerID, events, random },
  ...args
) => {
  const defenderID: string = args[0];
  G.battleState = {
    attacker: { decision: "fight", ...G.playerInfo[playerID] },
    defender: { decision: "undecided", ...G.playerInfo[defenderID] },
  };
  const activePlayersConfig: Record<string, StageArg> = {};
  activePlayersConfig[defenderID] = "attack_or_evade";
  events.setActivePlayers({ value: { activePlayersConfig } });
};

export default attackOtherPlayersFleet;
