import { Typography } from "@mui/material";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import CheckoutForm from "./CheckoutForm";

//stripe
const stripePromise = loadStripe(
  "pk_test_51JxzaSHUWfqIq1c0HVGgTAx0vkwS98nEFYJsgAodpcXFdhlV15sGDj7KQKrHa6px93I1M3Dz4h1gqFx7qy93gsMw00i0d8Mk6x"
);

const Payment = () => {
  const { appoinmentId } = useParams();
  const [appoinment, setAppoinment] = useState({});

  useEffect(() => {
    fetch(`http://localhost:9999/appoinments/${appoinmentId}`)
      .then((res) => res.json())
      .then((data) => {
        setAppoinment(data);
      });
  }, [appoinmentId]);

  return (
    <div>
      <h1>Appionment ID {appoinmentId}</h1>
      <Typography variant="h5">
        Pay for patiant: {appoinment.patientName} from the date
        {appoinment.date}of appoinment of Fees ${appoinment.price}
      </Typography>
      <Typography variant="h6">Phone: {appoinment.time}</Typography>
      <Elements stripe={stripePromise}>
        <CheckoutForm appoinment={appoinment} />
      </Elements>
    </div>
  );
};

export default Payment;

/* 

1. install stripe and stripe-react

2. set Publishable keyline-all

3. Elements

4. Checkout Forms

5. Create Payment method

6. 

*/
