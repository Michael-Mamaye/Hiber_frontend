import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Img from "../../../../assets/handShake.jpg";
const CompanyRealFacts = () => {
  return (
    <Box
      sx={{
        background: `linear-gradient(rgba(19, 29, 51,0.9),rgba(19, 29, 51,0.9)),url(${Img})`,
        backgroundSize: "cover",
        backgroundPosition:'fixed',
        backgroundRepeat:'no-repeat',
        p: 10,
      }}
    >
      <Grid
        container
        spacing={2}
        sx={{
          display: "flex",
          textAlign: "center",
          justifyContent: "center",
          color: "white",
        }}
      >
        <Grid item xs={12} sm={4}>
          <Typography sx={{ color: "white", textAlign: "left",fontWeight:"bold" ,fontSize:32,lineHeight:1}}>
            Some of <span style={{ color: "#fa9928" }}>Company</span> Real Facts
          </Typography>
        </Grid>
        <Grid item xs={12} sm={2.5}>
          <Typography fontSize={20} fontWeight="bold">
            20+
          </Typography>
          <Typography>Years of business</Typography>
        </Grid>
        <Grid item xs={12} sm={2.5}>
          <Typography fontSize={20} fontWeight="bold">
            521
          </Typography>
          <Typography>Our staffs worldwide</Typography>
        </Grid>
        <Grid item xs={12} sm={2.5}>
          <Typography fontSize={20} fontWeight="bold">
            5000+
          </Typography>
          <Typography>Finance help done</Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CompanyRealFacts;
