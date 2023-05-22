import React from "react";
import "./App.css";
import { ActionBoard } from "./components/ActionBoard/ActionBoard";
import { WorldMap } from "./components/WorldMap/WorldMap";
import { ActionBoardsAndMap } from "./components/ActionBoardsAndMap";

function App() {
  return (
    <div
      className="App"
      style={{
        display: "flex",
        alignItems: "center",
        flexWrap: "wrap",
        maxWidth: "1300px",
        backgroundColor: "#e0ffff",
      }}
    >
      <ActionBoardsAndMap />
      {/* <WorldMap /> */}
    </div>
  );
}

export default App;
