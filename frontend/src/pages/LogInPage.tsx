import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import {
  Box,
  TextField,
  Avatar,
  Typography,
  Button,
  Link,
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';

import { useUserLogin } from '../hooks/userHooks';
import Loader from '../components/layout/Loader';

const LogInPage = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [errMessage, setErrMessage] = useState<string | null>();
  const navigate = useNavigate();
  const { mutate, isLoading, isSuccess, isError, error, data } = useUserLogin();

  const isEmail = (email: string) => {
    return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);
  };

  const submitHandler = () => {
    if (password.length < 8) {
      setErrMessage('Password must be at least 8 characters.');
    }

    if (!isEmail(email)) {
      setErrMessage('Please enter a valid email address.');
    }

    if (password.length >= 8 && isEmail(email)) {
      mutate({ email, password });
    }
  };

  useEffect(() => {
    if (isSuccess) {
      Cookies.set('isAuthenticated', 'true');
      navigate('/');
    } else if (axios.isAxiosError(error)) {
      setErrMessage('There is connecting error. Please try again later!');
    }
  }, [isSuccess, navigate, isError]);

  return (
    <Box
      component='form'
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
      noValidate
      autoComplete='off'
    >
      <Avatar sx={{ m: 1, bgcolor: 'var(--bg-purple)', color: 'var(--black)' }}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component='h1' variant='h6' sx={{ fontWeight: 'bold' }}>
        Log In
      </Typography>
      {isLoading && <Loader />}
      {errMessage && <p>{errMessage}</p>}
      <Box
        my={4}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <TextField
          required
          id='email'
          label='Email Address'
          sx={{ mb: 3 }}
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <TextField
          required
          id='password'
          label='Password'
          type='password'
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <Button
          variant='contained'
          sx={{ my: 3, fontWeight: 'bold' }}
          endIcon={<SendOutlinedIcon />}
          onClick={submitHandler}
        >
          Log In
        </Button>

        <Link href='/signup' variant='body2'>
          {"Don't have an account? Sign Up"}
        </Link>
      </Box>
    </Box>
  );
};

export default LogInPage;
