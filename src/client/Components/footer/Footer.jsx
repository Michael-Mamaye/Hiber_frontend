import React from "react";
import {
  Box,
  Button,
  Grid,
  IconButton,
  Input,
  Typography,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import { footerLinks, footerTypography } from "../pages/home/style";
import { Facebook, Mail, Telegram, Twitter } from "@mui/icons-material";
const socialMediaIconStyle = {
  width: 30,
  height: 30,
  color: "rgb(255,255,255,0.3)",
  mt: 2,
  ml: 2,
  "&:hover": {
    color: "rgb(255,255,255,0.8)",
  },
};
const Footer = () => {
  return (
    <div style={{ background: "#222327", color: "rgb(255,255,255,0.8)" }}>
      <div
        style={{
          padding: 10,
        }}
      >
        <Grid container p={5}>
          <Grid item xs={12} sm={6} md={4} pr={5}>
            <Typography
              sx={{
                color: "white",
                textAlign: "left",
                lineHeight: 1,
                fontWeight: "bold",
              }}
            >
              <span style={{ color: "#fa9928", fontSize: 29 }}>HIBER</span>
              <span
                style={{ color: "rgb(255,255,255,0.8", fontWeight: "bold" }}
              >
                {" "}
                Manufacturing Consultany
              </span>
            </Typography>
            <Typography sx={{ ...footerTypography }}>
              Kroth is a corporate consulting & business WordPress theme. You
              can customize what ever you think to make your website much better
              from your great ideas.
            </Typography>
            <Box>
              <IconButton sx={socialMediaIconStyle}>
                <Facebook />
              </IconButton>
              <IconButton sx={socialMediaIconStyle}>
                <Twitter />
              </IconButton>
              <IconButton sx={socialMediaIconStyle}>
                <Mail />
              </IconButton>
              <IconButton sx={socialMediaIconStyle}>
                <Telegram />
              </IconButton>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4}  mt={3}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography variant="h5">Useful Links</Typography>
              <Grid container pt={1}>
                <Grid
                  item
                  xs={6}
                  sx={{ display: "flex", flexDirection: "column" }}
                >
                  <NavLink style={footerLinks} to="/users/home">
                    Home
                  </NavLink>
                  <NavLink style={footerLinks} to="/users/projects">
                    Projects
                  </NavLink>
                  <NavLink style={footerLinks} to="/users/services">
                    Services
                  </NavLink>
                  <NavLink style={footerLinks} to="/users/aboutus">
                    About Us
                  </NavLink>
                </Grid>
                <Grid xs={6} sx={{ display: "flex", flexDirection: "column" }}>
                  <NavLink style={footerLinks} to="/users/news">
                    News
                  </NavLink>
                  <NavLink style={footerLinks} to="/users/contact">
                    Contact
                  </NavLink>
                </Grid>
              </Grid>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4} mt={3}>
            <Typography variant="h5">Our Newsletter</Typography>
            <Typography sx={footerTypography}>
              Sign up for our mailing list to get latest updates and offers.
            </Typography>
            <Box sx={{display:'flex',flexDirection:'row'}}>
              <Input
                disableUnderline
                placeholder="Email"
                sx={{
                  background: "rgb(240,240,240,0.1)",
                  borderRadius: 2,
                  p: 1.5,
                  pt: 1.2,
                  color: "rgb(240,240,240,0.7)",
                  borderBottomRightRadius: 0,
                  borderTopRightRadius: 0,
                  fontWeight: "bold",
                }}
              />

              <Button
                sx={{
                  backgroundColor: "#fa9928",
                  color: "white",
                  p: 1.8,
                  borderBottomLeftRadius: 0,
                  borderTopLeftRadius: 0,
                  fontWeight: "bold",
                  "&:hover": {
                    backgroundColor: "#ba6807",
                  },
                }}
              >
                GO!
              </Button>
            </Box>
          </Grid>
        </Grid>
      </div>
      <hr
        style={{
          border: "none",
          borderBottom: "1px solid rgb(255,255,255,0.8)",
        }}
      />
      <Box sx={{ p: 1, pl: 10 }}>
        <Typography
          variant="body2"
          sx={{ color: "rgb(255,255,255,0.4)", textAlign: "center" }}
        >
          © 2022 Hiber Manufacturing Consultancy PLC. Ethiopia. All rights
          reserved.
        </Typography>
      </Box>
    </div>
  );
};

export default Footer;
