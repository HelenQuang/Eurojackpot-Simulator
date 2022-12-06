import { Box, Button } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import lotteryModel from "../../../models/lotteryModel";

interface ticketProps {
  ticket: lotteryModel;
}

const TicketItem = ({ ticket }: ticketProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        gap: "2.5rem",
        alignItems: "center",
        fontWeight: 600,
        fontSize: "0.9rem",
        padding: "0.25rem 1rem",
        borderRadius: "0.5rem",
        ":nth-of-type(2n)": {
          backgroundColor: "var(--gray)",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
        }}
      >
        {ticket.mainNum.map((number) => (
          <Box
            key={`${ticket.id}_${number}`}
            sx={{
              alignItems: "center",
              backgroundColor: "var(--white)",
              border: "2px solid transparent",
              borderRadius: "100%",
              display: "flex",
              height: "2rem",
              justifyContent: "center",
              margin: "0.25rem 0.25rem 0.25rem 0",
              width: "2rem",
              borderColor: "var(--purple)",
            }}
          >
            {number}
          </Box>
        ))}

        <StarIcon sx={{ color: "var(--dark-yellow)", width: "2rem" }} />

        {ticket.starNum.map((number) => (
          <Box
            key={`${ticket.id}_${number}`}
            sx={{
              alignItems: "center",
              backgroundColor: "var(--white)",
              border: "2px solid transparent",
              borderRadius: "100%",
              display: "flex",
              height: "2rem",
              justifyContent: "center",
              margin: "0.25rem 0.25rem 0.25rem 0",
              width: "2rem",
              borderColor: "var(--dark-yellow)",
            }}
          >
            {number}
          </Box>
        ))}
      </Box>

      <Button type="submit" style={{ color: "var(--dark-purple)" }}>
        <DeleteForeverIcon />
      </Button>
    </Box>
  );
};

export default TicketItem;
