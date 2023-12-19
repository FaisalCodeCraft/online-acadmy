import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import { Button, Container, Link, Typography } from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
import ModeToggle from "components/ModeToggle/ModeToggle";
import { ThemeContext } from "context";
import logo from "../../../../logo/Picsart_23-12-19_12-43-15-457.png"


const Navbar = () => {
  const { mode } = React.useContext(ThemeContext)

  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [bgColor, setBgColor] = React.useState(false)
  const [color, setColor] = React.useState(false)

  const changeBgColor = () => {
    if (window.scrollY >= 450) {
      setBgColor(true)
    } else (
      setBgColor(false)
    )
  }
  window.addEventListener("scroll", changeBgColor)
  const changeColor = () => {
    if (window.scrollY >= 450) {
      setColor(true)
    } else (
      setColor(false)
    )
  }
  window.addEventListener("scroll", changeColor)


  const handleDrawerToggle = (_) => setMobileOpen((prevState) => !prevState);
  // function handleDrawerToggle(){
  //   setMobileOpen((prevState) => !prevState);
  // }




  const drawer = (
    // toggle for small screen
    <Box
      onClick={() => handleDrawerToggle()}
      sx={{ textAlign: "center" }}
      px={3}
    >
      <List>
        <ListItem>
          <Link

            href="/Home"
            sx={{ color: "black", textDecoration: "none" }}
          >
            Home
          </Link>
        </ListItem>
        <ListItem>
          <Link href="#about" sx={{ color: "black", textDecoration: "none" }}>
            About
          </Link>
        </ListItem>
        <ListItem>
          <Link href="#courses" sx={{ color: "black", textDecoration: "none" }}>
            Courses
          </Link>
        </ListItem>
        <ListItem>
          <Link href="#whyUS" sx={{ color: "black", textDecoration: "none" }}>
            WhyUs
          </Link>
        </ListItem>
        <ListItem>
          <Link href="#services" sx={{ color: "black", textDecoration: "none" }}>
            Services
          </Link>
        </ListItem>
        <ListItem>
          <Link href="#contact" sx={{ color: "black", textDecoration: "none" }}>
            Contact
          </Link>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Box >
      <AppBar component="nav" sx={{ bgcolor: bgColor && mode == "light" ? "black" : bgColor && mode == "dark" ? "white" : "transparent", color: color && mode === "dark" ? "black" : "white ", boxShadow: "none" }}>
        <Container maxWidth={"lg"}>
          <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ display: { sm: "flex", md: "none" }, color: mode == "light" ? "white" : "black" }}
            >
              <MenuIcon />
            </IconButton>
            <List
              variant="h6"
              component="div"
              sx={{
                display: { xs: "none", sm: "none", md: "block" },
                flexGrow: 1,
                color: mode === "dark" ? "black" : " white ",
              }}
              width={"100%"}
            >
              <ListItem>
                <Link
                  href="/Home"
                  sx={{ color: color && mode === "dark" ? "black" : " white", textDecoration: "none",  }}
                >
                  <img src={logo} alt=""  style={{width:"50px",height:"50px"}} />
                </Link>
              </ListItem>
            </List>
            <List
              sx={{
                display: { xs: "none", sm: "none", md: "flex" },
              }}
            >
              <ListItem>
                <ModeToggle />
              </ListItem>
              <ListItem> 
                <Link
                  href="#about"
                  sx={{ color: color && mode === "dark" ? "black" : "white ", textDecoration: "none" }}
                >
                  About
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  href="#courses"
                  sx={{ color: color && mode === "dark" ? "black" : "white ", textDecoration: "none" }}
                >
                  Courses
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  href="#whyUs"
                  sx={{ color: color && mode === "dark" ? "black" : "white ", textDecoration: "none" }}
                >
                  WhyUs
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  href="#services"
                  sx={{ color: color && mode === "dark" ? "black" : "white ", textDecoration: "none" }}
                >
                  Services
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  href="#contact"
                  sx={{ color: color && mode === "dark" ? "black" : "white ", textDecoration: "none" }}
                >
                  Contact
                </Link>
              </ListItem>
            </List>
          </Toolbar>
        </Container>
      </AppBar>
      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },

            "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth, }
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Toolbar />
    </Box>
  );
};
export default Navbar;

const drawerWidth = 200;
