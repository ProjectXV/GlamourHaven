import React from "react";
import { VStack } from "@chakra-ui/react";
import { Box, Center, Text, Button, HStack } from "@chakra-ui/react";
import { FiMail } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import Logo from "../../components/Logo";

const EmailReset = ({ email }) => {
  const navigate = useNavigate();

  return (
    <Box p="20px">
      <HStack spacing="3vw" ml={20}>
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
        <VStack mt={40}>
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
            We sent a link to{" "}
            <a href={`mailto:${email}`}>jonesferdinand@gmail.com</a>{" "}
          </Text>
          <Box
            as="button"
            borderRadius="md"
            color="white"
            h={10}
            size="md"
            width="300px"
            bgColor="#67B6B3"
            px={20}
          >
            <a href={`mailto:${email}`}>Open email app </a>
          </Box>
          <HStack>
            <Text> Didn't resolve the email.</Text>
            <Button variant="link">Click to resend</Button>
          </HStack>
        </VStack>
      </Center>
    </Box>
  );
};

export default EmailReset;
