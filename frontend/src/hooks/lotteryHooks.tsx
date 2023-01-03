import { useMutation } from "react-query";
import axios from "axios";
import ticketModel from "../models/ticketModel";

const createStripeTransaction = (amountId: string) => {
  return axios.post(
    "/api/v1/lotteries/createTransaction",
    { id: amountId },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
};

const submitNewLottery = (tickets: ticketModel[]) => {
  return axios.post(
    "/api/v1/lotteries/",
    { tickets },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
};

export const useStripeTransaction = () => {
  return useMutation(createStripeTransaction);
};

export const useSubmitNewLottery = () => {
  return useMutation(submitNewLottery);
};
