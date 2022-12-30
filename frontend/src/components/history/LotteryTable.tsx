import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import LotteryTableItem from "./LotteryTableItem";
import ticketModel from "../../models/ticketModel";

interface LotteryTableProps {
  result: ticketModel;
  tickets: ticketModel[];
}

const LotteryTable = ({ result, tickets }: LotteryTableProps) => {
  return (
    <TableContainer>
      <Table sx={{ minWidth: 650 }} aria-label="Game detail table">
        <TableHead>
          <TableRow>
            <TableCell>Line</TableCell>
            <TableCell align="left">Numbers</TableCell>
            <TableCell align="left">Hits</TableCell>
          </TableRow>
        </TableHead>
        {/* <TableBody>
          {tickets.map((ticket, index) => (
            <LotteryTableItem
              key={index}
              // resultLottery={resultLottery}
              lottery={lottery}
              index={index}
            />
          ))}
        </TableBody> */}
      </Table>
    </TableContainer>
  );
};

export default LotteryTable;
