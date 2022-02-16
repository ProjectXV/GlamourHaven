import {
  Avatar,
  AvatarBadge,
  Box,
  Divider,
  HStack,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import avatar from "../../assets/k.jpg";

const AppointmentCard = ({ appointment }) => {
  return (
    <Box
      mx="auto"
      bg={useColorModeValue("white", "gray.800")}
      shadow="lg"
      rounded="xl"
      mb="2vh"
      h="20vh"
      alignItems="left"
      p={5}
    >
      <VStack alignItems="left" spacing={0}>
        <Text textAlign="left" fontWeight="bold">
          Reception Time
        </Text>
        <HStack color="neutral.300" fontSize="0.8em">
          <Text textAlign="left" fontWeight="bold">
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
      </VStack>
      <VStack alignItems="left" mt={6}>
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

export default AppointmentCard;
