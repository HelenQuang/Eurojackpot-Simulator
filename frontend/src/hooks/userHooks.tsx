import { useMutation, useQuery } from "react-query";
import axios from "axios";

const login = ({ email, password }: { email: string; password: string }) => {
  return axios.post(
    "/api/v1/users/login",
    { email, password },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
};

const signup = ({
  name,
  email,
  password,
  passwordConfirm,
}: {
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
}) => {
  return axios.post(
    "/api/v1/users/signup",
    { name, email, password, passwordConfirm },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
};

const getUserInfo = (userToken: string) => {
  return axios.get("/api/v1/users/me", {
    headers: { Authorization: `Bearer ${userToken}` },
  });
};

const updateTransaction = ({
  userToken,
  selectedAmount,
}: {
  userToken: string;
  selectedAmount: string;
}) => {
  return axios.post(
    "/api/v1/users/updateTransaction",
    { amount: selectedAmount },
    {
      headers: { Authorization: `Bearer ${userToken}` },
    }
  );
};

export const useUserLogin = () => {
  return useMutation(login);
};

export const useUserSignup = () => {
  return useMutation(signup);
};

export const useGetUserInfo = (token: string) => {
  return useQuery(["userInfo", token], () => getUserInfo(token));
};

export const useUpdateTransaction = () => {
  return useMutation(updateTransaction);
};
