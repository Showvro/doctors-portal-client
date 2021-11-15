import { Alert, Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import Booking from "../Booking/Booking";

const bookings = [
  {
    id: "1",
    name: "Teeth Orthodontics",
    time: "8:00 AM - 9:00 AM",
    space: "10 SPACES AVAILABLE",
  },
  {
    id: "2",
    name: "Cosmetic Dentistry",
    time: "10:05 AM - 11:30 AM",
    space: "10 SPACES AVAILABLE",
  },
  {
    id: "3",
    name: "Teeth Cleaning",
    time: "5:00 PM - 6:30 PM",
    space: "10 SPACES AVAILABLE",
  },
  {
    id: "4",
    name: "Cavity Protection",
    time: "7:00 AM - 8:30 AM",
    space: "10 SPACES AVAILABLE",
  },
  {
    id: "5",
    name: "Teeth Orthodontics",
    time: "8:00 AM - 9:00 AM",
    space: "10 SPACES AVAILABLE",
  },
  {
    id: "6",
    name: "Teeth Orthodontics",
    time: "8:00 AM - 9:00 AM",
    space: "10 SPACES AVAILABLE",
  },
];

const AvailableAppoinment = ({ date }) => {
  const [bookingSuccess, setBookingSuccess] = useState(false);

  return (
    <Box sx={{ marginBottom: "35px" }}>
      <Container>
        <Typography
          variant="h5"
          sx={{
            color: "#3BE4D7",
            fontWeight: "bold",
            textTransform: "uppercase",
            marginTop: "50px",
            marginBottom: "20px",
          }}
        >
          Available Appoinment on {date.toDateString()}
        </Typography>
        {bookingSuccess && (
          <Alert
            variant="outlined"
            severity="success"
            sx={{ margin: "20px auto", width: "35%" }}
          >
            Appoinment Booked Successfully!
          </Alert>
        )}
        <Grid container spacing={3}>
          {bookings.map((booking) => (
            <Booking
              booking={booking}
              key={booking.id}
              date={date}
              setBookingSuccess={setBookingSuccess}
            ></Booking>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default AvailableAppoinment;
