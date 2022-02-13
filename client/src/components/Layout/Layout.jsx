import { Box, Flex, HStack } from "@chakra-ui/react";
import React from "react";
import Sidebar from "../PageSections/Sidebar";
import TopBar from "../PageSections/TopBar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <HStack spacing={0}>
      <Sidebar />
      <Flex bg="#F9F9F9" direction="column" maxWidth="85vw" h="100vh">
        <TopBar />
        <Box overflowY="hidden" h="88.5vh" p={5}>
          <Outlet />
        </Box>
      </Flex>
    </HStack>
  );
};

export default Layout;
