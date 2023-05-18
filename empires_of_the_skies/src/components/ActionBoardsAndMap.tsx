import React from "react";

import { MyGame, MyGameState } from "../Game";

import { BoardProps } from "boardgame.io/react";
import { ActionBoard } from "./ActionBoard/ActionBoard";
import { WorldMap } from "./WorldMap/WorldMap";
import { PlayerBoard } from "./PlayerBoard/PlayerBoard";
import { PlayerColour } from "../types";

import { Box, Tab, Tabs } from "@mui/material";
import { TabPanel, TabContext } from "@mui/lab";

interface MyGameProps extends BoardProps<MyGameState> {}

export const ActionBoardsAndMap = () => {
  const [value, setValue] = React.useState("0");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <Box
    //   sx={{
    //     flexGrow: 1,
    //     bgcolor: "background.paper",
    //     display: "flex",
    //     // height: 224
    //   }}
    >
      <TabContext value={value}>
        <Tabs value={value} onChange={handleChange} variant="scrollable">
          <Tab
            label="Action Board"
            value={"0"}
            style={{ fontFamily: "dauphinn", fontSize: 20 }}
          />
          <Tab
            label="Player Board"
            value={"1"}
            style={{ fontFamily: "dauphinn", fontSize: 20 }}
          />
          <Tab
            label="World Map"
            value={"2"}
            style={{ fontFamily: "dauphinn", fontSize: 20 }}
          />
        </Tabs>

        <TabPanel value={"0"} tabIndex={0}>
          <ActionBoard />
        </TabPanel>
        <TabPanel value={"1"} tabIndex={1}>
          <PlayerBoard playerColour={PlayerColour["green"]} prisoners={2} />
        </TabPanel>
        <TabPanel value={"2"} tabIndex={2}>
          <WorldMap />
        </TabPanel>
      </TabContext>
    </Box>
  );
};
