import {
  Avatar,
  Flex,
  HStack,
  Icon,
  Spacer,
  Tag,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { MdNotifications, MdBolt } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import { ChevronDownIcon } from "@chakra-ui/icons";
import avatar from "../assets/team.jpg";

const TopBar = () => {
  return (
    <Flex py={3} px={5} alignItems="center" w="85vw" bg="white" h="10vh">
      <VStack alignItems="left" spacing="3px">
        <HStack>
          <Text fontSize="1.5em">Welcome Back, </Text>
          <Text fontWeight="bold" fontSize="1.5em" color="brand.300">
            Jones
          </Text>
        </HStack>
        <Text fontSize="0.7em">
          Check out todays stats Check out todays stats Check out todays stats
        </Text>
      </VStack>
      <Spacer />
      <HStack spacing="30px" mr={10} alignItems="baseline">
        <Icon as={FiSearch} h={5} w={5} />
        <Icon as={MdBolt} h={5} w={5} />
        <Tag rounded="2xl" h="8px">
          <HStack>
            <Icon as={MdNotifications} />
            <Text>12</Text>
          </HStack>
        </Tag>
      </HStack>
      <HStack>
        <Text>Jones Ferdinand</Text>
        <Avatar src={avatar} size="sm" name="Jones Ferdinand" />
        <Icon as={ChevronDownIcon} />
      </HStack>
    </Flex>
  );
};

export default TopBar;
