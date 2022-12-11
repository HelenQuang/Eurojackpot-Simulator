import { useQuery } from "react-query";
import axios from "axios";

export const useUserProfile = (userId: string) => {
  return useQuery(
    ["user-profile", userId],
    () => {
      return axios.get(`/api/v1/users/${userId}`);
    },
    { refetchOnMount: false, refetchOnWindowFocus: false }
  );
};
