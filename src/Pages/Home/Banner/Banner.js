import React from "react";
import chair from "../../../images/chair.png";
import bg from "../../../images/bg.png";
import { Button, Container, Grid, Typography } from "@mui/material";
import { KeyboardArrowRight } from "@mui/icons-material";
import { Box } from "@mui/system";

const bannerBg = {
  background: `url(${bg})`,
  overflow: "hidden",
  marginTop: "20px",
};

const verticalCenter = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  height: 550,
};

const Banner = () => {
  return (
    <Container sx={{ flexGrow: 1 }} style={bannerBg}>
      <Grid container spacing={2}>
        <Grid item xs={10} md={5} sx={{ ...verticalCenter, textAlign: "left" }}>
          <Box>
            <Typography
              variant="h3"
              sx={{ fontWeight: "700", color: "#131313" }}
            >
              Your New Smile <br /> Starts Here
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: "#CACACA",
                fontWeight: 300,
              }}
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Voluptatum laudantium cum hic, repudiandae consectetur dolores!
              Iusto maiores dolorem voluptatum nulla.
            </Typography>
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
        <Grid item xs={12} md={7} style={verticalCenter}>
          <img src={chair} width="650px" alt="chair" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Banner;
