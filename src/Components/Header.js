import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useNavigate, useLocation } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Logo from "../images/techtorchlogo.jpg";
import EmailIcon from "@mui/icons-material/Email";

const drawerWidth = 240;
const navItems = ["Home", "About Us", "Contact Us", "Career", "Blogs"];

function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeRoute, setActiveRoute] = useState(""); // Set default active route to ""

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleNavItem = (item) => {
    // Set active route before navigation
    setActiveRoute(item);
  
    switch (item) {
      case "Home":
        navigate("/");
        break;
      case "About Us":
        navigate("/about");
        break;
      case "Contact Us":
        navigate("/contact");
        break;
      case "Career":
        navigate("/career");
        break;
      case "Blogs":
        navigate("/blogs");
        break;
      default:
        break;
    }
    
    handleDrawerToggle();
  };

  useEffect(() => {
    // Toggle body class to enforce scrollbar visibility
    if (mobileOpen) {
      document.body.classList.add("show-scrollbar");
    } else {
      document.body.classList.remove("show-scrollbar");
    }
  }, [mobileOpen]);

  useEffect(() => {
    // Update activeRoute based on current location pathname
    const pathname = location.pathname;
    const route = navItems.find((item) => pathname === `/${item.toLowerCase().replace(/\s/g, "-")}`);
    setActiveRoute(route || "");
  }, [location.pathname]);

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Tech Torch
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton
              sx={{
                textAlign: "center",
                backgroundColor: activeRoute === item ? "lightgray" : "inherit",
              }}
              onClick={() => handleNavItem(item)}
            >
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav" sx={{ backgroundColor: "#fff", color: "#000" }}>
      <Toolbar sx={{ justifyContent: "space-between", paddingY: "20px" }}>
  <Box sx={{ display: "flex", alignItems: "center" }}>
    <img
      src={Logo}
      alt="Logo"
      style={{ height: "60px", width: "60px", marginRight: "50px" }}
    />
    <Typography
      variant="h6"
      component="div"
      sx={{ display: { xs: "none", sm: "block" } }}
    >
      <Box sx={{ display: { xs: "none", sm: "block" } }}>
        {navItems.map((item) => (
          <Button
            key={item}
            sx={{
              color: "black",
              "&:hover": {
                color: "blue",
                textDecoration: "underline",
              },
              backgroundColor: activeRoute === item ? "lightgray" : "inherit",
            }}
            onClick={() => handleNavItem(item)}
          >
            {item}
          </Button>
        ))}
      </Box>
    </Typography>
  </Box>
  
  <Box sx={{ display: "flex", alignItems: "center" }}>
  <IconButton color="inherit" aria-label="email" sx={{ marginRight: 1 }}>
    <a href="mailto:contact@techtorchsolutions.com" style={{ color: "inherit", textDecoration: "none" }}>
      <EmailIcon />
    </a>
  </IconButton>
  <Typography variant="body2" sx={{ display: { xs: "none", sm: "block" } }}>
    <a href="mailto:contact@techtorchsolutions.com" style={{ color: "inherit", textDecoration: "none" }}>
      contact@techtorchsolutions.com
    </a>
  </Typography>
  <IconButton
    color="inherit"
    aria-label="open drawer"
    edge="end"
    onClick={handleDrawerToggle}
    sx={{ mr: 2, display: { sm: "none" } }}
  >
    <MenuIcon />
  </IconButton>
</Box>

</Toolbar>

      </AppBar>
      <nav>
        <Drawer
          variant="temporary"
          anchor="right"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
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
      </nav>
    </Box>
  );
}

export default Header;
