import React from "react";
import {
  Avatar,
  Box,
  Button,
  Circle,
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
import { ChevronDownIcon, ViewIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";

const customerTableHead = [
  "",
  "profile picture",
  "username",
  "email",
  "phone number",
  "isSubscribed",
  " ",
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
    <td>
      <Circle
        onClick={() => {
          const navigate = useNavigate();
          navigate(`/client/${item._id}/profile`);
        }}
        size="25px"
        bg="neutral.200"
        color="white"
        cursor="pointer"
      >
        <ViewIcon />
      </Circle>
    </td>
  </tr>
);

const Clients = () => {
  return (
    <>
      <HStack mb="5">
        <Text fontSize="1.5em" textAlign="left">
          Clients
        </Text>
        <Spacer />

        <Menu>
          <MenuButton>
            <Button rightIcon={<ChevronDownIcon />}>Download as</Button>
          </MenuButton>
          <MenuList>
            <MenuItem>Excel(.xcl)</MenuItem>
          </MenuList>
        </Menu>
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
