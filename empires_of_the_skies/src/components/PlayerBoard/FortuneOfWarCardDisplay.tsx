import React from "react";
import { MyGameProps } from "../../types";
import fortuneOfWarCardBack from "../../boards_and_assets/fortunes_of_war_card_back.svg";

const FortuneOfWarCardDisplay = (props: FortuneOfWarCardDisplayProps) => {
  const defaultImage = fortuneOfWarCardBack;
  let displayImage;
  let card;
  let opacity = 0.5;
  if (props.playerID) {
    card =
      props.G.playerInfo[props.playerID].resources.fortuneCards[props.value];
  }
  if (card) {
    opacity = 1;
    displayImage = card.flipped ? card.image : defaultImage;
  } else {
    displayImage = defaultImage;
  }

  return (
    <svg
      key={props.value}
      style={{
        backgroundImage: `url(${displayImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        opacity: opacity,
        width: "15%",
        height: "250px",
      }}
    ></svg>
  );
};

interface FortuneOfWarCardDisplayProps extends MyGameProps {
  value: number;
}
export default FortuneOfWarCardDisplay;
