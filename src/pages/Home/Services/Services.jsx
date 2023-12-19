import { Box, Button, Container, Grid, Link, Typography } from "@mui/material";
import { SERVICES } from "constants/contents/data";
import React from "react";

const Services = () => {
  return (
    <Box pt={{ md: 10, sm: 7, xs: 6 }} id="services">
    {/* <Box px={{ md: 6 }} > */}
     

      <Box bgcolor={"rgb(0, 72, 96)"} py={{md:4}} color={"white"} mt={"-3em"} position={"relative" }
      >
        <Container maxWidth="lg">
        <Grid container spacing={5} justifyContent={"center"} py={{md:8}} >
          <Grid item md={10.5} >
            <Typography
              py={{md:1}}
              pb={{md:5}}
              fontSize={{ md: "3em", sm: "2em", xs: "1em" }}
              fontWeight={700}
            >
              Join us on the path to success
            </Typography>
          </Grid>
          <Grid item md={1.5}>
        <Link href="https://wa.me/+447522063381" >

            <Button
              sx={{
                my: {md:4,sm:2,xs:1},
                
                bgcolor: "#ff9800",
                color: "white",
                borderRadius: "28px",
                p: "10px 20px",
                fontSize: "small",
                "&:hover": {
                  bgcolor: "white",
                  color: "#ff9800",
                },
              }}
            >

              JOIN US
            </Button>
              </Link>
          </Grid>
        </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Services;
