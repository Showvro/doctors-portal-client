import { ManageAccounts } from "@mui/icons-material";
import {
  Alert,
  Button,
  CircularProgress,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import login from "../../../images/login.png";

const Login = () => {
  const [loginData, setLoginData] = useState({});
  const { user, logIn, googleSignIn, isLoading, authError } = useAuth();

  const history = useHistory();

  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };
  const handleLoginSubmit = (e) => {
    logIn(loginData.email, loginData.password, history);
    e.preventDefault();
  };

  const handleGoogleSignin = () => {
    googleSignIn(history);
  };
  return (
    <Container style={{ marginTop: "99px" }}>
      <Grid container spacing={2} columns={12}>
        <Grid item xs={12} md={6} sx={{ mt: 10 }}>
          <Typography
            variant="h6"
            sx={{
              color: "#3BE4D7",
              fontWeight: "bold",
              textTransform: "uppercase",
              marginY: 5,
            }}
            gutterBottom
          >
            Login
          </Typography>
          <Paper
            elevation={2}
            style={{ width: "70%", margin: "10px auto", padding: "30px 20px" }}
          >
            {isLoading && <CircularProgress style={{ color: "#3BE4D7" }} />}
            {!isLoading && (
              <form onSubmit={handleLoginSubmit}>
                <TextField
                  sx={{ width: "90%", m: 1 }}
                  id="standard-basic"
                  label="Your Email"
                  type="email"
                  required
                  name="email"
                  onChange={handleOnChange}
                  variant="standard"
                />
                <TextField
                  sx={{ width: "90%", m: 1 }}
                  id="standard-password-input"
                  label="Password"
                  required
                  type="password"
                  name="password"
                  onChange={handleOnChange}
                  autoComplete="current-password"
                  variant="standard"
                />
                <Button
                  variant="contained"
                  type="submit"
                  sx={{
                    color: "white",
                    fontWeight: "bold",
                    textTransform: "uppercase",
                    borderRadius: "2px",
                    boxShadow: 0,
                    width: "50%",
                    padding: "10px 20px",
                    marginTop: "30px",
                    background:
                      "linear-gradient(90deg, #17D2BA 0%, #11D0E2 100%)",
                  }}
                  endIcon={<ManageAccounts />}
                >
                  Sign in
                </Button>
              </form>
            )}

            <NavLink to="/register" style={{ textDecoration: "none" }}>
              <Typography
                display="block"
                variant="button"
                sx={{
                  color: "#3BE4D7",
                  marginTop: "20px",
                  marginX: "auto",
                  fontWeight: "bold",
                  textTransform: "uppercase",
                }}
              >
                New Here? Go to Register
              </Typography>
            </NavLink>
            <Button
              onClick={handleGoogleSignin}
              sx={{
                color: "#3BE4D7",
                fontWeight: "bold",
                textTransform: "uppercase",
              }}
            >
              Google SignIn
            </Button>
            {user.email && (
              <Alert variant="outlined" severity="success">
                Login Successfull!!!
              </Alert>
            )}
            {authError && (
              <Alert variant="outlined" severity="error">
                {authError}
              </Alert>
            )}
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <img src={login} width="95%" alt="" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
