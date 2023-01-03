import { TableCell, TableRow, Box } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import ticketModel from "../../models/ticketModel";
import showMatchNumbers from "../../utils/showMatchNumbers";

interface LotteryTableItemProps {
  result: ticketModel;
  ticket: ticketModel;
  index: number;
}

const LotteryTableItem = ({ result, ticket, index }: LotteryTableItemProps) => {
  const { matchMainNum, matchStarNum } = showMatchNumbers(ticket, result);
  const hitsAmount =
    matchStarNum.length === 0
      ? matchMainNum.length
      : `${matchMainNum.length} + ${matchStarNum.length}`;

  const mainNumHit = (inputNum: number) => {
    return matchMainNum.includes(inputNum);
  };

  const starNumHit = (inputNum: number) => {
    return matchStarNum.includes(inputNum);
  };

  return (
    <TableRow>
      <TableCell>{index + 1}</TableCell>
      <TableCell align="center">
        <Box
          component="ol"
          sx={{
            listStyle: "none",
            display: "flex",
            justifyContent: "center",
            flexDirection: "row",
            gap: "0.5rem",
          }}
        >
          {ticket.mainNum.map((number) => (
            <Box
              key={`${number}_main`}
              component="li"
              sx={
                mainNumHit(number)
                  ? {
                      alignItems: "center",
                      backgroundColor: "var(--purple)",
                      borderRadius: "100%",
                      display: "flex",
                      height: "2rem",
                      width: "2rem",
                      justifyContent: "center",
                      color: "var(--white)",
                    }
                  : {
                      alignItems: "center",
                      display: "flex",
                      height: "2rem",
                      width: "2rem",
                      justifyContent: "center",
                    }
              }
            >
              {number}
            </Box>
          ))}

          <StarIcon sx={{ color: "var(--dark-yellow)", width: "2rem" }} />

          {ticket.starNum.map((number) => (
            <Box
              key={`${number}_star`}
              sx={
                starNumHit(number)
                  ? {
                      alignItems: "center",
                      backgroundColor: "var(--yellow)",
                      borderRadius: "100%",
                      display: "flex",
                      height: "2rem",
                      width: "2rem",
                      justifyContent: "center",
                    }
                  : {
                      alignItems: "center",
                      display: "flex",
                      height: "2rem",
                      width: "2rem",
                      justifyContent: "center",
                    }
              }
            >
              {number}
            </Box>
          ))}
        </Box>
      </TableCell>
      <TableCell align="center">{hitsAmount}</TableCell>
    </TableRow>
  );
};

export default LotteryTableItem;
