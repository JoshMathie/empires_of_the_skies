// const Server = require("boardgame.io/server").Server;
// const Origins = require("boardgame.io/multiplayer").Origins;
// const { MyGame } = require("../Game");
import { Server, Origins } from "boardgame.io/server";
import { MyGame } from "../Game";
const ServerComp = Server({
  games: [MyGame],
  origins: [Origins.LOCALHOST, Origins.LOCALHOST_IN_DEVELOPMENT],
});

const PORT = process.env.PORT ? parseInt(process.env.PORT) : 8000;

ServerComp.run(PORT, () => {
  console.log("sever is running...");
});
