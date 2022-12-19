import { useState, useEffect } from "react";
import axios from "axios";
import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
} from "@mui/material";
import { useStripeTransaction } from "../hooks/lotteryHooks";
import Loader from "../components/layout/Loader";

const topupAmount = [
  { id: "price_1MAZdbJSeoXs5toMHxhk6MwL", amount: "10" },
  { id: "price_1MAZe1JSeoXs5toM2Yi5vcQT", amount: "20" },
  { id: "price_1MAZeHJSeoXs5toMtfJ7guNr", amount: "30" },
  { id: "price_1MAZeWJSeoXs5toMZR8oFML8", amount: "50" },
];

const TransactionPage = () => {
  const [selectedAmount, setSelectedAmount] = useState<string>("10");
  const [errMessage, setErrMessage] = useState<string | null>(null);

  const selectedAmountId = topupAmount.find(
    (item) => item.amount === selectedAmount
  )!.id;

  const { mutate, isLoading, isError, isSuccess, data, error } =
    useStripeTransaction();

  // if (axios.isAxiosError(error) && error.response) {
  //   setErrMessage(error.response.data.message);
  // }

  const userInfo = JSON.parse(localStorage.getItem("userInfo")!);

  const createTransaction = () => {
    mutate(selectedAmountId);
  };

  useEffect(() => {
    if (isSuccess) {
      window.open(data.data.url, "_blank");
    }
  }, [isSuccess]);

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
      <h2>Topup Money</h2>
      {isLoading && <Loader />}
      {/* {isError && <p>{errMessage}</p>} */}
      <FormControl>
        <FormLabel id="top-up" style={{ marginBottom: "1rem" }}>
          Please select the amount of money you want to topup
        </FormLabel>
        <RadioGroup
          aria-labelledby="top-up"
          defaultValue="10"
          style={{ alignItems: "center" }}
          onChange={(e) => setSelectedAmount(e.target.value)}
        >
          {topupAmount.map((amount) => (
            <FormControlLabel
              key={amount.id}
              value={amount.amount}
              control={<Radio />}
              label={`${amount.amount} Euros`}
            />
          ))}
        </RadioGroup>
      </FormControl>
      <Button variant="contained" type="submit" onClick={createTransaction}>
        Pay with Stripe
      </Button>
    </div>
  );
};

export default TransactionPage;
