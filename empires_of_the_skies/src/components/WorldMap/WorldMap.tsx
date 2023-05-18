import React from "react";

import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { Grid } from "@mui/material";
import { WorldMapTile } from "./WorldMapTile";

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

export const WorldMap = () => {
  const unknownWorldTiles = [
    {
      name: "Dwarves1",
      image: Dwarves1,
      blocked: ["N", "NE", "NW"],
      sword: 10,
      shield: 11,
      loot: {
        outpost: {
          gold: 2,
          mithril: 1,
          dragonScales: 0,
          krakenSkin: 0,
          magicDust: 0,
          stickyIchor: 0,
          pipeweed: 0,
        },
        colony: {
          gold: 3,
          mithril: 1,
          dragonScales: 0,
          krakenSkin: 0,
          magicDust: 0,
          stickyIchor: 0,
          pipeweed: 0,
        },
      },
    },
    {
      name: "Dwarves2",
      image: Dwarves2,
      blocked: ["E", "SE"],
      sword: 8,
      shield: 9,
      loot: {
        outpost: {
          gold: 1,
          mithril: 0,
          dragonScales: 0,
          krakenSkin: 0,
          magicDust: 0,
          stickyIchor: 0,
          pipeweed: 0,
        },
        colony: {
          gold: 1,
          mithril: 1,
          dragonScales: 0,
          krakenSkin: 0,
          magicDust: 0,
          stickyIchor: 0,
          pipeweed: 0,
        },
      },
    },
    {
      name: "Dwarves3",
      image: Dwarves3,
      blocked: ["E"],
      sword: 10,
      shield: 11,
      loot: {
        outpost: {
          gold: 1,
          mithril: 1,
          dragonScales: 0,
          krakenSkin: 0,
          magicDust: 0,
          stickyIchor: 0,
          pipeweed: 0,
        },
        colony: {
          gold: 2,
          mithril: 1,
          dragonScales: 0,
          krakenSkin: 0,
          magicDust: 0,
          stickyIchor: 0,
          pipeweed: 0,
        },
      },
    },
    {
      name: "Elves1",
      image: Elves1,
      blocked: ["NW"],
      sword: 17,
      shield: 8,
      loot: {
        outpost: {
          gold: 2,
          mithril: 0,
          dragonScales: 0,
          krakenSkin: 0,
          magicDust: 1,
          stickyIchor: 0,
          pipeweed: 0,
        },
        colony: {
          gold: 3,
          mithril: 0,
          dragonScales: 0,
          krakenSkin: 0,
          magicDust: 1,
          stickyIchor: 0,
          pipeweed: 0,
        },
      },
    },
    {
      name: "Elves2",
      image: Elves2,
      blocked: [],
      sword: 14,
      shield: 7,
      loot: {
        outpost: {
          gold: 1,
          mithril: 0,
          dragonScales: 0,
          krakenSkin: 0,
          magicDust: 1,
          stickyIchor: 0,
          pipeweed: 0,
        },
        colony: {
          gold: 2,
          mithril: 0,
          dragonScales: 0,
          krakenSkin: 0,
          magicDust: 1,
          stickyIchor: 0,
          pipeweed: 0,
        },
      },
    },
    {
      name: "Elves3",
      image: Elves3,
      blocked: [],
      sword: 11,
      shield: 6,
      loot: {
        outpost: {
          gold: 1,
          mithril: 0,
          dragonScales: 0,
          krakenSkin: 0,
          magicDust: 0,
          stickyIchor: 0,
          pipeweed: 0,
        },
        colony: {
          gold: 1,
          mithril: 0,
          dragonScales: 0,
          krakenSkin: 0,
          magicDust: 1,
          stickyIchor: 0,
          pipeweed: 0,
        },
      },
    },
    {
      name: "Goblins1",
      image: Goblins1,
      blocked: [],
      sword: 10,
      shield: 7,
      loot: {
        outpost: {
          gold: 0,
          mithril: 0,
          dragonScales: 0,
          krakenSkin: 0,
          magicDust: 0,
          stickyIchor: 3,
          pipeweed: 0,
        },
        colony: {
          gold: 2,
          mithril: 0,
          dragonScales: 0,
          krakenSkin: 0,
          magicDust: 0,
          stickyIchor: 2,
          pipeweed: 0,
        },
      },
    },
    {
      name: "Goblins2",
      image: Goblins2,
      blocked: ["NE"],
      sword: 8,
      shield: 5,
      loot: {
        outpost: {
          gold: 0,
          mithril: 0,
          dragonScales: 0,
          krakenSkin: 0,
          magicDust: 0,
          stickyIchor: 2,
          pipeweed: 0,
        },
        colony: {
          gold: 1,
          mithril: 0,
          dragonScales: 0,
          krakenSkin: 0,
          magicDust: 0,
          stickyIchor: 2,
          pipeweed: 0,
        },
      },
    },
    {
      name: "Goblins3",
      image: Goblins3,
      blocked: ["W"],
      sword: 6,
      shield: 3,
      loot: {
        outpost: {
          gold: 0,
          mithril: 0,
          dragonScales: 0,
          krakenSkin: 0,
          magicDust: 0,
          stickyIchor: 1,
          pipeweed: 0,
        },
        colony: {
          gold: 1,
          mithril: 0,
          dragonScales: 0,
          krakenSkin: 0,
          magicDust: 0,
          stickyIchor: 1,
          pipeweed: 0,
        },
      },
    },
    {
      name: "Halflings1",
      image: Halflings1,
      blocked: [],
      sword: 7,
      shield: 10,
      loot: {
        outpost: {
          gold: 0,
          mithril: 0,
          dragonScales: 0,
          krakenSkin: 0,
          magicDust: 0,
          stickyIchor: 0,
          pipeweed: 3,
        },
        colony: {
          gold: 2,
          mithril: 0,
          dragonScales: 0,
          krakenSkin: 0,
          magicDust: 0,
          stickyIchor: 0,
          pipeweed: 2,
        },
      },
    },
    {
      name: "Halflings2",
      image: Halflings2,
      blocked: [],
      sword: 5,
      shield: 8,
      loot: {
        outpost: {
          gold: 0,
          mithril: 0,
          dragonScales: 0,
          krakenSkin: 0,
          magicDust: 0,
          stickyIchor: 0,
          pipeweed: 2,
        },
        colony: {
          gold: 1,
          mithril: 0,
          dragonScales: 0,
          krakenSkin: 0,
          magicDust: 0,
          stickyIchor: 0,
          pipeweed: 2,
        },
      },
    },
    {
      name: "Halflings3",
      image: Halflings3,
      blocked: [],
      sword: 3,
      shield: 6,
      loot: {
        outpost: {
          gold: 0,
          mithril: 0,
          dragonScales: 0,
          krakenSkin: 0,
          magicDust: 0,
          stickyIchor: 0,
          pipeweed: 1,
        },
        colony: {
          gold: 1,
          mithril: 0,
          dragonScales: 0,
          krakenSkin: 0,
          magicDust: 0,
          stickyIchor: 0,
          pipeweed: 1,
        },
      },
    },

    {
      name: "Orcs1",
      image: Orcs1,
      blocked: ["NE"],
      sword: 16,
      shield: 5,
      loot: {
        outpost: {
          gold: 1,
          mithril: 0,
          dragonScales: 0,
          krakenSkin: 2,
          magicDust: 0,
          stickyIchor: 0,
          pipeweed: 0,
        },
        colony: {
          gold: 2,
          mithril: 0,
          dragonScales: 0,
          krakenSkin: 2,
          magicDust: 0,
          stickyIchor: 0,
          pipeweed: 0,
        },
      },
    },
    {
      name: "Orcs2",
      image: Orcs2,
      blocked: ["NW"],
      sword: 10,
      shield: 3,
      loot: {
        outpost: {
          gold: 0,
          mithril: 0,
          dragonScales: 0,
          krakenSkin: 1,
          magicDust: 0,
          stickyIchor: 0,
          pipeweed: 0,
        },
        colony: {
          gold: 1,
          mithril: 0,
          dragonScales: 0,
          krakenSkin: 1,
          magicDust: 0,
          stickyIchor: 0,
          pipeweed: 0,
        },
      },
    },
    {
      name: "Orcs3",
      image: Orcs3,
      blocked: [],
      sword: 13,
      shield: 4,
      loot: {
        outpost: {
          gold: 1,
          mithril: 0,
          dragonScales: 0,
          krakenSkin: 1,
          magicDust: 0,
          stickyIchor: 0,
          pipeweed: 0,
        },
        colony: {
          gold: 1,
          mithril: 0,
          dragonScales: 0,
          krakenSkin: 2,
          magicDust: 0,
          stickyIchor: 0,
          pipeweed: 0,
        },
      },
    },

    {
      name: "Trolls1",
      image: Trolls1,
      blocked: ["W"],
      sword: 11,
      shield: 10,
      loot: {
        outpost: {
          gold: 1,
          mithril: 0,
          dragonScales: 2,
          krakenSkin: 0,
          magicDust: 0,
          stickyIchor: 0,
          pipeweed: 0,
        },
        colony: {
          gold: 2,
          mithril: 0,
          dragonScales: 2,
          krakenSkin: 0,
          magicDust: 0,
          stickyIchor: 0,
          pipeweed: 0,
        },
      },
    },
    {
      name: "Trolls2",
      image: Trolls2,
      blocked: ["SW"],
      sword: 9,
      shield: 8,
      loot: {
        outpost: {
          gold: 1,
          mithril: 0,
          dragonScales: 1,
          krakenSkin: 0,
          magicDust: 0,
          stickyIchor: 0,
          pipeweed: 0,
        },
        colony: {
          gold: 1,
          mithril: 0,
          dragonScales: 2,
          krakenSkin: 0,
          magicDust: 0,
          stickyIchor: 0,
          pipeweed: 0,
        },
      },
    },
    {
      name: "Trolls3",
      image: Trolls3,
      blocked: ["NE"],
      sword: 6,
      shield: 3,
      loot: {
        outpost: {
          gold: 0,
          mithril: 0,
          dragonScales: 1,
          krakenSkin: 0,
          magicDust: 0,
          stickyIchor: 0,
          pipeweed: 0,
        },
        colony: {
          gold: 1,
          mithril: 0,
          dragonScales: 1,
          krakenSkin: 0,
          magicDust: 0,
          stickyIchor: 0,
          pipeweed: 0,
        },
      },
    },
  ];
  const oceanTiles = [
    {
      name: "Ocean1",
      image: Ocean1,
      blocked: [],
      sword: 0,
      shield: 0,
      loot: {
        gold: 0,
        mithril: 0,
        dragonScales: 0,
        krakenSkin: 0,
        magicDust: 0,
        stickyIchor: 0,
        pipeweed: 0,
        victoryPoints: 0,
      },
    },
    {
      name: "Ocean2",
      image: Ocean2,
      blocked: [],
      sword: 0,
      shield: 0,
      loot: {
        gold: 0,
        mithril: 0,
        dragonScales: 0,
        krakenSkin: 0,
        magicDust: 0,
        stickyIchor: 0,
        pipeweed: 0,
        victoryPoints: 0,
      },
    },
    {
      name: "Ocean3",
      image: Ocean3,
      blocked: [],
      sword: 0,
      shield: 0,
      loot: {
        gold: 0,
        mithril: 0,
        dragonScales: 0,
        krakenSkin: 0,
        magicDust: 0,
        stickyIchor: 0,
        pipeweed: 0,
        victoryPoints: 0,
      },
    },
    {
      name: "Ocean4",
      image: Ocean4,
      blocked: [],
      sword: 0,
      shield: 0,
      loot: {
        gold: 0,
        mithril: 0,
        dragonScales: 0,
        krakenSkin: 0,
        magicDust: 0,
        stickyIchor: 0,
        pipeweed: 0,
        victoryPoints: 0,
      },
    },
  ];
  const legendTiles = [
    {
      name: "HereBeDragons",
      image: HereBeDragons,
      blocked: ["S", "SE"],
      sword: 0,
      shield: 0,
      loot: {
        gold: 1,
        mithril: 0,
        dragonScales: 1,
        krakenSkin: 0,
        magicDust: 0,
        stickyIchor: 0,
        pipeweed: 0,
        victoryPoints: 0,
      },
    },
    {
      name: "SeaElves",
      image: SeaElves,
      blocked: [],
      sword: 0,
      shield: 0,
      loot: {
        gold: 1,
        mithril: 0,
        dragonScales: 0,
        krakenSkin: 0,
        magicDust: 1,
        stickyIchor: 0,
        pipeweed: 0,
        victoryPoints: 0,
      },
    },
    {
      name: "TheFountainOfYouth",
      image: TheFountainOfYouth,
      blocked: [],
      sword: 0,
      shield: 0,
      loot: {
        gold: 0,
        mithril: 0,
        dragonScales: 0,
        krakenSkin: 0,
        magicDust: 0,
        stickyIchor: 0,
        pipeweed: 0,
        victoryPoints: 2,
      },
    },
    {
      name: "TheKingdomOfTheMerfolk",
      image: TheKingdomOfTheMerfolk,
      blocked: [],
      sword: 0,
      shield: 0,
      loot: {
        gold: 1,
        mithril: 0,
        dragonScales: 0,
        krakenSkin: 1,
        magicDust: 0,
        stickyIchor: 0,
        pipeweed: 0,
        victoryPoints: 0,
      },
    },
    {
      name: "TheKraken",
      image: TheKraken,
      blocked: [],
      sword: 0,
      shield: 0,
      loot: {
        gold: 0,
        mithril: 0,
        dragonScales: 0,
        krakenSkin: 0,
        magicDust: 0,
        stickyIchor: 0,
        pipeweed: 0,
        victoryPoints: 2,
      },
    },
    {
      name: "TheLostCityOfGold",
      image: TheLostCityOfGold,
      blocked: [],
      sword: 0,
      shield: 0,
      loot: {
        gold: 1,
        mithril: 1,
        dragonScales: 0,
        krakenSkin: 0,
        magicDust: 0,
        stickyIchor: 0,
        pipeweed: 0,
        victoryPoints: 0,
      },
    },
  ];
  const knownWorldTiles = [
    { image: KnownWorldTile1, blocked: [] },
    { image: KnownWorldTile2, blocked: ["E", "SE"] },
    { image: KnownWorldTile3, blocked: [] },
    { image: KnownWorldTile4, blocked: [] },
  ];

  const GridItems = () => {
    const oceanImages = oceanTiles.map((tile) => {
      return tile.image;
    });
    const unknownWorldImages = unknownWorldTiles.map((tile) => {
      return tile.image;
    });
    const legendImages = legendTiles.map((tile) => {
      return tile.image;
    });

    let randomImages = oceanImages.concat(unknownWorldImages, legendImages);

    let currentIndex = 28;
    let randomIndex = 0;
    while (currentIndex > 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [randomImages[currentIndex], randomImages[randomIndex]] = [
        randomImages[randomIndex],
        randomImages[currentIndex],
      ];
    }
    randomImages.splice(3, 0, knownWorldTiles[0].image);
    randomImages.splice(4, 0, knownWorldTiles[1].image);
    randomImages.splice(11, 0, knownWorldTiles[2].image);
    randomImages.splice(12, 0, knownWorldTiles[3].image);
    const knownWorldImageIndexes = [3, 4, 11, 12];
    return (
      <>
        {randomImages.map((image) => (
          <Grid item lg={1}>
            <WorldMapTile
              image={image}
              flipped={knownWorldImageIndexes.includes(
                randomImages.indexOf(image)
              )}
            />
          </Grid>
        ))}
      </>
    );
  };

  return (
    <div>
      <TransformWrapper>
        <TransformComponent>
          <Grid container spacing={0} columns={8} width={"100%"}>
            <GridItems />
          </Grid>
        </TransformComponent>
      </TransformWrapper>
    </div>
  );
};
