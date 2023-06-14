import React, { useState, useRef, useCallback } from "react";

import ReactCardFlip from "react-card-flip";
import { useLongPress } from "use-long-press";
import { MyGameProps } from "../../types";
import { Tooltip } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { generalTheme } from "../themes";
import FortIcon from "../Icons/FortIcon";
import { clearMoves } from "../../helpers/helpers";
import FleetIcon from "../Icons/FleetIcon";
//TODO: enable displaying shyship fleets on world map tiles
//TODO: build a tooltip for displaying fleet information
//Method for displaying a flippable tile which contains a world map tile image
export const WorldMapTile = (props: worldMapTileProps) => {
  const xPosition = useRef(0);
  const yPosition = useRef(0);
  const longPressCallback = useCallback(() => {}, []);
  const [xLocation, yLocation] = props.location;
  const fort = props.G.mapState.buildings[yLocation][xLocation].fort;

  const fortColour =
    props.G.mapState.buildings[yLocation][xLocation].player?.colour;

  if (fort) {
    console.log(fortColour);
  }
  //NOTE fleet icons are not always displayed when they should be
  let fleets: JSX.Element[] = [];

  Object.entries(props.G.playerInfo).forEach(([playerId, playerInfo]) => {
    playerInfo.fleetInfo.forEach((fleet) => {
      if (fleet.location[0] === xLocation && fleet.location[1] === yLocation) {
        fleets.push(<FleetIcon colour={playerInfo.colour} />);
      }
    });
  });
  const currentTile = props.G.mapState.currentTileArray[yLocation][xLocation];
  const lootNameMap: Record<string, string> = {
    gold: "Gold",
    mithril: "Mithril",
    dragonScales: "Dragon Scales",
    krakenSkin: "Kraken Skin",
    magicDust: "Magic Dust",
    stickyIchor: "Sticky Ichor",
    pipeweed: "Pipeweed",
    victoryPoints: "Victory Points",
  };
  const outpostLoot = () => {
    let text = "";
    Object.entries(currentTile.loot.outpost).forEach(([key, value]) => {
      if (value > 0) {
        text += `\t\t${lootNameMap[key]}: ${value}\n`;
      }
    });
    return text;
  };

  const colonyLoot = () => {
    let text = "";
    Object.entries(currentTile.loot.colony).forEach(([key, value]) => {
      if (value > 0) {
        text += `\t\t${lootNameMap[key]}: ${value}\n`;
      }
    });
    return text;
  };
  let tooltipText = `Attack: ${currentTile.sword}\n
Defence: ${currentTile.shield}\n
Loot:
\t Outpost:\n ${outpostLoot()}
\t Colony:\n ${colonyLoot()}`;

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
  // const [selected, setSelected] = useState(false);

  const altOnClick = () => {
    // setSelected(!selected);
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
          width: "150px",
          maxWidth: "100%",
          minHeight: "150px",
          minWidth: "150px",
          fontFamily: "dauphinn",
        }}
        onClick={
          !props.alternateOnClick
            ? (event) => {
                if (
                  Math.abs(event.clientX - xPosition.current) < 10 &&
                  Math.abs(event.clientY - yPosition.current) < 10
                ) {
                  clearMoves(props, props.setTurnComplete);
                  setFlip(true);
                  // setSelected(true);
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
      <ThemeProvider theme={generalTheme}>
        <Tooltip
          title={tooltipText}
          arrow
          disableFocusListener
          placement="right-start"
          style={{ whiteSpace: "pre", fontSize: "20px" }}
          sx={{ whiteSpace: "pre-line", fontSize: "20px" }}
        >
          {/* <span> */}
          <button
            className="front"
            style={{
              backgroundImage: `url(${currentTile.image})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              height: "100%",
              width: "150px",
              maxWidth: "100%",
              minHeight: "150px",
              minWidth: "150px",
              border: props.selectable ? "5px solid yellow" : "0px ",
            }}
            onClick={props.selectable ? altOnClick : undefined}
          >
            {fort ? (
              <FortIcon colour={fortColour ? fortColour : "white"}></FortIcon>
            ) : null}
            {xLocation !== 4 && yLocation !== 0 ? fleets : null}
          </button>
          {/* </span> */}
        </Tooltip>
      </ThemeProvider>
    </ReactCardFlip>
  );
};

interface worldMapTileProps extends MyGameProps {
  location: number[];
  alternateOnClick?: (coords: number[]) => void;
  selectable?: boolean;
  setTurnComplete: React.Dispatch<React.SetStateAction<boolean>>;
}
