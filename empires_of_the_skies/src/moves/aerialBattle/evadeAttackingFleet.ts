import { MoveFn } from "boardgame.io";
import { MyGameState } from "../../types";

const evadeAttackingFleet: MoveFn<MyGameState> = (
  { G, ctx, playerID, events, random },
  ...args
) => {
  if (G.battleState !== undefined) {
    G.battleState.defender = { decision: "evade", ...G.playerInfo[playerID] };
    const attackerID = G.battleState.attacker.id;
    G.stage = "relocate loser";
    events.endTurn({ next: attackerID });
  }
};

export default evadeAttackingFleet;
