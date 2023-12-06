import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";

const Header = () => {
  return (
    <Box >
      <Box
        position={"relative"}
        width={"100%"}
        height={{ md: "600px", sm: "500px", xs: "200px" }}
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
        position={"absolute"}
        top={"23%"}
        width={"100%"}
        sx={{ transform: "translateY(-50% -50%" }}
      >
        <Container maxWidth="lg">
          <Grid container justifyContent={"center"} alignItems={"center"} px={4}>
            <Grid item md={7}>
              <Box color={"white"} width={"300px"}>
                <Typography>WELCOME TO BYFAITH CHURCH</Typography>
                <Typography
                  py={3}
                  fontSize={{ md: "2.7em" }}
                  fontWeight={900}
                  lineHeight={"45px"}
                >
                  Oh Safe To the Rock That Is Higher Than I
                </Typography>
                <Typography>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                </Typography>
                <Button
                  sx={{
                    my: 3,
                    bgcolor: "#ff9800",
                    color: "white",
                    borderRadius: "28px",
                    p: "10px 20px",
                    fontWeight: 600,
                    fontSize: "small",
                    "&:hover":{
                      bgcolor:"white",
                      color:"#ff9800"
                    }
                  }}
                >
                  GO TO SERMONS
                </Button>
              </Box>
            </Grid>
            <Grid item md={5} pl={5}>
              <img
                src="https://preview.colorlib.com/theme/byfaith/images/about_1.jpg"
                alt="Group"
                style={{width:"400px",height:"330px"}}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Header;
