import * as React from "react";
import Typography from "@mui/material/Typography";
import { Box, Dialog, Grid, IconButton } from "@mui/material";
import Img2 from "../../../../assets/handShake.jpg";
import { Close } from "@mui/icons-material";
import { closeButtonStyle } from "./style";
const DetailDescriptionModal = ({ open, handleClose }) => {
  return (
    <Dialog open={open} onClose={handleClose}>
      <Box
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Grid container style={{padding:'2%'}} spacing={5}>
          <Grid item container xs={12} spacing={3}> 
            <Grid item xs={12} sm={6}>
              <img
                style={{ width: "100%", height: "100%" }}
                src={Img2}
                alt="this item"
              />
              <IconButton onClick={handleClose} style={closeButtonStyle}><Close/></IconButton>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography>this is the item</Typography>
              <Typography>this is the item</Typography>
              <Typography>this is the item</Typography>
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

export default DetailDescriptionModal;
