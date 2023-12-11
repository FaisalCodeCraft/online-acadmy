import { Box } from "@mui/material";
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import WhatsAppCom from "./WhatsAppCom";

const Layout = (props) => {
  const { children } = props || {};
  return (
    <Box>
      <Box position={"absolute"}>
        <Navbar />
      </Box>
      <Box>{children}</Box>
      <Box position={"fixed"} bottom={20} right={20}><WhatsAppCom/></Box>
      <Footer />
    </Box>
  );
};

export default Layout;
