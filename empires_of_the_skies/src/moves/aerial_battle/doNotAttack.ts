import { MoveFn } from "boardgame.io";
import { MyGameState } from "../../types";
import {
  findNextBattle,
  findNextPlayerInBattleSequence,
} from "../../helpers/helpers";

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
  console.log(currentPlayerIndex);
  if (currentPlayerIndex === possibleBattlers.length - 1) {
    findNextBattle(G, events, ctx);
  } else {
    findNextPlayerInBattleSequence(playerID, ctx, G, events);
  }
};

export default doNotAttack;
