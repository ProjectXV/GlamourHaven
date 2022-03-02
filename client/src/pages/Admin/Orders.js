import React from "react";
import {
  Box,
  Button,
  Flex,
  HStack,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spacer,
  Text,
} from "@chakra-ui/react";
import OrderList from "../../data/OrderList.json";
import Table from "../../components/Table/Table";
import { ChevronDownIcon } from "@chakra-ui/icons";

const customerTableHead = [
  "transaction_id",
  "payment_transaction",
  "Amount",
  "Client",
  "Date Placed",
  "Date Delivered",
];

const renderHead = (item, index) => <th key={index}>{item}</th>;

const renderBody = (item, index) => (
  <tr key={index}>
    <td>{item.transaction_id}</td>
    <td>{item.payment_transaction}</td>
    <td>{item.order_value}</td>
    <td>{item.placer}</td>
    <td>{item.date_placed}</td>
    <td>{item.date_delivered}</td>
  </tr>
);

const Orders = () => {
  return (
    <>
      <HStack mb="5">
        <Text fontSize="1.5em" textAlign="left">
          Orders
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
            bodyData={OrderList}
            renderBody={(item, index) => renderBody(item, index)}
          />
        </Box>
      </Flex>
    </>
  );
};

export default Orders;
