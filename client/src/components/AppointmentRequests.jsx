import React from "react";
import {
  Box,
  Stack,
  Divider,
  Text,
  Avatar,
  VStack,
  HStack,
  Circle,
  Flex,
  Spacer,
  Badge,
  Icon,
} from "@chakra-ui/react";
import { CheckIcon, CloseIcon } from "@chakra-ui/icons";
import { BiTimeFive } from "react-icons/bi";

const AppointmentRequests = ({ AppointmentData }) => {
  return (
    <Stack w="30%" height="80vh">
      {/* Appointment Requests */}
      <Box width="100%" bg="white" borderRadius="5px" h="inherit">
        <Text textAlign="left" fontSize="1.2em" p={5}>
          Appointment Requests
        </Text>
        <Divider />
        <Stack overflowY="scroll" h="80%">
          {AppointmentData.filter(
            (appointment) => appointment.status === "pending"
          ).map((appointment) => {
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
                <VStack spacing={0} width="100%" alignItems="left" ml="8px">
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
  );
};

export default AppointmentRequests;
