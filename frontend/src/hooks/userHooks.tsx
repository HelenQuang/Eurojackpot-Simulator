import { useMutation, useQuery } from 'react-query';
import axios from 'axios';

const login = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  return await axios.post(
    '/api/v1/users/login',
    { email, password },
    {
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
};

const signup = async ({
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
  return await axios.post(
    '/api/v1/users/signup',
    { name, email, password, passwordConfirm },
    {
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
};

const logout = async () => {
  return await axios.post('/api/v1/users/logout', {
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

const getUserInfo = async () => {
  return await axios.get('/api/v1/users/me');
};

const updateTransaction = async (selectedAmount: string) => {
  return await axios.post('/api/v1/users/updateTransaction', {
    amount: selectedAmount,
  });
};

export const useUserLogin = () => {
  return useMutation(login);
};

export const useUserSignup = () => {
  return useMutation(signup);
};

export const useUserLogout = () => {
  return useMutation(logout);
};

export const useGetUserInfo = (isAuthenticate: boolean) => {
  return useQuery(['userInfo'], () => getUserInfo(), {
    retry: 2,
    enabled: isAuthenticate,
  });
};

export const useUpdateTransaction = () => {
  return useMutation(updateTransaction);
};
