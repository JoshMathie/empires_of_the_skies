import { MoveFn } from "boardgame.io";
import { MyGameState } from "../types";
import { INVALID_MOVE } from "boardgame.io/core";

const passFleetInfoToPlayerInfo: MoveFn<MyGameState> = (
  { G, ctx, playerID, events, random },
  ...args
) => {
  console.log(args[0]);
  const fleetId = args[0][0];
  const skyshipCount = args[0][1];
  const regimentCount = args[0][2];
  const levyCount = args[0][3];

  if (fleetId !== G.playerInfo[playerID].fleetInfo[fleetId - 1].fleetId) {
    console.log("Fleet IDs do not match, something has gone wrong...");
    return INVALID_MOVE;
  }

  const currentPlayer = G.playerInfo[playerID];
  const currentFleet = currentPlayer.fleetInfo[fleetId - 1];
  if (currentFleet.location[0] === 4 && currentFleet.location[1] === 0) {
    if (
      currentPlayer.resources.skyships < skyshipCount ||
      currentPlayer.resources.regiments < regimentCount ||
      currentPlayer.resources.levies < levyCount
    ) {
      console.log(
        "Player has attempted to deploy more of a resource than they have ready, something has gone wrong..."
      );
      return INVALID_MOVE;
    }
    currentFleet.skyships = skyshipCount;
    currentFleet.regiments = regimentCount;
    currentFleet.levies = levyCount;

    currentPlayer.resources.skyships -= skyshipCount;
    currentPlayer.resources.regiments -= regimentCount;
    currentPlayer.resources.levies -= levyCount;
  }
};

export default passFleetInfoToPlayerInfo;
