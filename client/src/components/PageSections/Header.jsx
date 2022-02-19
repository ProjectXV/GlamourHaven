import {
  Avatar,
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
  Text,
} from "@chakra-ui/react";
import React from "react";
import { FiMenu } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import Cart from "../../pages/Products/Cart";
import Logo from "../Logo";
import { useDisclosure } from "@chakra-ui/react";
import CartIcon from "../CartIcon";
import { CartState } from "../../context/cart";
import { useAuthState } from "../../context";
import { ChevronDownIcon } from "@chakra-ui/icons";
import avatar from "../../assets/k.jpg";
import { LogoutDialogue } from "../LogoutDialogue";

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
  const {
    isOpen: LogoutisOpen,
    onOpen: LogoutonOpen,
    onClose: LogoutonClose,
  } = useDisclosure();
  const {
    isOpen: CartisOpen,
    onOpen: CartonOpen,
    onClose: CartonClose,
  } = useDisclosure();
  const { cartItems } = CartState();
  const { userDetails, isAuthenticated } = useAuthState();
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
          {isAuthenticated && userDetails.token ? (
            <Menu>
              <MenuButton
                bg="transparent"
                _hover={{ bg: "brand.300", color: "white" }}
                borderRadius="5px"
              >
                <Button bg="transparent" rightIcon={<ChevronDownIcon />}>
                  <Avatar size="sm" mr="3" src={avatar} />
                  <Text>{userDetails?.email}</Text>
                </Button>
              </MenuButton>
              <MenuList w="full">
                <MenuItem onClick={() => LogoutonOpen()}>LogOut</MenuItem>
              </MenuList>
            </Menu>
          ) : (
            <Button
              onClick={() => navigate("/login")}
              variant="ghost"
              {...buttonStyles}
              _hover={{ bg: "brand.300", color: "white" }}
            >
              Register / Sign in
            </Button>
          )}
          <CartIcon
            number={cartItems.length}
            color={"black"}
            handleOpenCart={() => CartonOpen()}
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
      <Cart isOpen={CartisOpen} onClose={CartonClose} />
      <LogoutDialogue isOpen={LogoutisOpen} onClose={LogoutonClose} />
    </>
  );
};

export default Header;
