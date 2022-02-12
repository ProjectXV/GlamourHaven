import {
  Avatar,
  Badge,
  Box,
  Circle,
  Divider,
  Flex,
  HStack,
  Icon,
  SimpleGrid,
  Spacer,
  Stack,
  Stat,
  StatArrow,
  StatHelpText,
  StatLabel,
  StatNumber,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import Sidebar from "../../components/Sidebar";
import TopBar from "../../components/TopBar";
import Chart from "react-apexcharts";
import chartOptions from "../../data/ChartOptions.json";
import { FiShoppingBag, FiShoppingCart, FiCalendar } from "react-icons/fi";
import { BiTimeFive } from "react-icons/bi";
import { CheckIcon, CloseIcon } from "@chakra-ui/icons";
import AppointmentData from "../../data/AppointmentData.json";

const StatusData = [
  {
    icon: FiShoppingBag,
    count: "1,995",
    title: "Total sales",
  },
  {
    icon: FiShoppingCart,
    count: "2,001",
    title: "Daily visits",
  },
  {
    icon: FiCalendar,
    count: "1,711",
    title: "Total orders",
  },
];

const Dashboard = () => {
  return (
    <HStack spacing={0}>
      <Sidebar />
      <Flex bg="#F9F9F9" direction="column" maxWidth="85vw" h="100vh">
        <TopBar />
        <Box overflowY="hidden" h="88.5vh" p={5}>
          <Text fontSize="1.5em" textAlign="left">
            Dashboard
          </Text>
          <Flex h="80vh">
            <Stack w="70%" mr={5}>
              {/* Status Cards */}
              <SimpleGrid columns={3} spacing="10px">
                {StatusData.map((option, index) => {
                  return (
                    <Flex
                      width="100%"
                      bgGradient="linear(to-r,green.200 , brand.300)"
                      height="20vh"
                      alignItems="center"
                      borderRadius="5px"
                      color="#555555"
                      key={index}
                      p={30}
                      sx={{ transition: "color 0.5s ease 0s" }}
                      _hover={{
                        color: "white",
                        bg: "brand.300",
                        bgGradient: "linear(to-r, brand.300, green.200 )",
                      }}
                    >
                      <Icon h={30} w={30} as={option.icon} />
                      <Spacer />
                      <VStack>
                        <Stat>
                          <StatNumber>{option.count}</StatNumber>
                          <StatLabel>{option.title}</StatLabel>
                          <StatHelpText>
                            <StatArrow type="increase" />
                            23.36%
                          </StatHelpText>
                        </Stat>
                      </VStack>
                    </Flex>
                  );
                })}
              </SimpleGrid>
              <Spacer />
              <Text h="10%" textAlign="left" fontSize="1.2em" p={3}>
                Overview
              </Text>

              {/* Chart */}
              <Box
                width="100%"
                bg="white"
                borderRadius="5px"
                height="80%"
                mt="30px"
              >
                <Spacer />
                <Chart
                  options={chartOptions.options}
                  series={chartOptions.series}
                  type="line"
                  height="90%"
                />
              </Box>
            </Stack>
            <Stack w="30%" height="80vh">
              {/* Appointment Requests */}
              <Box width="100%" bg="white" borderRadius="5px" h="inherit">
                <Text textAlign="left" fontSize="1.2em" p={5}>
                  Appointment Requests
                </Text>
                <Divider />
                <Stack overflowY="scroll" h="80%">
                  {AppointmentData.map((appointment) => {
                    return (
                      <Flex
                        key={appointment.id}
                        width="100%"
                        alignItems="center"
                        px={5}
                        py={2}
                        mt={3}
                      >
                        <Avatar size="md" name={appointment.client} />
                        <VStack
                          spacing={0}
                          width="100%"
                          alignItems="left"
                          ml="8px"
                        >
                          <Text textAlign="left">{appointment.client}</Text>
                          <Text
                            fontSize="0.8em"
                            textAlign="left"
                            color="gray.500"
                            fontWeight="semibold"
                            alignItems="center"
                            letterSpacing="wide"
                          >
                            <Icon as={BiTimeFive} mr={2} h={3} w={3} />
                            {appointment.starting_time}
                            &bull; 3 hrs
                          </Text>
                        </VStack>
                        <Spacer />
                        {appointment.status === "pending" ? (
                          <HStack>
                            <Circle size="25px" bg="red" color="white">
                              <CloseIcon />
                            </Circle>
                            <Circle size="25px" bg="green" color="white">
                              <CheckIcon />
                            </Circle>
                          </HStack>
                        ) : (
                          <Badge
                            variant="subtle"
                            colorScheme="green"
                            p={2}
                            rounded="2xl"
                          >
                            {appointment.status}
                          </Badge>
                        )}
                      </Flex>
                    );
                  })}
                </Stack>
                <Text textAlign="center" py="auto">
                  View All
                </Text>
              </Box>
            </Stack>
          </Flex>
        </Box>
      </Flex>
    </HStack>
  );
};

export default Dashboard;
