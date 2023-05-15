import React, { ReactNode, ReactFragment, ReactPortal } from "react";

import { ReactComponent as KnownWorld } from "../../map_tiles/known_world_tile.svg";
//Method for displaying a flippable tile which contains a world map tile image
export const WorldMapTile = (props: worldMapTileProps) => {
  return (
    <div className="flip-container">
      <div className="flipper">
        <div className="front">
          <img src={`url(${props.image})`} alt="World Map Tile" />
        </div>
        <div className="back">
          <button style={{ backgroundColor: "#298932", fontSize: "30px" }}>
            ?
          </button>
        </div>
      </div>
    </div>
  );
};

type worldMapTileProps = {
  image: string;
  children:
    | ReactNode
    | ReactFragment
    | ReactPortal
    | boolean
    | null
    | undefined;
};

//Method for displaying the known world map tile
export const KnownWorldTile = () => {
  return (
    <svg viewBox="0 0 893 844" height={400}>
      <KnownWorld />
    </svg>
  );
};
