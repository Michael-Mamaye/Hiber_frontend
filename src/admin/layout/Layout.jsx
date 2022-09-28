import React from "react";

const itemDashboardStyle = {
  margin: 10,
  marginLeft: 220,
  padding: 10,
  height: "92vh",
  borderRadius: 10,
  background: "rgb(19, 29, 51,0.1)",
  overflowY: "auto",
};
const Layout = ({ children }) => {
  return <div style={itemDashboardStyle}>{children}</div>;
};

export default Layout;
