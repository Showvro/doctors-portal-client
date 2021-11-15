import { Button, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import doctor from "../../../images/doctor.png";
import bg from "../../../images/appointment-bg.png";
import { KeyboardArrowRight } from "@mui/icons-material";

const appointmentBanner = {
  background: `url(${bg})`,
  backgroundColor: "rgba(45, 58, 74, .8)",
  backgroundBlendMode: "darken, luminosity",
  marginTop: "150px",
  padding: "30px",
};

const AppoinmentBanner = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} style={appointmentBanner}>
        <Grid item xs={12} md={4}>
          <img
            src={doctor}
            style={{
              width: "500px",
              marginTop: "-160px",
            }}
            alt=""
          />
        </Grid>
        <Grid
          item
          xs={12}
          md={8}
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            textAlign: "left",
          }}
        >
          <Box>
            <Typography
              variant="h6"
              sx={{
                textTransform: "uppercase",
                color: "#3BE4D7",
                fontWeight: "bold",
                marginBottom: "40px",
                marginLeft: "4px",
              }}
            >
              Appoinment
            </Typography>
            <Typography
              variant="h3"
              width="80%"
              sx={{
                color: "#fff",
                fontWeight: 500,
              }}
            >
              Make an Appoinment Today
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: "#fff",
                fontWeight: "300",
                width: "75%",
                marginY: "35px",
              }}
            >
              It is a long established fact that a reader will be distractedbv
              the readable content of a page when looking at its
            </Typography>
            {/*
             */}
            <Button
              variant="contained"
              sx={{
                color: "white",
                fontSize: "20px",
                fontWeight: "bolder",
                borderRadius: "2px",
                boxShadow: 0,
                padding: "10px 20px",
                marginTop: "20px",
                background: "linear-gradient(90deg, #17D2BA 0%, #11D0E2 100%)",
              }}
              endIcon={<KeyboardArrowRight />}
            >
              Learn More
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AppoinmentBanner;
