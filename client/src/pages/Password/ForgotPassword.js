import React from 'react';
import { FiKey } from 'react-icons/fi';
import { Box,Center,VStack, Text,FormControl, FormLabel, Input,Button,HStack} from '@chakra-ui/react';
import Logo from '../../components/Logo';
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
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
        <Box width="70px" h="70px" borderRadius="25px" color="teal">
          <FiKey />
          </Box>
          <Text fontWeight="bold">Forgot Password</Text>
          <Text> No worries. We'll send you reset instructions</Text>
          <FormControl>
            <FormLabel fontWeight="bold">Email Address</FormLabel>
            <Input
              type="email"
              placeholder="Enter your email"
              bgColor="white"
              w="300px"
            />
          </FormControl>
          <Button colorScheme="teal" w="300px">Forgot Password</Button>
        </VStack>
      </Center>
    </Box>
  );
}

export default ForgotPassword;
