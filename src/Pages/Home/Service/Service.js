import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardMedia, Grid } from "@mui/material";

const Service = (props) => {
  const { name, description, image } = props.service;

  return (
    <Grid item xs={4} sm={4} md={4}>
      <Card
        sx={{
          maxWidth: 275,
          border: "none",
          boxShadow: "none",
          margin: "20px auto 0 auto",
        }}
      >
        <CardMedia
          component="img"
          height="80"
          style={{ width: "auto", margin: "0 auto" }}
          image={image}
          alt="service image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default Service;
