import * as React from "react";
import { Avatar, MenuItem, Drawer, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";
import {
  sidebarMenuItemStyles,
  sidebarLinkStyles,
  sidebarStyle,
  activeSidebarMenuItemStyles,
} from "./style";
import { Facebook } from "@mui/icons-material";
import { useLocation } from "react-router-dom";
export default function SideBarMenu() {
  const { pathname } = useLocation();
  const linksList = [
    {
      to: "/admin/dashboard",
      icon: <Facebook />,
      text: "Dashboard",
    },
    {
      to: "/admin/users",
      icon: <Facebook />,
      text: "Users",
    },
    {
      to: "/admin/services",
      icon: <Facebook />,
      text: "Services",
    },
    {
      to: "/admin/projects",
      icon: <Facebook />,
      text: "Projects",
    },
    {
      to: "/admin/news",
      icon: <Facebook />,
      text: "News",
    },
    {
      to: "/admin/emails",
      icon: <Facebook />,
      text: "Emails",
    },
  ];

  return (
    <Drawer variant="permanent" open>
      <Box sx={sidebarStyle}>
        <Box
          sx={{
            color: "white",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: 1,
            pb: 2,
            width: "100%",
            borderBottom: "1px solid rgba(255,255,255,0.3)",
          }}
        >
          <Avatar />
          <Typography sx={{ fontWeight: "bold" }}> Michael Mamaye</Typography>
          <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.5)" }}>
            michaelmamaye@gmail.com
          </Typography>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
          {linksList?.map((links) => (
            <Link style={sidebarLinkStyles} key={links.to} to={links.to}>
              <MenuItem
                sx={
                  pathname.includes(links.to)
                    ? activeSidebarMenuItemStyles
                    : sidebarMenuItemStyles
                }
              >
                <span style={{ marginRight: 5 }}>{links.icon}</span>{" "}
                {links.text}
              </MenuItem>
            </Link>
          ))}
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
          <Link style={sidebarLinkStyles} to="/admin/logout">
            <MenuItem sx={sidebarMenuItemStyles}>
              <span style={{ marginRight: 5 }}>
                <Facebook />
              </span>{" "}
              Logout
            </MenuItem>
          </Link>
        </Box>
      </Box>
    </Drawer>
  );
}
