import * as React from "react";
import Typography from "@mui/material/Typography";
import { Box, Dialog, Grid, IconButton } from "@mui/material";
import Img2 from "../../../../assets/handShake.jpg";
import { Close } from "@mui/icons-material";
import { closeButtonStyle } from "./style";
const NewsDetail = ({ readMore, handleClose }) => {
  return (
    <Dialog open={readMore} onClose={handleClose}>
      <Box
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Grid container style={{ padding: "2%" }} spacing={5}>
          <Grid item container xs={12} spacing={3}>
            <Grid item xs={10} sm={10}>
              <img
                style={{ width: "100%", height: "100%" }}
                src={Img2}
                alt="this item"
              />
            </Grid>
            <Grid item xs={2} sm={2}>
              <IconButton onClick={handleClose} style={closeButtonStyle}>
                <Close />
              </IconButton>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Typography>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi
              cupiditate optio nulla dolorem nobis esse repellendus voluptatem,
              explicabo illum. Similique aliquam unde velit explicabo beatae quo
              molestiae quas accusantium iste.
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Dialog>
  );
};

export default NewsDetail;
