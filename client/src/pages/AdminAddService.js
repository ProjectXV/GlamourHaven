import React from 'react';
import { Box,HStack,Text, Textarea, VStack,Avatar, Button, Divider } from '@chakra-ui/react';
import {
  FormControl,
  FormLabel,
  Input
} from "@chakra-ui/react";
const AdminAddService = () => {
  return (
    <Box>
      <Box textAlign="left">
        <Box textAlign="left">
          <VStack textAlign="left">
            <Text textAlign="left" fontWeight="bold">Add New Service</Text>
            <Text textAlign="left">
              With all of the styling tool options available in today's market{" "}
            </Text>
            <Divider orientation="horizontal" />
          </VStack>
        </Box>
        <Box>
          <Text fontWeight="bold">Service Information</Text>
          <Text>
            With all of the styling tool options available in today's market
          </Text>
        </Box>
      </Box>
      <Box>
        <HStack>
          <VStack>
            <FormControl>
              <FormLabel fontWeight="bold">Service Name</FormLabel>
              <Input
                id="service_name"
                placeholder="Enter the service name"
                bgColor="white"
                w="450px"
              />
            </FormControl>
            <FormControl>
              <FormLabel fontWeight="bold">Estimated Service Time</FormLabel>
              <Input
                id="service_name"
                placeholder="Enter the estimated service time"
                bgColor="white"
              />
            </FormControl>
            <FormControl>
              <FormLabel fontWeight="bold">Estimated Cost</FormLabel>
              <Input
                id="service_name"
                placeholder="Enter the estimated cost"
                bgColor="white"
              />
            </FormControl>
          </VStack>
          <VStack>
            <Text fontWeight="bold">Service Description</Text>
            <Textarea
              placeholder="write service description here"
              bgColor="white"
              w="350px"
              h="200px"
            />
          </VStack>
        </HStack>
      </Box>
      <Box textAlign="left" mt="30px">
        <Text fontWeight="bold">Images</Text>
        <Text mt="10px">
          Add at least one Image. The image should be of the very high quality
          for better understanding by the clients
        </Text>
        <HStack mt="10px">
          <Avatar
            size="xl"
            bgColor="white"
            name="Christian Nwamba"
            src="https://bit.ly/code-beast"
          />
          <Text>You can add up to three images</Text>
        </HStack>
      </Box>
      <HStack alignItems="right" mt="20px">
        <Button colorScheme="teal" variant="outline">
          Cancel
        </Button>
        <Button colorScheme="teal" variant="solid">
          Add New Service
        </Button>
      </HStack>
    </Box>
  );
}

export default AdminAddService;
