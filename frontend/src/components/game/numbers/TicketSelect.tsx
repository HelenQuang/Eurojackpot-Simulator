import { useState } from "react";
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
  const [mainNum, setMainNum] = useState<number[]>([]);
  const [starNum, setStarNum] = useState<number[]>([]);
  const [maxMainNum, setMaxMainNum] = useState<boolean>(false);
  const [maxStarNum, setMaxStarNum] = useState<boolean>(false);

  const autoGenerateHandler = () => {
    const randomTicket = generateLottery();
    console.log(randomTicket);
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
          // onClick={autoGenerateHandler}
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
      >
        Pay 20.00 €
      </Button>
    </div>
  );
};

export default TicketSelect;
