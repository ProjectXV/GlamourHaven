import React from "react";
import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  HStack,
  Spacer,
  Text,
} from "@chakra-ui/react";
import CartItem from "../../components/Cart/CartItem";
import { CartState } from "../../context/cart";
import { clearCart } from "../../utils/cart.utils";
import { useNavigate } from "react-router-dom";

const Cart = ({ onClose, isOpen }) => {
  const navigate = useNavigate();
  const { cartItems, setCartItems } = CartState();
  const TotalAmount = cartItems.reduce(
    (price, item) => price + item.quantity * item.price,
    0
  );
  const CartQuantity = cartItems.reduce(
    (cartTotalQuantity, item) => cartTotalQuantity + item.quantity,
    0
  );
  return (
    <Drawer
      isOpen={isOpen}
      onClose={onClose}
      size="md"
      blockScrollOnMount={false}
      motionPreset="slideInRight"
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerHeader>
          <Text textAlign="center">MY CART</Text>
          <DrawerCloseButton />
        </DrawerHeader>
        <DrawerBody>
          <Flex
            as="span"
            h="40px"
            bg="neutral.200"
            color="neutral.400"
            alignItems="center"
            textTransform="uppercase"
          >
            <Text ml={4} fontWeight="semibold">
              Cart Items
            </Text>
          </Flex>
          <Box p={3}>
            {cartItems?.map((item) => {
              return (
                <CartItem
                  key={item.id}
                  item={item}
                  showQuantity={true}
                  showDelete={true}
                />
              );
            })}
            {cartItems?.length < 1 && (
              <Text p={3}>There are no items in the cart</Text>
            )}
            <Flex
              as="span"
              h="40px"
              bg="white"
              color="neutral.400"
              alignItems="center"
              textTransform="uppercase"
              borderColor="neutral.200"
              borderWidth="3px"
            >
              <HStack>
                <Text ml={4} fontWeight="semibold">
                  Cart Total
                </Text>
                <Spacer />
                <Text>Kshs.{TotalAmount}</Text>
              </HStack>
            </Flex>
            <Flex
              as="span"
              h="40px"
              bg="white"
              color="neutral.400"
              alignItems="center"
              textTransform="uppercase"
              borderColor="neutral.200"
              borderWidth="3px"
            >
              <HStack>
                <Text ml={4} fontWeight="semibold">
                  Cart Total Quantity
                </Text>
                <Spacer />
                <Text>{CartQuantity}</Text>
              </HStack>
            </Flex>

            <HStack py={10}>
              <Button onClick={() => navigate("/checkout")}>Checkout</Button>
              <Button onClick={() => clearCart(cartItems, setCartItems)}>
                Clear Cart
              </Button>
            </HStack>
          </Box>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default Cart;
