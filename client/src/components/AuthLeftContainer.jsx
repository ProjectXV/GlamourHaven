import { Box, Button, Center, HStack, Image } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { LogoAlt } from "./Logo";

const AuthLeftContainer = ({ image, illustration }) => {
  const navigate = useNavigate();
  return (
    <Box
      backgroundImage={image}
      objectFit="cover"
      display={["none", "none", "none", "block"]}
      pl="3vw"
      pt="2vh"
    >
      <HStack spacing="3vw">
        <LogoAlt />
        <HStack spacing="2rem">
          <Button variant="link" color="white" onClick={() => navigate("/")}>
            Home
          </Button>
          <Button
            variant="link"
            color="white"
            onClick={() => navigate("/contact")}
          >
            Support
          </Button>
        </HStack>
      </HStack>
      <Center>
        <Image mt="10vh" src={illustration} height="70vh" />
      </Center>
    </Box>
  );
};

export default AuthLeftContainer;
