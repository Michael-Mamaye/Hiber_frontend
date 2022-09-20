import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import Img from "../../../../assets/meetingPicture.jpg";
import NewsDetail from "./NewsDetail";
const News = () => {
  const [marginTop, setmarginTop] = useState(0);
  const [readMore, setReadMore] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 149);
  }, []);
  window.addEventListener("scroll", () => {
    if (window.scrollY > 149) {
      setmarginTop(8);
    } else {
      setmarginTop(0);
    }
  });

  const handleReadMore = () => {
    setReadMore(!readMore);
  };
  return (
    <Box
      sx={{
        alignItems: "center",
        justifyContent: "center",
        mt: { xs: 0, sm: marginTop },
        mb: 10,
      }}
    >
      <NewsDetail readMore={readMore} handleClose={handleReadMore} />
      <Box
        sx={{
          background: "rgb(19, 29, 51,0.1)",
          textAlign: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "25vh",
        }}
      >
        <Typography
          sx={{ fontSize: 50, fontWeight: "bold", color: "rgba(0,0,0,0.8)" }}
        >
          Latest News
        </Typography>
      </Box>
      <Box sx={{ p: 5 }}>
        <Grid container spacing={5}>
          <Grid item xs={12} md={6} lg={4}>
            <Card
              sx={{
                height: "100%",
                boxShadow: "1px 1px 1px rgb(0,0,0,0.1)",
              }}
              elevation={0}
            >
              <CardMedia image={Img} sx={{ minHeight: 200 }} />
              <CardContent>
                <Typography
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    columnGap: 1,
                    color: "rgba(0,0,0,0.4)",
                    p: 0,
                    m: 0,
                  }}
                >
                  Bussiness{" "}
                  <span>
                    <div
                      style={{
                        border: "2px solid #fa9928",
                        width: "2px",
                        height: "2px",
                      }}
                    />
                  </span>
                  August 21, 2022
                </Typography>
              </CardContent>
              <CardHeader title="News Title" sx={{ pb: 0 }} />
              <CardContent>
                <Typography color="text.secondary">
                  Here is the card header Here is the card header Here is the
                  card header Here is the card header
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: "end" }}>
                <Button sx={{ color: "#fa9928" }} onClick={handleReadMore}>
                  Read More
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Card
              sx={{
                height: "100%",
                boxShadow: "1px 1px 1px rgb(0,0,0,0.1)",
              }}
              elevation={0}
            >
              <CardMedia image={Img} sx={{ minHeight: 200 }} />
              <CardContent>
                <Typography
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    columnGap: 1,
                    color: "rgba(0,0,0,0.4)",
                    p: 0,
                    m: 0,
                  }}
                >
                  Bussiness{" "}
                  <span>
                    <div
                      style={{
                        border: "2px solid #fa9928",
                        width: "2px",
                        height: "2px",
                      }}
                    />
                  </span>
                  August 21, 2022
                </Typography>
              </CardContent>
              <CardHeader title="News Title" sx={{ pb: 0 }} />
              <CardContent>
                <Typography color="text.secondary">
                  Here is the card header Here is the card header Here is the
                  card header Here is the card header
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: "end" }}>
                <Button sx={{ color: "#fa9928" }} onClick={handleReadMore}>
                  Read More
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Card
              sx={{
                height: "100%",
                boxShadow: "1px 1px 1px rgb(0,0,0,0.1)",
              }}
              elevation={0}
            >
              <CardMedia image={Img} sx={{ minHeight: 200 }} />
              <CardContent>
                <Typography
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    columnGap: 1,
                    color: "rgba(0,0,0,0.4)",
                    p: 0,
                    m: 0,
                  }}
                >
                  Bussiness{" "}
                  <span>
                    <div
                      style={{
                        border: "2px solid #fa9928",
                        width: "2px",
                        height: "2px",
                      }}
                    />
                  </span>
                  August 21, 2022
                </Typography>
              </CardContent>
              <CardHeader title="News Title" sx={{ pb: 0 }} />
              <CardContent>
                <Typography color="text.secondary">
                  Here is the card header Here is the card header Here is the
                  card header Here is the card header
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: "end" }}>
                <Button sx={{ color: "#fa9928" }} onClick={handleReadMore}>
                  Read More
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Card
              sx={{
                height: "100%",
                boxShadow: "1px 1px 1px rgb(0,0,0,0.1)",
              }}
              elevation={0}
            >
              <CardMedia image={Img} sx={{ minHeight: 200 }} />
              <CardContent>
                <Typography
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    columnGap: 1,
                    color: "rgba(0,0,0,0.4)",
                    p: 0,
                    m: 0,
                  }}
                >
                  Bussiness{" "}
                  <span>
                    <div
                      style={{
                        border: "2px solid #fa9928",
                        width: "2px",
                        height: "2px",
                      }}
                    />
                  </span>
                  August 21, 2022
                </Typography>
              </CardContent>
              <CardHeader title="News Title" sx={{ pb: 0 }} />
              <CardContent>
                <Typography color="text.secondary">
                  Here is the card header Here is the card header Here is the
                  card header Here is the card header
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: "end" }}>
                <Button sx={{ color: "#fa9928" }} onClick={handleReadMore}>
                  Read More
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default News;
