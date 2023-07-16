// const Server = require("boardgame.io/server").Server;
// const Origins = require("boardgame.io/multiplayer").Origins;
// const { MyGame } = require("../Game");
import { Server, Origins, SocketIO } from "boardgame.io/server";
import { MyGame } from "../Game";
const ServerComp = Server({
  games: [MyGame],
  origins: [
    Origins.LOCALHOST,
    Origins.LOCALHOST_IN_DEVELOPMENT,
    "https://empires-of-the-skies-53az.vercel.app/",
  ],
  transport: new SocketIO(),
});

const PORT = process.env.PORT ? parseInt(process.env.PORT) : 8000;

ServerComp.run(PORT, () => {
  console.log("Router:");
  console.log(ServerComp.router);
  console.log("Transport:");
  console.log(ServerComp.transport);
  console.log("App:");
  console.log(ServerComp.app);
  console.log(`Process running on port: ${PORT}`);
});
ServerComp.router.allowedMethods;
