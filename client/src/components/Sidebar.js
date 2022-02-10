import React from "react";
import { Box, HStack, VStack, Text, Button } from "@chakra-ui/react";
import { RiDashboardLine } from "react-icons/ri";
import { AiOutlineCalendar } from "react-icons/ai";
import { MdSupervisorAccount } from "react-icons/md";
import { FiSliders } from "react-icons/fi";
import { CgBitbucket } from "react-icons/cg";
import { FiSettings } from "react-icons/fi";
import { TiMessages } from "react-icons/ti";
import { BsLightningCharge } from "react-icons/bs";
import { FiLogOut } from "react-icons/fi";
import { Divider, Link } from "@chakra-ui/react";
import Logo from "./Logo";
const Sidebar = () => {
  return (
    <Box
      pt="30px"
      width="15vw"
      h="100vh"
      bg="#FAFAFAFA"
      // shadow="lg"
    >
      <Box ml="20px" mb="20px" alignItems="center">
        <Logo />
      </Box>
      <Box pl="50px">
        <HStack mb="20px">
          <RiDashboardLine boxSize={30} />
          <Link>Dashboard</Link>
        </HStack>
        <HStack mb="20px">
          <AiOutlineCalendar />
          <Link>Appointments</Link>
        </HStack>
        <HStack mb="20px">
          <MdSupervisorAccount />
          <Link>Staff</Link>
        </HStack>
        <HStack mb="20px">
          <FiSliders />
          <Link>Services</Link>
        </HStack>
        <HStack mb="20px">
          <CgBitbucket />
          <Link>Products</Link>
        </HStack>
        <Divider ml="-50px" bg="#EBEBEB" w="inherit" />
        <HStack mt="20px" mb="20px">
          <FiSettings />
          <Link>Settings</Link>
        </HStack>
        <HStack mb="20px">
          <TiMessages />
          <Link>Support</Link>
        </HStack>
      </Box>
      <Box
        alignContent="left"
        // width="200px"
        mx={4}
        bg="#67B6B3"
        rounded="lg"
        mb="7vh"
      >
        <VStack alignItems="left" p="10px">
          <Box bg="white" w="30px" h="30px" p="6px" borderRadius="10px">
            <BsLightningCharge color="#FFC107" bg="#FFC107" />
          </Box>
          <Text textColor="#FFFFFF">Go Premium to enjoy advanced stats</Text>
          <Button fontWeight="bold" h="30px">
            Go Premium
          </Button>
        </VStack>
      </Box>
      <Button mb="40px" ml="10px" pl="10px" w="180px" alignItems="center">
        <HStack>
          <FiLogOut />
          <Text>Log Out</Text>
        </HStack>
      </Button>
    </Box>
  );
};

export default Sidebar;
