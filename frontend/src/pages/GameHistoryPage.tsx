import axios from "axios";

import { useGetUserInfo } from "../hooks/userHooks";
import Loader from "../components/layout/Loader";
import LotteryHistory from "../components/history/LotteryHistory";

const GameHistoryPage = () => {
  const userToken = JSON.parse(localStorage.getItem("token")!);

  const { isLoading, data, isError, error } = useGetUserInfo(userToken);

  let errMessage;
  if (axios.isAxiosError(error) && error.response) {
    errMessage = error.response.data.message;
  }

  // let sortedLottery: lotteryModel[] = [];

  // const [sortBy, setSortBy] = useState("new");

  // const changeHandler = (e: SelectChangeEvent) => {
  //   setSortBy(e.target.value as string);
  // };

  // if (sortBy === "old") {
  //   sortedLottery = [...data?.data.data.lotteries].sort(function (a, b) {
  //     return +new Date(a.createdAt) - +new Date(b.createdAt);
  //   });
  // }

  // if (sortBy === "new") {
  //   sortedLottery = [...data?.data.data.lotteries].sort(function (a, b) {
  //     return +new Date(b.createdAt) - +new Date(a.createdAt);
  //   });
  // }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "1rem",
        marginBottom: "1rem",
      }}
    >
      <h2>Game History</h2>

      {isLoading && <Loader />}
      {isError && <p>{errMessage}</p>}

      {data && <LotteryHistory lotteries={data.data.data.lotteries} />}

      {/* <Paper
        elevation={5}
        sx={{
          backgroundColor: "var(--white)",
          padding: "2rem",
          marginTop: "1rem",
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
              onChange={changeHandler}
            >
              <MenuItem value={"new"}>Newest</MenuItem>
              <MenuItem value={"old"}>Oldest</MenuItem>
            </Select>
          </FormControl>
        </Box> */}
      {/* {sortedLottery.map((lotteryGame) => (
          <GameDetails
            key={lotteryGame.createdAt.toString()}
            lotteryGame={lotteryGame}
          />
        ))} */}
      {/* </Paper> */}
    </div>
  );
};

export default GameHistoryPage;
