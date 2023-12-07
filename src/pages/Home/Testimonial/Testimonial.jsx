import * as React from "react";
import Box from "@mui/material/Box";
import CardCarousel from "./CardCarousel/CardCarousel";
import { Typography } from "@mui/material";




const Testimonial = () => {
 return (
    <Box pt={{md:15,sm:10,xs:5}}>
        <Box px={{md:6,xs:1}} textAlign={"center"} py={{md:6,xs:2}} pt={{md:0,xs:9}}>
          <Typography color={"#ff9800"} fontWeight={500}>
            SERMONS
          </Typography>
          <Typography py={1} fontSize={{ md: "3em",sm:"2em",xs:"1.8em" }} fontWeight={900}>
            Recent Sermons
          </Typography>
        </Box>
      <CardCarousel />
    </Box>
  );
};

export default Testimonial;

