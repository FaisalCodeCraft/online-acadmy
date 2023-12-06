import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { PRAYERS } from "constants/contents/data";
import React from "react";

const WhyUs = () => {
  return (
    <Box bgcolor={"rgb(0, 72, 96)"} color={"white"} py={{ md: 6,xs:3 }} px={{md:6}}>
      <Container maxWidth="lg">
        <Typography color={"#ff9800"} fontWeight={500} pt={2}>
          WHY US
        </Typography>
        <Grid container spacing={{md:9}} alignItems={"center"}>
          <Grid item md={6}>
            <Box py={{md:2}}>
              <Typography
                lineHeight={"45px"}
                py={1}
                width={{md:"380px",sm:"100%"}}
                fontSize={{ md: "2.6em" }}
                fontWeight={900}
              >
                You matter to God, you matter to us.
              </Typography>

              <img
                src="https://preview.colorlib.com/theme/byfaith/images/img_1.jpg"
                alt="Student "
                width={"100%"}
                style={{ padding: { md: "4em 0",sm: "2.5em 0",xs: "1.5em 0" } }}
              />
            </Box>
          </Grid>
          <Grid item md={6} >
            <Container>
            <Typography pt={{md:4}}>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right at the coast of the Semantics, a
              large language ocean.
            </Typography>
            <Grid
              container
              mt={{ md: 2 }}
            rowSpacing={4}
            >
              {PRAYERS.map((item) => (
                <Grid item md={6}  sx={{"&:nth-child(even)":{pl:{md:3}}}}>
                  <Typography fontWeight={500}>{item.title}</Typography>
                  <Typography color={"gray"} fontSize={"14px"}>{item.description}</Typography>
                </Grid>
              ))}
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
                SEND US YOUR PRAYER REQUEST
              </Button>

            </Grid>
            </Container>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default WhyUs;
