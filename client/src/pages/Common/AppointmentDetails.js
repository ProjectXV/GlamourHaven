import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import {
  Avatar,
  AvatarBadge,
  Badge,
  Box,
  Circle,
  Divider,
  HStack,
  Icon,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { FiClock } from "react-icons/fi";
import avatar from "../../assets/k.jpg";

const AppointmentDetails = ({ appointment }) => {
  return (
    <Box>
      <HStack color="neutral.300" fontSize="0.8em">
        <Text alignItems="center" textAlign="left" fontWeight="bold">
          <Icon alignSelf="baseline" color="neutral.300" mr={2} as={FiClock} />
          {appointment.starting_time} - {appointment.end_time}
        </Text>
        <Divider
          borderWidth="1px"
          h="12px"
          borderColor="neutral.300"
          orientation="vertical"
        />
        <Text fontWeight="bold">Starts in 15 minutes</Text>
      </HStack>
      <HStack my={3}>
        <Badge variant="subtle" colorScheme="green" p={1} rounded="2xl">
          {appointment.status}
        </Badge>
        <HStack>
          <Circle size="25px" bg="neutral.300" color="white">
            <EditIcon />
          </Circle>
          <Circle size="25px" bg="neutral.300" color="white">
            <DeleteIcon />
          </Circle>
        </HStack>
      </HStack>
      {/* Client */}
      <Text my={2} fontWeight="bold" textAlign="left">
        Client
      </Text>
      <VStack alignItems="left" mt={2}>
        <HStack>
          <Avatar alignSelf="center" size="md" src={avatar}>
            <AvatarBadge
              bg="green.500"
              boxSize="0.9em"
              aria-label="active user"
            />
          </Avatar>
          <VStack alignItems="left" textAlign="left" spacing={0}>
            <Text fontWeight="bold">John Doe</Text>
            <Text color="neutral.300" fontSize="0.9em">
              Email: johndoe@gmail.com
            </Text>
          </VStack>
        </HStack>
      </VStack>
      {/* Services */}
      <Text my={2} fontWeight="bold" textAlign="left">
        Services
      </Text>
      <VStack
        alignItems="left"
        mt={2}
        p={6}
        borderWidth="1px"
        borderColor="neutral.200"
        bg="white"
        borderRadius="10px"
      >
        <HStack spacing={10}>
          <Avatar alignSelf="center" size="md" src={avatar} />

          <VStack alignItems="left" textAlign="left" spacing={8}>
            <VStack alignItems="left" spacing={0}>
              <Text fontWeight="bold">John Doe</Text>
              <Text color="neutral.300" fontSize="0.9em">
                Email: johndoe@gmail.com
              </Text>
            </VStack>
            <Text mt={5} fontSize="1.2rem" fontWeight="bold">
              $50
            </Text>
          </VStack>
          <Badge
            variant="subtle"
            colorScheme="green"
            px={10}
            py={2}
            rounded="2xl"
          >
            remove
          </Badge>
        </HStack>
      </VStack>
      {/* Staff */}
      <Text my={2} fontWeight="bold" textAlign="left">
        Staff
      </Text>
      <VStack alignItems="left" mt={2}>
        <HStack>
          <Avatar alignSelf="center" size="md" src={avatar}>
            <AvatarBadge
              bg="green.500"
              boxSize="0.9em"
              aria-label="active user"
            />
          </Avatar>
          <VStack alignItems="left" textAlign="left" spacing={0}>
            <Text fontWeight="bold">John Doe</Text>
            <Text color="neutral.300" fontSize="0.9em">
              Email: johndoe@gmail.com
            </Text>
          </VStack>
        </HStack>
      </VStack>
    </Box>
  );
};

export default AppointmentDetails;
