import React from "react";
import {
  VStack,
  HStack,
  Box,
  Button,
  Text,
  Flex,
  Spacer,
  ButtonGroup,
  Image,
  AccordionItem,
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Stack,
} from "@chakra-ui/react";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import CartItem from "../../components/Cart/CartItem";
import { CartState } from "../../context/cart";
import { useNavigate } from "react-router-dom";
import card from "../../assets/VisaCard.png";

const accordionButtonStyles = {
  borderBottomWidth: "1px",
  borderColor: "neutral.200",
  p: "4",
};

const Checkout = () => {
  const { cartItems } = CartState();
  const TotalAmount = cartItems.reduce(
    (price, item) => price + item.quantity * item.price,
    0
  );

  const navigate = useNavigate();

  return (
    <Flex flexDirection={["column", "column", "row", "row"]}>
      <Box
        height="88vh"
        bg="#fff"
        borderRadius="10px 0px 0px 10px"
        position="absolute"
        left={0}
        width={["100vw", "100vw", "70vw", "70vw"]}
        py={10}
        px={20}
      >
        <Text
          textTransform="uppercase"
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
          fontSize="1.2em"
          color="neutral.900"
          align="left"
          mb="4vh"
        >
          {" "}
          Choose Payment Method
        </Text>
        <Stack h="60vh" borderRadius="lg" width="100%">
          <Accordion
            defaultIndex={[0]}
            bg="#F9F9F9"
            borderColor="white"
            borderRadius="10px"
            allowToggle
          >
            <AccordionItem>
              <h2>
                <AccordionButton
                  {...accordionButtonStyles}
                  borderTopRadius="10px"
                >
                  <Box flex="1" textAlign="left">
                    Pay with Card
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel p={30} width="inherit" bg="#F9F9F9">
                <HStack justifyContent="space-between" px={50}>
                  <Box>
                    <Image src={card} objectFit="cover" />
                  </Box>
                  <Button>Edit</Button>
                </HStack>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton
                  {...accordionButtonStyles}
                  borderTopRadius="10px"
                >
                  <Box flex="1" textAlign="left">
                    Pay By M-Pesa
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel p={30} width="inherit" bg="#F9F9F9">
                <Box>
                  <Image src={card} objectFit="cover" />
                </Box>
                <Button>Edit</Button>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton
                  {...accordionButtonStyles}
                  borderTopRadius="10px"
                >
                  <Box flex="1" textAlign="left">
                    Pay By PayPal
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel p={30} width="inherit" bg="#F9F9F9">
                <Box>
                  <Image src={card} objectFit="cover" />
                </Box>
                <Button>Edit</Button>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Stack>
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

      <Box
        h="100vh"
        bg="red"
        width={["100vw", "100vw", "30vw", "30vw"]}
        position="absolute"
        right={0}
      >
        <Box h="70vh" bg="brand.200" p={10}>
          <Text
            textTransform="capitalize"
            fontWeight="bold"
            fontSize="1.5em"
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
