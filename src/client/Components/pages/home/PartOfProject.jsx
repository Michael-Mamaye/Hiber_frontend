import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import BackgroundImage from "../../../../assets/backgroundForPart.jpg";
import { TextField, Button } from "@mui/material";
import { findLocationButtonStyle } from "./style";

const gridStyles = {
  display: "flex",
  flexDirection: "column",
};
const PartOfProject = () => {
  return (
    <Box sx={{ backgroundColor: "#f8f8f8", pb: 10 }}>
      <div
        style={{
          background: `linear-gradient(rgba(19, 29, 51,0.9),rgba(19, 29, 51,0.9)),url(${BackgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: 300,
          padding: 20,
          paddingTop: 40,
        }}
      >
        <h1 style={{ color: "white", textAlign: "center" }}>
          Become Part of Our Project
        </h1>
      </div>

      <div
        style={{
          maxWidth: "70%",
          marginLeft: "14%",
          backgroundColor: "white",
          marginTop: -200,
          boxShadow:
            "2px 0 5px -4px rgba(31, 73, 125, 0.8), -2px 0 5px -4px rgba(31, 73, 125, 0.8)",
        }}
      >
        <Grid container spacing={2} sx={{ padding: 5 }}>
          <Grid item xs={12} sm={6} sx={gridStyles}>
            <h3>Request a Free Consultation</h3>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
              We’re always interested in new projects, big or small. Send us an
              email and we’ll get in touch shortly, or phone between 8:00 am and
              7:00 pm Monday to Saturday.
            </Typography>
            <Button
              variant="contained"
              disableElevation
              sx={findLocationButtonStyle}
            >
              Find Location
            </Button>
            <Typography color="text.secondary" mb={2}>
              Address : 44 New Design Street, Melbourne 005, Australia 300
            </Typography>
            <Typography color="text.secondary" mb={2}>
              Phone : 01 (800) 433 544
            </Typography>
            <Typography color="text.secondary" mb={2}>
              Email : info@victorthemes.com
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
              p:3,
            }}
          >
            <Typography color="text.secondary" mb={1}>
              Your Name
            </Typography>
            <TextField />

            <Typography color="text.secondary" mb={1} mt={3}>
              Your Email
            </Typography>
            <TextField />
            <Typography color="text.secondary" mb={1} mt={3}>
              I Would Like To Discuss
            </Typography>
            <TextField />
            <Button
              sx={{
                backgroundColor: "#fa9928",
                color: "white",
                mt: 5,
                p: 1.5,
                fontWeight:'bold',
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
  );
};

export default PartOfProject;
