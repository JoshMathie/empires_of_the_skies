import React from "react";
import "./App.css";
import { Client, Lobby } from "boardgame.io/react";
import { Local, SocketIO } from "boardgame.io/multiplayer";
import { ActionBoardsAndMap } from "./components/ActionBoardsAndMap";
import { MyGame } from "./Game";
// import { Server, Origins } from "boardgame.io/server";

const EmpiresOfTheSkiesClient = Client({
  game: MyGame,
  board: ActionBoardsAndMap,
  numPlayers: 6,
  multiplayer: Local(),
  // debug: false,
  loading: () => {
    return <img src="./boards_and_assets/box_image.png"></img>;
  },
});

// const server = Server({
//   games: [MyGame],
//   origins: [Origins.LOCALHOST_IN_DEVELOPMENT],
// });

// server.run(3000, () => {
//   console.log("sever is running...");
// });

const App = () => {
  return (
    <div
    // className="App"
    // style={{
    //   display: "flex",
    //   alignItems: "center",
    //   flexWrap: "wrap",
    //   maxWidth: "1300px",
    //   backgroundColor: "#e0ffff",
    // }}
    >
      <EmpiresOfTheSkiesClient playerID="0" matchID="test" />
      <EmpiresOfTheSkiesClient playerID="1" matchID="test" />
      <EmpiresOfTheSkiesClient playerID="2" matchID="test" />
      <EmpiresOfTheSkiesClient playerID="3" matchID="test" />
      <EmpiresOfTheSkiesClient playerID="4" matchID="test" />
      <EmpiresOfTheSkiesClient playerID="5" matchID="test" />
    </div>
  );
};

export default App;
