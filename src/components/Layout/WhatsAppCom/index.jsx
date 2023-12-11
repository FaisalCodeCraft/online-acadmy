import { WhatsApp } from "@mui/icons-material";
import { Box, Button } from "@mui/material";
import React from "react";

const WhatsAppCom = () => {
  return (
    <Box >
      <Button s>
        <WhatsApp sx={{ color: "#00a152", fontSize: "4em",borderRadius:"50%" }} />
      </Button>
    </Box>
  );
};

export default WhatsAppCom;
