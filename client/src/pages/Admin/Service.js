import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import AdminServiceList from "../../data/AdminServiceList";
import ServiceCard from "../../components/Cards/ServiceCard";
import React from "react";
const Services = () => {
  return (
    <Box overflowY="scroll" h="100%">
      <Text fontSize="1.5em" textAlign="left">
        Services
      </Text>
      <Box>
        <SimpleGrid columns={[1, 2, 3, 4, 4, 4]} spacing="auto">
          {AdminServiceList.map((service) => {
            return <ServiceCard key={service.id} service={service} />;
          })}
        </SimpleGrid>
      </Box>
    </Box>
  );
};
export default Services;
