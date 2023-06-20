import { MoveFn, StageArg } from "boardgame.io";
import { MyGameState } from "../../types";
import { findNextBattle } from "../../helpers/helpers";

const doNotAttack: MoveFn<MyGameState> = (
  { G, ctx, playerID, events, random },
  ...args
) => {
  const [x, y] = G.mapState.currentBattle;
  const possibleBattlers = G.mapState.battleMap[y][x];
  let currentPlayerIndex: number = 0;
  for (let i = 0; i < possibleBattlers.length; i++) {
    if (possibleBattlers[i] === playerID) {
      currentPlayerIndex = i;
    }
  }

  if (currentPlayerIndex === possibleBattlers.length - 1) {
    findNextBattle(G, events, ctx);
  } else {
    const nextPlayerID = possibleBattlers[currentPlayerIndex + 1];
    const activePlayersConfig: Record<string, StageArg> = {};
    activePlayersConfig[nextPlayerID] = "attack_or_pass";
    events.setActivePlayers({ value: { activePlayersConfig } });
  }
};

export default doNotAttack;
