import {
  Button,
  ButtonGroup,
  Flex,
  HStack,
  Icon,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import React from "react";
import { FiMenu } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import Cart from "../../pages/Products/Cart";
import Logo from "../Logo";
import { useDisclosure } from "@chakra-ui/react";
import CartIcon from "../CartIcon";
import { CartState } from "../../context/cart";

const buttonStyles = {
  size: "md",
  width: "150px",
};

const navLinksStyles = {
  color: "black",
  variant: "link",
  fontWeight: "semibold",
};

const Header = () => {
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { cartItems } = CartState();
  return (
    <>
      <Flex
        justifyContent="space-between"
        alignItems="center"
        height="12vh"
        width="100vw"
        px="5vw"
      >
        <Logo />
        <HStack spacing="5vw" display={["none", "none", "flex", "flex"]}>
          <Button onClick={() => navigate("/")} {...navLinksStyles}>
            Home
          </Button>
          <Button onClick={() => navigate("/about")} {...navLinksStyles}>
            About Us
          </Button>
          <Button onClick={() => navigate("/products")} {...navLinksStyles}>
            Products
          </Button>
          <Button onClick={() => navigate("/contact")} {...navLinksStyles}>
            Contact Us
          </Button>
        </HStack>
        <ButtonGroup
          alignItems="end"
          display={["none", "none", "flex", "flex"]}
        >
          <Button
            onClick={() => navigate("/login")}
            variant="ghost"
            {...buttonStyles}
            _hover={{ bg: "brand.300", color: "white" }}
          >
            Register / Sign in
          </Button>
          {/* <Button
          onClick={() => navigate("/login")}
          {...buttonStyles}
          color="white"
          
          borderRadius="3px"
        >
          Sign in
        </Button> */}
          <CartIcon
            number={cartItems.length}
            color={"black"}
            handleOpenCart={() => onOpen()}
          />
        </ButtonGroup>

        {/* Responsive screen */}
        <Menu>
          <MenuButton display={["flex", "flex", "none", "none"]}>
            <Icon as={FiMenu} h={7} w={7} />
          </MenuButton>
          <MenuList>
            <MenuItem onClick={() => navigate("/")}>Home</MenuItem>
            <MenuItem onClick={() => navigate("/about")}>About Us</MenuItem>
            <MenuItem onClick={() => navigate("/products")}>Products</MenuItem>
            <MenuItem onClick={() => navigate("/contact")}>Contact Us</MenuItem>
            <MenuDivider />
            <MenuItem onClick={() => navigate("/login")}>Login</MenuItem>
            <MenuItem onClick={() => navigate("/client/signup")}>
              SignUp
            </MenuItem>
          </MenuList>
        </Menu>
      </Flex>
      <Cart isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default Header;
