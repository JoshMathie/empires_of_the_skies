import React, { ReactElement, useRef, useState } from "react";
import { MyGameProps, PlayerColour } from "../../types";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { WorldMap } from "../WorldMap/WorldMap";
import { clearMoves } from "../../helpers/helpers";
import CounsellorIcon from "../Icons/CounsellorIcon";
export const ActionBoardButton = (props: ActionBoardButtonProps) => {
  let counsellorColour: string | undefined;

  if (props.counsellor !== undefined) {
    counsellorColour = props.G.playerInfo[props.counsellor.toString()].colour;
  }
  return (
    <Button
      style={{
        minWidth: props.width ? props.width : "98px",
        height: "50px",
        textAlign: "left",
        backgroundImage: `url(${props.backgroundImage})`,
        // replace background size with 'contain' to display entire image
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        fontSize: "18px",
        color: "black",
        textTransform: "none",
      }}
      sx={{
        backgroundColor: props.backgroundColour
          ? props.backgroundColour
          : "#e0e0e0",
      }}
      onClick={() => {
        clearMoves(props, props.setTurnComplete);
        props.onClickFunction({ ...props }, [
          props.value,
          props.setTurnComplete,
        ]);
      }}
      value={props.value}
    >
      {props.text}
      {props.counsellor ? (
        <CounsellorIcon
          colour={counsellorColour ? counsellorColour : PlayerColour.blue}
        />
      ) : null}
    </Button>
  );
};

export const ActionBoardButtonLarge = (props: ActionBoardButtonProps) => {
  const [heresyOrOrthodoxyDialogOpen, setHeresyOrOrthodoxyDialogOpen] =
    useState(false);
  const playerID = useRef("0");
  const [worldMapDialogOpen, setWorldMapDialogOpen] = useState(false);
  const [selectedTile, setSelectedTile] = useState([0, 0]);
  const fortPlacementFailed = useRef(false);

  let listOfCounsellors: ReactElement[] = [];
  if (props.counsellors) {
    props.counsellors.forEach((counsellor) => {
      let counsellorColour = props.G.playerInfo[counsellor].colour;
      listOfCounsellors.push(
        <CounsellorIcon colour={counsellorColour}></CounsellorIcon>
      );
    });
  }

  const alternateOnClickFunction = (coords: number[]) => {
    setSelectedTile(coords);
  };

  return (
    <>
      <Button
        style={{
          width: props.width ? props.width : "180px",
          height: "150px",
          textAlign: "left",
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "column",
          backgroundImage: `url(${props.backgroundImage})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundColor: "#5ebf85",
          fontFamily: "dauphinn",
          fontSize: "18px",
          cursor: "pointer",
        }}
        onClick={() => {
          clearMoves(props, props.setTurnComplete);
          props.onClickFunction({ ...props }, [
            props.value,
            props.value === 1
              ? setHeresyOrOrthodoxyDialogOpen
              : setWorldMapDialogOpen,
            playerID,
            props.setTurnComplete,
          ]);
        }}
        value={props.value}
      >
        {props.text}
        {props.counsellors ? listOfCounsellors : null}
      </Button>
      <Dialog
        maxWidth={false}
        open={
          props.value === 1 ? heresyOrOrthodoxyDialogOpen : worldMapDialogOpen
        }
      >
        <DialogTitle style={{ fontFamily: "dauphinn" }}>
          {props.value === 1
            ? "Select direction to move heresy tracker"
            : `Select location for your fort. Current selection: [${
                selectedTile[0] + 1
              }, ${4 - selectedTile[1]}]`}
        </DialogTitle>
        <DialogContent>
          {props.value === 1 ? (
            <DialogContentText
              style={{
                fontFamily: "dauphinn",
                color: "black",
              }}
            >
              The direction you pick will advance your heresy tracker by 1 in
              your chosen direction, this affects the victory points you will
              earn at the end of the game.
            </DialogContentText>
          ) : (
            <WorldMap {...props} alternateOnClick={alternateOnClickFunction} />
          )}
        </DialogContent>
        <DialogActions>
          <>
            {props.value === 1 ? (
              <>
                <Button
                  variant="contained"
                  style={{
                    backgroundColor: "#cd0ffc",
                    fontFamily: "dauphinn",
                  }}
                  onClick={() => {
                    props.moves.increaseHeresy({ ...props });
                    setHeresyOrOrthodoxyDialogOpen(false);
                  }}
                >
                  Heresy
                </Button>
                <Button
                  variant="contained"
                  style={{ backgroundColor: "#fa921b", fontFamily: "dauphinn" }}
                  onClick={() => {
                    props.moves.increaseOrthodoxy({ ...props });
                    setHeresyOrOrthodoxyDialogOpen(false);
                  }}
                >
                  Orthodoxy
                </Button>
              </>
            ) : (
              <Button
                variant="contained"
                color="success"
                onClick={() => {
                  props.moves.checkAndPlaceFort({ ...props }, [
                    selectedTile,
                    fortPlacementFailed,
                  ]);
                  if (fortPlacementFailed.current) {
                    console.log("fort placement failed");
                    clearMoves(props, props.setTurnComplete);
                  }
                  setWorldMapDialogOpen(false);
                }}
              >
                Confirm
              </Button>
            )}
            <Button
              variant="contained"
              color="error"
              onClick={() => {
                clearMoves(props, props.setTurnComplete);
                setWorldMapDialogOpen(false);
                setHeresyOrOrthodoxyDialogOpen(false);
              }}
            >
              Cancel
            </Button>
          </>
        </DialogActions>
      </Dialog>
    </>
  );
};

export interface ActionBoardButtonProps extends MyGameProps {
  onClickFunction: ({ ...props }, args: any[]) => void;
  value: number;
  counsellor?: string | undefined;
  counsellors?: string[] | undefined;
  backgroundImage?: string;
  text?: string;
  width?: string;
  backgroundColour?: string;
  setTurnComplete: React.Dispatch<React.SetStateAction<boolean>>;
}
