import { Box, Center, Stack, Text } from "@chakra-ui/react";
import React from "react";
import Header from "../components/Header";

const Checkout = () => {
  return (
    <Box>
      <Header />
      <Center>
        <Stack>
          <Text fontSize="100px">Checkout Page</Text>
          <Text fontSize="150px">Coming soon</Text>
        </Stack>
      </Center>
    </Box>
  );
};

export default Checkout;
