import { Box, Button, Center, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/PageSections/Header";
// import notfound from "../assets/404Error.svg";

const AccessDenied = () => {
  const navigate = useNavigate();
  return (
    <Box>
      <Header />
      <Center>
        <VStack>
          {/* <Image height="70vh" src={notfound} /> */}
          <Text>
            Access Denied. We don't know how you got here but we can find our
            way back. Click here to go back to the home page
          </Text>
          <Button bg="brand.300" color="#fff" onClick={() => navigate("/")}>
            Back To Home
          </Button>
        </VStack>
      </Center>
    </Box>
  );
};

export default AccessDenied;
