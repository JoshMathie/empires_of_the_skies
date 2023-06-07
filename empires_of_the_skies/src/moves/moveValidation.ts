import { Ctx } from "boardgame.io";
import { MyGameState } from "../Game";
import { INVALID_MOVE } from "boardgame.io/core/";

export const checkCounsellorsNotZero = (playerID: string, G: MyGameState) => {
  if (G.playerInfo[playerID].resources.counsellors === 0) {
    console.log("Player has no counsellors to place");
    return INVALID_MOVE;
  }
};
