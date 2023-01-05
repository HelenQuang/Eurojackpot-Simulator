import { useState } from "react";
import lotteryModel from "../../../models/lotteryModel";
import LotteryHistoryDetails from "../../history/LotteryHistoryDetails";

import { Dialog, DialogTitle } from "@mui/material";

const LotteryResult = ({ lotteryResult }: { lotteryResult: lotteryModel }) => {
  const [open, setOpen] = useState<boolean>(true);
  return (
    <Dialog
      open={window.innerWidth > 900 && open}
      onClose={() => {
        setOpen(false);
      }}
      aria-labelledby="lottery result modal"
      aria-describedby="lottery result modal"
      sx={{
        display: { xs: "none", md: "flex" },
        justifyContent: "center",
        alignItems: "center",
      }}
      fullWidth={true}
      maxWidth="xl"
    >
      <DialogTitle>
        <strong>Thank you for playing with us!</strong>
      </DialogTitle>
      <LotteryHistoryDetails lottery={lotteryResult} />
    </Dialog>
  );
};

export default LotteryResult;
