import { useState, useEffect } from "react";
import { Dispatch, SetStateAction } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

import MainNumberTable from "./MainNumberTable";
import StarNumberTable from "./StarNumberTable";
import LotteryResult from "../lotteries/LotteryResult";
import ticketModel from "../../../models/ticketModel";
import lotteryModel from "../../../models/lotteryModel";
import generateLottery from "../../../utils/generateLottery";
import { useGetUserInfo } from "../../../hooks/userHooks";
import { useSubmitNewTickets } from "../../../hooks/lotteryHooks";

import { Button } from "@mui/material";
import ShuffleOnRoundedIcon from "@mui/icons-material/ShuffleOnRounded";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CachedIcon from "@mui/icons-material/Cached";
import AddIcon from "@mui/icons-material/Add";

const TicketSelect = ({
  newTickets,
  setNewTickets,
}: {
  newTickets: ticketModel[];
  setNewTickets: Dispatch<SetStateAction<ticketModel[]>>;
}) => {
  const [mainNum, setMainNum] = useState<number[]>([]);
  const [starNum, setStarNum] = useState<number[]>([]);
  const [maxMainNum, setMaxMainNum] = useState<boolean>(false);
  const [maxStarNum, setMaxStarNum] = useState<boolean>(false);
  const [lotteryResult, setLotteryResult] = useState<lotteryModel | null>();

  const { data: userInfo } = useGetUserInfo();

  const addTicketBtnActive = maxMainNum && maxStarNum;
  const payBtnActive = newTickets.length === 0 ? false : true;
  const payAmount = newTickets.length * 2;

  const { mutate: submitNewTickets, data } = useSubmitNewTickets();

  const addTicketHandler = (ticket: ticketModel) => {
    const sortedMainNum = ticket.mainNum.sort((a, b) => a - b);
    const sortedStarNum = ticket.starNum.sort((a, b) => a - b);
    setNewTickets([
      ...newTickets,
      { mainNum: sortedMainNum, starNum: sortedStarNum, id: ticket.id },
    ]);
    setMainNum([]);
    setStarNum([]);
  };

  const payTicketHandler = () => {
    if (!userInfo) {
      alert("Please login before paying the lottery tickets.");
    }

    if (userInfo && userInfo.data.data.gameAccount >= payAmount) {
      submitNewTickets(newTickets);
    } else if (userInfo && userInfo.data.data.gameAccount < payAmount) {
      alert(
        "There is not enough money in your game account to pay the lottery. Please top up the money before continue."
      );
    }
  };

  useEffect(() => {
    setLotteryResult(data?.data.data.data);
    setNewTickets([]);
  }, [data]);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <MainNumberTable
        mainNum={mainNum}
        setMainNum={setMainNum}
        maxMainNum={maxMainNum}
        setMaxMainNum={setMaxMainNum}
      />
      <StarNumberTable
        starNum={starNum}
        setStarNum={setStarNum}
        maxStarNum={maxStarNum}
        setMaxStarNum={setMaxStarNum}
      />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "1rem",
        }}
      >
        <Button
          variant="outlined"
          type="button"
          startIcon={<CachedIcon />}
          style={{ borderColor: "var(--purple)", color: "var(--purple)" }}
          onClick={() => {
            setMainNum([]);
            setStarNum([]);
          }}
        >
          Select ticket again
        </Button>
        <Button
          variant="outlined"
          type="button"
          startIcon={<AddIcon />}
          style={{
            border: "solid 1px",
            borderColor: "var(--purple)",
            color: "var(--purple)",
          }}
          disabled={!addTicketBtnActive}
          onClick={() =>
            addTicketHandler({
              mainNum: mainNum,
              starNum: starNum,
              id: uuidv4(),
            })
          }
        >
          Add ticket
        </Button>
      </div>
      <Button
        variant="outlined"
        type="button"
        startIcon={<ShuffleOnRoundedIcon />}
        style={{
          borderColor: "var(--purple)",
          color: "var(--purple)",
        }}
        onClick={() => addTicketHandler(generateLottery())}
      >
        Auto generate ticket
      </Button>
      <Button
        variant="contained"
        type="button"
        startIcon={<ShoppingCartIcon />}
        style={{
          margin: "1rem 0",
          backgroundColor: "var(--green)",
          fontWeight: 600,
          fontSize: "1.1rem",
        }}
        disabled={!payBtnActive}
        onClick={payTicketHandler}
      >
        Pay {payAmount}.00 €
      </Button>
      {lotteryResult && <LotteryResult lotteryResult={lotteryResult} />}
    </div>
  );
};

export default TicketSelect;
