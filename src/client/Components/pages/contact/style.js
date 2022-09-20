export const gridStyles = {
  display: "flex",
  flexDirection: "column",
};

export const findLocationButtonStyle = {
  color: "rgb(0,0,0,0.8)",
  fontWeight: "bold",
  background: "rgb(240,240,240)",
  border: "1px solid rgb(240,240,240)",
  maxWidth: 200,
  p: 1.5,
  mb: 3,
  "&:hover": {
    background: "#131d33",
    border: "1px solid #fa9928",
    color: "white",
  },
};
export const contactInputStyle = {
  background: "white",
  textDeoration: "none",
  outline: "none",
  p: 1.5,
  borderRadius: 1,
  fontWeight: "bold",
};
export const socialMediaLinkStyle = {
  alignItems: "center",
  display: "flex",
  justifyContent: "left",
  textDecoration: "none",
  color: "rgb(0,0,0,0.6)",
  "&:hover": {
    cursor: "pointer",
    color: "rgb(0,0,0,0.9) !important",
  },
};
