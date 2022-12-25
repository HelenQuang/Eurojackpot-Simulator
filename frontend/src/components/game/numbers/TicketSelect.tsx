import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

import MainNumberTable from "./MainNumberTable";
import StarNumberTable from "./StarNumberTable";
import lotteryModel from "../../../models/lotteryModel";
import generateLottery from "../../../utils/generateLottery";

import { Button } from "@mui/material";
import ShuffleOnRoundedIcon from "@mui/icons-material/ShuffleOnRounded";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CachedIcon from "@mui/icons-material/Cached";
import AddIcon from "@mui/icons-material/Add";

const TicketSelect = () => {
  const navigate = useNavigate();
  const [mainNum, setMainNum] = useState<number[]>([]);
  const [starNum, setStarNum] = useState<number[]>([]);
  const [maxMainNum, setMaxMainNum] = useState<boolean>(false);
  const [maxStarNum, setMaxStarNum] = useState<boolean>(false);

  const userInfo = JSON.parse(localStorage.getItem("userInfo")!);

  const autoGenerateHandler = () => {
    const randomTicket = generateLottery();
    if (userInfo) {
      // userInfo["lotteries"] = [...userInfo.lotteries, randomTicket];
      console.log(userInfo.lotteries);
      localStorage.setItem("userInfo", JSON.stringify(userInfo));
    }
  };

  const addTicketHandler = () => {
    const normalTicket = { mainNum: mainNum, starNum: starNum };
    if (userInfo) {
      userInfo["lotteries"] = normalTicket;
      localStorage.setItem("userInfo", JSON.stringify(userInfo));
    }
  };

  const payTicketHandler = () => {
    if (!userInfo) {
      navigate("/login");
      alert("Please login before paying the lottery tickets.");
    } else {
      console.log(userInfo.lotteries);
      console.log("Pay ticket");
    }
  };

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
          style={{ borderColor: "var(--purple)", color: "var(--purple)" }}
          onClick={addTicketHandler}
        >
          Add ticket
        </Button>
      </div>
      <Button
        variant="outlined"
        type="button"
        startIcon={<ShuffleOnRoundedIcon />}
        style={{ borderColor: "var(--purple)", color: "var(--purple)" }}
        onClick={autoGenerateHandler}
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
          fontSize: "1.2rem",
        }}
        onClick={payTicketHandler}
      >
        Pay 20.00 €
      </Button>
    </div>
  );
};

export default TicketSelect;
