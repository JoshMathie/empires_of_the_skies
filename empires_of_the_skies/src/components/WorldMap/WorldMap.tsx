import React from "react";
import { Grid } from "@mui/material";
import { WorldMapTile } from "./WorldMapTile";
import { ReactComponent as KnownWorldTile1 } from "../../map_tiles/known_world1.svg";
import { ReactComponent as KnownWorldTile2 } from "../../map_tiles/known_world2.svg";
import { ReactComponent as KnownWorldTile3 } from "../../map_tiles/known_world3.svg";
import { ReactComponent as KnownWorldTile4 } from "../../map_tiles/known_world4.svg";
import { ReactComponent as Dwarves1 } from "../../map_tiles/unknown_world_tiles/dwarves1.svg";
import { ReactComponent as Dwarves2 } from "../../map_tiles/unknown_world_tiles/dwarves2.svg";
import { ReactComponent as Dwarves3 } from "../../map_tiles/unknown_world_tiles/dwarves3.svg";
import { ReactComponent as Elves1 } from "../../map_tiles/unknown_world_tiles/elves1.svg";
import { ReactComponent as Elves2 } from "../../map_tiles/unknown_world_tiles/elves2.svg";
import { ReactComponent as Elves3 } from "../../map_tiles/unknown_world_tiles/elves3.svg";
import { ReactComponent as Goblins1 } from "../../map_tiles/unknown_world_tiles/goblins1.svg";
import { ReactComponent as Goblins2 } from "../../map_tiles/unknown_world_tiles/goblins2.svg";
import { ReactComponent as Goblins3 } from "../../map_tiles/unknown_world_tiles/goblins3.svg";
import { ReactComponent as Halflings1 } from "../../map_tiles/unknown_world_tiles/halflings1.svg";
import { ReactComponent as Halflings2 } from "../../map_tiles/unknown_world_tiles/halflings2.svg";
import { ReactComponent as Halflings3 } from "../../map_tiles/unknown_world_tiles/halflings3.svg";
import { ReactComponent as HereBeDragons } from "../../map_tiles/unknown_world_tiles/here_be_dragons.svg";
import { ReactComponent as Ocean1 } from "../../map_tiles/unknown_world_tiles/ocean.svg";
import { ReactComponent as Ocean2 } from "../../map_tiles/unknown_world_tiles/ocean.svg";
import { ReactComponent as Ocean3 } from "../../map_tiles/unknown_world_tiles/ocean.svg";
import { ReactComponent as Ocean4 } from "../../map_tiles/unknown_world_tiles/ocean.svg";
import { ReactComponent as Orcs1 } from "../../map_tiles/unknown_world_tiles/orcs1.svg";
import { ReactComponent as Orcs2 } from "../../map_tiles/unknown_world_tiles/orcs2.svg";
import { ReactComponent as Orcs3 } from "../../map_tiles/unknown_world_tiles/orcs3.svg";
import { ReactComponent as SeaElves } from "../../map_tiles/unknown_world_tiles/sea_elves.svg";
import { ReactComponent as TheFountainOfYouth } from "../../map_tiles/unknown_world_tiles/the_fountain_of_youth.svg";
import { ReactComponent as TheKingdomOfTheMerfolk } from "../../map_tiles/unknown_world_tiles/the_kingdom_of_the_merfolk.svg";
import { ReactComponent as TheKraken } from "../../map_tiles/unknown_world_tiles/the_kraken.svg";
import { ReactComponent as TheLostCityOfGold } from "../../map_tiles/unknown_world_tiles/the_lost_city_of_gold.svg";
import { ReactComponent as Trolls1 } from "../../map_tiles/unknown_world_tiles/trolls1.svg";
import { ReactComponent as Trolls2 } from "../../map_tiles/unknown_world_tiles/trolls2.svg";
import { ReactComponent as Trolls3 } from "../../map_tiles/unknown_world_tiles/trolls3.svg";

export const WorldMap = () => {
  const getUnknownWorldTiles = [
    {
      image: Dwarves1,
      blocked: ["N", "NE", "NW"],
      sword: 10,
      shield: 11,
      loot: [],
    },
    { image: Dwarves2, blocked: ["E", "SE"], sword: 0, shield: 0, loot: [] },
    { image: Dwarves3, blocked: ["E"], sword: 0, shield: 0, loot: [] },
    { image: Elves1, blocked: ["NW"], sword: 0, shield: 0, loot: [] },
    { image: Elves2, blocked: [], sword: 0, shield: 0, loot: [] },
    { image: Elves3, blocked: [], sword: 0, shield: 0, loot: [] },
    { image: Goblins1, blocked: [], sword: 0, shield: 0, loot: [] },
    { image: Goblins2, blocked: ["NE"], sword: 0, shield: 0, loot: [] },
    { image: Goblins3, blocked: ["W"], sword: 0, shield: 0, loot: [] },
    { image: Halflings1, blocked: [], sword: 0, shield: 0, loot: [] },
    { image: Halflings2, blocked: [], sword: 0, shield: 0, loot: [] },
    { image: Halflings3, blocked: [], sword: 0, shield: 0, loot: [] },
    {
      image: HereBeDragons,
      blocked: ["S", "SE"],
      sword: 0,
      shield: 0,
      loot: [],
    },
    { image: Ocean1, blocked: [], sword: 0, shield: 0, loot: [] },
    { image: Ocean2, blocked: [], sword: 0, shield: 0, loot: [] },
    { image: Ocean3, blocked: [], sword: 0, shield: 0, loot: [] },
    { image: Ocean4, blocked: [], sword: 0, shield: 0, loot: [] },
    { image: Orcs1, blocked: ["NE"], sword: 0, shield: 0, loot: [] },
    { image: Orcs2, blocked: ["NW"], sword: 0, shield: 0, loot: [] },
    { image: Orcs3, blocked: [], sword: 0, shield: 0, loot: [] },
    { image: SeaElves, blocked: [], sword: 0, shield: 0, loot: [] },
    { image: TheFountainOfYouth, blocked: [], sword: 0, shield: 0, loot: [] },
    {
      image: TheKingdomOfTheMerfolk,
      blocked: [],
      sword: 0,
      shield: 0,
      loot: [],
    },
    { image: TheKraken, blocked: [], sword: 0, shield: 0, loot: [] },
    { image: TheLostCityOfGold, blocked: [], sword: 0, shield: 0, loot: [] },
    { image: Trolls1, blocked: ["W"], sword: 0, shield: 0, loot: [] },
    { image: Trolls2, blocked: ["SW"], sword: 0, shield: 0, loot: [] },
    { image: Trolls3, blocked: ["NE"], sword: 0, shield: 0, loot: [] },
  ];
  const knownWorldTiles = [
    { image: KnownWorldTile1, blocked: [] },
    { image: KnownWorldTile2, blocked: ["E", "SE"] },
    { image: KnownWorldTile3, blocked: [] },
    { image: KnownWorldTile4, blocked: [] },
  ];

  // const gridItems = svgPaths.map((path) => {
  //   return (
  //     <Grid item xs={1}>
  //       <WorldMapTile children={path} />
  //     </Grid>
  //   );
  // });

  return (
    <Grid container spacing={0} columns={8}>
      {/* {gridItems} */}
    </Grid>
  );
};
