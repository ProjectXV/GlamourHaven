import {
  Box,
  Center,
  HStack,
  Icon,
  Input,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import AdminServiceList from "../../data/AdminServiceList";
import ServiceCard from "../../components/Cards/ServiceCard";
import React, { useState } from "react";
import { MdSearch } from "react-icons/md";
import { FiSliders } from "react-icons/fi";

const Services = () => {
  const [query, setQuery] = useState("");
  const [services] = useState(AdminServiceList);
  const [searchParam] = useState(["service_title", "service_description"]);

  function search(items) {
    return items.filter((item) => {
      return searchParam.some((newItem) => {
        return (
          item[newItem].toString().toLowerCase().indexOf(query.toLowerCase()) >
          -1
        );
      });
    });
  }

  const onInputChange = (event) => {
    setQuery(event.target.value);
  };
  return (
    <Box overflowY="scroll" h="100%">
      <Text textAlign="center" fontSize="1.5em" my={5}>
        Explore Our Services
      </Text>
      <Center>
        <HStack mb={5}>
          <Input
            width="400px"
            placeholder="Search for any service"
            borderRadius="50px"
            onChange={(e) => onInputChange(e)}
            value={query}
          />
          <Icon as={MdSearch} />
          <Icon as={FiSliders} />
        </HStack>
      </Center>
      <Box>
        {search(services)?.length === 0 ? (
          <Text p={20}>No services match your search query</Text>
        ) : (
          <SimpleGrid columns={[1, 2, 3, 4, 4, 4]} spacing="auto">
            {search(services).map((service) => {
              return <ServiceCard key={service.id} service={service} />;
            })}
          </SimpleGrid>
        )}
      </Box>
    </Box>
  );
};
export default Services;
