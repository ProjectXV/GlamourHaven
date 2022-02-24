import React from 'react'
import { VStack } from "@chakra-ui/react";
import { Box, Center, Text, Button, HStack } from "@chakra-ui/react";
import { FiMail } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import Logo from "../../components/Logo";

const EmailReset = () => {
 const navigate = useNavigate();
  return (
    <Box p="20px">
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
          <Center
            w="50px"
            h="50px"
            bg="#EFF9F8"
            color="#67B6B3"
            borderRadius="25px"
          >
            <FiMail />
          </Center>
          <Text fontSize="5xl" fontWeight="bold">
            Check your email
          </Text>
          <Text>
            We sent a password reset link to jonesferdinand@gmail.com{" "}
          </Text>
          <Button
            size="sm"
            width="150px"
            bgColor="#67B6B3"
            alignContent="center"
          >
            Open email app{" "}
          </Button>
          <HStack>
            <Text> Didn't resolve the email.</Text>
            <link>Click to resend</link>
          </HStack>
        </VStack>
      </Center>
    </Box>
  );
};


export default EmailReset