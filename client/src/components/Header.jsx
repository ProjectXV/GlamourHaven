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
import Logo from "./Logo";

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
  return (
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
      <ButtonGroup display={["none", "none", "flex", "flex"]}>
        <Button
          onClick={() => navigate("/client/signup")}
          variant="ghost"
          {...buttonStyles}
        >
          Register
        </Button>
        <Button
          onClick={() => navigate("/login")}
          {...buttonStyles}
          color="white"
          bg="brand.300"
        >
          Login
        </Button>
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
          <MenuItem onClick={() => navigate("/client/signup")}>SignUp</MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  );
};

export default Header;
