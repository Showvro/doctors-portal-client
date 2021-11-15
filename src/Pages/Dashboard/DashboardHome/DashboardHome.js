import React from "react";
import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import Calender from "../../Shared/Calender/Calender";
import Appoinments from "../Dashboard/Appionments/Appoinments";

const DashboardHome = () => {
  const [date, setDate] = React.useState(new Date());
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Calender date={date} setDate={setDate} />
        </Grid>
        <Grid item xs={12} md={6}>
          <Appoinments date={date} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default DashboardHome;
