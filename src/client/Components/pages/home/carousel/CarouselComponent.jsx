import React from "react";
import { Box, Button, Typography } from "@mui/material";
import Img1 from "../../../../../assets/consultingPeople.jpg";
import Img4 from "../../../../../assets/handMessage.jpg";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const CarouselComponent = () => {
  return (
   
      <Carousel
        showArrows
        showStatus={false}
        interval={2000}
        emulateTouch
        infiniteLoop
        showThumbs={false}
        stopOnHover
        autoPlay
        animationHandler="slide"
      >
        <div
          style={{
            background: `url(${Img1})`,
            backgroundSize: "cover",
            height: "100%",
            width:'100%',
            margin: 0,
          }}
        >
          <Box
            sx={{
              display: "flex",
              width: "100%",
              height:'100%',
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography>hello mike</Typography>
            <Button>View Detail</Button>
            <Button variant="contained">View Detail</Button>
          </Box>
        </div>
        <div
          style={{
            background: `url(${Img1})`,
            backgroundSize: "cover",
            height: "100%",
            width:'100%',
            margin: 0,
          }}
        >
          <Box
            sx={{
              display: "flex",
              width: "100%",
              height:'100%',
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography>hello mike</Typography>
            <Button>View Detail</Button>
            <Button variant="contained">View Detail</Button>
          </Box>
        </div>
        <div>
          <img src={Img4} alt="carousel item 2"/>
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <img src={Img4} alt="carousel item 3"/>
          <p className="legend">Legend 3</p>
        </div>
      </Carousel>
  );
};

export default CarouselComponent;
