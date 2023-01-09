import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { Box, TextField, Avatar, Typography, Button } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";

import Loader from "../components/layout/Loader";
import { useUserSignup } from "../hooks/userHooks";

const SignUpPage = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordConfirm, setPasswordConfirm] = useState<string>("");
  const [errMessage, setErrMessage] = useState<string | null>();

  const navigate = useNavigate();
  const { mutate, isLoading, isSuccess, isError, error, data } =
    useUserSignup();

  const isEmail = (email: string) => {
    return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);
  };

  const submitHandler = () => {
    if (password.length < 8 || passwordConfirm.length < 8) {
      setErrMessage("Password must be at least 8 characters.");
    }

    if (password !== passwordConfirm) {
      setErrMessage("Passwords do not match. Please try again!");
    }

    if (!isEmail(email)) {
      setErrMessage("Please enter a valid email address.");
    }

    if (password === passwordConfirm && isEmail(email)) {
      mutate({ name, email, password, passwordConfirm });
    }
  };

  useEffect(() => {
    if (isSuccess) {
      localStorage.setItem("token", JSON.stringify(data.data.token));
      localStorage.setItem("userInfo", JSON.stringify(data.data.data.user));
      navigate("/");
    } else if (axios.isAxiosError(error)) {
      setErrMessage("There is connecting error. Please try again later!");
    }
  }, [isSuccess, isError]);

  return (
    <Box
      component="form"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
      noValidate
      autoComplete="off"
    >
      <Avatar sx={{ m: 1, bgcolor: "var(--bg-purple)", color: "var(--black)" }}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h6" sx={{ fontWeight: "bold" }}>
        Sign Up
      </Typography>
      {isLoading && <Loader />}
      {errMessage && <p>{errMessage}</p>}
      {/* {errMessage && <p>{errMessage}</p>} */}
      <Box
        my={4}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <TextField
          required
          id="name"
          label="Name"
          sx={{ mb: 3 }}
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <TextField
          required
          id="email"
          label="Email Address"
          sx={{ mb: 3 }}
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <TextField
          required
          id="password"
          label="Password"
          type="password"
          sx={{ mb: 3 }}
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <TextField
          required
          id="confirm-password"
          label="Confirm Password"
          type="password"
          value={passwordConfirm}
          onChange={(e) => {
            setPasswordConfirm(e.target.value);
          }}
        />
        <Button
          variant="contained"
          sx={{ mt: 3, fontWeight: "bold" }}
          endIcon={<SendOutlinedIcon />}
          onClick={submitHandler}
        >
          Sign Up
        </Button>
      </Box>
    </Box>
  );
};

export default SignUpPage;
