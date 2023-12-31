import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";

const Header = () => {
  return (
    <Box id="home">
      <Box
        position={"relative"}
        width={"100%"}
        height={{ md: "600px", sm: "450px", xs: "200px" }}
      >
        <img
          src="https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Mountains"
          width={"100%"}
          height={"100%"}
          style={{ filter: "brightness(70%)" }}
        />
      </Box>
      <Box
        position={{ md: "absolute", sm: "absolute" }}
        top={{ md: "23%", sm: "18%" }}
        width={"100%"}
        sx={{ transform: "translateY(-50% -50%" }}
      >
        <Container maxWidth="lg">
          <Grid container justifyContent={"center"} alignItems={"center"} px={{ md: 4 }}>
            <Grid item md={7} sm={6}>
              <Box color={{ md: "white", sm: "white" }} width={"300px"} pt={1}>
                <Typography>WELCOME TO ADATOS</Typography>
                <Typography
                  py={{ md: 3 }}
                  fontSize={{ md: "2.7em", sm: "2em" }}
                  fontWeight={900}
                  lineHeight={"45px"}
                >
                  {/* Oh Safe To the Rock That Is Higher Than  */}
                  Ascend in knowledge with ADATOS
                </Typography>
                <Typography>
                  Embark on a journey of intellectual ascent with Adatos Academy, where learning reaches new heights and knowledge unfolds at every step.
                </Typography>

              </Box>
            </Grid>
            <Grid item md={5} pl={{ md: 5 }}>
              <Box height={{ md: "330px", sm: "280px", xs: "210px" }} width={{ md: "400px", sm: "280px", xs: "100%" }}>
                <img
                  src="https://preview.colorlib.com/theme/byfaith/images/about_1.jpg"
                  alt="Group"
                  style={{ width: "100%", height: "100%" }}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Header;
