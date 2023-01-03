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
    </div>
  );
};

export default GameHistoryPage;
