import React from "react";
import { FleetInfo } from "../../types";
import { Button } from "@mui/material";

const FleetDisplay = (props: FleetDisplayProps) => {
  return (
    <Button
      variant="contained"
      style={{ marginRight: "10px" }}
      color={props.selected === props.fleetId ? "success" : "primary"}
      onClick={() => props.onClickFunction(props.fleetId)}
    >
      {`Fleet: ${props.fleetId}
Location: [${props.location[0] + 1}, ${4 - props.location[1]}]
Skyships: ${props.skyships}
Regiments: ${props.regiments}
Levies: ${props.levies}`}
    </Button>
  );
};

export default FleetDisplay;

interface FleetDisplayProps extends FleetInfo {
  onClickFunction: (fleetId: number) => void;
  selected: number;
}
