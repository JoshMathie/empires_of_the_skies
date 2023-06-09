import React, { useState, useRef, useCallback } from "react";

import ReactCardFlip from "react-card-flip";
import { useLongPress } from "use-long-press";
import { MyGameProps } from "../../types";
//TODO: enable displaying shyship fleets on world map tiles
//TODO: build a tooltip for displaying fleet information
//Method for displaying a flippable tile which contains a world map tile image
export const WorldMapTile = (props: worldMapTileProps) => {
  const xPosition = useRef(0);
  const yPosition = useRef(0);
  const longPressCallback = useCallback(() => {}, []);
  const [xLocation, yLocation] = props.location;

  const currentTile = props.G.mapState.currentTileArray[yLocation][xLocation];
  const longPressEvent = useLongPress(longPressCallback, {
    cancelOnMovement: true,
    cancelOutsideElement: true,
    threshold: 150,
    onStart: useCallback((event: any) => {
      xPosition.current = event.clientX;
      yPosition.current = event.clientY;
    }, []),
  });

  const bind = longPressEvent("test context");

  const [flip, setFlip] = useState(
    props.G.mapState.discoveredTiles[yLocation][xLocation]
  );

  const altOnClick = () => {
    if (props.alternateOnClick) {
      props.alternateOnClick([xLocation, yLocation]);
    }
  };

  return (
    <ReactCardFlip isFlipped={flip} key={props.location.toString()}>
      <button
        key={props.location.toString()}
        value={currentTile.name}
        style={{
          backgroundColor: "#298932",
          fontSize: "30px",
          height: "100%",
          width: "200px",
          maxWidth: "100%",
          minHeight: "150px",
          minWidth: "100px",
          fontFamily: "dauphinn",
        }}
        onClick={
          !props.alternateOnClick
            ? (event) => {
                if (
                  Math.abs(event.clientX - xPosition.current) < 10 &&
                  Math.abs(event.clientY - yPosition.current) < 10
                ) {
                  props.moves.discoverTile({ ...props }, [
                    xLocation,
                    yLocation,
                  ]);
                }
              }
            : () => {}
        }
        {...bind}
      >
        ?
      </button>
      <button
        className="front"
        style={{
          backgroundImage: `url(${currentTile.image})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "100%",
          width: "200px",
          maxWidth: "100%",
          minHeight: "150px",
          minWidth: "100px",
        }}
        onClick={altOnClick}
      ></button>
    </ReactCardFlip>
  );
};

interface worldMapTileProps extends MyGameProps {
  location: number[];
  alternateOnClick?: (coords: number[]) => void;
}
