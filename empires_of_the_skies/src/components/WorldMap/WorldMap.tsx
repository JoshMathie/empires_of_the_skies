import React, { ReactElement } from "react";

import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { Grid } from "@mui/material";
import { WorldMapTile } from "./WorldMapTile";
import { MyGameProps } from "../../types";

export const WorldMap = (props: MyGameProps) => {
  const GridItems = (props: MyGameProps) => {
    const currentMap = props.G.mapState.currentTileArray;
    const discoveredTiles = props.G.mapState.discoveredTiles;
    let tiles: ReactElement[] = [];
    for (let y = 0; y < currentMap.length; y++) {
      for (let x = 0; x < currentMap[y].length; x++) {
        const tile = currentMap[y][x];
        const discovered = discoveredTiles[y][x];
        const tileProps = {
          location: [x, y],
          ...props,
        };
        if (tile) {
          tiles.push(
            <Grid item lg={1}>
              <WorldMapTile {...tileProps} />
            </Grid>
          );
        }
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
