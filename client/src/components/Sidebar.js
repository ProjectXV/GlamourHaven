import React from 'react'
import { Box,HStack,VStack, Text,Button } from "@chakra-ui/react";
import { RiDashboardLine } from "react-icons/ri";
import {AiOutlineCalendar} from "react-icons/ai";
import { MdSupervisorAccount} from "react-icons/md";
import {FiSliders} from "react-icons/fi";
import {CgBitbucket } from "react-icons/cg";
import { FiSettings } from "react-icons/fi";
import {TiMessages } from "react-icons/ti";
import {BsLightningCharge} from"react-icons/bs";
import{ FiLogOut } from "react-icons/fi";
import { Divider, Link } from "@chakra-ui/react";
import Logo from './Logo';
const Sidebar = () => {
  return (
    <Box ml="100px" pt="30px" width="300px" h="100%" bg="#FAFAFAFA" shadow="lg">
      <Box pl="50px">
        <Box mb="40px">
          <Logo />
        </Box>
        <HStack mb="30px">
          <RiDashboardLine boxSize={30} />
          <Link>Dashboard</Link>
        </HStack>
        <HStack mb="30px">
          <AiOutlineCalendar />
          <Link>Appointments</Link>
        </HStack>
        <HStack mb="30px">
          <MdSupervisorAccount />
          <Link>Account</Link>
        </HStack>
        <HStack mb="30px">
          <FiSliders />
          <Link>Services</Link>
        </HStack>
        <HStack mb="30px">
          <CgBitbucket />
          <Link>Products</Link>
        </HStack>
        <Divider ml="-30px" bg="#EBEBEB" w="260px" />
        <HStack mt="30px" mb="30px">
          <FiSettings />
          <Link>Settings</Link>
        </HStack>
        <HStack mb="30px">
          <TiMessages />
          <Link>Support</Link>
        </HStack>
      </Box>
      <Box
        alignContent="left"
        maxW="xs"
        width="200px"
        mx="auto"
        bg="#67B6B3"
        // shadow="lg"
        rounded="lg"
        mb="7vh"
      >
        <VStack alignItems="left" p="10px">
          <Box bg="white" w="30px" h="30px" p="6px" borderRadius="10px">
            <BsLightningCharge color="#FFC107" />
          </Box>
          <Text textColor="#FFFFFF">Go Premium to enjoy advanced stats</Text>
          <Button fontWeight="bold" h="50px" w="170px">
            Go Premium
          </Button>
        </VStack>
      </Box>
      <Button mb="40px" ml="-40px" pl="10px" w="200px" alignItems="center">
        <HStack>
          <FiLogOut />
          <Text>Log Out</Text>
        </HStack>
      </Button>
    </Box>
  );
};

export default Sidebar;
