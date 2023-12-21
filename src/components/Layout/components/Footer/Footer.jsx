
import { Facebook, Instagram, Language, LinkedIn, Pinterest, Twitter } from "@mui/icons-material";
import {
  Box,
  Container,
  Grid,
  Link,
  List,
  ListItem,
} from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <Box bgcolor={"rgb(249, 239, 206)"} py={8} px={{ md: 4 }} id="contact">
      <Container maxWidth>
        <Grid container spacing={4}>
          <Grid item md={4}>
            <List sx={{ color: "darkGray", cursor: "pointer" }}>
              <ListItem sx={{ color: "black", fontWeight: 700 }}>
                CONTACT
              </ListItem>
              <ListItem>10 giouri kangari 23 5330agia napa cyprus</ListItem>
              <ListItem>+447522063381</ListItem>
              <ListItem>Basfax11@gmail.com</ListItem>
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
                LINKS
              </ListItem>
              <ListItem>Our Vision</ListItem>
              <ListItem>About us</ListItem>
              <ListItem>+447522063381</ListItem>
              <ListItem>Basfax11@gmail.com</ListItem>
              <ListItem>Contact us</ListItem>
            </List>
            <Box display={"flex"} flexWrap={"wrap"}>
              <Link href={"https://www.instagram.com/constable_cruise_ayia_napa?igshid=YTQwZjQ0NmI0OA"} sx={{ linkStyle, ml: 1 }} >
                <Instagram

                  sx={style}
                />
              </Link>
              <Link href={"https://www.facebook.com/constable.cruise"} sx={linkStyle} >
                <Facebook

                  sx={style}
                />
              </Link>
              <Link sx={linkStyle} >
                <Twitter

                  sx={style}
                />
              </Link>
              <Link sx={linkStyle} >
                <LinkedIn

                  sx={style}
                />
              </Link>
              <Link sx={linkStyle} >
                <Pinterest

                  sx={style}
                />
              </Link>
              <Link sx={linkStyle} href="https://www.tiktok.com/@stephen.bastien?_t=8iJyKAho3kH&_r=1">
                <img width={ 40} style={{borderRadius:12}} src="data:image/png;base64,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" alt="tikTok icon" />
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;


const style = {
  "&:hover": {
    bgcolor: "#ff9800",
    color: "white",

  },
  p: "8px ",
  borderRadius: "12px",
  bgcolor: "white",
  color: "darkGray",
}
const linkStyle = {
  ml: "4px",

}
