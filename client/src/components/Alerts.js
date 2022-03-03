import React from "react";
import { chakra, Box, Icon, Flex, useColorModeValue } from "@chakra-ui/react";

import { IoMdAlert, IoMdCheckmarkCircle } from "react-icons/io";
import { BsLightningFill } from "react-icons/bs";

export const Success = (props) => {
  return (
    <Flex
      w="full"
      bg="gray.600"
      p={50}
      alignItems="center"
      justifyContent="center"
    >
      <Flex
        maxW="sm"
        w="full"
        mx="auto"
        bg={useColorModeValue("white", "gray.800")}
        shadow="md"
        rounded="lg"
        overflow="hidden"
      >
        <Flex justifyContent="center" alignItems="center" w={12} bg="green.500">
          <Icon as={IoMdCheckmarkCircle} color="white" boxSize={6} />
        </Flex>

        <Box mx={-3} py={2} px={4}>
          <Box mx={3}>
            <chakra.span
              color={useColorModeValue("green.500", "green.400")}
              fontWeight="bold"
            >
              Success
            </chakra.span>
            <chakra.p
              color={useColorModeValue("gray.600", "gray.200")}
              fontSize="sm"
            >
              {props.text}
            </chakra.p>
          </Box>
        </Box>
      </Flex>
    </Flex>
  );
};

export function Info(props) {
  return (
    <Flex
      w="full"
      bg="gray.600"
      p={50}
      alignItems="center"
      justifyContent="center"
    >
      <Flex
        maxW="sm"
        w="full"
        mx="auto"
        bg={useColorModeValue("white", "gray.800")}
        shadow="md"
        rounded="lg"
        overflow="hidden"
      >
        <Flex justifyContent="center" alignItems="center" w={12} bg="blue.500">
          <Icon as={IoMdAlert} color="white" boxSize={6} />
        </Flex>

        <Box mx={-3} py={2} px={4}>
          <Box mx={3}>
            <chakra.span
              color={useColorModeValue("blue.500", "blue.400")}
              fontWeight="bold"
            >
              Info
            </chakra.span>
            <chakra.p
              color={useColorModeValue("gray.600", "gray.200")}
              fontSize="sm"
            >
              {props.text}{" "}
            </chakra.p>
          </Box>
        </Box>
      </Flex>
    </Flex>
  );
}

export function Warning(props) {
  return (
    <Flex
      bg={useColorModeValue("#F9FAFB", "gray.600")}
      p={50}
      w="full"
      alignItems="center"
      justifyContent="center"
    >
      <Flex
        maxW="sm"
        w="full"
        mx="auto"
        bg={useColorModeValue("white", "gray.800")}
        shadow="md"
        rounded="lg"
        overflow="hidden"
      >
        <Flex
          justifyContent="center"
          alignItems="center"
          w={12}
          bg="yellow.500"
        >
          <Icon as={IoMdAlert} color="white" boxSize={6} />
        </Flex>

        <Box mx={-3} py={2} px={4}>
          <Box mx={3}>
            <chakra.span
              color={useColorModeValue("yellow.400", "yellow.300")}
              fontWeight="bold"
            >
              Warning
            </chakra.span>
            <chakra.p
              color={useColorModeValue("gray.600", "gray.200")}
              fontSize="sm"
            >
              {props.text}
            </chakra.p>
          </Box>
        </Box>
      </Flex>
    </Flex>
  );
}

export function Error(props) {
  return (
    <Flex
      w="full"
      bg="gray.600"
      p={50}
      alignItems="center"
      justifyContent="center"
    >
      <Flex
        maxW="sm"
        w="full"
        mx="auto"
        bg={useColorModeValue("white", "gray.800")}
        shadow="md"
        rounded="lg"
        overflow="hidden"
      >
        <Flex justifyContent="center" alignItems="center" w={12} bg="red.500">
          <Icon as={BsLightningFill} color="white" boxSize={6} />
        </Flex>

        <Box mx={-3} py={2} px={4}>
          <Box mx={3}>
            <chakra.span
              color={useColorModeValue("red.500", "red.400")}
              fontWeight="bold"
            >
              Error
            </chakra.span>
            <chakra.p
              color={useColorModeValue("gray.600", "gray.200")}
              fontSize="sm"
            >
              {props.text}
            </chakra.p>
          </Box>
        </Box>
      </Flex>
    </Flex>
  );
}
