export const sidebarStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  pt: 5,
  pb: 5,
  width: 200,
  background: "#131d33",
  height: "100%",
};
export const sidebarLinkStyles = {
  textDecoration: "none",
  width: 200,
};
export const sidebarMenuItemStyles = {
  color: 'rgba(255,255,255,0.8)',
  fontWeight: "bold",
  textAlign: "left",
  "&:hover": {
    background: "#fa9928",
    color: "#131d33",
  },
};
export const activeSidebarMenuItemStyles = {
  background: "#fa9928",
  fontWeight: "bold",
  color: "#131d33",
  "&:hover": {
    background: "#fa9928",
    color: "#131d33",
  },
};
