import { KeyboardArrowRight } from "@mui/icons-material";
import { Alert, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import useAuth from "../../../hooks/useAuth";

const MakeAdmin = () => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const { token } = useAuth();

  const handleAdminSubmit = (e) => {
    const user = { email };
    fetch("http://localhost:9999/users/admin", {
      method: "PUT",
      headers: {
        authorization: `Bearer ${token}`,
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          setSuccess(true);
          setEmail("");
          console.log(data);
        }
      });

    e.preventDefault();
  };
  const handleOnBlur = (e) => {
    setEmail(e.target.value);
  };

  return (
    <div>
      <Typography
        variant="h5"
        sx={{
          marginTop: "20px",
          marginBottom: "20px",
          color: "#3BE4D6",
          textTransform: "uppercase",
          fontWeight: "500",
        }}
      >
        Make me an admin
      </Typography>

      <form onSubmit={handleAdminSubmit}>
        <TextField
          variant="standard"
          type="email"
          sx={{ width: "20%" }}
          onBlur={handleOnBlur}
          label="Email"
        ></TextField>
        <br />
        <Button
          variant="contained"
          sx={{
            color: "white",
            fontWeight: "bolder",
            textTransform: "uppercase",
            borderRadius: "2px",
            boxShadow: 0,
            padding: "7px 20px",
            marginTop: "20px",
            background: "linear-gradient(90deg, #17D2BA 0%, #11D0E2 100%)",
          }}
          type="submit"
          endIcon={<KeyboardArrowRight />}
        >
          Make Admin
        </Button>
      </form>
      {success && (
        <Alert
          sx={{ width: "20%", margin: "20px auto" }}
          variant="outlined"
          severity="success"
        >
          Admin Create Succesfully!!!
        </Alert>
      )}
    </div>
  );
};

export default MakeAdmin;
