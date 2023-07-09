import { MoveFn } from "boardgame.io";
import { MyGameState } from "../../types";

const coloniseLand: MoveFn<MyGameState> = (
  { G, ctx, playerID, events, random },
  ...args
) => {
  G.conquestState = {
    decision: "fight",
    ...G.playerInfo[playerID],
  };
};

export default coloniseLand;
