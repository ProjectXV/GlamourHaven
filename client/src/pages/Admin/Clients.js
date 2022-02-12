import React from "react";
import { Avatar, Box, Flex, HStack, Text } from "@chakra-ui/react";
import Sidebar from "../../components/Sidebar";
import TopBar from "../../components/TopBar";
import ClientList from "../../data/ClientData.json";
import Table from "../../components/Table/Table";

const customerTableHead = [
  "",
  "profile picture",
  "username",
  "email",
  "phone number",
];

const renderHead = (item, index) => <th key={index}>{item}</th>;

const renderBody = (item, index) => (
  <tr key={index}>
    <td>{item.id}</td>
    <td>
      <Avatar size="sm" src={item.profile_pic} />
    </td>
    <td>{item.username}</td>
    <td>{item.email}</td>
    <td>{item.phone}</td>
  </tr>
);

const Clients = () => {
  return (
    <HStack spacing={0}>
      <Sidebar />
      <Flex bg="#F9F9F9" direction="column" maxWidth="85vw" h="100vh">
        <TopBar />
        <Box overflowY="hidden" h="89vh" p={5}>
          <Text fontSize="1.5em" textAlign="left">
            Clients
          </Text>
          <Flex h="80vh">
            <Box bg="white" borderRadius="20px" height="100%" w="100%" p={5}>
              <Table
                limit="6"
                headData={customerTableHead}
                renderHead={(item, index) => renderHead(item, index)}
                bodyData={ClientList}
                renderBody={(item, index) => renderBody(item, index)}
              />
            </Box>
          </Flex>
        </Box>
      </Flex>
    </HStack>
  );
};

export default Clients;
