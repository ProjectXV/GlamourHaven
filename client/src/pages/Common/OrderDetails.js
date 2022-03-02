import React, { useEffect, useState } from "react";
import {
  Box,
  Text,
  Divider,
  Flex,
  VStack,
  HStack,
  SimpleGrid,
  Circle,
  Spacer,
} from "@chakra-ui/react";
import { Avatar } from "@chakra-ui/avatar";
import product from "../../assets/k.jpg";
import { Tag } from "@chakra-ui/tag";
import { useParams } from "react-router";
import moment from "moment";
import API from "../../utils/api";
import Toast from "../../components/Toast";
import GeneralLoading from "../../components/GeneralLoading";

export const OrderDetails = () => {
  const [loading, setLoading] = useState(false);
  const [orderDetails, setOrderDetails] = useState([
    {
      id: 9,
      payment_transaction: 9,
      transaction_id: 9,
      is_delivered: false,
      order_value: "1,526",
      placer: "Terri Cole",
      date_placed: "2017-05-28",
      date_delivered: "2014-03-01",
      order_items: [
        {
          id: 0,
          name: "Samantha Bell",
        },
        {
          id: 1,
          name: "Gillespie Mathis",
        },
        {
          id: 2,
          name: "Nita Zamora",
        },
      ],
    },
  ]);

  const { order_id } = useParams();

  const fetchOrderDetails = async () => {
    try {
      setLoading(true);
      const response = await API.getOrderDetails(order_id);
      if (response.status === 200) {
        setLoading(false);

        // Success 🎉
        console.log("response", response);
        setOrderDetails(response.data);
        localStorage.setItem("orderdetails", JSON.stringify(response.data));
      }
    } catch (error) {
      setLoading(false);
      // Error 😨
      if (error.response) {
        <Toast
          title="Error!"
          description={error.response.data}
          status="error"
        />;
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        console.log(error.request);
        <Toast title="Error!" description={error.request} status="error" />;
      } else {
        // Something happened in setting up the request and triggered an Error
        console.log("Error", error.message);
        <Toast title="Error!" description={error.messaget} status="error" />;
      }
      console.log(error);
    }
  };

  useEffect(() => {
    fetchOrderDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {loading ? (
        <GeneralLoading />
      ) : (
        <>
          {orderDetails.map((order) => {
            return (
              <Box h="100%" overflowY={"scroll"}>
                <VStack alignItems="left">
                  <VStack width="100%" p={2} alignItems="left">
                    <HStack>
                      <Text fontSize="1.5em" fontWeight="bold">
                        Order{" "}
                      </Text>
                      <Text fontSize="1.5em">#{order.id}</Text>
                      <Tag colorScheme="whatsapp">Paid</Tag>
                      <Tag colorScheme="red">not delivered</Tag>
                    </HStack>
                    <Text color="#C4C4C4" textAlign={"left"}>
                      {" "}
                      {moment(order.date_placed).format(
                        "MMMM Do YYYY [at] h:mm:ss a"
                      )}
                    </Text>
                  </VStack>
                  <HStack>
                    <Flex
                      p={4}
                      height="auto"
                      bg="#E9F6FF"
                      borderRadius="10px"
                      width="56vw"
                      flexWrap="wrap"
                    >
                      <Flex flexDir="column">
                        <HStack>
                          <Flex p={2}>
                            <Text p={2} fontWeight="bold">
                              Customer's Cart
                            </Text>
                          </Flex>
                          <Spacer />
                          <Text p={4} fontWeight="bold">
                            {order.order_items.length} ordered items
                          </Text>
                        </HStack>
                        <Divider width="54vw" mb={2} />
                        {order.order_items.map((item, index) => {
                          return (
                            <Flex
                              key={index}
                              mb={5}
                              justifyContent="space-between"
                              w="54vw"
                              h="5vw"
                              bg="white"
                              shadow="lg"
                              rounded="lg"
                              p={5}
                              flexDir="row"
                              alignItems="center"
                            >
                              <Avatar src={product} />
                              <Text>{item.name}</Text>
                              <Text>Price</Text>
                              <Text>Quantity</Text>
                              <Text>Total item amount</Text>
                            </Flex>
                          );
                        })}
                      </Flex>
                    </Flex>
                    <Box
                      ml={20}
                      w="xs"
                      alignSelf="auto"
                      h="inherit"
                      bg="white"
                      shadow="lg"
                      rounded="lg"
                    >
                      <Text p={4} fontWeight="bold" textAlign={"left"}>
                        Customer details
                      </Text>
                      <Divider width="inherit" />
                      <HStack p={5}>
                        <Avatar size="lg" src={product} />
                        <VStack spacing="1px" alignItems="left">
                          <Text fontFamily="sans-serif" textAlign={"left"}>
                            John Doe
                          </Text>
                          <Text
                            textAlign={"left"}
                            fontFamily="sans-serif"
                            color="#c4c4c4"
                          >
                            customer@gmail.com
                          </Text>
                        </VStack>
                      </HStack>
                      <Text p={4} fontWeight="bold" textAlign={"left"}>
                        Customer Order Note
                      </Text>
                      <Divider width="inherit" />
                      <Text p={5} textAlign={"left"}>
                        Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem
                        Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                        Lorem Ipsum Lorem Ipsum
                      </Text>
                    </Box>
                  </HStack>
                  <SimpleGrid columns={2} spacing="2vw">
                    <Box h="45vh" bg="white" shadow="lg" rounded="lg" p={5}>
                      <Text p={4} fontWeight="bold">
                        Order Summary
                      </Text>
                      <Divider width="100%" />
                      <VStack alignItems="left" p={7} spacing={5}>
                        <Text
                          fontFamily="sans-serif"
                          textTransform="capitalize"
                        >
                          Total Amount Payable: KSH.{order.total_amount_payable}
                        </Text>
                        <Text
                          fontFamily="sans-serif"
                          textTransform="capitalize"
                        >
                          Discount: KSH. 0
                        </Text>
                        <Text
                          fontFamily="sans-serif"
                          textTransform="capitalize"
                        >
                          VAT: KSH.{0.16 * order.total_amount_payable}
                        </Text>
                      </VStack>
                      <Divider mb="5" width="100%" />
                      <Text px={5} textTransform="capitalize">
                        SubTotal: KSH. {order.order_value}
                      </Text>
                    </Box>
                    <Box
                      ml={5}
                      h="45vh"
                      bg="white"
                      shadow="lg"
                      rounded="lg"
                      p={5}
                    >
                      <Text p={4} fontWeight="bold">
                        Activity
                      </Text>
                      <Divider width="inherit" />
                      <VStack p={7} alignItems="left">
                        <HStack alignItems="center">
                          <Circle size="10px" bg="#555"></Circle>
                          <Text ml={2} fontWeight="medium" textAlign="center">
                            {moment(order.date_placed).format("MMMM Do YYYY")}
                          </Text>
                        </HStack>
                        <HStack spacing="2vw">
                          <Divider
                            ml={1}
                            borderLeftWidth="3px"
                            height="7vh"
                            borderColor="#c4c4c4"
                            orientation="vertical"
                          />
                          <Text>
                            {moment(order.date_placed).format("h:mm a")} Order
                            was made by Customer
                          </Text>
                        </HStack>
                      </VStack>
                    </Box>
                  </SimpleGrid>
                </VStack>
              </Box>
            );
          })}
        </>
      )}
    </>
  );
};
