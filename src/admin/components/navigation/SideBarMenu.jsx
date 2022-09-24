import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import { Button, Drawer } from "@mui/material";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";
import { sidebarLinkStyles, sidebarStyle } from "./style";

export default function SideBarMenu() {
  return (
    <Drawer variant="permanent" open>
      <Box sx={sidebarStyle}>
        <Link style={sidebarLinkStyles} to="/admin/dashboard">
          Dashboard
        </Link>
        <Link style={sidebarLinkStyles} to="/admin/dashboard">
          Dashboard
        </Link>
        <Link style={sidebarLinkStyles} to="/admin/dashboard">
          Dashboard
        </Link>
        <Link style={sidebarLinkStyles} to="/admin/dashboard">
          Dashboard
        </Link>
      </Box>
    </Drawer>
  );
}
