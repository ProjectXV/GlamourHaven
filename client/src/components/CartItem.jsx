import { DeleteIcon } from "@chakra-ui/icons";
import { Box, HStack, Image, Spacer, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { AppState } from "../context/AppProvider";
import { addItemToCart, decreaseProductQuantity, removeItemFromCart } from "../utils/cart.utils";

const CartItem = ({ item }) => {
    const {cartItems, setCartItems} = AppState()
  return (
    <Box width="500px" height="10vh">
      <HStack>
        <Image
          h="50px"
          w="50px"
          borderRadius="10px"
          src={item.commodity_main_image}
        />
        <VStack alignItems="left" spacing="1px" width="100%">
          <HStack width="65%">
            <Text fontWeight="bold" fontSize="1.2em">
              {item.commodity_name}
            </Text>
            <Spacer />
            <HStack>
              <Text
                _hover={{ cursor: "pointer" }}
                onClick={() => addItemToCart(cartItems, item, setCartItems)}
              >
                +
              </Text>
              <Text>Qty: {item.quantity}</Text>
              <Text
                _hover={{ cursor: "pointer" }}
                onClick={() =>
                  decreaseProductQuantity(cartItems, item, setCartItems)
                }
              >
                -
              </Text>
            </HStack>
            <Spacer />
            <DeleteIcon
              _hover={{ cursor: "pointer" }}
              onClick={() => removeItemFromCart(cartItems, item, setCartItems)}
            />
          </HStack>
          <HStack>
            <Text fontSize="1em" color="neutral.300">
              {item.price}
            </Text>
            <Text fontSize="1em" color="neutral.300">
              {item.pricing_unit}
            </Text>
          </HStack>
        </VStack>
      </HStack>
    </Box>
  );
};

export default CartItem;
