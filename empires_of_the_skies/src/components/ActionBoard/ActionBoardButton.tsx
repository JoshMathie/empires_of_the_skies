import React, { ReactElement } from "react";
import { MyGameProps } from "../../types";
import { Button } from "@mui/material";
export const ActionBoardButton = (props: ActionBoardButtonProps) => {
  let counsellorColour: string | undefined;

  if (props.counsellor !== undefined) {
    counsellorColour = props.G.playerInfo[props.counsellor.toString()].colour;
  }
  return (
    <button
      style={{
        width: props.width ? props.width : "98px",
        height: "50px",
        textAlign: "left",
        backgroundImage: `url(${props.backgroundImage})`,
        // replace background size with 'contain' to display entire image
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        fontFamily: "dauphinn",
        fontSize: "18px",
        cursor: "pointer",
      }}
      onClick={() => props.onClickFunction({ ...props }, props.value)}
      value={props.value}
    >
      {props.text}
      {props.counsellor ? (
        <svg
          width="35"
          height="33"
          viewBox="0 0 35 33"
          fill={"transparent"}
          xmlns="http://www.w3.org/2000/svg"
          style={{ marginLeft: "20px" }}
        >
          <path
            d="M444.447 -33.4065V244.156H-287.589V-33.4065H444.447Z"
            stroke="#1A1A18"
            strokeWidth="2.6664"
            strokeMiterlimit="22.9256"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17.9062 25.5842C27.4438 25.5842 35.1753 27.1947 35.1753 29.1819C35.1753 31.1689 27.4438 32.7797 17.9062 32.7797C8.36817 32.7797 0.636719 31.1689 0.636719 29.1819C0.636719 27.1947 8.36817 25.5842 17.9062 25.5842Z"
            fill={counsellorColour}
          />
          <path
            d="M17.9062 25.5842C27.4438 25.5842 35.1753 27.1947 35.1753 29.1819C35.1753 31.1689 27.4438 32.7797 17.9062 32.7797C8.36817 32.7797 0.636719 31.1689 0.636719 29.1819C0.636719 27.1947 8.36817 25.5842 17.9062 25.5842Z"
            stroke="#1A1A18"
            strokeWidth="0.288"
            strokeMiterlimit="22.9256"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0.276855 4.55806H34.8731V29.901H0.276855V4.55806Z"
            fill={counsellorColour}
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17.5755 0.78304C27.1135 0.78304 34.8448 2.39344 34.8448 4.38078C34.8448 6.36758 27.1135 7.97852 17.5755 7.97852C8.03775 7.97852 0.306396 6.36758 0.306396 4.38078C0.306396 2.39344 8.03775 0.78304 17.5755 0.78304Z"
            fill={counsellorColour}
          />
          <path
            d="M17.5755 0.78304C27.1135 0.78304 34.8448 2.39344 34.8448 4.38078C34.8448 6.36758 27.1135 7.97852 17.5755 7.97852C8.03775 7.97852 0.306396 6.36758 0.306396 4.38078C0.306396 2.39344 8.03775 0.78304 17.5755 0.78304Z"
            stroke="#1A1A18"
            strokeWidth="0.288"
            strokeMiterlimit="22.9256"
          />
        </svg>
      ) : null}
    </button>
  );
};

export const ActionBoardButtonLarge = (props: ActionBoardButtonProps) => {
  let listOfCounsellors: ReactElement[] = [];
  if (props.counsellors) {
    props.counsellors.forEach((counsellor) => {
      let counsellorColour = props.G.playerInfo[counsellor].colour;
      listOfCounsellors.push(
        <svg
          width="35"
          height="33"
          viewBox="0 0 35 33"
          fill={"transparent"}
          xmlns="http://www.w3.org/2000/svg"
          style={{ marginLeft: "20px" }}
        >
          <path
            d="M444.447 -33.4065V244.156H-287.589V-33.4065H444.447Z"
            stroke="#1A1A18"
            strokeWidth="2.6664"
            strokeMiterlimit="22.9256"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17.9062 25.5842C27.4438 25.5842 35.1753 27.1947 35.1753 29.1819C35.1753 31.1689 27.4438 32.7797 17.9062 32.7797C8.36817 32.7797 0.636719 31.1689 0.636719 29.1819C0.636719 27.1947 8.36817 25.5842 17.9062 25.5842Z"
            fill={counsellorColour}
          />
          <path
            d="M17.9062 25.5842C27.4438 25.5842 35.1753 27.1947 35.1753 29.1819C35.1753 31.1689 27.4438 32.7797 17.9062 32.7797C8.36817 32.7797 0.636719 31.1689 0.636719 29.1819C0.636719 27.1947 8.36817 25.5842 17.9062 25.5842Z"
            stroke="#1A1A18"
            strokeWidth="0.288"
            strokeMiterlimit="22.9256"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0.276855 4.55806H34.8731V29.901H0.276855V4.55806Z"
            fill={counsellorColour}
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17.5755 0.78304C27.1135 0.78304 34.8448 2.39344 34.8448 4.38078C34.8448 6.36758 27.1135 7.97852 17.5755 7.97852C8.03775 7.97852 0.306396 6.36758 0.306396 4.38078C0.306396 2.39344 8.03775 0.78304 17.5755 0.78304Z"
            fill={counsellorColour}
          />
          <path
            d="M17.5755 0.78304C27.1135 0.78304 34.8448 2.39344 34.8448 4.38078C34.8448 6.36758 27.1135 7.97852 17.5755 7.97852C8.03775 7.97852 0.306396 6.36758 0.306396 4.38078C0.306396 2.39344 8.03775 0.78304 17.5755 0.78304Z"
            stroke="#1A1A18"
            strokeWidth="0.288"
            strokeMiterlimit="22.9256"
          />
        </svg>
      );
    });
  }

  return (
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
        fontFamily: "dauphinn",
        fontSize: "18px",
        cursor: "pointer",
      }}
      onClick={() => props.onClickFunction({ ...props }, props.value)}
      value={props.value}
    >
      {props.text}
      {props.counsellors ? listOfCounsellors : null}
    </Button>
  );
};

export interface ActionBoardButtonProps extends MyGameProps {
  onClickFunction: ({ ...props }, args: number) => void;
  value: number;
  counsellor?: string | undefined;
  counsellors?: string[] | undefined;
  backgroundImage?: string;
  text?: string;
  width?: string;
}
