import React from 'react';
import { Text,Box } from '@chakra-ui/react';
import TeamContainer from './TeamContainer';
const Team = () => {
  return (
    <Box>
    <Text fontSize="3xl">Team</Text>
    <Text fontSize="2xl">Our Team</Text>
    <TeamContainer/>
    
    </Box>
  );
}

export default Team;
