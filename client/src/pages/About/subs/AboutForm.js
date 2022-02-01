import { Button, HStack } from "@chakra-ui/react";
import React from "react";
import { Textarea } from "@chakra-ui/react";
import {
  FormControl,
  FormLabel,
} from '@chakra-ui/react'

  const AboutForm=()=>{
    
  return (
    <form borderLeftRadius="10px" height="90vh" width="40%" background="#007ACC" >
    <HStack>
    <FormControl>
    <FormLabel>First Name</FormLabel>
    <input variant="flushed">
    </input>
    </FormControl>

    <FormControl>
    <FormLabel>Last Name</FormLabel>
    <input variant="flushed">
    </input>
    </FormControl>
     </HStack>
     <HStack>
    <FormControl>
    <FormLabel>Email Address</FormLabel>
    <input variant="flushed">
    </input>
    
    </FormControl>
    <FormControl>
    <FormLabel>Phone Number</FormLabel>
    <input variant="flushed">
    </input>
    
    </FormControl>
    </HStack>
    <FormControl>
    <FormLabel>Message</FormLabel>
    <Textarea>Write your message...</Textarea>
    </FormControl>
    <Button colorScheme='teal' variant='solid'>Send Message</Button>

    
    </form>
  );
};

export default AboutForm;
