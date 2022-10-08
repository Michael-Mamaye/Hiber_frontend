import { Facebook } from "@mui/icons-material";
import { Box, Grid, Typography } from "@mui/material";
import React from "react";
const gridStyles = {
  display: "flex",
  flexDirection: "row",
  m: 1,
  height: 70,
  alignItems: "center",
  background: "white",
  borderRadius: 2,
};
const gridBoxStyles = {
  display: "flex",
  width: "60%",
  flexDirection: "column",
};
const gridFirstBoxStyles = {
  display: "flex",
  width: "40%",
  flexDirection: "column",
  alignItems: "center",
};
const FirstGrids = () => {
  return (
    <Grid
      container
      sx={{ display: "flex", flexDirection: "row", justifyContent: "start" }}
    >
      <Grid item xs={5.5} md={2.76} sx={{ ...gridStyles }}>
        <Box sx={gridFirstBoxStyles}>
          <Facebook sx={{ height: 50, width: 50 }} />
        </Box>
        <Box sx={gridBoxStyles}>
          <Typography sx={{ fontWeight: "bolder", fontSize: 18 }}>
            1900
          </Typography>
          <Typography color="text.secondary">users</Typography>
        </Box>
      </Grid>
      <Grid item xs={5.5} md={2.76} sx={{ ...gridStyles }}>
        <Box sx={gridFirstBoxStyles}>
          <Facebook sx={{ height: 50, width: 50 }} />
        </Box>
        <Box sx={gridBoxStyles}>
          <Typography sx={{ fontWeight: "bolder", fontSize: 18 }}>
            1900
          </Typography>
          <Typography color="text.secondary">Emails</Typography>
        </Box>
      </Grid>
      <Grid item xs={5.5} md={2.76} sx={{ ...gridStyles }}>
        <Box sx={gridFirstBoxStyles}>
          <Facebook sx={{ height: 50, width: 50 }} />
        </Box>
        <Box sx={gridBoxStyles}>
          <Typography sx={{ fontWeight: "bolder", fontSize: 18 }}>
            1900
          </Typography>
          <Typography color="text.secondary">Services</Typography>
        </Box>
      </Grid>
      <Grid item xs={5.5} md={2.76} sx={{ ...gridStyles }}>
        <Box sx={gridFirstBoxStyles}>
          <Facebook sx={{ height: 50, width: 50 }} />
        </Box>
        <Box sx={gridBoxStyles}>
          <Typography sx={{ fontWeight: "bolder", fontSize: 18 }}>
            1900
          </Typography>
          <Typography color="text.secondary">Projects</Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default FirstGrids;
