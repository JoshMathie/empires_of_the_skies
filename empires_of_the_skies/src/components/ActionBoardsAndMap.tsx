import React, { useState } from "react";

import { MyGameProps } from "../types";
import { ActionBoard } from "./ActionBoard/ActionBoard";
import WorldMap from "./WorldMap/WorldMap";
import { PlayerBoard } from "./PlayerBoard/PlayerBoard";

import { Box, Tab, Tabs } from "@mui/material";
import { TabPanel, TabContext } from "@mui/lab";
import ResourceTrackerBar from "./ResourceTrackerBar/ResourceTrackerBar";
import AttackOrPassDiaLog from "./AerialBattle/AttackOrPassDialog";
import AttackOrEvadeDialog from "./AerialBattle/AttackOrEvadeDialog";
import DrawOrPickCardDialog from "./AerialBattle/DrawOrPickCardDialog";
import RelocateLoserDialog from "./AerialBattle/RelocateLoserDialog";
import PlunderLegendsDialog from "./PlunderLegends/PlunderLegendsDialog";
import DefendOrYieldDialog from "./GroundBattle/DefendOrYieldDialog";
import GroundAttackOrPassDialog from "./GroundBattle/GroundAttackOrPassDialog";
import GarrisonTroopsDialog from "./GroundBattle/GarrisonTroopsDialog";

import PlayerTable from "./PlayerTable/PlayerTable";

export const ActionBoardsAndMap = (props: MyGameProps) => {
  const [value, setValue] = useState("0");
  const [turnComplete, setTurnComplete] = useState(false);
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <div>
      <ResourceTrackerBar
        {...props}
        turnComplete={turnComplete}
        setTurnComplete={setTurnComplete}
      />
      <Box
        sx={{
          flexGrow: 1,
        }}
      >
        <TabContext value={value}>
          <Tabs value={value} onChange={handleChange} centered>
            <Tab
              label="Action Board"
              value={"0"}
              style={{
                fontFamily: "dauphinn",
                fontSize: 26,
                textTransform: "none",
              }}
            />
            <Tab
              label="Player Board"
              value={"1"}
              style={{
                fontFamily: "dauphinn",
                fontSize: 26,
                textTransform: "none",
              }}
            />
            <Tab
              label="World Map"
              value={"2"}
              style={{
                fontFamily: "dauphinn",
                fontSize: 26,
                textTransform: "none",
              }}
            />
            <Tab
              label="Player Table"
              value={"3"}
              style={{
                fontFamily: "dauphinn",
                fontSize: 26,
                textTransform: "none",
              }}
            />
          </Tabs>
          <TabPanel value={"0"} tabIndex={0}>
            <ActionBoard {...props} setTurnComplete={setTurnComplete} />
          </TabPanel>
          <TabPanel value={"1"} tabIndex={1}>
            <PlayerBoard {...props} setTurnComplete={setTurnComplete} />
          </TabPanel>
          <TabPanel value={"2"} tabIndex={2}>
            <WorldMap {...props} setTurnComplete={setTurnComplete} />
          </TabPanel>{" "}
          <TabPanel value={"3"} tabIndex={3}>
            <PlayerTable {...props} />
          </TabPanel>
        </TabContext>
        <AttackOrPassDiaLog {...props} setTurnComplete={setTurnComplete} />
        <AttackOrEvadeDialog {...props} setTurnComplete={setTurnComplete} />
        <DrawOrPickCardDialog {...props} setTurnComplete={setTurnComplete} />
        <RelocateLoserDialog {...props} setTurnComplete={setTurnComplete} />
        <PlunderLegendsDialog {...props} setTurnComplete={setTurnComplete} />
        <GroundAttackOrPassDialog
          {...props}
          setTurnComplete={setTurnComplete}
        />
        <DefendOrYieldDialog {...props} setTurnComplete={setTurnComplete} />
        <GarrisonTroopsDialog {...props} setTurnComplete={setTurnComplete} />
      </Box>
    </div>
  );
};
