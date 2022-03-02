import React from "react";
import {
  chakra,
  Box,
  Flex,
  useColorModeValue,
  Avatar,
  Text,
  Spacer,
  HStack,
  VStack,
} from "@chakra-ui/react";
import moment from "moment";

const NotificationItem = ({ notification }) => {
  return (
    <Flex
      p={0}
      mb={3}
      w="full"
      bg={useColorModeValue("brand.200", "gray.800")}
      shadow="sm"
      rounded="lg"
      overflow="hidden"
    >
      <Flex
        flexShrink={0}
        w="4px"
        bg={useColorModeValue("gray.800", "gray.900")}
      ></Flex>

      <VStack alignItems="center" px={2} py={3}>
        <HStack alignSelf="left" w="100%">
          <Avatar
            boxSize={10}
            name={notification.name}
            src={notification.profile_pic}
          />
          <Text fontSize="0.9em" fontWeight={"bold"}>
            {notification.name}
          </Text>
          <Spacer />
          <Text textAlign="right" fontSize="0.9em" color="neutral.300">
            {moment(notification.time_sent).format("h:mm a")}
          </Text>
        </HStack>

        <Box mx={3}>
          <chakra.p
            fontWeight={"medium"}
            pl={12}
            pr={3}
            color={useColorModeValue("gray.600", "gray.200")}
            noOfLines={2}
            textAlign={"left"}
            // isTruncated
          >
            {notification.message}
          </chakra.p>
        </Box>
      </VStack>
    </Flex>
  );
};

export default NotificationItem;
