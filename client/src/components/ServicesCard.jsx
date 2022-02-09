import { Box, chakra, Image, VStack } from "@chakra-ui/react";
import React from "react";

const ServicesCard = ({ service }) => {
  return (
    <Box
      width="230px"
      mx="auto"
      mb="7vh"
      _hover={{ rounded: "lg", shadow: "lg", bg: "white", cursor: "pointer" }}
      p={5}
    >
      <VStack>
        <Image
          h="50px"
          w="50px"
          fit="cover"
          borderRadius="5px"
          mt={2}
          mb={2}
          src={service.image}
          alt={service.name}
        />
        <chakra.h1
          textAlign="center"
          color="dark"
          fontWeight="bold"
          fontSize="lg"
        >
          {service.name}
        </chakra.h1>
        <chakra.h1 color="#70A7A5" fontSize="lg">
          {service.description}
        </chakra.h1>
      </VStack>
    </Box>
  );
};

export default ServicesCard;
