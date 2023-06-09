import React from "react";
import { PlayerColour } from "../../types";
import { Button } from "@mui/material";

export const PlayerBoardButton = (props: PlayerBoardButtonProps) => {
  let colour = "#1A1A18";
  if (
    props.colour === PlayerColour["blue"] ||
    props.colour === PlayerColour["black"] ||
    props.colour === PlayerColour["green"]
  ) {
    colour = "#FFFFFF";
  }
  return (
    <Button
      style={{
        width: props.width ? props.width : "98px",
        height: props.height ? props.height : "50px",
        textAlign: "left",
        backgroundImage: `url(${props.backgroundImage})`,
        // replace background size with 'contain' to displaye entire
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        fontFamily: "dauphinn",
        fontSize: "18px",
        cursor: "pointer",
        backgroundColor: props.colour,
        color: colour,
      }}
      disabled={props.disabled}
      onClick={props.onClick}
    >
      {props.text}
    </Button>
  );
};

export type PlayerBoardButtonProps = {
  onClick: () => void;
  colour: (typeof PlayerColour)[keyof typeof PlayerColour];
  backgroundImage?: string;
  text?: string;
  disabled?: boolean;
  width?: string;
  height?: string;
};
