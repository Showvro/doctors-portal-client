import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Container, Typography } from "@mui/material";
import Service from "../Service/Service";
import fluoride from "../../../images/fluoride.png";
import cavity from "../../../images/cavity.png";
import whitening from "../../../images/whitening.png";

const services = [
  {
    name: "Fluoride Treatment",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis laudantium deleniti dolores veritatis facere.",
    image: fluoride,
  },
  {
    name: "Teath Whitening",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis laudantium deleniti dolores veritatis facere.",
    image: whitening,
  },
  {
    name: "Cavity Filling",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis laudantium deleniti dolores veritatis facere.",
    image: cavity,
  },
];

const Services = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Container>
        <Typography
          variant="h6"
          component="div"
          sx={{ fontWeight: 500, color: "#3BE4D7", mt: 2 }}
        >
          OUR SERVICES
        </Typography>
        <Typography
          variant="h4"
          component="div"
          sx={{ fontWeight: 600, my: 2 }}
        >
          Services We Provide
        </Typography>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {services.map((service) => (
            <Service key={service.name} service={service} />
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;
