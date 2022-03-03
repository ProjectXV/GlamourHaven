import React from "react";
import {
  Flex,
  useColorModeValue,
  Avatar,
  Badge,
  Icon,
  AvatarBadge,
  VStack,
  HStack,
  Text,
} from "@chakra-ui/react";
import { useNavigate } from "react-router";
import { BiDotsVerticalRounded } from "react-icons/bi";
import avatar from "../../assets/k.jpg";

export const OrderItem = ({ order }) => {
  const navigate = useNavigate();
  return (
    <Flex
      mx="auto"
      bg={useColorModeValue("white", "gray.800")}
      shadow="lg"
      rounded="xl"
      mb="2vh"
      w="100%"
      alignItems="center"
      p={5}
      justifyContent="space-between"
      cursor="pointer"
      onClick={() => navigate(`/orders/order-details/${order.id}`)}
    >
      <Text
        alignItems="center"
        textAlign="left"
        fontWeight="bold"
        color="neutral.300"
      >
        {order.date_placed}
      </Text>
      <Text
        alignItems="center"
        textAlign="left"
        fontWeight="bold"
        color="neutral.300"
      >
        {order.date_delivered}
      </Text>

      <VStack alignItems="left">
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
      <Badge colorScheme="green" py={3} px={10} borderRadius="30px">
        {order.is_delivered ? `delivered` : `not delivered`}
      </Badge>
      <Text color="neutral.300" fontSize="0.8em" fontWeight="bold">
        Starts in 15 minutes
      </Text>
      <Icon as={BiDotsVerticalRounded} />
    </Flex>
  );
};
