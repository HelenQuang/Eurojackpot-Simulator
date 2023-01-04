import { Dispatch, SetStateAction } from "react";
import lotteryModel from "../../../models/lotteryModel";
import LotteryHistoryDetails from "../../history/LotteryHistoryDetails";

import { Dialog, DialogTitle } from "@mui/material";

const LotteryResult = ({
  lotteryResult,
  showLotteryResult,
  setShowLotteryResult,
}: {
  lotteryResult: lotteryModel;
  showLotteryResult: boolean;
  setShowLotteryResult: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <Dialog
      open={window.innerWidth > 900 && showLotteryResult}
      onClose={() => {
        setShowLotteryResult(false);
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
      <DialogTitle>ABC</DialogTitle>
      <LotteryHistoryDetails lottery={lotteryResult} />
    </Dialog>
  );
};

export default LotteryResult;
