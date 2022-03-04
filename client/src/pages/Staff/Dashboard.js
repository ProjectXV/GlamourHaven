import {
  Avatar,
  Box,
  Flex,
  HStack,
  Spacer,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import AppointmentRequests from "../../components/Appointments/AppointmentRequests";
import AppointmentCard from "../../components/Cards/AppointmentCard";
import avatar from "../../assets/k.jpg";
import { AppointmentState } from "../../context";

const Dashboard = () => {
  const { appointments } = AppointmentState();
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

            {appointments.map((appointment) => {
              return (
                <AppointmentCard
                  appointment={appointment}
                  key={appointment.id}
                />
              );
            })}
          </Box>
        </Stack>
        <AppointmentRequests AppointmentData={appointments} />
      </Flex>
    </>
  );
};

export default Dashboard;
