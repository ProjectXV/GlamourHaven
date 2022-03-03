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

const Step2 = ({ amount }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [transaction_id, setTransaction_id] = useState("");
  const date = new Date();

  const client_id = localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo")).account_id
    : null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      transaction_id: transaction_id,
      order_items: [],
      date_placed: date,
      order_value: { amount },
      is_delivered: false,
      date_delivered: null,
      payment_transaction: 1,
      placer: client_id,
    };

    try {
      setLoading(true);
      const response = await API.createOrder(data);
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
            Enter the transaction Id of the payment you just made <br />
          </Text>

          <FormControl id="transaction_id">
            <FormLabel>Transaction ID</FormLabel>
            <Input
              placeholder="Enter the transaction id of your payment"
              _placeholder={{ color: "gray.500" }}
              value={transaction_id}
              onChange={(e) => setTransaction_id(e.target.value)}
            />
          </FormControl>
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

export default Step2;
