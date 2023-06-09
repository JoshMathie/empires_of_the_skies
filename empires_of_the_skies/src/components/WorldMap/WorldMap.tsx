import React, { ReactElement } from "react";

import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { Grid } from "@mui/material";
import { WorldMapTile } from "./WorldMapTile";
import { MyGameProps } from "../../types";
import { MoveFn } from "boardgame.io";
import { MyGameState } from "../../types";

export const WorldMap = (props: WorldMapProps) => {
  const GridItems = (props: WorldMapProps) => {
    const currentMap = props.G.mapState.currentTileArray;
    let tiles: ReactElement[] = [];
    for (let y = 0; y < currentMap.length; y++) {
      for (let x = 0; x < currentMap[y].length; x++) {
        const tileProps = {
          location: [x, y],
          ...props,
        };
        tiles.push(
          <Grid item lg={1}>
            <WorldMapTile
              {...tileProps}
              alternateOnClick={
                props.alternateOnClick ? props.alternateOnClick : undefined
              }
            />
          </Grid>
        );
      }
    }

    return <>{tiles}</>;
  };

  return (
    <div>
      <TransformWrapper>
        <TransformComponent>
          <Grid container spacing={0} columns={8} maxWidth={1200}>
            <GridItems {...props} />
          </Grid>
        </TransformComponent>
      </TransformWrapper>
    </div>
  );
};

interface WorldMapProps extends MyGameProps {
  alternateOnClick?: (coords: number[]) => void;
}
