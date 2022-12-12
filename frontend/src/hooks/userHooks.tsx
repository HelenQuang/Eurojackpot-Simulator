import { useQuery, useMutation } from "react-query";
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

export const useUserLogin = () => {
  return useMutation(login);
};

export const useUserProfile = (userId: string) => {
  return useQuery(
    ["user-profile", userId],
    () => {
      return axios.get(`/api/v1/users/${userId}`);
    },
    { refetchOnMount: false, refetchOnWindowFocus: false }
  );
};
