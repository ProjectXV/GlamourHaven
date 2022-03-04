import {
  Avatar,
  Box,
  Center,
  Divider,
  Flex,
  HStack,
  Spacer,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import AppointmentData from "../../data/AppointmentData.json";
import AppointmentCard from "../../components/Cards/AppointmentCard";
import avatar from "../../assets/k.jpg";
import { MdAddAlarm, MdNotificationsActive } from "react-icons/md";
import ProductList from "../../data/ProductList";

const Dashboard = () => {
  return (
    <>
      <Text fontSize="1.5em" textAlign="left">
        Dashboard
      </Text>
      <Flex h="80vh">
        <Stack w="70%" mr={5}>
          <Flex
            height="20vh"
            alignItems="center"
            borderRadius="5px"
            bgGradient="linear(to-r,green.200 , brand.300)"
            hover={{
              color: "white",
              bg: "brand.300",
              ient: "linear(to-r, brand.300, green.200 )",
            }}
            p={30}
            sx={{ transition: "color 0.5s ease 0s" }}
          >
            <Avatar src={avatar} size="xl" />

            <VStack alignItems="left" ml={30}>
              <HStack>
                <Text fontSize="1.3rem" textAlign="left">
                  Hi,
                </Text>{" "}
                <Text fontWeight="bold" fontSize="1.3rem">
                  Jones Ferdinand
                </Text>
              </HStack>
              <Text textAlign="left">
                Have a look at your latest appointments
              </Text>
            </VStack>
          </Flex>

          <Text h="10%" textAlign="left" fontSize="1.2em" p={3}>
            Upcoming Appointments
          </Text>

          {/* Chart */}
          <Box
            width="100%"
            bg="white"
            borderRadius="5px"
            height="60%"
            mt="30px"
          >
            <Spacer />
            {AppointmentData.map((appointment) => {
              return (
                <AppointmentCard
                  appointment={appointment}
                  key={appointment.id}
                />
              );
            })}
          </Box>
        </Stack>
        <Stack w="30%" height="80vh">
          <Flex
            width="100%"
            bg="white"
            borderRadius="5px"
            h="70px"
            alignItems="center"
            cursor="pointer"
            _hover={{ bg: "brand.200" }}
          >
            <Center
              ml={5}
              w="30px"
              h="30px"
              bgGradient="linear(to-r,green.200 , brand.300)"
              color="white"
              borderRadius="5px"
            >
              <MdNotificationsActive />
            </Center>
            <Text ml={3}>You have 5 Notifications.</Text>
          </Flex>
          <Flex
            width="100%"
            bg="white"
            borderRadius="5px"
            h="70px"
            alignItems="center"
            _hover={{ bg: "brand.200" }}
            cursor="pointer"
          >
            <Center
              ml={5}
              w="30px"
              h="30px"
              bgGradient="linear(to-r,green.200 , brand.300)"
              color="white"
              borderRadius="5px"
            >
              <MdAddAlarm />
            </Center>
            <Text ml={3}>Make an appointment</Text>
          </Flex>
          <Box width="100%" bg="white" borderRadius="5px" h="300px">
            <HStack m={5}>
              <Text>Featured Products</Text>
              <Spacer />
              <Text color="blue.500">View All</Text>
            </HStack>
            <Divider width="100%" />
            {ProductList.slice(0, 4).map((product) => {
              return (
                <Flex
                  alignItems="center"
                  p={5}
                  bg="white"
                  _hover={{ bg: "brand.200" }}
                >
                  <Avatar
                    size="md"
                    borderRadius="5px"
                    src={product.commodity_main_image}
                  />
                  <VStack spacing={0} alignItems="left" ml={3}>
                    <Text textAlign="left">{product.commodity_name}</Text>
                    <Text textAlign="left">Ksh. {product.price}</Text>
                  </VStack>
                </Flex>
              );
            })}
          </Box>
        </Stack>
      </Flex>
    </>
  );
};

export default Dashboard;
