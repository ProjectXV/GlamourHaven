import {
  Avatar,
  AvatarBadge,
  HStack,
  Text,
  useColorModeValue,
  VStack,
  Icon,
  Flex,
  Badge,
} from "@chakra-ui/react";
import React from "react";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const AppointmentCard = ({ appointment }) => {
  const navigate = useNavigate();
  return (
    <Flex
      mx="auto"
      bg={useColorModeValue("white", "gray.800")}
      shadow="lg"
      rounded="xl"
      mb="2vh"
      alignItems="center"
      p={5}
      justifyContent="space-between"
      cursor="pointer"
      onClick={() =>
        navigate(`/appointments/appointment-details/${appointment.id}`)
      }
    >
      <Text
        alignItems="center"
        textAlign="left"
        fontWeight="bold"
        color="neutral.300"
      >
        {appointment.starting_time} - {appointment.end_time}
      </Text>

      <VStack alignItems="left">
        <HStack>
          <Avatar
            alignSelf="center"
            size="md"
            src={appointment.client.profile_picture}
          >
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
      <Badge colorScheme="green" py={3} px={10} borderRadius="30px">
        {appointment.status}
      </Badge>
      <Text color="neutral.300" fontSize="0.8em" fontWeight="bold">
        Starts in 15 minutes
      </Text>
      <Icon as={BiDotsVerticalRounded} />
    </Flex>
  );
};

export default AppointmentCard;
