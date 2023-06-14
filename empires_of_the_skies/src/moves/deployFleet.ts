import { MoveFn } from "boardgame.io";
import { MyGameState } from "../types";
import { findPossibleDestinations } from "../helpers/helpers";
import { INVALID_MOVE } from "boardgame.io/core";

const deployFleet: MoveFn<MyGameState> = (
  { G, ctx, playerID, events, random },
  ...args
) => {
  const startingCoords = args[1].location;
  const destinationCoords = args[2];
  const unlaiden = args[1].regiments === 0 && args[1].levies === 0;

  let destinationValid = false;
  findPossibleDestinations(G, startingCoords, unlaiden).forEach((coords) => {
    if (
      coords[0] === destinationCoords[0] &&
      coords[1] === destinationCoords[1]
    ) {
      destinationValid = true;
    }
  });

  if (!destinationValid) {
    console.log(
      "Player is attempting to deploy a fleet to a tile outwith its range"
    );
    return INVALID_MOVE;
  }
};

export default deployFleet;
