import React, { ReactNode, ReactFragment, ReactPortal } from "react";

export const ButtonRow = ({ children }: ActionBoardButtonRowChildProps) => {
  return (
    <div
      style={{
        display: "flex",
        marginTop: "3%",
        position: "relative",
        whiteSpace: "pre-line",
        flexWrap: "wrap",
      }}
    >
      {children}
    </div>
  );
};

type ActionBoardButtonRowChildProps = {
  children:
    | ReactNode
    | ReactFragment
    | ReactPortal
    | boolean
    | null
    | undefined;
};
