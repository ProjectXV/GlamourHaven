import { Box, SimpleGrid } from "@chakra-ui/react";
import AdminServiceList from "../../data/AdminServiceList";
import ServiceCard from "../../components/Cards/ServiceCard";
import React from "react";
const Services = () => {
  return (
    <Box>
      <Box>
        <SimpleGrid columns={[1, 2, 3, 4, 5, 6]} spacing="auto">
          {AdminServiceList.map((service) => {
            return <ServiceCard key={service.id} service={service} />;
          })}
        </SimpleGrid>
      </Box>
    </Box>
  );
};
export default Services;
