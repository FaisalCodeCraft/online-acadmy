import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { SERVICES } from "constants/contents/data";
import React from "react";

const Services = () => {
  return (
    <Box pt={{ md: 12, sm: 7, xs: 6 }}>
    <Box px={{ md: 6 }} >
      <Container maxWidth="lg" sx={{ bgcolor: "white" }}>
        <Box textAlign={"center"} p={"6em 20px"}>
          <Typography color={"#ff9800"} fontWeight={500}>
            OUR SERVICES
          </Typography>
          <Typography
            py={1}
            pb={5}
            fontSize={{ md: "2.7em", sm: "2em", xs: "1.6em" }}
            fontWeight={900}
          >
            Provided Services
          </Typography>
          <Grid container spacing={4}>
            {SERVICES.map((item) => (
              <Grid item md={4} sm={6}>
                <img
                  src={item.icon}
                  alt="logoIcon"
                  width={"80px"}
                  style={{ borderRadius: "10px" }}
                />
                <Box p={{ md: 3, sm: 2, xs: 1 }}>
                  <Typography py={1} fontSize={"1.3em"} fontWeight={500}>
                    {item.title}
                  </Typography>
                  <Typography color={"gray"}>{item.des}</Typography>
                  <Button
                    sx={{
                      my: 4,
                      color: "#ff9800",
                      borderRadius: "28px",
                      p: "10px 20px",
                      fontSize: "small",
                      "&:hover": {
                        color: "#ff9999",
                      },
                    }}
                  >
                    +READ MORE
                  </Button>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
      </Box>

      <Box bgcolor={"rgb(0, 72, 96)"} py={8} color={"white"} mt={"-3em"} position={"relative" }
      >
        <Container maxWidth="lg">
        <Grid container spacing={5} justifyContent={"center"} py={{md:8}} >
          <Grid item md={10.5} >
            <Typography
              py={1}
              pb={5}
              fontSize={{ md: "3em", sm: "2em", xs: "1.6em" }}
              fontWeight={900}
            >
              Join with us as we worship the Lord
            </Typography>
          </Grid>
          <Grid item md={1.5}>
            <Button
              sx={{
                my: 4,
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
          </Grid>
        </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Services;
