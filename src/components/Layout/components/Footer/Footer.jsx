import { Global } from "@emotion/react";
import { Facebook, Instagram, Language, LinkedIn, Pinterest, Twitter } from "@mui/icons-material";
import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Grid,
  List,
  ListItem,
} from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <Box bgcolor={"rgb(249, 239, 206)"} py={8} px={{ md: 4 }}>
      <Container maxWidth>
        <Grid container spacing={4}>
          <Grid item md={4}>
            <List sx={{ color: "darkGray", cursor: "pointer" }}>
              <ListItem sx={{ color: "black", fontWeight: 700 }}>
                CONTACT
              </ListItem>
              <ListItem>43 Raymouth Rd. Baltemoer, London 3910</ListItem>
              <ListItem>+1(123)-456-7890</ListItem>
              <ListItem>+1(123)-456-7890</ListItem>
              <ListItem>info@mydomain.com</ListItem>
            </List>
          </Grid>
          <Grid item md={1.5}>
            <List sx={{ color: "darkGray", cursor: "pointer" }}>
              <ListItem sx={{ color: "black", fontWeight: 700 }}>
                SOURCES
              </ListItem>
              <ListItem>About us</ListItem>
              <ListItem>Services</ListItem>
              <ListItem>Vision</ListItem>
              <ListItem>Mission</ListItem>
              <ListItem>Terms</ListItem>
              <ListItem>Privacy</ListItem>
            </List>
          </Grid>
          <Grid item md={2.5}>
            <List sx={{ color: "darkGray", cursor: "pointer", mt: 5 }}>
              <ListItem>Partners</ListItem>
              <ListItem>Business</ListItem>
              <ListItem>Careers</ListItem>
              <ListItem>Blog</ListItem>
              <ListItem>FAQ</ListItem>
              <ListItem>Creative</ListItem>
            </List>
          </Grid>
          <Grid item md={4}>
            <List sx={{ color: "darkGray" }}>
              <ListItem sx={{ color: "black", fontWeight: 700 }}>
                LINLS
              </ListItem>
              <ListItem>Our Vision</ListItem>
              <ListItem>About us</ListItem>
              <ListItem>+1(123)-456-7890</ListItem>
              <ListItem>Contact us</ListItem>
            </List>
            <Box display={"flex"}>
            <Button sx={btnStyle} >
                <Instagram

                  sx={style}
                />
              </Button>
            <Button sx={btnStyle} >
                <Facebook

                  sx={style}
                />
              </Button>
            <Button sx={btnStyle} >
                <Twitter

                  sx={style}
                />
              </Button>
            <Button sx={btnStyle} >
                <LinkedIn

                  sx={style}
                />
              </Button>
            <Button sx={btnStyle} >
                <Pinterest

                  sx={style}
                />
              </Button>
            <Button  >
                <Language

                  sx={style}
                />
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;


const style={
  "&:hover": {
    bgcolor: "#ff9800",
    color: "white",

    boxShadow: "none",
  },
  p: "10px ",
  borderRadius: "12px",
  bgcolor: "white",
  color: "darkGray",
}
const btnStyle={  mr: "-15px", "&:hover": {
  bgcolor: "transparent",

  boxShadow: "none",
}, }