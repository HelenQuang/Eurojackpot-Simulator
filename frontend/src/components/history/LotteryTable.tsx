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
            <TableCell>No.</TableCell>
            <TableCell align="center">Tickets</TableCell>
            <TableCell align="center">Hits</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tickets.map((ticket, index) => (
            <LotteryTableItem
              key={index}
              result={result}
              ticket={ticket}
              index={index}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default LotteryTable;
