import { WhatsApp } from "@mui/icons-material";
import { Box, Button, Link } from "@mui/material";
import React from "react";

const WhatsAppCom = () => {
  return (
    <Box >
      <Button >
        <Link href="https://wa.me/+447522063381">
        <WhatsApp sx={{ color: "#00a152", fontSize: "4em",borderRadius:"50%" }} />
        </Link>
      </Button>
    </Box>
  );
};

export default WhatsAppCom;
