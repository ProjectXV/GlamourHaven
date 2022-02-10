import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import TopBar from "../../components/TopBar";

const Dashboard = () => {
  return (
    <Flex>
      <Box w="15vw">
        <Text>Hello World</Text>
      </Box>
      <Box bg="#F9F9F9">
        <TopBar />
        <Box h="88.5vh">Hello</Box>
      </Box>
    </Flex>
  );
};

export default Dashboard;
