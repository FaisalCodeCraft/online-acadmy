import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";

const About = () => {
  return (
    <Box py={{ md: 16 }} id="about">
      <Container maxWidth="lg">
        <Grid container px={{ md: 6 }} alignItems={"center"}>
          <Grid item md={6}>
            <Box width={{ md: "350px" }}>
              <Typography color={"#ff9800"} fontWeight={500} pt={{ md: 0, xs: 8 }}>
                ABOUT US
              </Typography>
              <Typography
                py={{ md: 4, sm: 3, xs: 2 }}
                fontSize={{ md: "2.5em", sm: "2.3em", xs: "1.5em" }}
                fontWeight={700}
                lineHeight={{ md: "50px", xs: "30px" }}
                width={{ md: "300px" }}
              >
                My name is Stephen Aastien a.k.a  Stevie b
              </Typography>
              <Typography color={"gray"}>
                Founder and sole proprietor  of ADATOS ( a different approach to sales )
                I am a passionate  and dedicated individual with a very diverse background in sales both in the UK and abroad spanning over 20 years .
              </Typography>
              <Typography pt={4} color={"gray"}>
                ADATOS is more than a business; it is a commitment to innovation and excellence in every sales endeavour. Join me on this exciting journey of transforming the sales landscape with a fresh perspective and unwavering enthusiasm.
              </Typography>
             
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
