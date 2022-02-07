import { Box, Button, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";
import Header from "../components/Header";
import Gallery from "./Gallery/Gallery";
import Team from "./Team/Team";

function About() {
  return (
    <Box>
      <Header />
      <Box>
        <Stack>
          <Text fontSize="2xl"> OUR STORY</Text>
          <Text fontSize="xl">Our Story</Text>
          <Text color='gray.500' isTruncated>
  Lorem ipsum is placeholder text commonly used in the graphic, print, and
  publishing industries for previewing layouts and visual mockups.
  An About Us page helps your company make a good first impression, 
  and is critical for building customer trust and loyalty. 
  An About Us page should make sure to cover basic information about the store and its founders,
   explain the company's purpose and how it differs from the competition, and encourage discussion and interaction.
    Here are some free templates, samples, and example About Us pages to help your ecommerce store stand out from the crowd.
</Text>
           <Button variant={"outlined"}> Learn More </Button>
        </Stack>
      </Box>
      <VStack>
      <Box>
      <Gallery/>
      </Box>
      <Box mt="100px">
       <Team/>
      </Box>
     </VStack>
    </Box>
  );
}

export default About;
