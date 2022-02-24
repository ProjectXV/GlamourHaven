import React from 'react';
import { Box, Text,Center,FormControl,FormLabel,Input, VStack,Button,HStack } from '@chakra-ui/react';
import { FiKey } from 'react-icons/fi';
import Logo from '../components/Logo';
import { useNavigate } from "react-router-dom";
const SetNewPassword = () => {
    const navigate = useNavigate();
  return (
    <Box>
      <HStack spacing="3vw">
        <Logo />
        <HStack spacing="2rem">
          <Button variant="link" color="#555555" onClick={() => navigate("/")}>
            Home
          </Button>
          <Button
            variant="link"
            color="#555555"
            onClick={() => navigate("/contact")}
          >
            Support
          </Button>
        </HStack>
      </HStack>
      <Center>
      <VStack>
        <VStack>
        <Box  width="70px" h="70px" borderRadius="25px" color="teal
        ">
        <FiKey/>
        </Box>
        <Text fontWeight="bold"> Set New Password</Text>
        <Text>Use a different password from the 
        previously used passwords</Text>
        </VStack>
        <VStack>
          <FormControl>
            <FormLabel fontWeight="bold">Password</FormLabel>
            <Input
              type="password"
              placeholder="****************"
              bgColor="white"
            />
          </FormControl>
          <FormControl>
            <FormLabel fontWeight="bold">Confirm Password</FormLabel>
            <Input
              type="password"
              placeholder="****************"
              bgColor="white"
            />
          </FormControl>

          <Button textColor="white" bgColor="#67B6B3">
            Reset password
          </Button>
        </VStack>
        </VStack>
      </Center>
    </Box>
  );
}

export default SetNewPassword;
