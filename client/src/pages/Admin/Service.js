import { Box,SimpleGrid} from "@chakra-ui/react";
import AdminServiceList from "../../data/AdminServiceList";
 import {
  Avatar,
  Divider,
  Flex,
  HStack,
  Icon,
  Spacer,
  Tag,
  Text,
  VStack,
} from "@chakra-ui/react";
import ServiceCard from "../../components/ServiceCard";
import Sidebar from "../../components/Sidebar";
import React from "react";
import { MdNotifications, MdBolt } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import { ChevronDownIcon } from "@chakra-ui/icons";
import avatar from "../../assets/team.jpg";
const Services = () => {
  return (
    <Box>
      <Box>
        <Sidebar />
      </Box>
      <Box mt="-680px" pr="40px" ml="225px">
        <Flex py={3} px={5} alignItems="center" w="85vw">
          <VStack alignItems="left" spacing="3px">
            <VStack>
              <Text ml="-220px" fontSize="1.5em" fontWeight="dark">Services </Text>
              <Text fontSize="0.7em">
                With all of the styling tool options available in today's market
              </Text>
            </VStack>
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
        <Divider width="100%" />
      </Box>
      <Box mt="150px">
      
      
      </Box>
      <Box ml="280px">
        <SimpleGrid columns={[1, 2, 3, 4, 5, 6]} spacing="auto">
          {AdminServiceList.map((service) => {
            return <ServiceCard key={service.id} service={service} />;
          })}
        </SimpleGrid>
      </Box>
    </Box>
  );
};
export default Services;