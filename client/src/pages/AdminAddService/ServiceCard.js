import React from 'react';
import { Image,Box,VStack,chakra } from '@chakra-ui/react';
//import AdminAddServiceList from './AdminAddServiceList';

const ServiceCard = ({addservice}) => {
  return (
    <Box
      maxW="sm"
      w="250px"
      borderRadius={10}
      borderWidth="1px"
      overflow="hidden"
    >
      <Image
        h={40}
        w="250px"
        borderRadiusTop={10}
        fit="cover"
        src={addservice.commodity_main_image}
      />
      <Box p="6">
        <Box display="flex" alignItems={"flex-start"}>
          <Box
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            h={10}
            textTransform="uppercase"
            ml="2"
          >
            <VStack alignItems="center">
              <chakra.h1 color="dark" fontWeight="bold" fontSize="lg">
                {addservice.service}
              </chakra.h1>
              <chakra.h1 color="#D3D2D2">
                Duration.{addservice.duration}
              </chakra.h1>
              <chakra.h1 color="#D3D2D2" fontWeight="bold" fontSize="lg">
                {addservice.description}
              </chakra.h1>
            </VStack>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ServiceCard;
