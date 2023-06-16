import { MoveFn } from "boardgame.io";
import { MyGameState } from "../types";

const pass: MoveFn<MyGameState> = (
  { G, ctx, playerID, events, random },
  ...args
) => {
  G.playerInfo[playerID].passed = true;
  if (ctx.phase === "discovery") {
    if (ctx.turn === ctx.numPlayers) {
      events.endPhase();
    } else {
      events.endTurn();
    }
  } else if (ctx.phase === "actions") {
    let readyToEndPhase = true;
    Object.values(G.playerInfo).forEach((info) => {
      if (info.passed === false) {
        readyToEndPhase = false;
      }
    });
    if (readyToEndPhase) {
      events.endPhase();
    } else {
      events.endTurn();
    }
  }
};

export default pass;
