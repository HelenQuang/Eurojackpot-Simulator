import { Box } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import ticketModel from "../../../models/ticketModel";

const TicketItem = ({ ticket }: { ticket: ticketModel }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        gap: "4rem",
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
    </Box>
  );
};

export default TicketItem;
