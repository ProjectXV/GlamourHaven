import { Box, Center, Stack, Text } from "@chakra-ui/react";
import React from "react";
import Header from "../components/Header";

function About() {
  return (
    <Box>
      <Header />
      <Center>
        <Stack>
          <Text fontSize="100px">About</Text>
          <Text fontSize="150px">Coming soon</Text>
        </Stack>
      </Center>
    </Box>
  );
}

export default About;
