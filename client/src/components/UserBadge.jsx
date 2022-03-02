import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { LogoutDialogue } from "./LogoutDialogue";
import avatar from "../assets/k.jpg";
import { useAuthState } from "../context";

const UserBadge = () => {
  const { userDetails } = useAuthState();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const navigate = useNavigate();
  function emailUsername(emailAddress) {
    return emailAddress.match(/^(.+)@/)[1];
  }

  const handleRouteToDashboard = () => {
    const current_user = localStorage.getItem("userInfo")
      ? JSON.parse(localStorage.getItem("userInfo"))
      : {};

    if (current_user !== {}) {
      if (current_user.session_status === "client") {
        navigate("/client/dashboard");
      } else if (current_user.session_status === "staff") {
        navigate("/staff/dashboard");
      } else if (current_user.session_status === "manager") {
        navigate("/admin/dashboard");
      } else {
        navigate("/login");
      }
    }
  };
  return (
    <>
      <Menu>
        <MenuButton
          bg="transparent"
          _hover={{ bg: "brand.300", color: "white" }}
          borderRadius="5px"
        >
          <Button bg="transparent" rightIcon={<ChevronDownIcon />}>
            <Avatar size="sm" mr="3" src={avatar} />
            <Text>{emailUsername(`${userDetails?.email}`)}</Text>
          </Button>
        </MenuButton>
        <MenuList w="full">
          <MenuItem onClick={() => navigate("/")}>Home</MenuItem>
          <MenuItem onClick={() => handleRouteToDashboard()}>
            My Dashboard
          </MenuItem>
          <MenuItem onClick={() => navigate("/checkout")}>My WishList</MenuItem>
          <MenuItem onClick={() => navigate("/appointments")}>
            Appointments
          </MenuItem>
          <MenuDivider />
          <MenuItem onClick={() => navigate("/account/settings")}>
            My Account Settings
          </MenuItem>
          <MenuItem onClick={() => onOpen()}>LogOut</MenuItem>
        </MenuList>
      </Menu>
      <LogoutDialogue isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default UserBadge;
