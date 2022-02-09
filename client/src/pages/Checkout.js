import React from "react";
import {
  VStack,
  HStack,
  Box,
  Button,
  Text,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Flex,
  Spacer,
  ButtonGroup,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  useColorModeValue,
} from "@chakra-ui/react";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import { BiCategory, BiLockAlt } from "react-icons/bi";
import { FaCalendar, FaRegWindowMaximize } from "react-icons/fa";
import CartItem from "../components/CartItem";
import { AppState } from "../context/AppProvider";
import { useNavigate } from "react-router-dom";

const PayByCard = () => {
  return (
    <VStack mt="5px">
      <Box alignSelf="center">
        <FormControl id="card-no" isRequired>
          <FormLabel>Card Number</FormLabel>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<FaRegWindowMaximize color="gray.300" />}
            />
            <Input
              variant="filled"
              width="400px"
              placeholder="0000 0000 0000 0000"
              type="text"
            />
          </InputGroup>
        </FormControl>
      </Box>
      <HStack>
        <FormControl id="expirydate" isRequired>
          <FormLabel>Expiry Date</FormLabel>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<FaCalendar color="gray.300" />}
            />
            <Input
              type="text"
              variant="filled"
              width="200px"
              placeholder="mm/dd/yy"
            />
          </InputGroup>
        </FormControl>

        <FormControl id="cvc" isRequired>
          <FormLabel>CVC/CVV</FormLabel>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<BiLockAlt color="gray.300" />}
            />
            <Input
              variant="filled"
              width="200px"
              placeholder="..."
              type="text"
            />
          </InputGroup>
        </FormControl>
      </HStack>
      <HStack>
        <BiLockAlt color="gray.300" />
        <Text>Your transaction is secured with SSL encryption</Text>
      </HStack>
      {/* <HStack>
                  <Button
                    type="submit"
                    alignSelf="center"
                    padding="10px"
                    background="brand.300"
                    borderRadius="5px"
                    width="400px"
                    height="35px"
                    color="#ffffff"
                  >
                    Pay Now
                  </Button>
                </HStack> */}
    </VStack>
  );
};

const PayByMPesa = () => {
  return <Text>MPesa</Text>;
};

const Checkout = () => {
  const { cartItems } = AppState();
  const TotalAmount = cartItems.reduce(
    (price, item) => price + item.quantity * item.price,
    0
  );

  const navigate = useNavigate();
  const colors = useColorModeValue(
    ["red.50", "teal.50", "blue.50"],
    ["red.900", "teal.900", "blue.900"]
  );
  const [tabIndex, setTabIndex] = React.useState(0);
  const bg = colors[tabIndex];
  return (
    <Flex flexDirection={["column", "column", "row", "row"]}>
      <Box
        height="88vh"
        bg="#fff"
        borderRadius="10px 0px 0px 10px"
        width={["100vw", "100vw", "70vw", "70vw"]}
        py={10}
        px={20}
        // top="12vh"
      >
        <Text
          textTransform="capitalize"
          fontWeight="bold"
          fontSize="3em"
          color="neutral.300"
          align="left"
          mb="2vh"
        >
          Make Order
        </Text>
        <Text
          textTransform="capitalize"
          fontWeight="bold"
          fontSize="1.5em"
          color="neutral.900"
          align="left"
          mb="4vh"
        >
          {" "}
          Choose Payment Method
        </Text>
        <Tabs
          isFitted
          variant="enclosed-colored"
          // variant="soft-rounded"
          defaultIndex={1}
          onChange={(index) => setTabIndex(index)}
          // bg={bg}
          h="60vh"
          borderRadius="lg"
          width="100%"
          borderColor="white"
        >
          <TabList mb="1em">
            <Tab
              _selected={{ color: "white", bg: "blue.500" }}
              _focus={{ borderColor: "none" }}
            >
              Pay By Card
            </Tab>
            <Tab
              _selected={{ color: "white", bg: "green.400" }}
              _focus={{ borderColor: "none" }}
            >
              Pay By MPesa
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <PayByCard />
            </TabPanel>
            <TabPanel>
              <PayByMPesa />
            </TabPanel>
          </TabPanels>
        </Tabs>
        {/* <Button
          _hover={{
            bg: "cyan.400",
            color: "white",
            borderRadius: "lg",
          }}
          mx="auto"
          p={4}
          // _expanded={{
          //   bg: "cyan.400",
          //   color: "white",
          //   borderRadius: "lg",
          // }}
          _focus={{ borderRadius: "none" }}
          width="400px"
          align="center"
        >
          <Icon mr={4} as={BiCategory} />
          <Box textAlign="left">
            <Select>
              <option>Pay by Card</option>
              <option>Pay by Mpesa</option>
              <option>Pay by PayPal</option>
            </Select>
          </Box>
          {/* <AccordionIcon ml={3} /> 
        </Button>
        */}
        <ButtonGroup w="100%" alignItems="center">
          <Button
            variant="ghost"
            leftIcon={<ChevronLeftIcon />}
            onClick={() => {
              navigate("/products");
            }}
          >
            Back To Shop
          </Button>
          <Spacer />
          <Button w="20vw" bg="brand.300" color="white" size="lg">
            Checkout
          </Button>
        </ButtonGroup>
      </Box>
      <Box h="100vh" bg="red" width={["100vw", "100vw", "30vw", "30vw"]}>
        <Box h="70vh" bg="brand.200" p={10}>
          <Text
            textTransform="capitalize"
            fontWeight="bold"
            fontSize="2em"
            color="neutral.300"
            align="left"
            mb="4vh"
          >
            You're buying
          </Text>
          {cartItems?.map((item) => {
            return (
              <CartItem item={item} showQuantity={false} showDelete={false} />
            );
          })}
        </Box>
        <VStack align="flex-start" h="30vh" bg="neutral.200" p={10}>
          <HStack w="100%">
            <Text color="neutral.400">Product Count</Text>
            <Spacer />
            <Text align="right">{cartItems.length}</Text>
          </HStack>
          <HStack w="100%">
            <Text color="neutral.400">Product Cost</Text>
            <Spacer />
            <Text align="right">Ksh. {TotalAmount}</Text>
          </HStack>
          <HStack w="100%">
            <Text color="neutral.400">Shipping Cost</Text>
            <Spacer />
            <Text align="right">Ksh. 0</Text>
          </HStack>
          <HStack w="100%">
            <Text fontSize="1.5em" color="neutral.400">
              Total Cost
            </Text>
            <Spacer />
            <Text align="right" fontSize="1.5em">
              Ksh. {TotalAmount}
            </Text>
          </HStack>
        </VStack>
      </Box>
    </Flex>
  );
};

export default Checkout;
