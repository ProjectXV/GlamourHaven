import React from "react";
import { Grid, Box, GridItem } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
const Gallery = () => {
  return (
    <Box m="50px">
      <Grid
        h="200px"
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(5, 1fr)"
        gap={4}
      >
        <GridItem w="300px" h="600px" rowSpan={2} colSpan={1} bg="tomato">
          <Box w="700px">
            <Image
              src="https://bit.ly/dan-abramov"
              alt="Dan Abramov"
              w="300px"
              h="600px"
              objectFit="cover"
            />
          </Box>
        </GridItem>
        <GridItem w="400px" h="250px" colSpan={2} bg="papayawhip">
          <Box>
            <Image
              src="https://bit.ly/dan-abramov"
              alt="Dan Abramov"
              w="400px"
              h="290px"
              objectFit="cover"
            />
          </Box>
        </GridItem>
        <GridItem w="700px" h="250px" colSpan={2} bg="papayawhip">
          <Box>
            <Image
              src="https://bit.ly/dan-abramov"
              alt="Dan Abramov"
              w="2000px"
              h="290px"
              objectFit="cover"
            />
          </Box>
        </GridItem>
        <GridItem h="290px" colSpan={4} bg="tomato">
          <Box>
            <Image
              src="https://bit.ly/dan-abramov"
              alt="Dan Abramov"
              w="2000px"
              h="290px"
              objectFit="cover"
            />
          </Box>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Gallery;
