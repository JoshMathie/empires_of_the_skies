import React, { useState } from "react";
import { MyGameProps } from "../../types";
import FleetDisplay from "../PlayerBoard/FleetDisplay";
import WorldMap from "../WorldMap/WorldMap";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";

const RetrieveFleetsDialog = (props: RetrieveFleetsDialogProps) => {
  const setFleetsHolder: number[] = [];
  const [selectedFleets, setSelectedFleets] = useState(setFleetsHolder);
  let hasNoFleets = true;
  const fleets = props.G.playerInfo[
    props.playerID ?? props.ctx.currentPlayer
  ].fleetInfo.map((fleet) => {
    const [x, y] = fleet.location;
    if (x !== 4 || y !== 0) {
      hasNoFleets = false;
      return (
        <FleetDisplay
          fleetId={fleet.fleetId}
          location={fleet.location}
          skyships={fleet.skyships}
          regiments={fleet.regiments}
          levies={fleet.levies}
          selected={selectedFleets.includes(fleet.fleetId) ? fleet.fleetId : -1}
          onClickFunction={() => {
            let newFleetArray = [...selectedFleets];
            if (selectedFleets.includes(fleet.fleetId)) {
              newFleetArray.splice(newFleetArray.indexOf(fleet.fleetId, 1));
              setSelectedFleets(newFleetArray);
            } else {
              newFleetArray.push(fleet.fleetId);
              setSelectedFleets(newFleetArray);
            }
          }}
        />
      );
    }
  });

  if (
    props.ctx.phase === "resolution" &&
    props.G.stage === "retrieve fleets" &&
    props.ctx.currentPlayer === props.playerID &&
    hasNoFleets
  ) {
    props.events.endTurn && props.events.endTurn();
  }
  return (
    <Dialog
      maxWidth="xl"
      open={
        props.ctx.phase === "resolution" &&
        props.G.stage === "retrieve fleets" &&
        props.ctx.currentPlayer === props.playerID
      }
    >
      <DialogTitle>Do you want to retrieve any fleets?</DialogTitle>
      <DialogContent>
        Bring home any of your dispatched fleets for free, this allows you to
        restock them with skyships and troops.
        {fleets}
        <WorldMap {...props} />
      </DialogContent>
      <DialogActions>
        <Button
          color="error"
          variant="contained"
          onClick={() => {
            props.moves.retrieveFleets([]);
          }}
        >
          Cancel
        </Button>
        <Button
          color="success"
          variant="contained"
          onClick={() => {
            props.moves.retrieveFleets(selectedFleets);
          }}
        >
          Retrieve fleets
        </Button>
      </DialogActions>
    </Dialog>
  );
};

interface RetrieveFleetsDialogProps extends MyGameProps {
  setTurnComplete: React.Dispatch<React.SetStateAction<boolean>>;
}

export default RetrieveFleetsDialog;
