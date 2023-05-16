import React, { useState } from "react";

import ReactCardFlip from "react-card-flip";

//Method for displaying a flippable tile which contains a world map tile image
export const WorldMapTile = (props: worldMapTileProps) => {
  const [flip, setFlip] = useState(props.flipped);
  return (
    <ReactCardFlip isFlipped={flip}>
      <button
        style={{
          backgroundColor: "#298932",
          fontSize: "30px",
          height: "200px",
          width: "200px",
          maxWidth: "100%",
          fontFamily: "dauphinn",
        }}
        onClick={() => setFlip(true)}
      >
        ?
      </button>
      <button
        className="front"
        style={{
          backgroundImage: `url(${props.image})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          height: "200px",
          width: "200px",
          // maxWidth: "100%",
        }}
      ></button>
    </ReactCardFlip>
  );
};

type worldMapTileProps = {
  image: string;
  flipped: boolean;
};
