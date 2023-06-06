import React, { useState, useRef, useCallback } from "react";

import ReactCardFlip from "react-card-flip";
import { useLongPress } from "use-long-press";

//Method for displaying a flippable tile which contains a world map tile image
export const WorldMapTile = (props: worldMapTileProps) => {
  const onClick = () => setFlip(true);

  const xPosition = useRef(0);
  const yPosition = useRef(0);
  const longPressCallback = useCallback(() => {}, []);

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

  const [flip, setFlip] = useState(props.flipped);

  return (
    <ReactCardFlip isFlipped={flip} key={props.image}>
      <button
        key={props.key}
        value={props.value}
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
        onClick={(event) => {
          if (
            Math.abs(event.clientX - xPosition.current) < 10 &&
            Math.abs(event.clientY - yPosition.current) < 10
          ) {
            setFlip(true);
          }
        }}
        {...bind}
      >
        ?
      </button>
      <button
        className="front"
        style={{
          backgroundImage: `url(${props.image})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "100%",
          width: "200px",
          maxWidth: "100%",
          minHeight: "150px",
          minWidth: "100px",
        }}
      ></button>
    </ReactCardFlip>
  );
};

type worldMapTileProps = {
  key: string;
  value: string;
  image: string;
  flipped: boolean;
};
