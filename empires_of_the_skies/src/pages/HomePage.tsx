import React, { useState } from "react";
import {
  Button,
  MenuItem,
  Paper,
  Select,
  SelectChangeEvent,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";

import { SocketIO } from "boardgame.io/multiplayer";

import { Client } from "boardgame.io/react";
import { MyGame } from "../Game";
import { ActionBoardsAndMap } from "../components/ActionBoardsAndMap";
import background from "../boards_and_assets/box_image.png";
import { LobbyClient } from "boardgame.io/client";

const createMatch = async (
  lobbyClient: LobbyClient,
  numPlayers: number,
  setMatchReady: React.Dispatch<React.SetStateAction<string | undefined>>
) => {
  const response = await lobbyClient.createMatch("empires-of-the-skies", {
    numPlayers: numPlayers,
  });

  if (!response.matchID) {
    alert("Failed to create match, please try again.");
    return;
  }
  setMatchReady(response.matchID);
};

const joinMatch = async (
  LobbyClient: LobbyClient,
  matchID: string,
  name: string,
  setStartGame: React.Dispatch<React.SetStateAction<boolean>>,
  setPlayerID: React.Dispatch<React.SetStateAction<string | undefined>>
) => {
  const response = await LobbyClient.joinMatch(
    "empires-of-the-skies",
    matchID,
    { playerName: name }
  );
  if (!response.playerID) {
    alert(
      "Failed to join match, please try again, perhaps also try a different username"
    );
  }

  setPlayerID(response.playerID);
  setStartGame(true);
};

const HomePage = () => {
  const [name, setName] = useState("");
  const [matchIDInput, setMatchIDInput] = useState("");
  const [startGame, setStartGame] = useState(false);
  const [matchReady, setMatchReady] = useState<string | undefined>(undefined);
  const [playerID, setPlayerID] = useState<string | undefined>(undefined);
  const [numPlayers, setNumPlayers] = useState(2);
  const [joinOrCreate, setJoinOrCreate] = useState<"join" | "create">("join");

  const lobbyClient = new LobbyClient({ server: "http://192.168.1.113:8000" });

  const EmpiresOfTheSkiesClient = Client({
    game: MyGame,
    board: ActionBoardsAndMap,
    numPlayers: numPlayers,
    multiplayer: SocketIO({ server: "http://192.168.1.113:8000" }),
    debug: false,
    loading: () => {
      return <img src="./boards_and_assets/box_image.png"></img>;
    },
  });

  return startGame && playerID ? (
    <EmpiresOfTheSkiesClient
      playerID={playerID}
      matchID={matchReady}
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
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          maxWidth: "100%",
          margin: 2,
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
          justifyItems: "center",
        }}
      >
        <Paper
          sx={{
            display: "flex",
            flexDirection: "column",
            maxWidth: 500,
            margin: 2,
            padding: 5,
          }}
        >
          Please enter your name/username
          <TextField
            sx={{ paddingBottom: 2 }}
            onChange={(event) => {
              setName(event.target.value);
            }}
          ></TextField>
          Please enter your matchID
          <TextField
            sx={{ paddingBottom: 2 }}
            disabled={joinOrCreate === "create"}
            onChange={(event) => {
              setMatchIDInput(event.target.value);
            }}
          ></TextField>
          Please select the number of players
          <Select
            defaultValue={2}
            sx={{ marginBottom: 2 }}
            onChange={(event: SelectChangeEvent<number>) => {
              setNumPlayers(event.target.value as number);
            }}
          >
            <MenuItem value={1}>1</MenuItem>
            <MenuItem value={2}>2</MenuItem>
            <MenuItem value={3}>3</MenuItem>
            <MenuItem value={4}>4</MenuItem>
            <MenuItem value={5}>5</MenuItem>
            <MenuItem value={6}>6</MenuItem>
          </Select>
          <ToggleButtonGroup
            sx={{ marginBottom: 2 }}
            value={joinOrCreate}
            exclusive
            onChange={(event, value) => {
              setJoinOrCreate(value);
            }}
          >
            <ToggleButton value="join">Join</ToggleButton>
            <ToggleButton value="create">Create</ToggleButton>
          </ToggleButtonGroup>
          <Button
            color="success"
            variant="contained"
            onClick={() => {
              joinOrCreate === "join"
                ? joinMatch(
                    lobbyClient,
                    matchIDInput,
                    name,
                    setStartGame,
                    setPlayerID
                  )
                : createMatch(lobbyClient, numPlayers, setMatchReady);
            }}
          >
            {joinOrCreate === "join" ? "join" : "create"} game
          </Button>
        </Paper>

        {matchReady && (
          <Paper
            sx={{
              display: "flex",
              flexDirection: "column",
              maxWidth: 500,
              margin: 2,
              padding: 5,
            }}
          >
            Your match ID is {matchReady} share it with the other players so
            that they can join your game.
          </Paper>
        )}
      </div>
    </div>
  );
};

export default HomePage;
