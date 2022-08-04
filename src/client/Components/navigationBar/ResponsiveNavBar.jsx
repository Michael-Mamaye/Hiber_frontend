import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import { Close, SearchRounded } from "@mui/icons-material";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { NavLink } from "react-router-dom";
import {
  activeNavLinkStyle,
  navLinkStyle,
  SearchButtonStyle,
  searchTextFieldStyle,
} from "./styles";
import { TextField } from "@mui/material";

const drawerWidth = 240;
const navItems = ["Home", "About", "Contact"];

function ResponsiveNavBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [searchOpen, setSearchOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        HIBER
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar component="nav" position="sticky" sx={{ background: "#131d33" }}>
        <Toolbar
          sx={{
            display: { xs: "block", sm: "flex" },
            justifyContent: "space-between",
          }}
        >
          {!searchOpen && (
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <NavLink
                style={({ isActive }) =>
                  isActive ? activeNavLinkStyle : navLinkStyle
                }
                to="/dashboard"
              >
                Home
              </NavLink>
              <NavLink
                style={({ isActive }) =>
                  isActive ? activeNavLinkStyle : navLinkStyle
                }
                to="/lop"
              >
                Services
              </NavLink>
              <NavLink
                style={({ isActive }) =>
                  isActive ? activeNavLinkStyle : navLinkStyle
                }
                to="/dashboard"
              >
                Projects
              </NavLink>
              <NavLink
                style={({ isActive }) =>
                  isActive ? activeNavLinkStyle : navLinkStyle
                }
                to="/lop"
              >
                About Us
              </NavLink>
              <NavLink
                style={({ isActive }) =>
                  isActive ? activeNavLinkStyle : navLinkStyle
                }
                to="/dashboard"
              >
                News
              </NavLink>
              <NavLink
                style={({ isActive }) =>
                  isActive ? activeNavLinkStyle : navLinkStyle
                }
                to="/lop"
              >
                Contact
              </NavLink>
            </Box>
          )}
          {!searchOpen && (
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { sm: "none" } }}
              >
                <MenuIcon />
              </IconButton>
              <IconButton
                sx={SearchButtonStyle}
                onClick={() => setSearchOpen(true)}
              >
                <SearchRounded />
              </IconButton>
            </Box>
          )}

          {searchOpen && (
            <TextField
              variant="filled"
              InputProps={{
                disableUnderline: true,
                endAdornment: (
                  <IconButton
                    style={{ color: "white" }}
                    onClick={() => setSearchOpen(false)}
                  >
                    <Close style={{ color: "white" }} />
                  </IconButton>
                ),
                style: searchTextFieldStyle,
              }}
              fullWidth
            />
          )}
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

ResponsiveNavBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveNavBar;