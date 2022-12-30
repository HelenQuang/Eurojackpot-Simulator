import { useState } from "react";
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
import LotteryHistoryDetails from "./LotteryHistoryDetails";

const LotteryHistory = ({ lotteries }: { lotteries: lotteryModel[] }) => {
  let sortedLottery: lotteryModel[] = [];

  const [sortBy, setSortBy] = useState("newest");

  if (sortBy === "oldest") {
    sortedLottery = [...lotteries].sort(function (a, b) {
      return +new Date(a.playAt) - +new Date(b.playAt);
    });
  }
  if (sortBy === "newest") {
    sortedLottery = [...lotteries].sort(function (a, b) {
      return +new Date(b.playAt) - +new Date(a.playAt);
    });
  }

  return (
    <div>
      <Paper
        elevation={6}
        sx={{
          backgroundColor: "var(--white)",
          padding: "2rem",
          // width: "45rem",
          // marginTop: "1rem",
        }}
      >
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel id="sortBy">Sort By</InputLabel>
            <Select
              labelId="sortBySelect"
              id="sortBySelect"
              value={sortBy}
              label="Sort By"
              onChange={(event: SelectChangeEvent) => {
                setSortBy(event.target.value as string);
              }}
            >
              <MenuItem value={"newest"}>Newest</MenuItem>
              <MenuItem value={"oldest"}>Oldest</MenuItem>
            </Select>
          </FormControl>
        </Box>

        {sortedLottery.map((lottery) => (
          <LotteryHistoryDetails key={lottery._id} lottery={lottery} />
        ))}
      </Paper>
    </div>
  );
};

export default LotteryHistory;
