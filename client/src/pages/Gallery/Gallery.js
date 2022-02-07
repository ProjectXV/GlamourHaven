import React from 'react';
import { Text,Box } from '@chakra-ui/react';
import ImageContainer from './ImageContainer';

const Gallery = () => {
  return (
    <Box mt="20px">
    <Box>
    <Text fontSize={"lg"} textColor={"black"}>Gallery</Text>
    <Text fontSize="4xl">Our Gallery</Text>
      
    </Box>
    <Box>
    <ImageContainer/>
    </Box>
    </Box>
  );
}

export default Gallery;
