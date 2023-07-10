import { MoveFn } from "boardgame.io";
import { MyGameState } from "../../types";

const retrieveFleets: MoveFn<MyGameState> = (
  { G, ctx, playerID, events, random },
  ...args
) => {
  const fleets: number[] = args[0];
  if (fleets.length > 0) {
    fleets.forEach((fleetId) => {
      const currentPlayer = G.playerInfo[playerID];
      const currentFleet = currentPlayer.fleetInfo[fleetId];
      currentFleet.location = [4, 0];

      currentPlayer.resources.skyships += currentFleet.skyships;
      currentPlayer.resources.regiments += currentFleet.regiments;
      currentPlayer.resources.levies += currentFleet.levies;

      currentFleet.skyships = 0;
      currentFleet.regiments = 0;
      currentFleet.levies = 0;
    });
  }

  events.endTurn();
};

export default retrieveFleets;
