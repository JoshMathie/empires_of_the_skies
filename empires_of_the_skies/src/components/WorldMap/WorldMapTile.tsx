import React, { useState } from "react";

import { ReactComponent as KnownWorld } from "../../map_tiles/known_world_tile.svg";
import ReactCardFlip from "react-card-flip";

//Method for displaying a flippable tile which contains a world map tile image
export const WorldMapTile = (props: worldMapTileProps) => {
  const [flip, setFlip] = useState(false);
  return (
    <ReactCardFlip isFlipped={flip}>
      <button
        style={{
          backgroundColor: "#298932",
          fontSize: "30px",
          height: "123px",
          width: "150px",
          maxWidth: "100%",
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
          height: "123px",
          width: "150px",
          maxWidth: "100%",
        }}
      >
        {/* <img src={props.image} alt="World Map Tile" /> */}
        {/* <svg>{props.children}</svg> */}
      </button>
    </ReactCardFlip>
  );
};

type worldMapTileProps = {
  image: string;
  // children:
  //   | ReactNode
  //   | ReactFragment
  //   | ReactPortal
  //   | boolean
  //   | null
  //   | undefined;
};

//Method for displaying the known world map tile
export const KnownWorldTile = () => {
  return (
    <svg viewBox="0 0 893 844" height={400}>
      <KnownWorld />
    </svg>
  );
};
