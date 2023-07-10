import KnownWorldTile1 from "../../map_tiles/known_world1";
import KnownWorldTile2 from "../../map_tiles/known_world2";
import KnownWorldTile3 from "../../map_tiles/known_world3";
import KnownWorldTile4 from "../../map_tiles/known_world4";
import Dwarves1 from "../../map_tiles/unknown_world_tiles/dwarves1";
import Dwarves2 from "../../map_tiles/unknown_world_tiles/dwarves2";
import Dwarves3 from "../../map_tiles/unknown_world_tiles/dwarves3";
import Elves1 from "../../map_tiles/unknown_world_tiles/elves1";
import Elves2 from "../../map_tiles/unknown_world_tiles/elves2";
import Elves3 from "../../map_tiles/unknown_world_tiles/elves3";
import Goblins1 from "../../map_tiles/unknown_world_tiles/goblins1";
import Goblins2 from "../../map_tiles/unknown_world_tiles/goblins2";
import Goblins3 from "../../map_tiles/unknown_world_tiles/goblins3";
import Halflings1 from "../../map_tiles/unknown_world_tiles/halflings1";
import Halflings2 from "../../map_tiles/unknown_world_tiles/halflings2";
import Halflings3 from "../../map_tiles/unknown_world_tiles/halflings3";
import HereBeDragons from "../../map_tiles/unknown_world_tiles/here_be_dragons";
import Ocean1 from "../../map_tiles/unknown_world_tiles/ocean";
import Ocean2 from "../../map_tiles/unknown_world_tiles/ocean";
import Ocean3 from "../../map_tiles/unknown_world_tiles/ocean";
import Ocean4 from "../../map_tiles/unknown_world_tiles/ocean";
import Orcs1 from "../../map_tiles/unknown_world_tiles/orcs1";
import Orcs2 from "../../map_tiles/unknown_world_tiles/orcs2";
import Orcs3 from "../../map_tiles/unknown_world_tiles/orcs3";
import SeaElves from "../../map_tiles/unknown_world_tiles/sea_elves";
import TheFountainOfYouth from "../../map_tiles/unknown_world_tiles/the_fountain_of_youth";
import TheKingdomOfTheMerfolk from "../../map_tiles/unknown_world_tiles/the_kingdom_of_the_merfolk";
import TheKraken from "../../map_tiles/unknown_world_tiles/the_kraken";
import TheLostCityOfGold from "../../map_tiles/unknown_world_tiles/the_lost_city_of_gold";
import Trolls1 from "../../map_tiles/unknown_world_tiles/trolls1";
import Trolls2 from "../../map_tiles/unknown_world_tiles/trolls2";
import Trolls3 from "../../map_tiles/unknown_world_tiles/trolls3";
import swordOne from "../../boards_and_assets/fortunes_of_war_cards/1_sword";
import swordtwo from "../../boards_and_assets/fortunes_of_war_cards/2_sword";
import swordThree from "../../boards_and_assets/fortunes_of_war_cards/3_sword";
import swordFour from "../../boards_and_assets/fortunes_of_war_cards/4_sword";
import swordFive from "../../boards_and_assets/fortunes_of_war_cards/5_sword";
import shieldFour from "../../boards_and_assets/fortunes_of_war_cards/4_shield";
import shieldFive from "../../boards_and_assets/fortunes_of_war_cards/5_shield";
import shieldSix from "../../boards_and_assets/fortunes_of_war_cards/6_shield";
import shieldSeven from "../../boards_and_assets/fortunes_of_war_cards/7_shield";
import shieldEight from "../../boards_and_assets/fortunes_of_war_cards/8_shield";
import noEffect from "../../boards_and_assets/fortunes_of_war_cards/no_effect";

const svgNameToElementMap: Record<string, () => React.JSX.Element> = {
  KnownWorldTile1: KnownWorldTile1,
  KnownWorldTile2: KnownWorldTile2,
  KnownWorldTile3: KnownWorldTile3,
  KnownWorldTile4: KnownWorldTile4,
  Dwarves1: Dwarves1,
  Dwarves2: Dwarves2,
  Dwarves3: Dwarves3,
  Elves1: Elves1,
  Elves2: Elves2,
  Elves3: Elves3,
  Goblins1: Goblins1,
  Goblins2: Goblins2,
  Goblins3: Goblins3,
  Halflings1: Halflings1,
  Halflings2: Halflings2,
  Halflings3: Halflings3,
  HereBeDragons: HereBeDragons,
  Ocean1: Ocean1,
  Ocean2: Ocean2,
  Ocean3: Ocean3,
  Ocean4: Ocean4,
  Orcs1: Orcs1,
  Orcs2: Orcs2,
  Orcs3: Orcs3,
  SeaElves: SeaElves,
  TheFountainOfYouth: TheFountainOfYouth,
  TheKingdomOfTheMerfolk: TheKingdomOfTheMerfolk,
  TheKraken: TheKraken,
  TheLostCityOfGold: TheLostCityOfGold,
  Trolls1: Trolls1,
  Trolls2: Trolls2,
  Trolls3: Trolls3,
  swordOne: swordOne,
  swordtwo: swordtwo,
  swordThree: swordThree,
  swordFour: swordFour,
  swordFive: swordFive,
  shieldFour: shieldFour,
  shieldFive: shieldFive,
  shieldSix: shieldSix,
  shieldSeven: shieldSeven,
  shieldEight: shieldEight,
  noEffect: noEffect,
};

export default svgNameToElementMap;
