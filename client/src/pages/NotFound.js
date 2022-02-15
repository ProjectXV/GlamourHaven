import { Box, Button, Center, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import notfound from "../assets/404Error.svg";
import Header from "../components/PageSections/Header";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <Box>
      <Header />
      <Center>
        <VStack>
          <Image height="70vh" src={notfound} />
          <Text>
            Were sorry. We dont know how you got here but we can find our way
            back. Click here to go back to the home page
          </Text>
          <Button bg="brand.300" color="#fff" onClick={() => navigate("/")}>
            Back To Home
          </Button>
        </VStack>
      </Center>
    </Box>
  );
};

export default NotFound;
