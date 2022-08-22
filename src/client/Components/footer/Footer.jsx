import React from "react";
import { Box, Button, Grid, Icon, TextField, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
const Footer = () => {
  return (
    <div style={{ height: 200, padding: 10, background: "#222327" }}>
      <Grid container p={5}>
        <Grid item xs={12} sm={6} md={4}>
          <Typography
            sx={{
              color: "white",
              textAlign: "left",

              lineHeight: 1,
            }}
          >
            <span style={{ color: "#fa9928", fontSize: 26 }}>HIBER</span>
            <span style={{ color: "rgb(255,255,255,0.8" }}>
              {" "}
              Manufacturing Consultany
            </span>
          </Typography>
          <Typography>
            Kroth is a corporate consulting & business WordPress theme. You can
            customize what ever you think to make your website much better from
            your great ideas.
          </Typography>
          <Icon/>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography>Useful Links</Typography>
            <NavLink to="/users/home">Home</NavLink>
            <NavLink to="/users/aboutus">About</NavLink>
            <NavLink to="/users/projects">projects</NavLink>
            <NavLink to="/users/services">services</NavLink>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Typography>Our Newsletter</Typography>
          <Typography>
            Sign up for our mailing list to get latest updates and offers.
          </Typography>
          <Box>
            <TextField></TextField>
            <Button>GO!</Button>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;
