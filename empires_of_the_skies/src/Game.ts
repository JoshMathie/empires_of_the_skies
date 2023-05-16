import type { Game, Move, } from "boardgame.io";

import { TileInfoProps, PlayerInfo, MapState } from "./types";

export interface MyGameState {
  board: number[][];
  turn: number;
  tileInfo: TileInfoProps[];
  playerInfo: PlayerInfo[];
  mapState: MapState;
}


export const MyGame: Game<MyGameState> = {
    name: "empires-of-the-skies",
    setup: ({ctx}:) => {}
}