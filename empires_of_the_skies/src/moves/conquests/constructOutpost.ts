import { MoveFn } from "boardgame.io";
import { MyGameState } from "../../types";

const constructOutpost: MoveFn<MyGameState> = (
  { G, ctx, playerID, events, random },
  ...args
) => {};

export default constructOutpost;
