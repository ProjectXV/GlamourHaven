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
} from "@chakra-ui/react";
import { useNavigate } from "react-router";
import { useState } from "react";

const LipaNaMpesa = () => {
  return <div>LipaNaMpesa</div>;
};

export default LipaNaMpesa;

export const ForgotPassword = () => {
  const navigate = useNavigate();
  const [amount, setAmount] = useState("");
  const [phone_number, setPhone_Number] = useState("");
  // const location = useLocation()
  // const value = location.state.from

  const handleSubmit = async (e) => {
    const data = {
      phone_number: phone_number,
      amount: amount,
    };

    navigate({
      //   pathname: `/reset-password`,
      // , state:{from: `${value}`}
    });
  };

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
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
          <FormControl id="email">
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
          >
            Send Payment Request
          </Button>
        </Stack>
      </Stack>
    </Flex>
  );
};
