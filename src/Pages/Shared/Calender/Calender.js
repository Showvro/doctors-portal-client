import React from "react";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import StaticDatePicker from "@mui/lab/StaticDatePicker";
import { Box } from "@mui/system";

const Calender = ({ date, setDate }) => {
  return (
    <Box>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <StaticDatePicker
          displayStaticWrapperAs="desktop"
          openTo="day"
          value={date}
          onChange={(newValue) => {
            setDate(newValue);
          }}
        />
      </LocalizationProvider>
    </Box>
  );
};

export default Calender;
