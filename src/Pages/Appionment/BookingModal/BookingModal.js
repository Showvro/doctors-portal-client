import { KeyboardArrowRight } from "@mui/icons-material";
import {
  Backdrop,
  Button,
  Fade,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import useAuth from "../../../hooks/useAuth";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "white",
  borderRadius: "5px",
  boxShadow: 24,
  p: 5,
};

const BookingModal = ({
  openBooking,
  handleBookingClose,
  booking,
  date,
  setBookingSuccess,
}) => {
  const { name, time } = booking;
  const { user } = useAuth();

  const initialInfo = {
    patientName: user.displayName,
    email: user.email,
    phone: "",
  };

  const [bookingInfo, setBookingInfo] = useState(initialInfo);

  const handleBookingSubmit = (e) => {
    const appionment = {
      ...bookingInfo,
      time,
      serviceName: name,
      date: date.toLocaleDateString(),
    };

    fetch("http://localhost:9999/appoinments", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(appionment),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          setBookingSuccess(true);
          handleBookingClose();
        }
      });
    e.preventDefault();
  };

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newInfo = { ...bookingInfo };
    newInfo[field] = value;
    setBookingInfo(newInfo);
  };

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openBooking}
        onClose={handleBookingClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 400,
        }}
      >
        <Fade in={openBooking}>
          <Box sx={style}>
            <Typography
              id="transition-modal-title"
              variant="h6"
              sx={{
                color: "#3BE4D7",
                textAlign: "center",
                textTransform: "uppercase",
                fontWeight: "600",
                marginBottom: 5,
              }}
              component="h2"
            >
              {name}
            </Typography>
            <form onSubmit={handleBookingSubmit}>
              <TextField
                disabled
                label="Time"
                id="outlined-size-small"
                defaultValue={time}
                size="small"
                sx={{ width: "100%", margin: "10px auto" }}
              />
              <TextField
                disabled
                label="Date"
                id="outlined-size-small"
                defaultValue={date.toDateString()}
                size="small"
                sx={{ width: "100%", margin: "10px auto" }}
              />
              <TextField
                label="Name"
                id="outlined-size-small"
                size="small"
                name="patientName"
                onBlur={handleOnBlur}
                defaultValue={user.displayName}
                sx={{ width: "100%", margin: "10px auto" }}
              />
              <TextField
                label="Email"
                defaultValue={user.email}
                id="outlined-size-small"
                size="small"
                name="email"
                onBlur={handleOnBlur}
                sx={{ width: "100%", margin: "10px auto" }}
              />
              <TextField
                label="Phone"
                id="outlined-size-small"
                size="small"
                name="phone"
                onBlur={handleOnBlur}
                sx={{ width: "100%", margin: "10px auto" }}
              />
              <Button
                variant="contained"
                sx={{
                  color: "white",
                  fontWeight: "bolder",
                  textTransform: "uppercase",
                  borderRadius: "2px",
                  boxShadow: 0,
                  padding: "10px 20px",
                  marginTop: "20px",
                  background:
                    "linear-gradient(90deg, #17D2BA 0%, #11D0E2 100%)",
                }}
                type="submit"
                endIcon={<KeyboardArrowRight />}
              >
                Book Appionment
              </Button>
            </form>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default BookingModal;
