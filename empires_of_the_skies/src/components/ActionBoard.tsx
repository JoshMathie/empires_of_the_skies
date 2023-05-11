import React from "react";

import ActionBoardSvg from "../boards_and_assets/action_board.svg";
import { ActionBoardButton } from "./ActionBoardButton";

//method which renders the svg ActionBoard

export const ActionBoard = () => {
  let playerOrderButtons = [];
  for (let i = 1; i < 7; i++) {
    playerOrderButtons.push(<ActionBoardButton onClick={() => {}} />);
  }

  return (
    <div
      style={{
        backgroundImage: `url(${ActionBoardSvg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        width: "40vw",
        height: "100vh",
      }}
    >
      <div
        style={{
          display: "flex",
          marginBottom: "7.2%",
          marginLeft: "30%",
          marginRight: "10%",
        }}
      >
        {}
      </div>
      {playerOrderButtons}
    </div>
  );
};
