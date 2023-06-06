import React, { ReactElement } from "react";

import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { Grid } from "@mui/material";
import { WorldMapTile } from "./WorldMapTile";
import { MyGameProps } from "../../types";

import KnownWorldTile1 from "../../map_tiles/known_world1.svg";
import KnownWorldTile2 from "../../map_tiles/known_world2.svg";
import KnownWorldTile3 from "../../map_tiles/known_world3.svg";
import KnownWorldTile4 from "../../map_tiles/known_world4.svg";
import Dwarves1 from "../../map_tiles/unknown_world_tiles/dwarves1.svg";
import Dwarves2 from "../../map_tiles/unknown_world_tiles/dwarves2.svg";
import Dwarves3 from "../../map_tiles/unknown_world_tiles/dwarves3.svg";
import Elves1 from "../../map_tiles/unknown_world_tiles/elves1.svg";
import Elves2 from "../../map_tiles/unknown_world_tiles/elves2.svg";
import Elves3 from "../../map_tiles/unknown_world_tiles/elves3.svg";
import Goblins1 from "../../map_tiles/unknown_world_tiles/goblins1.svg";
import Goblins2 from "../../map_tiles/unknown_world_tiles/goblins2.svg";
import Goblins3 from "../../map_tiles/unknown_world_tiles/goblins3.svg";
import Halflings1 from "../../map_tiles/unknown_world_tiles/halflings1.svg";
import Halflings2 from "../../map_tiles/unknown_world_tiles/halflings2.svg";
import Halflings3 from "../../map_tiles/unknown_world_tiles/halflings3.svg";
import HereBeDragons from "../../map_tiles/unknown_world_tiles/here_be_dragons.svg";
import Ocean1 from "../../map_tiles/unknown_world_tiles/ocean.svg";
import Ocean2 from "../../map_tiles/unknown_world_tiles/ocean.svg";
import Ocean3 from "../../map_tiles/unknown_world_tiles/ocean.svg";
import Ocean4 from "../../map_tiles/unknown_world_tiles/ocean.svg";
import Orcs1 from "../../map_tiles/unknown_world_tiles/orcs1.svg";
import Orcs2 from "../../map_tiles/unknown_world_tiles/orcs2.svg";
import Orcs3 from "../../map_tiles/unknown_world_tiles/orcs3.svg";
import SeaElves from "../../map_tiles/unknown_world_tiles/sea_elves.svg";
import TheFountainOfYouth from "../../map_tiles/unknown_world_tiles/the_fountain_of_youth.svg";
import TheKingdomOfTheMerfolk from "../../map_tiles/unknown_world_tiles/the_kingdom_of_the_merfolk.svg";
import TheKraken from "../../map_tiles/unknown_world_tiles/the_kraken.svg";
import TheLostCityOfGold from "../../map_tiles/unknown_world_tiles/the_lost_city_of_gold.svg";
import Trolls1 from "../../map_tiles/unknown_world_tiles/trolls1.svg";
import Trolls2 from "../../map_tiles/unknown_world_tiles/trolls2.svg";
import Trolls3 from "../../map_tiles/unknown_world_tiles/trolls3.svg";

export const WorldMap = (props: MyGameProps) => {
  const GridItems = (props: MyGameProps) => {
    const currentMap = props.G.mapState.currentTileArray;
    const discoveredTiles = props.G.mapState.discoveredTiles;
    let tiles: ReactElement[] = [];
    for (let y = 0; y < currentMap.length; y++) {
      for (let x = 0; x < currentMap[y].length; x++) {
        const tile = currentMap[y][x];
        const discovered = discoveredTiles[y][x];
        if (tile) {
          tiles.push(
            <Grid item lg={1}>
              <WorldMapTile
                key={`${x},${y}`}
                image={tile.image}
                flipped={discovered}
                value={tile.name}
              />
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
          <Grid container spacing={0} columns={8} width={"100%"}>
            <GridItems {...props} />
          </Grid>
        </TransformComponent>
      </TransformWrapper>
    </div>
  );
};
