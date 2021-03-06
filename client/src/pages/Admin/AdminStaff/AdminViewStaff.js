import React from "react";
import {
  Avatar,
  Box,
  ButtonGroup,
  Flex,
  MenuButton,
  Menu,
  Input,
  HStack,
  Button,
  MenuItem,
  MenuList,
  Spacer,
} from "@chakra-ui/react";
import TableStaff from "../../../components/Table/TableStaff";
import StaffList from "../../../data/StaffList.json";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { AiFillPlusCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
const customerTableHead = [
  "",
  "profile picture",
  "username",
  "specialization",
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
    <td>{item.specialization}</td>
    <td>{item.phone}</td>
  </tr>
);
const AdminViewStaff = () => {
  const navigate = useNavigate();
  return (
    <>
      <HStack mb={3}>
        <Input
          bg="white"
          w="400px"
          placeholder="🔎Search by name,specialization,phone number"
        />
        <Spacer />
        <ButtonGroup>
          <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
              Download as
            </MenuButton>
            <MenuList>
              <MenuItem>Excel (.xlcs)</MenuItem>
              <MenuItem>CSV (.csv)</MenuItem>
            </MenuList>
          </Menu>
          <Button
            colorScheme="teal"
            onClick={() => navigate("/admin/addstaff")}
          >
            <AiFillPlusCircle />
            Add New
          </Button>
        </ButtonGroup>
      </HStack>
      <Flex h="80vh">
        <Box bg="white" borderRadius="20px" height="100%" w="100%" p={5}>
          <TableStaff
            limit="6"
            headData={customerTableHead}
            renderHead={(item, index) => renderHead(item, index)}
            bodyData={StaffList}
            renderBody={(item, index) => renderBody(item, index)}
          />
        </Box>
      </Flex>
    </>
  );
};

export default AdminViewStaff;
