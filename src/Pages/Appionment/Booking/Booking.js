import { KeyboardArrowRight } from "@mui/icons-material";
import { Button, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import BookingModal from "../BookingModal/BookingModal";

const Booking = ({ booking, date, setBookingSuccess }) => {
  const [openBooking, setOpenBooking] = React.useState(false);
  const handleBookingOpen = () => setOpenBooking(true);
  const handleBookingClose = () => setOpenBooking(false);
  const { name, time, space, price } = booking;

  return (
    <>
      <Grid item xs={12} sm={6} md={4}>
        <Paper elevation={2} sx={{ paddingY: 5 }}>
          <Typography
            display="block"
            variant="h5"
            sx={{ color: "#3BE4D7", fontWeight: "600" }}
          >
            {name}
          </Typography>
          <Typography
            display="block"
            variant="h6"
            sx={{ fontWeight: "bold", marginTop: "15px" }}
          >
            {time}
          </Typography>
          <Typography display="block" variant="h6" sx={{}}>
            Fees: ${price}
          </Typography>
          <Typography display="block" variant="overline">
            {space}
          </Typography>
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
            endIcon={<KeyboardArrowRight />}
            onClick={handleBookingOpen}
          >
            Book Appionment
          </Button>
        </Paper>
      </Grid>
      <BookingModal
        date={date}
        booking={booking}
        handleBookingClose={handleBookingClose}
        openBooking={openBooking}
        setBookingSuccess={setBookingSuccess}
      ></BookingModal>
    </>
  );
};

export default Booking;
