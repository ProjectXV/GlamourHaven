import React from "react";
import { Box } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Logo = () => {
  const navigate = useNavigate();
  return (
    <Box onClick={() => navigate("/")} _hover={{ cursor: "pointer" }}>
      GlamourHaven
    </Box>
  );
};

export default Logo;
