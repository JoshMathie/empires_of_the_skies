import React, { useState } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { LobbyClient } from "boardgame.io/client";
import ClientComponent from "./Client";
import HomePageComponent from "./HomePageComponent";

const HomePage = () => {
  const [name, setName] = useState("");
  const [matchIDInput, setMatchIDInput] = useState("");
  const [startGame, setStartGame] = useState(false);
  const [matchReady, setMatchReady] = useState<string | undefined>(undefined);
  const [numPlayers, setNumPlayers] = useState(2);
  const server = "https://192.168.1.121:8000";
  const lobbyClient = new LobbyClient({ server: server });

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route
            index
            element={
              <HomePageComponent
                playerName={name}
                setName={setName}
                matchIDInput={matchIDInput}
                setMatchIDInput={setMatchIDInput}
                startGame={startGame}
                setStartGame={setStartGame}
                matchReady={matchReady}
                setMatchReady={setMatchReady}
                numPlayers={numPlayers}
                setNumPlayers={setNumPlayers}
                lobbyClient={lobbyClient}
              />
            }
          />
          <Route
            path="/match/:matchID/:playerName"
            element={
              <ClientComponent
                lobbyClient={lobbyClient}
                matchIDInput={matchIDInput}
                name={name}
                setStartGame={setStartGame}
                matchReady={matchReady}
              />
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default HomePage;
