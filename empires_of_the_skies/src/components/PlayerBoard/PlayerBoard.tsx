import React, { useState } from "react";

import buildSkyships from "../../boards_and_assets/player_boards/buttons/build_skyships.svg";
import conscriptLevies from "../../boards_and_assets/player_boards/buttons/conscript_levies.svg";
import dispatchSkyshipFleet from "../../boards_and_assets/player_boards/buttons/dispatch_skyship_fleet.svg";
import { ButtonRow } from "../ActionBoard/ActionBoardButtonRow";
import { PlayerColour } from "../../types";
import { PlayerBoardButton } from "./PlayerBoardButton";
import { ReactComponent as SkyshipIcon } from "../../boards_and_assets/skyship_icon.svg";
import { Button } from "@mui/material";
// import { regimentIcon} from '../../boards_and_assets/regiment_icon.svg';
// displays buttons which can build cathedrals, palaces and skyships
// also displays the button to imprison dissentors and to dispatch skyship fleets
export const PlayerBoard = (props: PlayerBoardProps) => {
  const [disabled, setDisabled] = useState(true);
  const [skyshipCount, setSkyshipCount] = useState(0);
  const [regimentCount, setRegimentCount] = useState(0);
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          // alignItems: "left",
          // justifyContent: "left",
        }}
      >
        <ButtonRow>
          Build Skyships
          <PlayerBoardButton
            onClick={() => {
              setDisabled(true);
            }}
            backgroundImage={buildSkyships}
            width="59px"
            height="59px"
            colour={props.playerColour}
          />
        </ButtonRow>
        <ButtonRow>
          Conscript Levies
          <PlayerBoardButton
            onClick={() => {
              setDisabled(true);
            }}
            backgroundImage={conscriptLevies}
            colour={props.playerColour}
            width="130px"
            height="59px"
          />
        </ButtonRow>
        <ButtonRow>
          Dispatch Skyship Fleet
          <PlayerBoardButton
            onClick={() => {
              setDisabled(false);
            }}
            backgroundImage={dispatchSkyshipFleet}
            colour={props.playerColour}
            height="70px"
            width="60px"
          />
        </ButtonRow>
        <ButtonRow>
          Construct Skyship Fleet
          <button
            onClick={() => {
              setSkyshipCount(skyshipCount + 1);
            }}
            style={{
              backgroundColor: "transparent",
              border: "none",
              width: "30px",
              height: "50px",
              fontSize: "30px",
              cursor: disabled ? "not-allowed" : "pointer",
            }}
            disabled={disabled || skyshipCount >= 5}
          >
            +
          </button>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {skyshipCount}
            <svg
              width="44"
              height="24"
              viewBox="0 0 44 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <span>Skyships</span>
              <path
                d="M704.447 -37.4065V240.156H-27.5886V-37.4065H704.447Z"
                stroke="#1A1A18"
                strokeWidth="2.6664"
                strokeMiterlimit="22.9256"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M21.8461 7.19031C33.4021 7.19031 42.7695 9.14218 42.7695 11.5496C42.7695 13.9572 33.4021 15.9086 21.8461 15.9086C10.2902 15.9086 0.922607 13.9572 0.922607 11.5496C0.922607 9.14218 10.2902 7.19031 21.8461 7.19031Z"
                fill={props.playerColour}
              />
              <path
                d="M21.8461 7.19031C33.4021 7.19031 42.7695 9.14217 42.7695 11.5496C42.7695 13.9572 33.4021 15.9086 21.8461 15.9086C10.2902 15.9086 0.922607 13.9572 0.922607 11.5496C0.922607 9.14217 10.2902 7.19031 21.8461 7.19031Z"
                stroke="#1A1A18"
                strokeWidth="0.288"
                strokeMiterlimit="22.9256"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0.486328 5.44613H42.4033V12.4204H0.486328V5.44613Z"
                fill={props.playerColour}
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M22.0358 1.32971C33.5918 1.32971 42.9592 3.28117 42.9592 5.68864C42.9592 8.09624 33.5918 10.048 22.0358 10.048C10.4799 10.048 1.1123 8.09624 1.1123 5.68864C1.1123 3.28117 10.4799 1.32971 22.0358 1.32971Z"
                fill={props.playerColour}
              />
              <path
                d="M22.0358 1.32971C33.5918 1.32971 42.9592 3.28117 42.9592 5.68864C42.9592 8.09624 33.5918 10.048 22.0358 10.048C10.4799 10.048 1.1123 8.09624 1.1123 5.68864C1.1123 3.28117 10.4799 1.32971 22.0358 1.32971Z"
                stroke="#1A1A18"
                strokeWidth="0.288"
                strokeMiterlimit="22.9256"
              />
            </svg>
          </div>
          <button
            onClick={() => {
              if (skyshipCount === regimentCount) {
                setSkyshipCount(skyshipCount - 1);
                setRegimentCount(regimentCount - 1);
              } else {
                setSkyshipCount(skyshipCount - 1);
              }
            }}
            style={{
              backgroundColor: "transparent",
              border: "none",
              width: "30px",
              height: "50px",
              fontSize: "30px",
              cursor: disabled ? "not-allowed" : "pointer",
            }}
            disabled={disabled || skyshipCount <= 0}
          >
            -
          </button>
          <button
            onClick={() => {
              setRegimentCount(regimentCount + 1);
            }}
            style={{
              backgroundColor: "transparent",
              border: "none",
              width: "30px",
              height: "50px",
              fontSize: "30px",
              cursor: disabled ? "not-allowed" : "pointer",
            }}
            disabled={disabled || regimentCount >= skyshipCount}
          >
            +
          </button>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {regimentCount}
            <svg
              width="28"
              height="24"
              viewBox="0 0 28 31"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.1211 1L20.6815 4.57861L27.2424 8.1569L20.6814 12.2358L14.1814 15.7358L7.56055 11.7358L1 8.00002L7.56055 4.57861L14.1211 1Z"
                fill={props.playerColour}
                stroke="#1A1A18"
                strokeWidth="0.288"
                strokeMiterlimit="22.9256"
              />
              <path
                d="M1.54036 22.6996L1.36064 15.468L1.1814 8.23584L7.6814 11.7358L14.1812 15.7358V22.7358V30.2358L7.86088 26.4677L1.54036 22.6996Z"
                fill={props.playerColour}
                stroke="#1A1A18"
                strokeWidth="0.288"
                strokeMiterlimit="22.9256"
              />
              <path
                d="M14.1814 15.7358L20.8609 12.0039L27.1814 8.23584L27.0018 15.4681L26.8224 22.7001L20.5019 26.4677L14.1814 30.2358V23.2358V15.7358Z"
                fill={props.playerColour}
                stroke="#1A1A18"
                strokeWidth="0.288"
                strokeMiterlimit="22.9256"
              />
            </svg>
          </div>
          <button
            onClick={() => {
              setRegimentCount(regimentCount - 1);
            }}
            style={{
              backgroundColor: "transparent",
              border: "none",
              width: "30px",
              height: "50px",
              fontSize: "30px",
              cursor: disabled ? "not-allowed" : "pointer",
            }}
            disabled={disabled || regimentCount <= 0}
          >
            -
          </button>
          <button
            style={{
              backgroundColor: props.playerColour,
              width: "80px",
              height: "50px",
              fontSize: "20px",
              cursor: disabled ? "not-allowed" : "pointer",
              fontFamily: "dauphinn",
            }}
            disabled={disabled || skyshipCount <= 0}
          >
            Deploy
          </button>
        </ButtonRow>
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <ButtonRow>
          Prison
          <svg
            width="124"
            height="59"
            viewBox="0 0 124 59"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="69.5"
              y1="1"
              x2="69.5"
              y2="58"
              stroke="black"
              strokeWidth="3"
            />
            <line
              x1="83.5"
              y1="1"
              x2="83.5"
              y2="58"
              stroke="black"
              strokeWidth="3"
            />
            <path
              d="M25.6596 15.0001C30.5371 15.0001 34.4903 19.9215 34.4903 25.9921C34.4903 32.0624 30.5371 36.9844 25.6596 36.9844C20.7831 36.9844 16.8296 32.0624 16.8296 25.9921C16.8296 19.9215 20.7831 15.0001 25.6596 15.0001Z"
              fill={props.playerColour}
              stroke="#1A1A18"
              strokeWidth="0.288"
              strokeMiterlimit="22.9256"
              visibility={props.prisoners >= 1 ? "visible" : "hidden"}
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M26.0001 55.1782H8C8 44.711 16.0589 36.2265 26.0001 36.2265C35.9411 36.2265 44 44.711 44 55.1782H26.0001Z"
              fill={props.playerColour}
              visibility={props.prisoners >= 1 ? "visible" : "hidden"}
            />
            <path
              d="M61.6596 15.0001C66.5371 15.0001 70.4903 19.9215 70.4903 25.9921C70.4903 32.0624 66.5371 36.9844 61.6596 36.9844C56.7831 36.9844 52.8296 32.0624 52.8296 25.9921C52.8296 19.9215 56.7831 15.0001 61.6596 15.0001Z"
              fill={props.playerColour}
              stroke="#1A1A18"
              strokeWidth="0.288"
              strokeMiterlimit="22.9256"
              visibility={props.prisoners >= 2 ? "visible" : "hidden"}
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M62.0001 55.1782H44C44 44.711 52.0589 36.2265 62.0001 36.2265C71.9411 36.2265 80 44.711 80 55.1782H62.0001Z"
              fill={props.playerColour}
              visibility={props.prisoners >= 2 ? "visible" : "hidden"}
            />
            <path
              d="M98.6596 15.0001C103.537 15.0001 107.49 19.9215 107.49 25.9921C107.49 32.0624 103.537 36.9844 98.6596 36.9844C93.7831 36.9844 89.8296 32.0624 89.8296 25.9921C89.8296 19.9215 93.7831 15.0001 98.6596 15.0001Z"
              fill={props.playerColour}
              stroke="#1A1A18"
              strokeWidth="0.288"
              strokeMiterlimit="22.9256"
              visibility={props.prisoners >= 3 ? "visible" : "hidden"}
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M99.0001 55.1782H81C81 44.711 89.0589 36.2265 99.0001 36.2265C108.941 36.2265 117 44.711 117 55.1782H99.0001Z"
              fill={props.playerColour}
              visibility={props.prisoners >= 3 ? "visible" : "hidden"}
            />
            <line
              x1="76.5"
              y1="1"
              x2="76.5"
              y2="58"
              stroke="black"
              strokeWidth="3"
            />
            <line
              x1="69.5"
              y1="1"
              x2="69.5"
              y2="58"
              stroke="black"
              strokeWidth="3"
            />
            <line
              x1="62.5"
              y1="1"
              x2="62.5"
              y2="58"
              stroke="black"
              strokeWidth="3"
            />
            <line
              x1="35.5"
              y1="1"
              x2="35.5"
              y2="58"
              stroke="black"
              strokeWidth="3"
            />
            <line
              x1="42.5"
              y1="1"
              x2="42.5"
              y2="58"
              stroke="black"
              strokeWidth="3"
            />
            <line
              x1="49.5"
              y1="1"
              x2="49.5"
              y2="58"
              stroke="black"
              strokeWidth="3"
            />
            <line
              x1="116.5"
              y1="1"
              x2="116.5"
              y2="58"
              stroke="black"
              strokeWidth="3"
            />
            <line
              x1="42.5"
              y1="1"
              x2="42.5"
              y2="58"
              stroke="black"
              strokeWidth="3"
            />
            <line
              x1="56.5"
              y1="1"
              x2="56.5"
              y2="58"
              stroke="black"
              strokeWidth="3"
            />
            <line
              x1="7.5"
              y1="1"
              x2="7.5"
              y2="58"
              stroke="black"
              strokeWidth="3"
            />
            <line
              x1="14.5"
              y1="1"
              x2="14.5"
              y2="58"
              stroke="black"
              strokeWidth="3"
            />
            <line
              x1="21.5"
              y1="1"
              x2="21.5"
              y2="58"
              stroke="black"
              strokeWidth="3"
            />
            <line
              x1="14.5"
              y1="1"
              x2="14.5"
              y2="58"
              stroke="black"
              strokeWidth="3"
            />
            <line
              x1="28.5"
              y1="1"
              x2="28.5"
              y2="58"
              stroke="black"
              strokeWidth="3"
            />
            <rect x="0.5" y="0.5" width="123" height="58" stroke="black" />
            <line
              x1="89.5"
              y1="1"
              x2="89.5"
              y2="58"
              stroke="black"
              strokeWidth="3"
            />
            <line
              x1="96.5"
              y1="1"
              x2="96.5"
              y2="58"
              stroke="black"
              strokeWidth="3"
            />
            <line
              x1="103.5"
              y1="1"
              x2="103.5"
              y2="58"
              stroke="black"
              strokeWidth="3"
            />
            <line
              x1="96.5"
              y1="1"
              x2="96.5"
              y2="58"
              stroke="black"
              strokeWidth="3"
            />
            <line
              x1="110.5"
              y1="1"
              x2="110.5"
              y2="58"
              stroke="black"
              strokeWidth="3"
            />
          </svg>
        </ButtonRow>
      </div>
    </div>
  );
};

export type PlayerBoardProps = {
  playerColour: (typeof PlayerColour)[keyof typeof PlayerColour];
  prisoners: number;
};
