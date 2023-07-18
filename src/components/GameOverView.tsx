import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import { MyGameProps } from "../types";
import React from "react";
import PlayerTable from "./PlayerTable/PlayerTable";

const GameOverView = (props: MyGameProps) => {
  return (
    <Dialog open={props.ctx.gameover} maxWidth={"xl"}>
      <DialogTitle>Game over!</DialogTitle>
      <DialogContent>
        <PlayerTable {...props}></PlayerTable>
      </DialogContent>
    </Dialog>
  );
};

export default GameOverView;
