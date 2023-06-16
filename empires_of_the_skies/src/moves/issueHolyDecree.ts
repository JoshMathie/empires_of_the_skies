import { MoveFn } from "boardgame.io";
import { MyGameState } from "../types";
import {
  addVPAmount,
  advanceAllHeresyTrackers,
  removeVPAmount,
  retreatAllHeresyTrackers,
} from "./resourceUpdates";
import { INVALID_MOVE } from "boardgame.io/core";
import { blessingOrCurseVPAmount } from "../helpers/helpers";

const issueHolyDecree: MoveFn<MyGameState> = (
  { G, ctx, playerID, events, random },
  ...args
) => {
  const value = args[0][0];
  const id = args[0][1];
  if (!G.playerInfo[playerID].isArchprelate) {
    console.log(
      "One who has not been anointed by God has attempted to issue a holy decree."
    );
    return INVALID_MOVE;
  }
  if (G.boardState.issueHolyDecree) {
    console.log(
      "You must prove your worthiness by re-election before issuing another holy decree."
    );
    return INVALID_MOVE;
  }

  switch (value) {
    case "reform dogma":
      retreatAllHeresyTrackers(G);
      break;
    case "confirm dogma":
      advanceAllHeresyTrackers(G);
      break;

    case "curse monarch":
      removeVPAmount(G, id, blessingOrCurseVPAmount(G));
      break;
    case "bless monarch":
      addVPAmount(G, id, blessingOrCurseVPAmount(G));
      break;
  }

  G.boardState.issueHolyDecree = true;
  args[0][2](true);
};

export default issueHolyDecree;
