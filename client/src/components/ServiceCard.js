import React from 'react';
import { Image,Box,VStack,chakra} from '@chakra-ui/react';
//import AdminAddServiceList from './AdminAddServiceList';

const ServiceCard = ({service}) => {
  return (
    <Box 
      h="210px"
      mb="20px"
      shadow="xs"
      w="200px"
      borderRadius={10}
      borderWidth="1px"
      overflow="hidden"
    >
      <Image
        h="110px"
        w="200px"
        borderRadiusTop={10}
        fit="cover"
        src={service.commodity_main_image}
      />
      <Box p="6">
        <Box display="flex" alignItems={"flex-start"}>
          <Box>
            <VStack mt="-10px">
              <chakra.h1 mt="-10px" color="dark" fontWeight="bold" fontSize="lg">
                {service.service}
              </chakra.h1>
              <chakra.h1 color="#D3D2D2">
                Duration.{service.duration}
              </chakra.h1>
            </VStack>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ServiceCard;
