import { MoveFn } from "boardgame.io";
import { MyGameState } from "../../types";
import { findNextPlayerInBattleSequence } from "../../helpers/findNext";

const relocateDefeatedFleet: MoveFn<MyGameState> = (
  { G, ctx, playerID, events, random },
  ...args
) => {
  const destination = args[0];
  console.log(destination);
  const defeatedPlayer = args[1];
  console.log(defeatedPlayer);
  const [x, y] = G.mapState.currentBattle;
  G.playerInfo[defeatedPlayer].fleetInfo.forEach((fleet) => {
    if (fleet.location[0] === x && fleet.location[1] === y) {
      fleet.location = destination;
      G.mapState.battleMap[y][x].splice(
        G.mapState.battleMap[y][x].indexOf(defeatedPlayer),
        1
      );
      G.mapState.battleMap[destination[1]][destination[0]].push(defeatedPlayer);
    }
  });

  findNextPlayerInBattleSequence(
    G.battleState?.attacker.id ?? playerID,
    ctx,
    G,
    events
  );
};

export default relocateDefeatedFleet;
