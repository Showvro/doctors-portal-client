import React from "react";
import { Container, Grid, Typography } from "@mui/material";
import Calender from "../../Shared/Calender/Calender";
import chair from "../../../images/chair.png";
import bg from "../../../images/bg.png";
import { Box } from "@mui/system";

const AppoinmentHeroStyle = {
  background: `url(${bg})`,
  marginTop: "30px",
  marginBottom: "10px",
  paddingTop: "30px",
  paddingBottom: "30px",
};

const AppoinmentHero = ({ date, setDate }) => {
  return (
    <Box style={AppoinmentHeroStyle}>
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} md={5}>
            <Typography
              variant="h5"
              sx={{
                color: "#3BE4D9",
                fontWeight: "bold",
                textAlign: "start",
                marginTop: "50px",
                marginLeft: "95px",
              }}
            >
              Appionment
            </Typography>
            <Calender date={date} setDate={setDate} />
          </Grid>
          <Grid item xs={12} md={7}>
            <img src={chair} style={{ width: "100%" }} alt="" />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AppoinmentHero;
