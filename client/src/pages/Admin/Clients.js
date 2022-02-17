import React from "react";
import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Flex,
  HStack,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spacer,
  Text,
} from "@chakra-ui/react";
import ClientList from "../../data/ClientData.json";
import Table from "../../components/Table/Table";
import { ChevronDownIcon } from "@chakra-ui/icons";

const customerTableHead = [
  "",
  "profile picture",
  "username",
  "email",
  "phone number",
  "isSubscribed",
];

const renderHead = (item, index) => <th key={index}>{item}</th>;

const renderBody = (item, index) => (
  <tr key={index}>
    <td>{index}</td>
    <td>
      <Avatar size="sm" src={item.profile_pic} />
    </td>
    <td>{item.username}</td>
    <td>{item.email}</td>
    <td>{item.phone}</td>
    <td>{item.isSubscribed}</td>
  </tr>
);

const Clients = () => {
  return (
    <>
      <HStack>
        <Text fontSize="1.5em" textAlign="left">
          Clients
        </Text>
        <Spacer />
        <ButtonGroup>
          <Menu>
            <MenuButton>
              <Button rightIcon={<ChevronDownIcon />}>Download as</Button>
            </MenuButton>
            <MenuList>
              <MenuItem>Excel(.xcl)</MenuItem>
            </MenuList>
          </Menu>
          <Button rightIcon={<ChevronDownIcon />}>Download as</Button>
        </ButtonGroup>
      </HStack>
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
