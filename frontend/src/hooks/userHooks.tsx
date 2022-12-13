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

export const useUserLogin = () => {
  return useMutation(login);
};

export const useUserSignup = () => {
  return useMutation(signup);
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
