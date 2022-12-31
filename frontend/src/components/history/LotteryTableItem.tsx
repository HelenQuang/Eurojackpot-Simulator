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

  console.log(matchMainNum);
  console.log(matchStarNum);
  console.log(hitsAmount);
  return (
    <TableRow>
      <TableCell>{index + 1}</TableCell>
      <TableCell>
        <Box
          component="ol"
          sx={{
            listStyle: "none",
            display: "flex",
            alignItems: "center",
            flexDirection: "row",
            gap: "1rem",
            alignContent: "flex-end",
          }}
        >
          {/* {lottery.number.map((number) => (
            <Box
              key={`${number}`}
              component="li"
              sx={
                numberHit(number)
                  ? {
                      alignItems: "center",
                      backgroundColor: "#72008c",
                      border: "2px solid transparent",
                      borderRadius: "100%",
                      display: "flex",
                      height: "2rem",
                      justifyContent: "center",
                      width: "2rem",
                      color: "#fff",
                      fontWeight: 500,
                      borderColor: "#72008c",
                    }
                  : {
                      alignItems: "center",
                      border: "2px solid transparent",
                      borderRadius: "100%",
                      display: "flex",
                      height: "2rem",
                      justifyContent: "center",
                      width: "2rem",
                      fontWeight: 500,
                    }
              }
            >
              {number}
            </Box>
          ))}
          <StarIcon></StarIcon>
          {lottery.starNumber.map((number) => (
            <Box
              key={`${number}_star`}
              sx={
                starNumberHit(number)
                  ? {
                      alignItems: "center",
                      backgroundColor: "rgb(255, 207, 18)",
                      border: "2px solid transparent",
                      borderRadius: "100%",
                      display: "flex",
                      height: "2rem",
                      justifyContent: "center",
                      width: "2rem",
                      color: "black",
                      fontWeight: 500,
                      borderColor: "rgb(255, 207, 18)",
                    }
                  : {
                      alignItems: "center",
                      border: "2px solid transparent",
                      borderRadius: "100%",
                      display: "flex",
                      height: "2rem",
                      justifyContent: "center",

                      width: "2rem",
                      fontWeight: 500,
                    }
              }
              component="li"
            >
              {number}
            </Box>
          ))} */}
        </Box>
      </TableCell>
      <TableCell>{hitsAmount}</TableCell>
    </TableRow>
  );
};

export default LotteryTableItem;
