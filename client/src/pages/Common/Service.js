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
import SearchDropdown from "../../components/Search/SearchDropdown";

const Services = () => {
  const [showSearchDropdown, setShowSearchDropdown] = useState(false);
  const [query, setQuery] = useState("");
  const onInputChange = (event) => {
    const searchInput = event.target.value;
    // console.log(searchInput)
    setQuery(event.target.value);

    if (searchInput) {
      setShowSearchDropdown(true);
    } else {
      setShowSearchDropdown(false);
    }
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
          {showSearchDropdown && <SearchDropdown />}
          <Icon as={MdSearch} />
          <Icon as={FiSliders} />
        </HStack>
      </Center>
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
