import React from 'react';
import {Box,Image,Text, VStack} from '@chakra-ui/react';

const TeamCard = () => {
  return (
<Box padding="30px">
 <Box width="250px" height="250px" >
  <Image borderRadius="25px" src='https://bit.ly/dan-abramov' / >
  <Box mt="30px">
  <VStack>
   <Text TextColor="black">Name</Text>
  <Text TextColor="black">Specialization</Text>
  </VStack>
  </Box>
</Box>
    </Box>
  ); 
}

export default TeamCard;
