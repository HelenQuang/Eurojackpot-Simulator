import { useState } from "react";
import { Dispatch, SetStateAction } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

import MainNumberTable from "./MainNumberTable";
import StarNumberTable from "./StarNumberTable";
import ticketModel from "../../../models/ticketModel";
import generateLottery from "../../../utils/generateLottery";
import { useSubmitNewLottery } from "../../../hooks/lotteryHooks";

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
  const navigate = useNavigate();
  const [mainNum, setMainNum] = useState<number[]>([]);
  const [starNum, setStarNum] = useState<number[]>([]);
  const [maxMainNum, setMaxMainNum] = useState<boolean>(false);
  const [maxStarNum, setMaxStarNum] = useState<boolean>(false);

  const userInfo = JSON.parse(localStorage.getItem("userInfo")!);
  const addTicketBtnActive = maxMainNum && maxStarNum;
  const payBtnActive = newTickets.length === 0 ? false : true;

  const { mutate, isLoading, isError, isSuccess, data, error } =
    useSubmitNewLottery();

  const addTicketHandler = (ticket: ticketModel) => {
    if (userInfo) {
      setNewTickets([...newTickets, ticket]);
    }
  };

  const payTicketHandler = () => {
    if (!userInfo) {
      navigate("/login");
      alert("Please login before paying the lottery tickets.");
    } else {
      mutate(newTickets);
      console.log(data);
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
          disabled={!addTicketBtnActive}
          onClick={() =>
            addTicketHandler({
              mainNum: mainNum,
              starNum: starNum,
              _id: uuidv4(),
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
        style={{ borderColor: "var(--purple)", color: "var(--purple)" }}
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
        Pay {newTickets.length * 2}.00 €
      </Button>
    </div>
  );
};

export default TicketSelect;
