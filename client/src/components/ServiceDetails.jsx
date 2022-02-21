import { Box } from "@chakra-ui/react";
import React from "react";

const ServiceDetails = () => {
  return (
    <Box
      h="250px"
      mb="30px"
      shadow="lg"
      w="230px"
      borderRadius={10}
      overflow="hidden"
      position="absolute"
      top={300}
      right={500}
      bg="white"
    >
      Services
    </Box>
  );
};

export default ServiceDetails;
