import { Box, Button, Container, Divider, Grid, Typography, useMediaQuery } from "@mui/material";
import { COURSES } from "constants/contents/data";
import { ThemeContext } from "context";
import React, { useContext } from "react";

const Courses = () => {

  const { mode } = useContext(ThemeContext)

  return (
    <React.Fragment>
      <Divider sx={{ backgroundColor: 'gray', mb: 6, mx: {md:10,xs:2},mt:{md:0,sm:3,xs:6} }} />
      <Box pb={8} id="courses">
        <Container maxWidth="md" sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
          <Box px={{ xs: 1 }} textAlign={"center"} py={{ md: 6, xs: 2 }} >
            <Typography color={"#ff9800"} fontWeight={500}>
              COURSES
            </Typography>
            <Typography py={1} fontSize={{ md: "3em", sm: "2em", xs: "1.8em" }} fontWeight={900}>
              Our Courses
            </Typography>
          </Box>
          <Grid container spacing={{ md: 3, sm: 3, xs: 2 }}>
            {COURSES.map((item) => (
              <Grid item md={item.grid} sm={6} xs={12} display={{sm:item?.id?"flex":"none",md:'flex'}}>
                {item?.title && <Box bgcolor={"black"} borderRadius={"50%"} position={"relative"} display={"flex"}  alignItems={"center"} justifyContent={"center"} width={"100%"} height={{ md: "200px", xs: '250px',sm:"300px" }} >
                  <Box
                    position={"absolute"}
                    // zIndex={-1}

                    sx={{ opacity: .5 }}
                    width={"100%"}
                    height={{ md: "200px", xs: '250px',sm:"300px" }}
                    border={mode === 'dark' ? '2px solid white' : 'none'}
                    borderRadius={"50%"}
                    src={item?.poster}
                    component='img'

                  >

                  </Box >
                  <Typography p={2} zIndex={999} color={"white"} textAlign={'center'}>{item.title}</Typography>
                </Box>
                }
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box >
    </React.Fragment>
  );
};

export default Courses;
