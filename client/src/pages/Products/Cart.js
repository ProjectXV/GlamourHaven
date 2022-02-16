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
  HStack,
  Text,
} from "@chakra-ui/react";
import CartItem from "../../components/CartItem";
import { AppState } from "../../context/AppProvider";
import { clearCart } from "../../utils/cart.utils";
import { useNavigate } from "react-router-dom";

const Cart = ({ onClose, isOpen }) => {
  const navigate = useNavigate();
  const { cartItems, setCartItems } = AppState();
  const TotalAmount = cartItems.reduce(
    (price, item) => price + item.quantity * item.price,
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
          <Text>Your Cart</Text>
          <DrawerCloseButton />
        </DrawerHeader>
        <DrawerBody>
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
            <HStack p={4}>
              <Text>Total: Kshs.{TotalAmount}</Text>
            </HStack>
            <HStack>
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
