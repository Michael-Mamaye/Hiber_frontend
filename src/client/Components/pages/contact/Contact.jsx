import {
  Email,
  Facebook,
  Groups,
  PhoneAndroid,
  PinDrop,
  Telegram,
} from "@mui/icons-material";
import { Box, Button, Grid, Input, Typography } from "@mui/material";
import React, { useState } from "react";
import { useEffect } from "react";
import Img from "../../../../assets/contact_us.svg";
import {
  gridStyles,
  findLocationButtonStyle,
  contactInputStyle,
  socialMediaLinkStyle,
} from "./style.js";
const Contact = () => {
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
        mb: 10,
      }}
    >
      <Box
        sx={{
          background: "rgb(19, 29, 51,0.1)",
          textAlign: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "60vh",
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
            <Box sx={{ maxWidth: 400 }}>
              <Typography sx={{ fontSize: 50, fontWeight: "bold" }}>
                Contact Us
              </Typography>
              <Typography color="text.secondary">
                Get in touch to get more from us. or you can drop your email
                address and we can contact you.{" "}
              </Typography>
            </Box>
          </Grid>
          <Grid
            items
            xs={12}
            md={6}
            sx={{ display: { xs: "none", md: "block" } }}
          >
            <img src={Img} alt="contact pic" />
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ zIndex: 100, p: 10 }}>
        <Grid container spacing={6}>
          <Grid item xs={12} sm={6} md={3}>
            <div
              style={{
                boxShadow: "2px 2px 15px rgba(0,0,0,0.2)",
                padding: 20,
                textAlign: "center",
              }}
            >
              <PinDrop style={{ color: "#131d33", height: 60, width: 60 }} />
              <Typography sx={{ fontWeight: "bold" }}>Our Location</Typography>
              <Typography color="text.secondary">
                Nifas-silk Lafto Sub-City, Woreda 12
              </Typography>
              <Typography color="text.secondary">
                Addis Ababa, Ethiopia
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <div
              style={{
                boxShadow: "2px 2px 15px rgba(0,0,0,0.2)",
                padding: 20,
                textAlign: "center",
              }}
            >
              <PhoneAndroid
                style={{ color: "#131d33", height: 60, width: 60 }}
              />
              <Typography sx={{ fontWeight: "bold" }}>Call Us</Typography>
              <Typography color="text.secondary">+251 - 913077287</Typography>
              <Typography color="text.secondary">+251 - 910898910</Typography>
              <Typography color="text.secondary">+251 - 910898910</Typography>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <div
              style={{
                boxShadow: "2px 2px 15px rgba(0,0,0,0.2)",
                padding: 20,
                textAlign: "center",
              }}
            >
              <Groups style={{ color: "#131d33", height: 60, width: 60 }} />
              <Typography sx={{ fontWeight: "bold" }}>Social Media</Typography>

              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Typography
                  color="text.secondary"
                  sx={{
                    width: 120,
                  }}
                >
                  <a href="/" style={socialMediaLinkStyle}>
                    <Telegram /> &nbsp;&nbsp;Telegram
                  </a>
                </Typography>
              </Box>
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Typography
                  color="text.secondary"
                  sx={{
                    width: 120,
                  }}
                >
                  <a href="/" style={socialMediaLinkStyle}>
                    <Facebook />
                    &nbsp;&nbsp;Facebook
                  </a>
                </Typography>
              </Box>
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Typography
                  color="text.secondary"
                  sx={{
                    width: 120,
                  }}
                >
                  {" "}
                  <a href="/" style={socialMediaLinkStyle}>
                    <Email />
                    &nbsp;&nbsp;Gmail
                  </a>
                </Typography>
              </Box>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <div
              style={{
                boxShadow: "2px 2px 15px rgba(0,0,0,0.2)",
                padding: 20,
                textAlign: "center",
              }}
            >
              <Email style={{ color: "#131d33", height: 60, width: 60 }} />
              <Typography sx={{ fontWeight: "bold" }}>Gmail</Typography>
              <Typography>
                {" "}
                <a href="/" style={socialMediaLinkStyle}>
                  hiberconsultancy@gmail.com
                </a>
                <a href="/" style={socialMediaLinkStyle}>
                  hiberconsultancy@gmail.com
                </a>
                <a href="/" style={socialMediaLinkStyle}>
                  hiberconsultancy@gmail.com
                </a>
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ px: { xs: 2, sm: 10 } }}>
        <div
          style={{
            background: "rgb(19, 29, 51,0.1)",
            borderRadius: 10,
            marginBottom: 12,
          }}
        >
          <Grid container spacing={2} sx={{ padding: 5 }}>
            <Grid item xs={12} sm={6} sx={gridStyles}>
              <Typography variant="h4">Contact Us</Typography>
              <Typography variant="body2" sx={{ mb: 3, mt: 2, opacity: "0.9" }}>
                We’re always interested in new projects, big or small. Send us
                an email and we’ll get in touch shortly, or phone between 8:00
                am and 7:00 pm Monday to Saturday.
              </Typography>
              <Button
                variant="contained"
                disableElevation
                sx={{ ...findLocationButtonStyle, opacity: "0.9" }}
              >
                Find Location
              </Button>
              <Typography mb={2} sx={{ opacity: "0.9" }}>
                Address : Nifas-silk Lafto Sub-City, Addis Ababa, Ethiopia
              </Typography>
              <Typography mb={2} sx={{ opacity: "0.9" }}>
                Phone : +251 - 910898910
              </Typography>
              <Typography mb={2} sx={{ opacity: "0.9" }}>
                Email : hiberconsultancy@gmail.com
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              sx={{
                ...gridStyles,
                borderLeft: { xs: "none", md: "1px solid rgba(0,0,0,0.2)" },
                borderTop: { xs: "1px solid rgba(0,0,0,0.1)", md: "none" },
                p: 3,
              }}
            >
              <Typography mb={1} sx={{ opacity: "0.9" }}>
                Your Name
              </Typography>
              <Input
                disableUnderline
                sx={{ ...contactInputStyle, opacity: "0.9" }}
              />

              <Typography mb={1} sx={{ opacity: "0.9" }} mt={3}>
                Your Email
              </Typography>
              <Input
                disableUnderline
                sx={{ ...contactInputStyle, opacity: "0.9" }}
              />
              <Typography mb={1} sx={{ opacity: "0.9" }} mt={3}>
                I Would Like To Discuss
              </Typography>
              <Input
                multiline
                spellCheck
                disableUnderline
                sx={{ ...contactInputStyle, opacity: "0.9", minHeight: 100 }}
              />
              <Button
                sx={{
                  backgroundColor: "#fa9928",
                  color: "white",
                  mt: 5,
                  p: 1.5,
                  fontWeight: "bold",
                  maxWidth: 200,
                  "&:hover": {
                    backgroundColor: "#ba6807",
                  },
                }}
              >
                submit
              </Button>
            </Grid>
          </Grid>
        </div>
      </Box>
    </Box>
  );
};

export default Contact;
