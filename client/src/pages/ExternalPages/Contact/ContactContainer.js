import React from "react";
import {
  Box,
  VStack,
  Text,
  FormControl,
  FormLabel,
  HStack,
  InputGroup,
  Input,
  InputLeftAddon,
  Textarea,
  Button,
} from "@chakra-ui/react";

const ContactContainer = () => {
  return (
    <Box display=" flex">
      <Box
        width="30%"
        height="100vh"
        pt="40px"
        ml="40px"
        mb="50px"
        borderLeftRadius="10px"
        boxShadow="lg"
        bg="#67B6B3"
      >
        <VStack>
          <Text fontSize="3xl"> Contact Information</Text>
          <Text fontSize="md">
            Fill out the form and our team will reach out to you in 24 hours
          </Text>
        </VStack>
        <VStack>
          <Text>example@gmail.com</Text>
          <Text>+254700000000000</Text>
          <Text>Hilton Hotel, 4th floor</Text>
        </VStack>
      </Box>
      <Box
        width="70%"
        height="100vh"
        pt="40px"
        background="#EFF9F8"
        mr="40px"
        mb="50px"
        boxShadow="lg"
        borderRightRadius="10px"
        pl="50px"
      >
        <HStack pr="50px">
          <FormControl>
            <FormLabel>First Name</FormLabel>
            <InputGroup>
              <Input variant="flushed" />
            </InputGroup>
          </FormControl>
          <FormControl>
            <FormLabel>Last Name</FormLabel>
            <InputGroup>
              <Input variant="flushed" />
            </InputGroup>
          </FormControl>
        </HStack>

        <HStack pr="50px" pt="50px">
          <FormControl>
            <FormLabel>Email Address</FormLabel>
            <InputGroup>
              <Input variant="flushed" />
            </InputGroup>
          </FormControl>
          <FormControl>
            <FormLabel>Phone Number</FormLabel>
            <InputGroup>
              <InputLeftAddon children="+254" />
              <Input variant="flushed" />
            </InputGroup>
          </FormControl>
        </HStack>
        <FormControl pr="50px" pt="50px">
          <FormLabel>Message</FormLabel>
          <Textarea
            height="290px"
            resize="vertical"
            placeholder="write your message here.."
          />
        </FormControl>
        <Button
          mt="20px"
          ml="590px"
          width={"250px"}
          size="lg"
          colorScheme="blue"
        >
          Send Message
        </Button>
      </Box>
    </Box>
  );
};
export default ContactContainer;
