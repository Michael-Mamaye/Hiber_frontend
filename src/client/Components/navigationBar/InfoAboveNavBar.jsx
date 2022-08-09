import React from "react";
import { Box, Container, Grid, IconButton, Typography } from "@mui/material";
import {
  AccessTime,
  CallRounded,
  Directions,
  Facebook,
  Mail,
  Telegram,
  Twitter,
} from "@mui/icons-material";
import { miniNavInfoStyle, socialMediaIconStyle } from "./styles";
import HiberLogo from "../../../assets/hiber_logo.jpg";
const InfoAboveNavBar = () => {
  return (
    <Box sx={{ minHeight: "150px" }}>
      <Box sx={miniNavInfoStyle}>
        <Grid container>
          <Grid item xs={12} md={6}>
            <Typography
              sx={{
                fontFamily: "initial",
                fontSize: 16,
                color: "rgb(0,0,0,0.8)",
              }}
            >
              Welcome to Hiber Manufacturing Consultancy PLC
            </Typography>
          </Grid>
          <Grid
            item
            md={6}
            xs={12}
            sx={{ display: "flex", columnGap: 5, justifyContent: "center" }}
          >
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
          </Grid>
        </Grid>
      </Box>
      <Container sx={{ mt: 1 }}>
        <Grid container>
          <Grid
            item
            sm={4}
            md={0}
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <Box sx={{ display: { xs: "none", md: "block" } }}>
              <img
                src={HiberLogo}
                height={100}
                alt="hiber manufacturing consultancy plc logo"
              />
            </Box>
            <Typography
              variant="h4"
              sx={{ mt: 2, display: { xs: "block", md: "none" } }}
            >
              <span style={{ color: "#fa9928" }}>H</span>IBER
            </Typography>
          </Grid>
          
          {/* ......this box is the horizontal line that will only be displayed when 
          the screen size extra small...... */}
          <Box sx={{ display: { xs: "block", sm: "none" }, width: "100%" }}>
            <hr
              style={{
                border: "1px solid #fa9928",
                width: "30%",
                float: "left",
              }}
            />
          </Box>
          

          {/* ...the below grid is for the address and location above the navigation bar......... */}
          <Grid
            item
            container
            sm={8}
            md={0}
            sx={{ color: "rgb(0,0,0,0.7)", mt: { sm: 0, md: 2 } }}
          >
            <Grid item container xs={4} md={4}>
              <Grid item>
                <CallRounded
                  style={{ fontSize: "35px", marginTop: 2, marginRight: 5 }}
                />
              </Grid>
              <Grid item>
                <Typography sx={{ fontWeight: "bold" }}>
                  +251-909090909
                </Typography>
                <Typography sx={{ opacity: 0.6 }}>info@gmail.com</Typography>
              </Grid>
            </Grid>

            <Grid item container xs={4} md={4}>
              <Grid item>
                <AccessTime
                  style={{ fontSize: "35px", marginTop: 2, marginRight: 5 }}
                />
              </Grid>
              <Grid item>
                <Typography sx={{ fontWeight: "bold" }}>
                  8:30 AM - 6:00 PM
                </Typography>
                <Typography sx={{ opacity: 0.6 }}>Monday-Saturday</Typography>
              </Grid>
            </Grid>
            <Grid item container xs={4} md={4}>
              <Grid item>
                <Directions
                  style={{ fontSize: "35px", marginTop: 2, marginRight: 5 }}
                />
              </Grid>
              <Grid item>
                <Typography sx={{ fontWeight: "bold" }}>Nifas Silk,</Typography>
                <Typography sx={{ opacity: 0.6 }}>
                  Addis Ababa, Ethiopia
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default InfoAboveNavBar;
