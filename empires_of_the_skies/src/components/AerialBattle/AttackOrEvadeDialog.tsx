import React from "react";
import { MyGameProps } from "../../types";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";

import { colourToKingdomMap } from "../../codifiedGameInfo";

const AttackOrEvadeDialog = (props: MyGameProps) => {
  const [x, y] = props.G.mapState.currentBattle;
  const inCurrentBattle =
    props.G.mapState.battleMap[y] &&
    props.G.mapState.battleMap[y][x].includes(
      props.playerID ?? props.ctx.currentPlayer
    );

  return (
    <Dialog
      open={
        props.ctx.currentPlayer === props.playerID &&
        props.ctx.phase === "actions" &&
        inCurrentBattle &&
        props.G.battleState?.defender.id === props.playerID &&
        props.G.battleState.defender.decision === "undecided"
      }
      style={{
        color:
          props.G.playerInfo[props.playerID ?? props.ctx.currentPlayer].colour,
      }}
    >
      <DialogTitle>Your fleet is under attack!</DialogTitle>
      <DialogContent>
        {`Your fleet on tile [${1 + x}, ${4 - y}] is under attack by ${
          props.G.battleState
            ? colourToKingdomMap[props.G.battleState?.attacker.colour]
            : "ERROR"
        }. 
        
You can either evade or fight back. If you evade, the attacking kingdom will get to move your fleet to an ajoining tile of their choosing.`}
      </DialogContent>
      <DialogActions>
        <Button
          color="warning"
          variant="contained"
          onClick={props.moves.evadeAttackingFleet}
        >
          Evade
        </Button>
        <Button
          color="success"
          variant="contained"
          onClick={props.moves.retaliate}
        >
          Attack!
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AttackOrEvadeDialog;
