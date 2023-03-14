import { useState } from "react";
import {
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
   <>
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
      

        {sortedLottery.map((lottery) => (
          <LotteryHistoryDetails key={lottery._id} lottery={lottery} />
        ))}
    </>
  );
};

export default LotteryHistory;
