import { MoveFn } from "boardgame.io";
import { MyGameState } from "../../types";
import { INVALID_MOVE } from "boardgame.io/core";
import { removeOneCounsellor } from "../resourceUpdates";

const enableDispatchButtons: MoveFn<MyGameState> = (
  { G, ctx, playerID, events, random },
  ...args
) => {
  if (
    G.playerInfo[playerID].playerBoardCounsellorLocations.dispatchSkyshipFleet
  ) {
    console.log(
      "Player has attempted to dispatch skyship fleet twice in once phase of play"
    );
    return INVALID_MOVE;
  }
  G.playerInfo[playerID].playerBoardCounsellorLocations.dispatchSkyshipFleet =
    true;

  removeOneCounsellor(G, playerID);
  args[0](false);
};

export default enableDispatchButtons;
