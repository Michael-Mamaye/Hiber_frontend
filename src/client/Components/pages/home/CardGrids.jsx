import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import React from "react";
import Img1 from "../../../../assets/consultingPeople.jpg";
import Img2 from "../../../../assets/handShake.jpg";
import Img3 from "../../../../assets/bussinessMan.webp";


const CardGrids = () => {
  return (
    <Grid container spacing={5}>
      <Grid item xs={12} md={4}>
        <Card sx={{ height: "100%" }} elevation={0}>
          <CardMedia
            component="img"
            height="150"
            image={Img1}
            alt="boost pic"
          />
          <CardContent sx={{ ml: -2 }}>
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              fontWeight="bold"
            >
              Boosting your Business
            </Typography>
            <Typography variant="body1" color="text.secondary">
              We assist our clients in increasing the bottom-line of their business by improving
              productivity and profitability.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item md={4}>
        <Card sx={{ height: "100%" }} elevation={0}>
          <CardMedia
            component="img"
            height="150"
            image={Img2}
            alt="boost pic"
          />
          <CardContent sx={{ ml: -2 }}>
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              fontWeight="bold"
            >
              Filtering Business Data
            </Typography>
            <Typography variant="body1" color="text.secondary">
              We provide clients with on-site engineering professionals who
              specialize in helping businesses reengineer their processes.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={4}>
        <Card sx={{ height: "100%" }} elevation={0}>
          <CardMedia
            component="img"
            height="150"
            image={Img3}
            alt="boost pic"
          />
          <CardContent sx={{ ml: -2 }}>
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              fontWeight="bold"
            >
              Genius Consultant
            </Typography>
            <Typography variant="body1" color="text.secondary">
              We offer critical insights into all business processes, utilizing
              a combination of innovative technology and manufacturing
              techniques.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default CardGrids;
