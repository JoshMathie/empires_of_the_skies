import { MyGameProps, PlayerInfo } from "../types";

export const clearMoves = (props: MyGameProps) => {
  if (props.ctx.numMoves) {
    console.log("undoing one move");

    for (let i = 0; i < props.ctx.numMoves; i++) {
      props.undo();
    }
  }
};

export const checkPlayerIDAndReturnPlayerInfo = (
  props: MyGameProps
): PlayerInfo => {
  let playerInfo;
  if (props.playerID) {
    playerInfo = props.G.playerInfo[props.playerID];
  } else {
    throw new Error("No playerID found in props");
  }
  return playerInfo;
};
