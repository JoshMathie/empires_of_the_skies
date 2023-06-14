import { MoveFn } from "boardgame.io";
import { MyGameState } from "../types";
import { INVALID_MOVE } from "boardgame.io/core";
import { checkCounsellorsNotZero } from "./moveValidation";
import { addLevyAmount, removeVPAmount } from "./resourceUpdates";

const conscriptLevies: MoveFn<MyGameState> = (
  { G, ctx, playerID, events, random },
  ...args
) => {
  if (G.playerInfo[playerID].playerBoardCounsellorLocations.conscriptLevies) {
    console.log(
      "Player has attempted to conscript levies twice in the same phase of play"
    );
    return INVALID_MOVE;
  }

  checkCounsellorsNotZero(playerID, G);

  const levyAmount: number = args[1][0];

  if (levyAmount === 0) {
    console.log("Player has attempted to conscript 0 levies");
    return INVALID_MOVE;
  }
  const cost = levyAmount / 3;
  console.log(levyAmount);

  removeVPAmount(G, playerID, cost);
  addLevyAmount(G, playerID, levyAmount);
  G.playerInfo[playerID].playerBoardCounsellorLocations.conscriptLevies = true;
  args[1][1](true);
};

export default conscriptLevies;
