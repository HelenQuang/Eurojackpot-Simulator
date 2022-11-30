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

import { useAppDispatch, useAppSelector } from "../hooks";

const LogInPage = () => {
  const dispatch = useAppDispatch();

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
      <Box
        my={4}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <TextField required id="email" label="Email Address" sx={{ mb: 3 }} />
        <TextField required id="password" label="Password" type="password" />
        <Button
          variant="contained"
          sx={{ my: 3, fontWeight: "bold" }}
          endIcon={<SendOutlinedIcon />}
          type="submit"
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
