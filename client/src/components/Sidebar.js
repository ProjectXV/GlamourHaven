import React from "react";
import {
  Box,
  HStack,
  VStack,
  Text,
  Button,
  // Divider,
  Link,
} from "@chakra-ui/react";
import { RiDashboardLine } from "react-icons/ri";
import { AiOutlineCalendar } from "react-icons/ai";
import { MdSupervisorAccount } from "react-icons/md";
import { FiSliders } from "react-icons/fi";
import { CgBitbucket } from "react-icons/cg";
import { FiSettings } from "react-icons/fi";
import { TiMessages } from "react-icons/ti";
import { BsLightningCharge } from "react-icons/bs";
import { FiLogOut } from "react-icons/fi";
import Logo from "./Logo";

const Sidebar = () => {
  return (
    <Box pt="30px" width="15vw" h="100vh">
      <Box mb="20px" alignItems="center" pl="20px">
        <Logo />
      </Box>
      <Box>
        <Text align="left" pl="20px" fontSize="sm">
          MENU
        </Text>
        <HStack
          _hover={{
            color: "brand.300",
            borderLeftWidth: "3px",
            borderLeftColor: "brand.300",
            bg: "brand.200",
          }}
          _focus={{
            color: "brand.300",
            borderLeftWidth: "3px",
            borderLeftColor: "brand.300",
            bg: "brand.200",
          }}
          cursor="pointer"
          py="10px"
          pl="20px"
        >
          <RiDashboardLine boxSize={30} pl="20px" />
          <Link>Dashboard</Link>
        </HStack>
        <HStack
          _hover={{
            color: "brand.300",
            borderLeftWidth: "3px",
            borderLeftColor: "brand.300",
            bg: "brand.200",
          }}
          _focus={{
            color: "brand.300",
            borderLeftWidth: "3px",
            borderLeftColor: "brand.300",
            bg: "brand.200",
          }}
          cursor="pointer"
          py="10px"
          pl="20px"
        >
          <AiOutlineCalendar />
          <Link>Appointments</Link>
        </HStack>
        <HStack
          _hover={{
            color: "brand.300",
            borderLeftWidth: "3px",
            borderLeftColor: "brand.300",
            bg: "brand.200",
          }}
          _focus={{
            color: "brand.300",
            borderLeftWidth: "3px",
            borderLeftColor: "brand.300",
            bg: "brand.200",
          }}
          cursor="pointer"
          py="10px"
          pl="20px"
        >
          <MdSupervisorAccount />
          <Link>Account</Link>
        </HStack>
        <HStack
          _hover={{
            color: "brand.300",
            borderLeftWidth: "3px",
            borderLeftColor: "brand.300",
            bg: "brand.200",
          }}
          _focus={{
            color: "brand.300",
            borderLeftWidth: "3px",
            borderLeftColor: "brand.300",
            bg: "brand.200",
          }}
          cursor="pointer"
          py="10px"
          pl="20px"
        >
          <FiSliders />
          <Link>Services</Link>
        </HStack>
        <HStack
          _hover={{
            color: "brand.300",
            borderLeftWidth: "3px",
            borderLeftColor: "brand.300",
            bg: "brand.200",
          }}
          _focus={{
            color: "brand.300",
            borderLeftWidth: "3px",
            borderLeftColor: "brand.300",
            bg: "brand.200",
          }}
          cursor="pointer"
          py="10px"
          pl="20px"
        >
          <CgBitbucket />
          <Link>Products</Link>
        </HStack>
        {/* <Divider bg="#EBEBEB" w="80%" ml="20px" /> */}
        <Text align="left" pl="20px" fontSize="sm" mt="10px">
          GENERAL
        </Text>
        <HStack
          _hover={{
            color: "brand.300",
            borderLeftWidth: "3px",
            borderLeftColor: "brand.300",
            bg: "brand.200",
          }}
          _focus={{
            color: "brand.300",
            borderLeftWidth: "3px",
            borderLeftColor: "brand.300",
            bg: "brand.200",
          }}
          cursor="pointer"
          py="10px"
          pl="20px"
        >
          <FiSettings />
          <Link>Settings</Link>
        </HStack>
        <HStack
          _hover={{
            color: "brand.300",
            borderLeftWidth: "3px",
            borderLeftColor: "brand.300",
            bg: "brand.200",
          }}
          _focus={{
            color: "brand.300",
            borderLeftWidth: "3px",
            borderLeftColor: "brand.300",
            bg: "brand.200",
          }}
          cursor="pointer"
          py="10px"
          pl="20px"
        >
          <TiMessages />
          <Link>Support</Link>
        </HStack>
      </Box>
      <Box alignContent="left" mx={4} bg="#67B6B3" rounded="lg" mt="60px">
        <VStack alignItems="left" p="10px">
          <Box bg="white" w="30px" h="30px" p="6px" borderRadius="3px">
            <BsLightningCharge color="#FFC107" bg="#FFC107" />
          </Box>
          <Text textAlign="left" textColor="#FFFFFF">
            Go Premium to enjoy advanced stats
          </Text>
          <Button fontWeight="bold" h="30px">
            Go Premium
          </Button>
        </VStack>
      </Box>
      <Button
        mt="10px"
        mx="auto"
        w="85%"
        alignItems="center"
        leftIcon={<FiLogOut />}
      >
        Log Out
      </Button>
    </Box>
  );
};

export default Sidebar;
