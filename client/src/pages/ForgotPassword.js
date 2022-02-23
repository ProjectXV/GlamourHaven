import React from 'react';
import { FiKey } from 'react-icons/fi';
import { Box,Center,VStack, Text,FormControl, FormLabel, Input,Button } from '@chakra-ui/react';

const ForgotPassword = () => {
  return (
    <Box>
      <Center>
        <VStack>
          <FiKey />
          <Text fontWeight="bold">Forgot Password</Text>
          <Text> No worries. We'll send you reset instructions</Text>
          <FormControl>
            <FormLabel fontWeight="bold">Email Address</FormLabel>
            <Input
              type="email"
              placeholder="Enter your email"
              bgColor="white"
            />
          </FormControl>
          <Button>Forgot Password</Button>
        </VStack>
      </Center>
    </Box>
  );
}

export default ForgotPassword;
