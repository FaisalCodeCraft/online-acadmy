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

const Navbar = () => {
  const { mode } = React.useContext(ThemeContext)

  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [bgColor, setBgColor] = React.useState(false)
  const changeBgColor = () => {
    if (window.scrollY >= 500) {
      setBgColor(true)
    } else (
      setBgColor(false)
    )
  }
  window.addEventListener("scroll", changeBgColor)


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
            href="/mount__sleet"
            sx={{ color: "black", textDecoration: "none" }}
          >
            Home
          </Link>
        </ListItem>
        <ListItem>
          <Link href="/About" sx={{ color: "black", textDecoration: "none" }}>
            About
          </Link>
        </ListItem>
        <ListItem>
          <Link href="/Trails" sx={{ color: "black", textDecoration: "none" }}>
            Trails
          </Link>
        </ListItem>
        <ListItem>
          <Link href="/News" sx={{ color: "black", textDecoration: "none" }}>
            News
          </Link>
        </ListItem>
        <ListItem>
          <Link href="/Contact" sx={{ color: "black", textDecoration: "none" }}>
            Home
          </Link>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Box >
      <AppBar component="nav" sx={{ bgcolor: bgColor && mode == "light" ? "black" : bgColor && mode == "dark" ? "white" : "transparent", color: mode === "dark" ? "black" : "white ", boxShadow: "none" }}>
        <Container maxWidth={"lg"}>
          <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ display: { sm: "none" }, color: "white" }}
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
                  sx={{ color: mode === "dark" ? "black" : " white", textDecoration: "none", fontSize: "1.4em", fontWeight: 700 }}
                >
                  ByFaith
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
                  href="/About"
                  sx={{ color: mode === "dark" ? "black" : "white ", textDecoration: "none" }}
                >
                  About
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  href="/Sermon"
                  sx={{ color: mode === "dark" ? "black" : "white ", textDecoration: "none" }}
                >
                  Sermon
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  href="/Ministries"
                  sx={{ color: mode === "dark" ? "black" : "white ", textDecoration: "none" }}
                >
                  Ministries
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  href="/Events"
                  sx={{ color: mode === "dark" ? "black" : "white ", textDecoration: "none" }}
                >
                  Events
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  href="/Contact"
                  sx={{ color: mode === "dark" ? "black" : "white ", textDecoration: "none" }}
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
