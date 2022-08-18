import React from "react";
import { Box, Button, Card, CardMedia, Grid, Typography } from "@mui/material";
import Img1 from "../../../../assets/handShake.jpg";
import Img2 from "../../../../assets/consultingPeople.jpg";
const RecentProjects = () => {
  return (
    <Box sx={{ p: 5, pt: 10, pb: 10 }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          pb: 2,
          justifyContent: "space-between",
        }}
      >
        <Typography
          gutterBottom
          sx={{ color: "rgb(0,0,0,0.8)", fontSize: 30, fontWeight: 600 }}
        >
          Our Recent Projects
        </Typography>
        <Button sx={{ color: "#fa9928", fontWeight: "bold" }}>View All</Button>
      </Box>
      <Grid container>
        <Grid item xs={12} sm={3}>
          <Card sx={{ height: 200 }}>
            <CardMedia sx={{ height: 200 }} image={Img1} />
          </Card>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Card sx={{ height: 200 }}>
            <CardMedia sx={{ height: 200 }} image={Img2} />
          </Card>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Card sx={{ height: 200 }}>
            <CardMedia sx={{ height: 200 }} image={Img1} />
          </Card>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Card sx={{ height: 200 }}>
            <CardMedia sx={{ height: 200 }} image={Img2} />
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default RecentProjects;
