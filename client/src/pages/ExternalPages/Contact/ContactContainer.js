import React, { useState } from "react";
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
  Spacer,
  Icon,
  Stack,
  useToast,
} from "@chakra-ui/react";
import { FaFacebookSquare } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";
import API from "../../../utils/api";

const ContactContainer = () => {
  const toast = useToast();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await API.postContactForm({
        phone: phoneNumber,
        email: email,
        first_name: firstName,
        last_name: lastName,
        message: message,
      });
      console.log(response);
      if (response?.status === 200) {
        toast({
          title: "Message sent successfully",
          status: "success",
          duration: 5000,
          isClosable: true,
          position: "top",
        });
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      if (error.response.status === 400) {
        setError("Message sending failed.Please try again");
      }
      console.log(error);
      toast({
        title: "Error Occured!",
        description: error.message,
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
    }
  };
  return (
    <Box display="flex" mx={120}>
      <Stack
        width="30%"
        height="70vh"
        borderLeftRadius="10px"
        boxShadow="lg"
        bg="#67B6B3"
      >
        <VStack alignItems="left" textAlign="left" p={5} color="white">
          <Text fontSize="2xl" fontWeight="bold">
            {" "}
            Contact Information
          </Text>
          <Text fontSize="md">
            Fill out the form and our team will reach out to you in 24 hours
          </Text>
        </VStack>
        <VStack alignItems="left" textAlign="left" p={5} color="white">
          <Text>Email: example@gmail.com</Text>
          <Text>Phone Number: +254700000000000</Text>
          <Text>Address: Hilton Hotel, 4th floor</Text>
        </VStack>
        <Spacer />
        <HStack p={5}>
          <Icon as={FaFacebookSquare} h={7} w={7} cursor="pointer" />
          <Icon as={BsLinkedin} h={7} w={6} cursor="pointer" />
          <Icon as={RiInstagramFill} h={8} w={7} cursor="pointer" />
        </HStack>
      </Stack>
      <Box
        width="70%"
        height="70vh"
        pt="20px"
        background="#EFF9F8"
        mb="50px"
        boxShadow="lg"
        borderRightRadius="10px"
        pl="50px"
      >
        <Stack>
          <HStack pr="50px">
            <FormControl>
              <FormLabel>First Name</FormLabel>
              <Input
                id="firstName"
                variant="flushed"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Last Name</FormLabel>
              <Input
                id="lastName"
                variant="flushed"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </FormControl>
          </HStack>

          <HStack pr="50px" pt="20px">
            <FormControl isRequired>
              <FormLabel>Email Address</FormLabel>
              <Input
                id="email"
                type="email"
                variant="flushed"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Phone Number</FormLabel>
              <InputGroup>
                <InputLeftAddon children="+254" />
                <Input
                  variant="flushed"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </InputGroup>
            </FormControl>
          </HStack>
        </Stack>
        <VStack>
          <FormControl pr="50px" pt="20px">
            <FormLabel>Message</FormLabel>
            <Textarea
              height="12rem"
              // resize="vertical"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Write your message here..."
            />
          </FormControl>
          {error && <Text color="red">{error}</Text>}
          <Button
            size="md"
            bg="brand.300"
            w="200px"
            color="white"
            align="right"
            ml="40px"
            isLoading={loading}
            onClick={(e) => handleSubmit(e)}
            isDisabled={
              !email || !firstName || !lastName || !phoneNumber || !message
            }
          >
            Send Message
          </Button>
        </VStack>
      </Box>
    </Box>
  );
};
export default ContactContainer;
