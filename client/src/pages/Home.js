import { Box, Center, Stack, Text } from "@chakra-ui/react";
import React from "react";
import Header from "../components/Header";

const Home = () => {
  return (
    <Box>
      <Header />
      <Center>
        <Stack>
          <Text fontSize="100px">Landing Page</Text>
          <Text fontSize="150px">Coming soon</Text>
        </Stack>
      </Center>
    </Box>
  );
};

export default Home;
