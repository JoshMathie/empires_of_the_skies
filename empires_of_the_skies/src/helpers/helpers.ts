import { MyGameProps } from "../types";

export const clearMoves = (props: MyGameProps) => {
  if (props.ctx.numMoves) {
    for (let i = 0; i < props.ctx.numMoves; i++) {
      props.undo();
    }
  }
};
