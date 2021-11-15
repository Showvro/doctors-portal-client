import React from "react";
import Navigation from "../../Shared/Navigation/Navigation";
import AppoinmentHero from "../AppoinmentHero/AppoinmentHero";
import AvailableAppoinment from "../AvailableAppoinment/AvaiableAppoinment";

const Appoinment = () => {
  const [date, setDate] = React.useState(new Date());

  return (
    <div>
      <Navigation />
      <AppoinmentHero date={date} setDate={setDate} />
      <AvailableAppoinment date={date} />
    </div>
  );
};

export default Appoinment;
