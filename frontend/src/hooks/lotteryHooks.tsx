import { useMutation } from "react-query";
import axios from "axios";
import ticketModel from "../models/ticketModel";

const createStripeTransaction = ({
  amountId,
  userToken,
}: {
  amountId: string;
  userToken: string;
}) => {
  return axios.post(
    "/api/v1/lotteries/createTransaction",
    { id: amountId },
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userToken}`,
      },
    }
  );
};

const submitNewTickets = (tickets: ticketModel[]) => {
  return axios.post(
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
