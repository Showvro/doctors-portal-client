import React, { useEffect, useState } from "react";
import useAuth from "../../../../hooks/useAuth";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Appoinments = ({ date }) => {
  const { user, token } = useAuth();
  const [appoinments, setAppoinments] = useState([]);

  useEffect(() => {
    const url = `http://localhost:9999/appoinments?email=${
      user.email
    }&date=${date.toLocaleDateString()}`;

    fetch(url, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setAppoinments(data);
      });
  }, [date]);

  return (
    <div>
      <Typography
        variant="h5"
        style={{
          color: "#3BE4D7",
          marginBottom: "20px",
          fontWeight: "500",
          textTransform: "uppercase",
        }}
      >
        Appoinment: {appoinments.length}
      </Typography>
      <TableContainer component={Paper}>
        <Table aria-label="Appoinments Table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Time</TableCell>
              <TableCell align="right">Service Name</TableCell>
              <TableCell align="right">Payment</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {appoinments.map((appoinment) => (
              <TableRow
                key={appoinment._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="appoinment">
                  {appoinment.patientName}
                </TableCell>
                <TableCell align="right">{appoinment.time}</TableCell>
                <TableCell align="right">{appoinment.serviceName}</TableCell>
                <TableCell>
                  {appoinment.payment ? (
                    "Paid"
                  ) : (
                    <Link to={`dashboard/payment/${appoinment._id}`}>
                      <button>Pay</button>
                    </Link>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Appoinments;
