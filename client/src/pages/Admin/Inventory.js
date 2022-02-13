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
import ProductList from "../../data/ProductList";
import Table from "../../components/Table/Table";
import {
  AddIcon,
  ChevronDownIcon,
  DeleteIcon,
  DownloadIcon,
  ViewIcon,
} from "@chakra-ui/icons";
import { MdEdit } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const customerTableHead = [
  "",
  "Name",
  "Image",
  "Price",
  "Pricing unit",
  "Category",
  "Stock",
  "",
  "",
  "",
];

const renderHead = (item, index) => <th key={index}>{item}</th>;

const renderBody = (item, index) => (
  <tr key={index}>
    <td>{item.id}</td>
    <td>{item.commodity_name}</td>
    <td>
      <Avatar size="sm" src={item.commodity_main_image} />
    </td>

    <td>{item.price}</td>
    <td>{item.pricing_unit}</td>
    <td>{item.category}</td>
    <td>{item.number_in_stock}</td>
    <td>
      <Circle
        onClick={() => {
          const navigate = useNavigate();
          navigate(`/products/product-details/${item.id}`);
        }}
        size="25px"
        bg="neutral.200"
        color="white"
        cursor="pointer"
      >
        <ViewIcon />
      </Circle>
    </td>
    <td>
      <Circle size="25px" bg="neutral.200" color="green" cursor="pointer">
        <MdEdit />
      </Circle>
    </td>
    <td>
      <Circle size="25px" bg="neutral.200" color="red" cursor="pointer">
        <DeleteIcon />
      </Circle>
    </td>
  </tr>
);

const Inventory = () => {
  const navigate = useNavigate();
  return (
    <>
      <HStack mb={3}>
        <Text fontSize="1.5em" textAlign="left">
          Inventory
        </Text>
        <Spacer />
        <Menu>
          <MenuButton
            as={Button}
            rightIcon={<ChevronDownIcon />}
            leftIcon={<DownloadIcon />}
          >
            Download as
          </MenuButton>
          <MenuList>
            <MenuItem>Excel( .xlc)</MenuItem>
            <MenuItem>.xlcv</MenuItem>
          </MenuList>
        </Menu>
        <Button
          leftIcon={<AddIcon />}
          onClick={() => navigate("/admin/addproduct")}
        >
          Add Product
        </Button>
      </HStack>
      <Flex h="80vh">
        <Box bg="white" borderRadius="20px" height="100%" w="100%" p={5}>
          <Table
            limit="6"
            headData={customerTableHead}
            renderHead={(item, index) => renderHead(item, index)}
            bodyData={ProductList}
            renderBody={(item, index) => renderBody(item, index)}
          />
        </Box>
      </Flex>
    </>
  );
};

export default Inventory;
