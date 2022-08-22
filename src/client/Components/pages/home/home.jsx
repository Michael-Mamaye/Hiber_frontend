import { Box, Typography, Grid, Button } from "@mui/material";
import React, { useState } from "react";
import BoardOfDirectors from "./BoardOfDirectors";
import CardGrids from "./CardGrids";
import CarouselComponent from "./carousel/CarouselComponent";
import CompanyRealFacts from "./CompanyRealFacts";
import ExperienceBox from "./ExperienceBox";
import PartOfProject from "./PartOfProject";
import RecentProjects from "./RecentProjects";
import { homeContactUsButtonStyle } from "./style";
const Home = () => {
  const [marginTop, setmarginTop] = useState(0);
  window.addEventListener("scroll", () => {
    if (window.scrollY > 149) {
      setmarginTop(8);
    } else {
      setmarginTop(0);
    }
  });
  return (
    <Box sx={{ marginTop: { xs: 0, sm: marginTop } }}>
      <CarouselComponent />
      <Box sx={{ backgroundColor: "#fa9928", padding: 5 }}>
        <Grid
          container
          sx={{ display: "flex", justifyContent: "space-around", rowGap: 1 }}
        >
          <Grid item>
            <Typography sx={{ fontWeight: "bold", fontSize: 18 }}>
              If you have any query for related investment… We are available
            </Typography>
          </Grid>
          <Grid>
            <Button sx={homeContactUsButtonStyle}>Contact Us</Button>
          </Grid>
        </Grid>
      </Box>
      <Box m={4} mt={5} mb={5}>
        <CardGrids />
      </Box>
      <ExperienceBox/>
      <CompanyRealFacts/>
      <RecentProjects/>
      <BoardOfDirectors/>
      <PartOfProject/>
    </Box>
  );
};

export default Home;
