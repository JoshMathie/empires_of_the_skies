import React, { useState } from "react";
import { Button, Paper, TextField } from "@mui/material";

import { SocketIO } from "boardgame.io/multiplayer";

import { Client } from "boardgame.io/react";
import { MyGame } from "../Game";
import { ActionBoardsAndMap } from "../components/ActionBoardsAndMap";
import background from "../boards_and_assets/box_image.png";

const HomePage = () => {
  const [name, setName] = useState("");
  const [matchID, setMatchID] = useState("");
  const [joinGame, setJoinGame] = useState(false);

  const EmpiresOfTheSkiesClient = Client({
    game: MyGame,
    board: ActionBoardsAndMap,
    numPlayers: 2,
    multiplayer: SocketIO({ server: "http://localhost:8000" }),
    // debug: false,
    loading: () => {
      return <img src="./boards_and_assets/box_image.png"></img>;
    },
  });
  return joinGame ? (
    <EmpiresOfTheSkiesClient
      playerID={name}
      matchID={matchID}
    ></EmpiresOfTheSkiesClient>
  ) : (
    <div
      style={{
        width: "100%",
        height: "100vh",
        background: `url(${background}) no-repeat`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        justifyContent: "center",
      }}
    >
      <Paper
        sx={{
          display: "flex",
          flexDirection: "column",
          maxWidth: 500,
          margin: 2,
        }}
      >
        Please enter your name/username
        <TextField
          onChange={(event) => {
            setName(event.target.value);
          }}
        ></TextField>
        Please enter your matchID
        <TextField
          onChange={(event) => {
            setMatchID(event.target.value);
          }}
        ></TextField>
        <Button
          color="success"
          variant="contained"
          onClick={() => {
            setJoinGame(true);
          }}
        >
          Join game
        </Button>
      </Paper>
    </div>
  );
};

export default HomePage;
