import { MoveFn } from "boardgame.io";
import { MyGameState } from "../types";

const pass: MoveFn<MyGameState> = (
  { G, ctx, playerID, events, random },
  ...args
) => {
  G.playerInfo[playerID].passed = true;
  if (ctx.phase === "discovery") {
    if (ctx.turn === ctx.numPlayers) {
      G.stage = "actions";
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
    if (readyToEndPhase && ctx.phase === "actions") {
      G.stage = "attack or pass";
      events.endPhase();
    } else {
      events.endTurn();
    }
  }
};

export default pass;
