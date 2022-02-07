import React from 'react';
import { Box,SimpleGrid,Flex } from '@chakra-ui/react';
import TeamCard from './TeamCard';
const TeamContainer = () => {
  return (
<Box width="100vw">
<SimpleGrid minChildWidth='120px' columns={4} spacing='40px'>

   <TeamCard/>
    <TeamCard/>
  <TeamCard/>
 <TeamCard/>
 <TeamCard/>
    <TeamCard/>
  <TeamCard/>
 <TeamCard/>
  

  
  
</SimpleGrid>
     
    </Box>
  );
}

export default TeamContainer;
