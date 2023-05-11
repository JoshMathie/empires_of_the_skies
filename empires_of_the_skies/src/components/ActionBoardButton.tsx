import React from "react";

export const ActionBoardButton = (props: ActionBoardButtonProps) => {
  return (
    <button
      style={{
        width: "9.8%",
        height: "3.7%",
        backgroundColor: "transparent",
        // left: props.left,
        // bottom: props.bottom,
        // border: "none",
      }}
      onClick={props.onClick}
    ></button>
  );
};

export type ActionBoardButtonProps = {
  //   left: string;
  //   bottom: string;
  onClick: () => void;
};
