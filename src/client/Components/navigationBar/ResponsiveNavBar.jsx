import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Close, SearchRounded } from "@mui/icons-material";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { NavLink } from "react-router-dom";
import {
  activeNavLinkStyle,
  mobileNavLinkStyle,
  mobileActiveNavLinkStyle,
  navLinkStyle,
  SearchButtonStyle,
  searchTextFieldStyle,
} from "./styles";
import { TextField } from "@mui/material";

const drawerWidth = 240;

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
        HIBER Manufacturing Consultancy PLC
      </Typography>
      <Divider />
      <Box
        sx={{ display: { xs: "flex", sm: "none" }, flexDirection: "column" }}
      >
        <NavLink
          style={({ isActive }) =>
            isActive ? mobileActiveNavLinkStyle : mobileNavLinkStyle
          }
          to="/users/home"
        >
          Home
        </NavLink>
        <NavLink
          style={({ isActive }) =>
            isActive ? mobileActiveNavLinkStyle : mobileNavLinkStyle
          }
          to="/users/services"
        >
          Services
        </NavLink>
        <NavLink
          style={({ isActive }) =>
            isActive ? mobileActiveNavLinkStyle : mobileNavLinkStyle
          }
          to="/users/projects"
        >
          Projects
        </NavLink>
        <NavLink
          style={({ isActive }) =>
            isActive ? mobileActiveNavLinkStyle : mobileNavLinkStyle
          }
          to="/users/aboutus"
        >
          About Us
        </NavLink>
        <NavLink
          style={({ isActive }) =>
            isActive ? mobileActiveNavLinkStyle : mobileNavLinkStyle
          }
          to="/users/news"
        >
          News
        </NavLink>
        <NavLink
          style={({ isActive }) =>
            isActive ? mobileActiveNavLinkStyle : mobileNavLinkStyle
          }
          to="/users/contactus"
        >
          Contact
        </NavLink>
      </Box>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        component="nav"
        elevation={0}
        position={props.navPosition}
        sx={{ background: "#131d33" }}
        onTransitionEndCapture
      >
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
                to="/users/home"
              >
                Home
              </NavLink>
              <NavLink
                style={({ isActive }) =>
                  isActive ? activeNavLinkStyle : navLinkStyle
                }
                to="/users/services"
              >
                Services
              </NavLink>
              <NavLink
                style={({ isActive }) =>
                  isActive ? activeNavLinkStyle : navLinkStyle
                }
                to="/users/projects"
              >
                Projects
              </NavLink>
              <NavLink
                style={({ isActive }) =>
                  isActive ? activeNavLinkStyle : navLinkStyle
                }
                to="/users/aboutus"
              >
                About Us
              </NavLink>
              <NavLink
                style={({ isActive }) =>
                  isActive ? activeNavLinkStyle : navLinkStyle
                }
                to="/users/news"
              >
                News
              </NavLink>
              <NavLink
                style={({ isActive }) =>
                  isActive ? activeNavLinkStyle : navLinkStyle
                }
                to="/users/contactus"
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
              placeholder="Search Text Here"
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
