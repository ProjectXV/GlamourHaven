import { Box, Button } from '@chakra-ui/react';
import { Grid,GridItem } from '@chakra-ui/react';
import React from 'react';

const ImageContainer = () => {
  return (
    <Box ml="40px" >
    <Grid
  h='400px'
  w="1500px"

  templateRows='repeat(2, 1fr)'
  templateColumns='repeat(5, 1fr)'
  gap={4}
>
  <GridItem rowSpan={2} colSpan={1} bgImg= 'https://bit.ly/dan-abramov'/>
  <GridItem colSpan={2} bgImg= 'https://bit.ly/dan-abramov' />
  <GridItem colSpan={2} bgImg= 'https://bit.ly/dan-abramov'/>
  <GridItem colSpan={4} bgImg= 'https://bit.ly/dan-abramov' />
</Grid>
<Box ml="1200px" mt="-50px">
  <Button colorScheme='teal' variant='solid'>
    Browse Collections
  </Button>
  </Box>
      
    </Box>
  );
}

export default ImageContainer;
