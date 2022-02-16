import { Box, Button, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import image from "../../assets/Landingpage.jpg";
import React from "react";
import Header from "../../components/PageSections/Header";
import ServicesCard from "../../components/Cards/ServicesCard";
import { ServicesList } from "../../data/ServicesData";
import Footer from "../../components/PageSections/Footer";

const Home = () => {
  return (
    <Box overflowX="hidden">
      <Box backgroundImage={image} objectFit="cover" h="100vh">
        <Header />

        <Stack px="5vw" mt="5vh">
          <Stack spacing="30px" mb="5vh">
            <Text textAlign="left" fontSize="3em" w="45vw" lineHeight="20px">
              Lorem Ipsum dolor sit amet,
            </Text>
            <Text textAlign="left" fontSize="3em" lineHeight="20px">
              consectetur adipiscing elit.
            </Text>
            <Text textAlign="left" fontSize="3em" lineHeight="20px">
              Scelerisque viverra
            </Text>
          </Stack>

          <Button w="250px" bg="brand.300" borderRadius="3px" color="white">
            Book An Appointment
          </Button>
        </Stack>
      </Box>
      <Box bg="brand.200" h="70vh">
        <Text pt="5vh" pb="2vh">
          OUR SERVICES
        </Text>
        <Text fontWeight="bold" fontSize="2em">
          Our Coveted{" "}
          <Box as={"span"} color="brand.300">
            Services
          </Box>
        </Text>
        <Box px="5vw">
          <SimpleGrid mt="6vh" columns={[4, 4]} spacing="auto">
            {ServicesList.map((service) => {
              return <ServicesCard key={service.id} service={service} />;
            })}
          </SimpleGrid>
        </Box>
      </Box>
      <Box bg="white" h="70vh">
        <Text pt="5vh" pb="2vh">
          OUR SERVICES
        </Text>
        <Text fontWeight="bold" fontSize="2em">
          Our Coveted{" "}
          <Box as={"span"} color="brand.300">
            Services
          </Box>
        </Text>
        <Box px="5vw">
          <SimpleGrid mt="6vh" columns={[4, 4]} spacing="auto">
            {ServicesList.map((service) => {
              return <ServicesCard key={service.id} service={service} />;
            })}
          </SimpleGrid>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default Home;
