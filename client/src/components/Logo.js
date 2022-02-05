import React from "react";
import { Box, Image } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/Logo-colored.svg";
import logoAlt from "../assets/Logo-white.svg";

const Logo = () => {
  const navigate = useNavigate();
  return (
    <Box onClick={() => navigate("/")} _hover={{ cursor: "pointer" }}>
      <Image src={logo} />
    </Box>
  );
};

export const LogoAlt = () => {
  const navigate = useNavigate();
  return (
    <Box onClick={() => navigate("/")} _hover={{ cursor: "pointer" }}>
      <Image src={logoAlt} />
    </Box>
  );
};

export default Logo;
