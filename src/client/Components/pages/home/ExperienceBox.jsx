import { FaceOutlined } from "@mui/icons-material";
import { Button, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { viewServicesButtonStyle } from "./style";

const ExperienceBox = () => {
  return (
    <Box sx={{ background:'rgb(19, 29, 51,0.1)', padding: 4 }}>
      <Grid container spacing={4} pt={4} pb={10}>
        <Grid item xs={12} md={4}>
          <Typography
            fontSize={30}
            fontWeight="bold"
            fontFamily="revert-layer"
            color="rgb(0,0,0,0.8)"
          >
            Many Years of Experience in Manufacturing & Business Development
          </Typography>
          <Typography variant="body1" color="text.secondary" mt={5}>
            Globally incubate standards compliant channels before scalable
            benefits. Quickly disseminate superior deliverables whereas
            web-enabled applications. Quickly drive architectures.
          </Typography>
          <Box>
            <Button sx={viewServicesButtonStyle}>View Services</Button>
          </Box>
        </Grid>

        {/* first two column grids */}
        <Grid item container xs={12} sm={6} md={4} rowGap={2}>
          <Grid
            item
            container
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "white",
              maxHeight: "150px",
              p: 2,
            }}
          >
            <Grid item xs={1.5} lg={1.5}>
              <FaceOutlined sx={{ color: "#fa9928" }} />
            </Grid>
            <Grid item xs={10} lg={10}>
              <Typography
                fontSize={18}
                fontFamily="revert-layer"
                fontWeight={600}
                color="rgb(0,0,0,0.7)"
              >
                Dedicated Expert Team Mates
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Globally incubate standards compliant channels before scalable
                benefits.
              </Typography>
            </Grid>
          </Grid>
          <Grid
            item
            container
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "white",
              maxHeight: "150px",
              p: 2,
            }}
          >
            <Grid item xs={1.5} lg={1.5}>
              <FaceOutlined sx={{ color: "#fa9928" }} />
            </Grid>
            <Grid item xs={10} lg={10}>
              <Typography
                fontSize={18}
                fontFamily="revert-layer"
                fontWeight={600}
                color="rgb(0,0,0,0.7)"
              >
                Business Service Consulting
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Globally incubate standards compliant channels before scalable
                benefits.
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        {/* second two column grids */}
        <Grid item container xs={12} sm={6} md={4} rowGap={2}>
          <Grid
            item
            container
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "white",
              maxHeight: "150px",
              p: 2,
            }}
          >
            <Grid item xs={1.5} lg={1.5}>
              <FaceOutlined sx={{ color: "#fa9928" }} />
            </Grid>
            <Grid item xs={10} lg={10}>
              <Typography
                fontSize={18}
                fontFamily="revert-layer"
                fontWeight={600}
                color="rgb(0,0,0,0.7)"
              >
                24/7 Professional Support
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Globally incubate standards compliant channels before scalable
                benefits.
              </Typography>
            </Grid>
          </Grid>
          <Grid
            item
            container
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "white",
              maxHeight: "150px",
              p: 2,
            }}
          >
            <Grid item xs={1.5} lg={1.5}>
              <FaceOutlined sx={{ color: "#fa9928" }} />
            </Grid>
            <Grid item xs={10} lg={10}>
              <Typography
                fontSize={18}
                fontFamily="revert-layer"
                fontWeight={600}
                color="rgb(0,0,0,0.7)"
              >
                First Class Financial Advisors
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Globally incubate standards compliant channels before scalable
                benefits.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ExperienceBox;
