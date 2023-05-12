import React from "react";
import "../App.css";
import { ReactComponent as ActionBoardSvg } from "../boards_and_assets/action_board.svg";
import { ActionBoardButton, ActionBoardButtonProps } from "./ActionBoardButton";
import playerOrderTile from "../boards_and_assets/player_order_tile.svg";
import recuitCounsillor1 from "../boards_and_assets/recruit_counsillor1.svg";
import recuitCounsillor2 from "../boards_and_assets/recruit_counsillor2.svg";
import recuitCounsillor3 from "../boards_and_assets/recruit_counsillor3.svg";
import trainTroops1 from "../boards_and_assets/train_troops1.svg";
import trainTroops2 from "../boards_and_assets/train_troops2.svg";

//method which returns the complete action board

export const ActionBoard = () => {
  return (
    <div>
      <ActionBoardSvg></ActionBoardSvg>
      {/* establishing a column for the different classes of moves to be displayed in */}
      <div
        style={{
          width: "80%",
          display: "flex",
          flexDirection: "column",
          // flexWrap: "wrap",
        }}
      >
        <div
          style={{
            display: "flex",
            marginTop: "3%",
            position: "relative",
            whiteSpace: "pre-line",
            flexWrap: "wrap",
          }}
        >
          {"Alter Player \n Order"}
          {generateButtonsList(6, Array(6).fill(playerOrderTile), "98px", [
            "1st",
            "2nd",
            "3rd",
            "4th",
            "5th",
            "6th",
          ])}
        </div>
        <div
          style={{
            display: "flex",
            marginTop: "3%",
            position: "relative",
            whiteSpace: "pre-line",
            flexWrap: "wrap",
          }}
        >
          Recruit Counsellors
          {generateButtonsList(
            3,
            [recuitCounsillor1, recuitCounsillor2, recuitCounsillor3],
            "98px"
          )}
          Train Troops
          {generateButtonsList(2, [trainTroops1, trainTroops2], "98px")}
        </div>
      </div>
    </div>
  );
};

// generic method to generate a list of buttons to be displayed on the action board
export const generateButtonsList = (
  numberOfButtons: number,
  // listOfOnClickFunctions: () => void,
  listOfBackgroundImages: string[],
  buttonWidth: string,
  listOfText?: string[]
) => {
  let buttonList = [];
  for (let i = 0; i < numberOfButtons; i++) {
    buttonList.push(
      <ActionBoardButton
        onClick={() => {}}
        backgroundImage={listOfBackgroundImages[i]}
        text={listOfText ? listOfText[i] : ""}
        width={buttonWidth}
      />
    );
  }
  return buttonList;
};
