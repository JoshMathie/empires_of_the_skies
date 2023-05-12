import React from "react";

export const ActionBoardButton = (props: ActionBoardButtonProps) => {
  return (
    <button
      style={{
        width: props.width ? props.width : "98px",
        height: "50px",
        textAlign: "left",
        backgroundImage: `url(${props.backgroundImage})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        fontFamily: "dauphinn",
        fontSize: "18px",
      }}
      disabled={props.disabled}
      onClick={props.onClick}
    >
      {props.text}
    </button>
  );
};

export type ActionBoardButtonProps = {
  onClick: () => void;
  backgroundImage?: string;
  text?: string;
  disabled?: boolean;
  width?: string;
};
