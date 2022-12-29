import React from "react";
import {
  Paper,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material";
import lotteryModel from "../../models/lotteryModel";

const LotteryHistory = ({ lotteries }: { lotteries: lotteryModel[] }) => {
  console.log(lotteries);
  return <div></div>;
};

export default LotteryHistory;
