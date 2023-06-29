import React, { useState } from "react";

import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
} from "@mui/material";
import { MyGameProps } from "../../types";
import FortuneOfWarCardDisplay from "../PlayerBoard/FortuneOfWarCardDisplay";
import WorldMap from "../WorldMap/WorldMap";

const DrawOrPickCardDialog = (props: DrawOrPickCardDialogProps) => {
  const [x, y] = props.G.mapState.currentBattle;
  const [currentCard, setCurrentCard] = useState(0);

  const inCurrentBattle =
    props.G.mapState.battleMap[y] &&
    props.G.mapState.battleMap[y][x].includes(
      props.playerID ?? props.ctx.currentPlayer
    );

  const cards = props.G.playerInfo[
    props.playerID ?? props.ctx.currentPlayer
  ].resources.fortuneCards.map((card, index) => {
    return (
      <div
        onClick={() => setCurrentCard(index)}
        key={index}
        style={{
          cursor: "pointer",
          height: "fit-content",
          width: "fit-content",
          border: index === currentCard ? "2px solid black" : "none",
        }}
      >
        <FortuneOfWarCardDisplay
          value={index}
          {...props}
        ></FortuneOfWarCardDisplay>
      </div>
    );
  });

  return (
    <Dialog
      maxWidth={false}
      open={
        props.playerID === props.ctx.currentPlayer &&
        inCurrentBattle &&
        props.G.battleState?.attacker.decision === "fight" &&
        props.G.battleState?.defender.decision === "fight" &&
        !props.G.battleState?.attacker.victorious &&
        !props.G.battleState?.defender.victorious
      }
    >
      <DialogTitle>Draw or Pick a Card</DialogTitle>
      <DialogContent>
        You can either draw a random fortune of war card, or pick one from your
        hand if you have any.
        {cards}
        <WorldMap
          {...props}
          selectableTiles={[props.G.mapState.currentBattle]}
        ></WorldMap>
      </DialogContent>
      <DialogActions>
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            props.moves.pickCard(currentCard);
          }}
        >
          Use selected card
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={props.moves.drawCard}
        >
          Draw random card
        </Button>
      </DialogActions>
    </Dialog>
  );
};

interface DrawOrPickCardDialogProps extends MyGameProps {
  setTurnComplete: React.Dispatch<React.SetStateAction<boolean>>;
}

export default DrawOrPickCardDialog;
