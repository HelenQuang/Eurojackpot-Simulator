import { useMutation } from "react-query";
import axios from "axios";
import ticketModel from "../models/ticketModel";

const createStripeTransaction = async (amountId: string) => {
  return await axios.post(
    "/api/v1/lotteries/createTransaction",
    { id: amountId },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
};

const submitNewTickets = async (tickets: ticketModel[]) => {
  return await axios.post(
    "/api/v1/lotteries",
    { tickets },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
};

export const useCreateStripeTransaction = () => {
  return useMutation(createStripeTransaction);
};

export const useSubmitNewTickets = () => {
  return useMutation(submitNewTickets);
};
