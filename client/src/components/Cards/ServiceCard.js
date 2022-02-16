import React from "react";
import { Image, Box, VStack, chakra } from "@chakra-ui/react";
import fallbackSrc from "../../assets/k.jpg";

const ServiceCard = ({ service }) => {
  return (
    <Box
      h="250px"
      mb="30px"
      shadow="lg"
      w="230px"
      borderRadius={10}
      overflow="hidden"
    >
      <Image
        h="110px"
        w="inherit"
        borderRadiusTop={10}
        fit="cover"
        src={service.commodity_main_image}
        fallbackSrc={fallbackSrc}
      />

      <VStack spacing={0} alignItems="left" bg="white" p="3" h="100%">
        <chakra.h1
          color="dark"
          fontWeight="bold"
          fontSize="lg"
          textAlign="left"
        >
          {service.service}
        </chakra.h1>
        <chakra.h1 color="gray.400" textAlign="left" fontSize="14px">
          Duration: {service.duration}
        </chakra.h1>
        <chakra.h5 textAlign="left" noOfLines="3">
          {service.description}
        </chakra.h5>
      </VStack>
    </Box>
  );
};

export default ServiceCard;
