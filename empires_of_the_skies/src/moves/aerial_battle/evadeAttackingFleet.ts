import { MoveFn, StageArg } from "boardgame.io";
import { MyGameState } from "../../types";

const evadeAttackingFleet: MoveFn<MyGameState> = (
  { G, ctx, playerID, events, random },
  ...args
) => {
  //   let attackerID: string = "";
  if (G.battleState !== undefined) {
    G.battleState.defender = { decision: "evade", ...G.playerInfo[playerID] };
    let attackerID = G.battleState.attacker.id;

    const activePlayersConfig: Record<string, StageArg> = {};
    activePlayersConfig[attackerID] = "relocate_evader_or_loser";
    events.setActivePlayers({ value: { activePlayersConfig } });
  }
};

export default evadeAttackingFleet;
