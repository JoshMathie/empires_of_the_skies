import React, { useState } from "react";
import { MyGameProps } from "../../types";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";

const ElectionDialog = (props: ElectionDialogProps) => {
  const [currentVote, setCurrentVote] = useState(props.ctx.playOrder[0]);
  const [hidden, setHidden] = useState(true);

  const buttons = props.ctx.playOrder.map((id) => {
    const buttonLabel = props.G.playerInfo[id].kingdomName;
    const buttonColour = props.G.playerInfo[id].colour;

    return (
      <Button
        key={id}
        sx={{
          backgroundColor: buttonColour,
          border: currentVote === id ? "2px solid black" : undefined,
        }}
        variant="contained"
        onClick={() => {
          setCurrentVote(id);
        }}
      >
        {buttonLabel}
      </Button>
    );
  });

  return (
    <Dialog
      open={
        props.ctx.phase === "election" &&
        props.playerID === props.ctx.currentPlayer
      }
    >
      <DialogTitle>Please cast your vote for the next Archprelate</DialogTitle>
      <DialogContent>
        {buttons}
        <div hidden={hidden}>Vote received, awaiting other player votes.</div>
      </DialogContent>
      <DialogActions>
        <Button
          color="success"
          variant="contained"
          onClick={() => {
            setHidden(false);
            props.moves.vote(currentVote);
          }}
        >
          Confirm Vote
        </Button>
      </DialogActions>
    </Dialog>
  );
};

interface ElectionDialogProps extends MyGameProps {}

export default ElectionDialog;
