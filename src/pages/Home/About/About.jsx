import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";

const About = () => {
  return (
    <Box py={{ md: 16 }}>
      <Container maxWidth="lg">
        <Grid container px={{md:6}}>
          <Grid item md={6}>
            <Box width={"350px"}>
              <Typography color={"#ff9800"} fontWeight={500} pt={{md:0,xs:2}}>
                ABOUT US
              </Typography>
              <Typography
                py={{md:4,sm:3,xs:2}}
                fontSize={{ md: "3em",sm:"2.3em",xs:"1.8em" }}
                fontWeight={1000}
                lineHeight={{md:"50px",xs:"30px"}}
                width={"260px"}
              >
                Living and Sharing The Gospel
              </Typography>
              <Typography color={"gray"}>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </Typography>
              <Typography pt={4} color={"gray"}>
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia. It is a paradisematic country, in
                which roasted parts of sentences fly into your mouth.
              </Typography>
              <Button
                sx={{
                  my: 4,
                  bgcolor: "#ff9800",
                  color: "white",
                  borderRadius: "28px",
                  p: "10px 20px",
                  fontWeight: 600,
                  fontSize: "small",
                  "&:hover": {
                    bgcolor: "white",
                    color: "#ff9800",
                    boxShadow: "3px 5px 20px 2px gray",
                  },
                }}
              >
                GO TO SERMONS
              </Button>
            </Box>
          </Grid>
          <Grid item md={6}>
            <img
              src="https://preview.colorlib.com/theme/byfaith/images/img_3.jpg"
              alt="A Book"
              width={"100%"}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About;
