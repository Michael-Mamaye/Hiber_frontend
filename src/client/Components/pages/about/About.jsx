import { Box, Button, Grid, List, ListItem, Typography } from "@mui/material";

import { DiamondSharp } from "@mui/icons-material";
import React, { useState, useEffect } from "react";
import Img from "../../../../assets/aboutPage.svg";
import MissionPic from "../../../../assets/consulting.jpg";
import { homeContactUsButtonStyle } from "./style";
const About = () => {
  const [marginTop, setmarginTop] = useState(0);
  useEffect(() => {
    window.scrollTo(0, 150);
  }, []);
  window.addEventListener("scroll", () => {
    if (window.scrollY > 149) {
      setmarginTop(8);
    } else {
      setmarginTop(0);
    }
  });
  return (
    <Box
      sx={{
        alignItems: "center",
        justifyContent: "center",
        mt: { xs: 0, sm: marginTop },
      }}
    >
      <Box
        sx={{
          textAlign: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          pt: 10,
        }}
      >
        <Grid container>
          <Grid
            items
            xs={12}
            md={6}
            sx={{
              textAlign: "center",
              justifyContent: "center",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Box sx={{ maxWidth: { xs: 600, md: 500 }, p: { xs: 3, md: 5 } }}>
              <Typography sx={{ fontSize: 50, fontWeight: "bold" }}>
                Get To Know Us
              </Typography>
              <Typography color="text.secondary" sx={{ textAlign: "left" }}>
                Hiber Manufacturing Consultancy PLC is a Manufacturing
                Consultancy company in Addis Ababa, Ethiopia serving clients
                nationwide and worldwide. We are extremely committed to
                delivering quality advice and support to assist our clients to
                achieve the maximum from their investment. Hiber Manufacturing
                Consultancy PLC was started because we want to contribute our
                own share by providing opportunities to investors &amp;
                entrepreneurs and work on projects that actually can bring a
                significant change in Ethiopia’s Manufacturing sector, private
                sector services and many more. We want to create an environment
                where everyone learns from each other and grow together by
                creating an open and transparent culture in our office. Started
                as a group of passionate PHD holders in Chemical engineering.
              </Typography>
            </Box>
          </Grid>
          <Grid
            items
            xs={12}
            md={6}
            sx={{ display: { xs: "none", md: "block" } }}
          >
            <img src={Img} alt="contact pic" height="100%" width="100%" />
          </Grid>
        </Grid>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          p: 10,
        }}
      >
        <Typography sx={{ fontSize: 40, fontWeight: "bold", mb: 5 }}>
          Our Mission
        </Typography>
        <img src={MissionPic} alt="mission pic" />
        <Typography color="text.secondary" sx={{ maxWidth: 800, pt: 5 }}>
          Build a long-lasting relationship with our Client and contribute
          towards their success by increasing their productivity and delivering
          results through innovation.
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          P: 10,
        }}
      >
        <Typography sx={{ fontSize: 40, fontWeight: "bold" }}>
          Our Core Values
        </Typography>
        <List>
          <ListItem>
            <DiamondSharp sx={{ mr: 1, color: "#131d33", fontSize: 30 }} />
            <Typography color="text.secondary" sx={{ fontSize: 25 }}>
              Integrity and Ethics
            </Typography>
          </ListItem>
          <ListItem>
            <DiamondSharp sx={{ mr: 1, color: "#131d33", fontSize: 30 }} />
            <Typography color="text.secondary" sx={{ fontSize: 25 }}>
              Respect
            </Typography>
          </ListItem>
          <ListItem>
            <DiamondSharp sx={{ mr: 1, color: "#131d33", fontSize: 30 }} />
            <Typography color="text.secondary" sx={{ fontSize: 25 }}>
              Excellence
            </Typography>
          </ListItem>
          <ListItem>
            <DiamondSharp sx={{ mr: 1, color: "#131d33", fontSize: 30 }} />
            <Typography color="text.secondary" sx={{ fontSize: 25 }}>
              Innovation
            </Typography>
          </ListItem>
        </List>
      </Box>
      <Box sx={{ backgroundColor: "#fa9928", padding: 5, mt: 10 }}>
        <Grid
          container
          sx={{ display: "flex", justifyContent: "space-around", rowGap: 1 }}
        >
          <Grid item>
            <Typography sx={{ fontWeight: "bold", fontSize: 18 }}>
              +251 - 913077287 &nbsp;&nbsp;Contact Us Today, We are available
            </Typography>
          </Grid>
          <Grid>
            <Button sx={homeContactUsButtonStyle}>Contact Us</Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default About;
