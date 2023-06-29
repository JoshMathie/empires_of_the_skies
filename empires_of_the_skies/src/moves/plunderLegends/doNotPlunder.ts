import { MoveFn } from "boardgame.io";
import { MyGameState } from "../../types";
import { findNextPlunder } from "../../helpers/findNext";

const doNotPlunder: MoveFn<MyGameState> = (
  { G, ctx, playerID, events, random },
  ...args
) => {
  findNextPlunder(G, events);
};

export default doNotPlunder;
