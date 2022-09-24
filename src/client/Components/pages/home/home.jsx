import { Box, Typography, Grid, Button } from "@mui/material";
import React, { useState, useEffect } from "react";
import BoardOfDirectors from "./BoardOfDirectors";
import CardGrids from "./CardGrids";
import CompanyRealFacts from "./CompanyRealFacts";
import ExperienceBox from "./ExperienceBox";
import PartOfProject from "./PartOfProject";
import RecentProjects from "./RecentProjects";
import { homeContactUsButtonStyle } from "./style";
import Img from "../../../../assets/mainPage.svg";
const Home = () => {
  const [marginTop, setmarginTop] = useState(0);
  const [firstLoad, setFirstLoad] = useState(true);
  window.addEventListener("scroll", () => {
    if (window.scrollY > 149) {
      setmarginTop(8);
    } else {
      setmarginTop(0);
    }
  });
  useEffect(() => {
    if (!firstLoad) {
      window.scrollTo(0, 150);
      setFirstLoad(false);
    } else {
      setFirstLoad(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Box sx={{ marginTop: { xs: 0, sm: marginTop } }}>
      <Box
        sx={{
          background: `linear-gradient(rgb(19, 29, 51,0.1), rgb(19, 29, 51,0.1)), url(${Img})`,
          backgroundSize: "contain",
          backgroundPosition: "right",
          backgroundRepeat: "no-repeat",
          display: "flex",
          flexDirection:"column",
          justifyContent: "center",
          height: "95vh",
          maxHeight: "900px",
          p:10
        }}
      >
         
      </Box>
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
      <ExperienceBox />
      <CompanyRealFacts />
      <RecentProjects />
      <BoardOfDirectors />
      <PartOfProject />
    </Box>
  );
};

export default Home;
