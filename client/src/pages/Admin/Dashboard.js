import {
  Box,
  Flex,
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
import Chart from "react-apexcharts";
import chartOptions from "../../data/ChartOptions.json";
import { FiShoppingBag, FiShoppingCart, FiCalendar } from "react-icons/fi";
import AppointmentRequests from "../../components/Appointments/AppointmentRequests";
import { AppointmentState } from "../../context";

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
  const { appointments } = AppointmentState();
  return (
    <>
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
        <AppointmentRequests AppointmentData={appointments} />
      </Flex>
    </>
  );
};

export default Dashboard;
