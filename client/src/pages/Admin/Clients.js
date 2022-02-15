import React from "react";
import { Avatar, Box, Flex, Text } from "@chakra-ui/react";
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
    <>
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
    </>
  );
};

export default Clients;
