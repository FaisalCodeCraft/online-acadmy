import { Box, Container } from "@mui/material";
import React, { Children } from "react";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

const Layout = (props) => {
  const { children } = props || {};
  return (
    <Box>
      <Box position={"absolute"}>
        <Navbar />
      </Box>
      <Box>{children}</Box>
      <Footer />
    </Box>
  );
};

export default Layout;
