import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import Sidebar from "../../components/Sidebar";
import TopBar from "../../components/TopBar";

const Dashboard = () => {
  return (
    <Flex>
      <Sidebar />
      <Box bg="#F9F9F9">
        <TopBar />
        <Box h="88.5vh">Hello</Box>
      </Box>
    </Flex>
  );
};

export default Dashboard;
