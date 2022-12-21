import { useQuery, useMutation } from "react-query";
import axios from "axios";

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

export const useStripeTransaction = () => {
  return useMutation(createStripeTransaction);
};
