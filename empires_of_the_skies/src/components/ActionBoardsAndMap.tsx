import React from "react";

import { MyGameProps } from "../types";
import { ActionBoard } from "./ActionBoard/ActionBoard";
import { WorldMap } from "./WorldMap/WorldMap";
import { PlayerBoard } from "./PlayerBoard/PlayerBoard";

import { Box, Tab, Tabs } from "@mui/material";
import { TabPanel, TabContext } from "@mui/lab";
import { ResourceTrackerBar } from "./ResourceTrackerBar/ResourceTrackerBar";
import { checkPlayerIDAndReturnPlayerInfo } from "../helpers/helpers";

export const ActionBoardsAndMap = (props: MyGameProps) => {
  const [value, setValue] = React.useState("0");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const playerInfo = checkPlayerIDAndReturnPlayerInfo(props);

  return (
    <>
      <ResourceTrackerBar {...props} />
      <Box
        sx={{
          flexGrow: 1,
          // bgcolor: "#e6f7ff",
        }}
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
            <ActionBoard {...props} />
          </TabPanel>
          <TabPanel value={"1"} tabIndex={1}>
            <PlayerBoard {...props} />
          </TabPanel>
          <TabPanel value={"2"} tabIndex={2}>
            <WorldMap {...props} />
          </TabPanel>
        </TabContext>
      </Box>
    </>
  );
};
