import React from "react";
import "./App.css";
import { ActionBoard } from "./components/ActionBoard/ActionBoard";

function App() {
  return (
    <div
      className="App"
      style={{
        display: "flex",
        alignItems: "center",
        flexWrap: "wrap",
        maxWidth: "991px",
      }}
    >
      <ActionBoard />
    </div>
  );
}

export default App;
