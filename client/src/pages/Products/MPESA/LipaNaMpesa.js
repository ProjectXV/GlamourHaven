import React from "react";
import {
  Button,
  FormControl,
  Flex,
  Heading,
  Input,
  Stack,
  Text,
  useColorModeValue,
  FormLabel,
  Image,
  SimpleGrid,
} from "@chakra-ui/react";
import { useNavigate } from "react-router";
import { useState } from "react";
import lnmlogo from "../../../assets/lnm-logo.png";
import API from "../../../utils/api";

const LipaNaMpesa = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [amount, setAmount] = useState(0);
  const [phone_number, setPhone_Number] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      PhoneNumber: phone_number,
      Amount: amount,
    };

    try {
      setLoading(true);
      const response = await API.createMPesaRequest(data);
      if (response?.data) {
        setLoading(false);

        // Success 🎉
        console.log("response", response);
      }
    } catch (error) {
      // Error 😨se
      setLoading(false);
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        console.log(error.request);
      } else {
        console.log("Error", error.message);
      }
      console.log(error);
    }

    navigate({
      //   pathname: `/reset-password`,
      // , state:{from: `${value}`}
    });
  };

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={0}>
      <Flex bg="brand.400">
        <Image
          src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80"
          alt="3 women looking at a laptop"
          fit="cover"
          w="full"
          h={{ base: "100vh", md: "100vh" }}
          bg="gray.100"
          loading="lazy"
          opacity={0.4}
        />
        <Image
          src={lnmlogo}
          position={"absolute"}
          top={300}
          left={40}
          width="400px"
        />
      </Flex>
      <Flex
        direction="column"
        alignItems="start"
        justifyContent="center"
        px={{ base: 4, md: 8, lg: 20 }}
        py={24}
        zIndex={3}
      >
        <Stack
          spacing={4}
          w={"full"}
          maxW={"md"}
          bg={useColorModeValue("white", "gray.700")}
          rounded={"xl"}
          boxShadow={"lg"}
          p={6}
          my={12}
        >
          <Heading lineHeight={1.1} fontSize={{ base: "2xl", md: "3xl" }}>
            Lipa na M-Pesa
          </Heading>
          <Text
            fontSize={{ base: "sm", sm: "md" }}
            color={useColorModeValue("gray.800", "gray.400")}
          >
            Enter the email address you used to register with <br />
            You&apos;ll get an email with a reset link
          </Text>
          <Stack>
            <FormControl id="phone_number">
              <FormLabel>Phone Number</FormLabel>
              <Input
                placeholder="Enter your phone number"
                _placeholder={{ color: "gray.500" }}
                type="number"
                value={phone_number}
                onChange={(e) => setPhone_Number(e.target.value)}
              />
            </FormControl>
            <FormControl id="amount">
              <FormLabel>Amount</FormLabel>
              <Input
                placeholder="Enter the amount to be paid"
                _placeholder={{ color: "gray.500" }}
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </FormControl>
          </Stack>
          <Stack spacing={6}>
            <Button
              onClick={handleSubmit}
              bg={"blue.400"}
              color={"white"}
              _hover={{
                bg: "blue.500",
              }}
              isLoading={loading}
              loadingText={"Submitting Request"}
            >
              Send Payment Request
            </Button>
          </Stack>
        </Stack>
      </Flex>
    </SimpleGrid>
  );
};

export default LipaNaMpesa;
