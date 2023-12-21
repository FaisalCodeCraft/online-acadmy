import { WhatsApp } from "@mui/icons-material";
import { Box, Button, Link } from "@mui/material";
import React from "react";

const WhatsAppCom = () => {
  return (
    <Box >
      <Button sx={{cursor:"pointer"}}>
        <Link href="https://wa.me/+447522063381">
        <WhatsApp sx={{ color: "white",bgcolor:"#00a040",p:.6, fontSize: "3.5em",borderRadius:"50%" }} />
        </Link>
      </Button>
    </Box>
  );
};

export default WhatsAppCom;
