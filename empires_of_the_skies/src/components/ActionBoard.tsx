import React from "react";
import "../App.css";
import { ReactComponent as ActionBoardSvg } from "../boards_and_assets/action_board.svg";
import { ActionBoardButton, ActionBoardButtonLarge } from "./ActionBoardButton";
import { ButtonRow } from "./ActionBoardButtonRow";
import playerOrderTile from "../boards_and_assets/player_order_tile.svg";
import recuitCounsillor1 from "../boards_and_assets/recruit_counsillor1.svg";
import recuitCounsillor2 from "../boards_and_assets/recruit_counsillor2.svg";
import recuitCounsillor3 from "../boards_and_assets/recruit_counsillor3.svg";
import trainTroops1 from "../boards_and_assets/train_troops1.svg";
import trainTroops2 from "../boards_and_assets/train_troops2.svg";
import recruitRegiments1 from "../boards_and_assets/recruit_regiments1.svg";
import recruitRegiments2 from "../boards_and_assets/recruit_regiments2.svg";
import recruitRegiments3 from "../boards_and_assets/recruit_regiments3.svg";
import recruitRegiments4 from "../boards_and_assets/recruit_regiments4.svg";
import recruitRegiments5 from "../boards_and_assets/recruit_regiments5.svg";
import recruitRegiments6 from "../boards_and_assets/recruit_regiments6.svg";
import purchaseSkyships1 from "../boards_and_assets/build_skyships_zeeland1.svg";
import purchaseSkyships2 from "../boards_and_assets/build_skyships_zeeland2.svg";
import purchaseSkyships3 from "../boards_and_assets/build_skyships_zeeland3.svg";
import purchaseSkyships4 from "../boards_and_assets/build_skyships_venoa1.svg";
import purchaseSkyships5 from "../boards_and_assets/build_skyships_venoa2.svg";
import purchaseSkyships6 from "../boards_and_assets/build_skyships_venoa3.svg";
import buildCathedral from "../boards_and_assets/build_cathedral.svg";
import buildPalace from "../boards_and_assets/build_palace.svg";
import buildShipyard from "../boards_and_assets/build_shipyards.svg";
import buildForts from "../boards_and_assets/build_forts.svg";
import { ReactComponent as InfluencePrelatesExplination } from "../boards_and_assets/influence_prelates_explination.svg";
import influencePrelates1 from "../boards_and_assets/influence_prelates1.svg";
import influencePrelates2 from "../boards_and_assets/influence_prelates2.svg";
import influencePrelates3 from "../boards_and_assets/influence_prelates3.svg";
import influencePrelates4 from "../boards_and_assets/influence_prelates4.svg";
import influencePrelates5 from "../boards_and_assets/influence_prelates5.svg";
import influencePrelates6 from "../boards_and_assets/influence_prelates6.svg";
import influencePrelates7 from "../boards_and_assets/influence_prelates7.svg";
import influencePrelates8 from "../boards_and_assets/influence_prelates8.svg";
import { ReactComponent as PunishDissenters } from "../boards_and_assets/punish_dissenters_explination.svg";
import punishDissenters1 from "../boards_and_assets/punish_dissenters1.svg";
import punishDissenters2 from "../boards_and_assets/punish_dissenters2.svg";
import punishDissenters3 from "../boards_and_assets/punish_dissenters3.svg";
import punishDissenters4 from "../boards_and_assets/punish_dissenters4.svg";
import punishDissenters5 from "../boards_and_assets/punish_dissenters5.svg";
import punishDissenters6 from "../boards_and_assets/punish_dissenters6.svg";
import { ReactComponent as ConvertMonarchExplination } from "../boards_and_assets/convert_monarch_explination.svg";
import convertMonarch1 from "../boards_and_assets/convert_monarch1.svg";
import convertMonarch2 from "../boards_and_assets/convert_monarch2.svg";
import convertMonarch3 from "../boards_and_assets/convert_monarch3.svg";
import convertMonarch4 from "../boards_and_assets/convert_monarch4.svg";
import convertMonarch5 from "../boards_and_assets/convert_monarch5.svg";
import convertMonarch6 from "../boards_and_assets/convert_monarch6.svg";
import issueHolyDecree from "../boards_and_assets/issue_holy_decree.svg";

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
        <ButtonRow>
          {"Alter Player \n Order"}
          {generateButtonsList(
            6,
            Array(6).fill(playerOrderTile),
            "98px",
            false,
            ["1st", "2nd", "3rd", "4th", "5th", "6th"]
          )}
        </ButtonRow>
        <ButtonRow>
          Recruit Counsellors
          {generateButtonsList(
            3,
            [recuitCounsillor1, recuitCounsillor2, recuitCounsillor3],
            "98px"
          )}
          Train Troops
          {generateButtonsList(2, [trainTroops1, trainTroops2], "98px")}
        </ButtonRow>
        <ButtonRow>
          Recruit Regiments
          {generateButtonsList(
            6,
            [
              recruitRegiments1,
              recruitRegiments2,
              recruitRegiments3,
              recruitRegiments4,
              recruitRegiments5,
              recruitRegiments6,
            ],
            "98px"
          )}
        </ButtonRow>
        <ButtonRow>
          Purchase Skyships
          {generateButtonsList(
            6,
            [
              purchaseSkyships1,
              purchaseSkyships2,
              purchaseSkyships3,
              purchaseSkyships4,
              purchaseSkyships5,
              purchaseSkyships6,
            ],
            "98px"
          )}
        </ButtonRow>
        <ButtonRow>
          Found Buildings
          {generateButtonsList(
            4,
            [buildCathedral, buildPalace, buildShipyard, buildForts],
            "180px",
            true
          )}
        </ButtonRow>
        <ButtonRow>
          <InfluencePrelatesExplination />
          {generateButtonsList(
            8,
            [
              influencePrelates1,
              influencePrelates2,
              influencePrelates3,
              influencePrelates4,
              influencePrelates5,
              influencePrelates6,
              influencePrelates7,
              influencePrelates8,
            ],
            "52px"
          )}
        </ButtonRow>
        <ButtonRow>
          <PunishDissenters />
          {generateButtonsList(
            6,
            [
              punishDissenters1,
              punishDissenters2,
              punishDissenters3,
              punishDissenters4,
              punishDissenters5,
              punishDissenters6,
            ],
            "52px"
          )}
        </ButtonRow>
        <ButtonRow>
          <ConvertMonarchExplination />
          {generateButtonsList(
            6,
            [
              convertMonarch1,
              convertMonarch2,
              convertMonarch3,
              convertMonarch4,
              convertMonarch5,
              convertMonarch6,
            ],
            "52px"
          )}
        </ButtonRow>
        <ButtonRow>
          <button
            onClick={() => {}}
            style={{
              width: "200px",
              height: "70px",
              textAlign: "left",
              backgroundImage: `url(${issueHolyDecree})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              fontFamily: "dauphinn",
              fontSize: "18px",
            }}
          />
        </ButtonRow>
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
  large?: boolean,
  listOfText?: string[]
) => {
  let buttonList = [];
  for (let i = 0; i < numberOfButtons; i++) {
    buttonList.push(
      large ? (
        <ActionBoardButtonLarge
          onClick={() => {}}
          backgroundImage={listOfBackgroundImages[i]}
          text={listOfText ? listOfText[i] : ""}
          width={buttonWidth}
        />
      ) : (
        <ActionBoardButton
          onClick={() => {}}
          backgroundImage={listOfBackgroundImages[i]}
          text={listOfText ? listOfText[i] : ""}
          width={buttonWidth}
        />
      )
    );
  }
  return buttonList;
};
