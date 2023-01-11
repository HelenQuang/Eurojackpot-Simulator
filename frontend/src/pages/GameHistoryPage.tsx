import axios from "axios";

import { useGetUserInfo } from "../hooks/userHooks";
import Loader from "../components/layout/Loader";
import LotteryHistory from "../components/history/LotteryHistory";

const GameHistoryPage = () => {
  const { isLoading, data, isError, error } = useGetUserInfo();
  const lotteries = data?.data.data.lotteries;

  let errMessage;
  if (axios.isAxiosError(error) && error.response) {
    errMessage = error.response.data.message;
  }

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

      {data && lotteries.length !== 0 ? (
        <LotteryHistory lotteries={lotteries} />
      ) : (
        <p>There is no game history yet.</p>
      )}
    </div>
  );
};

export default GameHistoryPage;
