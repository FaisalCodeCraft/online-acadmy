import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { SERMONS } from "constants/contents/data";
import React from "react";

const Sermon = () => {
  return (
    <Box pb={{md:12}}>
      <Container maxWidth="lg">
        <Box px={{md:6,xs:1}} textAlign={"center"} py={{md:6,xs:2}} pt={{md:0,xs:9}}>
          <Typography color={"#ff9800"} fontWeight={500}>
            SERMONS
          </Typography>
          <Typography py={1} fontSize={{ md: "3em",sm:"2em",xs:"1.8em" }} fontWeight={900}>
            Recent Sermons
          </Typography>
        </Box>
        <Grid container spacing={{md:4,sm:3,xs:2}} px={{md:3}}>
          {SERMONS.map((item) => (
            <Grid item md={4} sm={6}>
              <img
                src={item.poster}
                alt="students"
                width={"100%"}
                style={{ borderRadius: "10px" }}
              />
              <Box p={{md:3,sm:2,xs:1}}>
                <Typography color={"gray"}>{item.date}</Typography>
                <Typography py={1} fontSize={"1.3em"} fontWeight={500}>{item.title}</Typography>
                <Typography color={"gray"}>{item.description}</Typography>
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
                  READ MORE
                </Button>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Sermon;
