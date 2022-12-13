import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  Box,
  TextField,
  Avatar,
  Typography,
  Button,
  Link,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";

import { useUserLogin } from "../hooks/userHooks";
import Loader from "../components/layout/Loader";

const LogInPage = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();
  const { mutate, isLoading, isSuccess, isError, error, data } = useUserLogin();

  const submitHandler = () => {
    mutate({ email, password });
  };

  useEffect(() => {
    if (isSuccess) {
      localStorage.setItem("token", JSON.stringify(data.data.token));
      localStorage.setItem("userInfo", JSON.stringify(data.data.data.user));
      navigate("/");
    }
  }, [isSuccess]);

  let errMessage;
  if (axios.isAxiosError(error) && error.response) {
    errMessage = error.response.data.message;
  }

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
        Log In
      </Typography>
      {isLoading && <Loader />}
      {isError && <p>{errMessage}</p>}
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
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <Button
          variant="contained"
          sx={{ my: 3, fontWeight: "bold" }}
          endIcon={<SendOutlinedIcon />}
          onClick={submitHandler}
        >
          Log In
        </Button>

        <Link href="/signup" variant="body2">
          {"Don't have an account? Sign Up"}
        </Link>
      </Box>
    </Box>
  );
};

export default LogInPage;
