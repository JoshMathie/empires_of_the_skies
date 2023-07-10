import { MoveFn } from "boardgame.io";
import { MyGameState } from "../../types";
import { findPossibleDestinations } from "../../helpers/helpers";
import { INVALID_MOVE } from "boardgame.io/core";
import { removeGoldAmount } from "../resourceUpdates";
import { checkCounsellorsNotZero } from "../moveValidation";

const deployFleet: MoveFn<MyGameState> = (
  { G, ctx, playerID, events, random },
  ...args
) => {
  if (checkCounsellorsNotZero(playerID, G) !== undefined) {
    return INVALID_MOVE;
  }
  const fleet = args[0][0];
  const startingCoords = fleet.location;
  const [x, y] = args[0][1];
  const unladen = fleet.regiments === 0 && fleet.levies === 0;

  let destinationValid = false;

  const [
    validDestinations,
    coordsCostingOneGold,
    coordsCostingTwoGold,
    coordsCostingThreeGold,
  ] = findPossibleDestinations(G, startingCoords, unladen);

  validDestinations.forEach((coords) => {
    if (coords[0] === x && coords[1] === y) {
      destinationValid = true;
    }
  });

  if (!destinationValid) {
    console.log(
      "Player is attempting to deploy a fleet to a tile outwith its range"
    );
    return INVALID_MOVE;
  }

  let cost = 0;

  coordsCostingThreeGold.forEach((coords) => {
    if (doCoordsMatch(coords, [x, y])) {
      cost = 3;
    }
  });
  coordsCostingTwoGold.forEach((coords) => {
    if (doCoordsMatch(coords, [x, y])) {
      cost = 2;
    }
  });
  coordsCostingOneGold.forEach((coords) => {
    if (doCoordsMatch(coords, [x, y])) {
      cost = 1;
    }
  });
  G.playerInfo[playerID].fleetInfo[fleet.fleetId].location = [x, y];

  if (!G.mapState.battleMap[y][x].includes(playerID)) {
    G.mapState.battleMap[y][x].push(playerID);
  }
  console.log(G.mapState.battleMap[y][x]);

  removeGoldAmount(G, playerID, cost);

  args[0][2](true);
};

export default deployFleet;

const doCoordsMatch = (coordsA: number[], coordsB: number[]): boolean => {
  if (coordsA[0] === coordsB[0] && coordsA[1] === coordsB[1]) {
    return true;
  } else {
    return false;
  }
};
