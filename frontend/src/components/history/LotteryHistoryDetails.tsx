import React from "react";
import {
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import lotteryModel from "../../models/lotteryModel";
import formatDate from "../../utils/formatDate";
import TicketItem from "../game/tickets/TicketItem";
import LotteryTable from "./LotteryTable";

const LotteryHistoryDetails = ({ lottery }: { lottery: lotteryModel }) => {
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="lottery-accordion"
        id="lottery-accordion"
        sx={{ marginTop: "1rem" }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
            alignContent: "center",
          }}
        >
          <Typography alignSelf={"center"}>
            <strong>
              Your lotteries played on {formatDate(lottery.playAt)}
            </strong>
          </Typography>
        </Box>
      </AccordionSummary>
      <AccordionDetails>
        <Typography margin={"0 0 1rem 0"}>
          <strong>The Result:</strong>
        </Typography>
        <TicketItem ticket={lottery.result[0]} showIcon={false} />

        <Typography margin={"1rem 0"}>
          <strong>The Tickets:</strong>
        </Typography>

        <LotteryTable result={lottery.result[0]} tickets={lottery.tickets} />

        <Typography sx={{ margin: "1rem 0" }}>
          <strong>Your Profit: {+lottery.prize} € </strong>
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
};

export default LotteryHistoryDetails;
