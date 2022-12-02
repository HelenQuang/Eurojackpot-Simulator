import { useState } from "react";
import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  CircularProgress,
  Alert,
} from "@mui/material";

const topupAmount = [
  { id: "price_1MAZdbJSeoXs5toMHxhk6MwL", amount: "10" },
  { id: "price_1MAZe1JSeoXs5toM2Yi5vcQT", amount: "20" },
  { id: "price_1MAZeHJSeoXs5toMtfJ7guNr", amount: "30" },
  { id: "price_1MAZeWJSeoXs5toMZR8oFML8", amount: "50" },
];

const TransactionPage = () => {
  const [selectedAmount, setSelectedAmount] = useState<string>("10");

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
      <FormControl>
        <FormLabel id="top-up" style={{ marginBottom: "1rem" }}>
          Please select the amount of money you want to topup
        </FormLabel>
        <RadioGroup
          aria-labelledby="top-up"
          defaultValue="10"
          style={{ alignItems: "center" }}
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
    </div>
  );
};

export default TransactionPage;
