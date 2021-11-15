import React, { useState } from "react";
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
import login from "../../../images/login.png";
import { ManageAccounts } from "@mui/icons-material";
import { NavLink, useHistory } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const Register = () => {
  const { user, authError, googleSignIn, newUser, isLoading } = useAuth();
  const [loginData, setLoginData] = useState({});

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };

  const history = useHistory();

  const handleRegisterSubmit = (e) => {
    if (loginData.password !== loginData.password2) {
      alert("Password didn't matched");
      return;
    }
    newUser(loginData.name, loginData.email, loginData.password, history);
    e.preventDefault();
  };

  const handleGoogleSignin = () => {
    googleSignIn(history);
  };

  return (
    <Container style={{ marginTop: "99px" }}>
      <Grid container spacing={2} columns={12}>
        <Grid item xs={12} md={6}>
          <img src={login} width="95%" alt="" />
        </Grid>
        <Grid item xs={12} md={6} sx={{ mt: 10 }}>
          <Typography
            variant="h6"
            sx={{
              color: "#3BE4D7",
              fontWeight: "bold",
              textTransform: "uppercase",
              marginTop: "-50px",
              marginBottom: "20px",
            }}
            gutterBottom
          >
            Register
          </Typography>
          <Paper
            elevation={2}
            style={{
              width: "70%",
              margin: "0 auto",
              padding: "30px 20px",
            }}
          >
            {isLoading && <CircularProgress style={{ color: "#3BE4D7" }} />}
            {!isLoading && (
              <form onSubmit={handleRegisterSubmit}>
                <TextField
                  sx={{ width: "90%", m: 1 }}
                  id="standard-basic"
                  label="Your Name"
                  type="name"
                  name="name"
                  required
                  onBlur={handleOnBlur}
                  variant="standard"
                />
                <TextField
                  sx={{ width: "90%", m: 1 }}
                  id="standard-basic"
                  label="Your Email"
                  type="email"
                  name="email"
                  required
                  onBlur={handleOnBlur}
                  variant="standard"
                />
                <TextField
                  sx={{ width: "90%", m: 1 }}
                  id="standard-password-input"
                  label="Password"
                  type="password"
                  name="password"
                  required
                  onBlur={handleOnBlur}
                  autoComplete="current-password"
                  variant="standard"
                />
                <TextField
                  sx={{ width: "90%", m: 1 }}
                  id="standard-password-input"
                  label="Confirm Password"
                  type="password"
                  name="password2"
                  required
                  onBlur={handleOnBlur}
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
                  Register
                </Button>
              </form>
            )}

            <NavLink to="/login" style={{ textDecoration: "none" }}>
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
                Already Registerd? Login here
              </Typography>
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
            </NavLink>
            {user.email && (
              <Alert variant="outlined" severity="success">
                Congrats! Created User Successfully.
              </Alert>
            )}
            {authError && (
              <Alert variant="outlined" severity="error">
                {authError}
              </Alert>
            )}
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Register;
