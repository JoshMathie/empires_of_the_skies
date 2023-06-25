import React from "react";
import { MyGameProps } from "../../types";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { colourToKingdomMap } from "../../codifiedGameInfo";

const PlayerTable = (props: PlayerTableProps) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
      }}
    >
      <TableContainer component={Paper} sx={{ maxWidth: 1230 }}>
        <Table size="medium">
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: "bold" }}>Kingdom</TableCell>
              <TableCell align="right" sx={{ fontWeight: "bold" }}>
                Counsellors
              </TableCell>
              <TableCell align="right" sx={{ fontWeight: "bold" }}>
                Gold
              </TableCell>
              <TableCell align="right" sx={{ fontWeight: "bold" }}>
                Skyships
              </TableCell>
              <TableCell align="right" sx={{ fontWeight: "bold" }}>
                Regiments
              </TableCell>
              <TableCell align="right" sx={{ fontWeight: "bold" }}>
                Levies
              </TableCell>
              <TableCell align="right" sx={{ fontWeight: "bold" }}>
                Fortune Of War Cards
              </TableCell>
              <TableCell align="right" sx={{ fontWeight: "bold" }}>
                Prisoners
              </TableCell>
              <TableCell align="right" sx={{ fontWeight: "bold" }}>
                Cathedrals
              </TableCell>
              <TableCell align="right" sx={{ fontWeight: "bold" }}>
                Palaces
              </TableCell>
              <TableCell align="right" sx={{ fontWeight: "bold" }}>
                Shipyards
              </TableCell>
              <TableCell align="right" sx={{ fontWeight: "bold" }}>
                Allegiance
              </TableCell>
              <TableCell align="right" sx={{ fontWeight: "bold" }}>
                Victory Points
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Object.entries(props.G.playerInfo).map(([key, value]) => (
              <TableRow key={key}>
                <TableCell sx={{ backgroundColor: value.colour }}>
                  {colourToKingdomMap[value.colour]}
                </TableCell>
                <TableCell align="right">
                  {value.resources.counsellors}
                </TableCell>
                <TableCell align="right">{value.resources.gold}</TableCell>
                <TableCell align="right">{value.resources.skyships}</TableCell>
                <TableCell align="right">{value.resources.regiments}</TableCell>
                <TableCell align="right">{value.resources.levies}</TableCell>
                <TableCell align="right">
                  {value.resources.fortuneCards.length}
                </TableCell>
                <TableCell align="right">{value.prisoners}</TableCell>
                <TableCell align="right">{value.cathedrals}</TableCell>
                <TableCell align="right">{value.palaces}</TableCell>
                <TableCell align="right">{value.shipyards}</TableCell>
                <TableCell align="right">{value.hereticOrOthodox}</TableCell>
                <TableCell align="right">{value.victoryPoints}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

interface PlayerTableProps extends MyGameProps {}

export default PlayerTable;
