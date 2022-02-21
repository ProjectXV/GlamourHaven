import { DeleteIcon } from "@chakra-ui/icons";
import { Box, HStack, Image, Spacer, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { CartState } from "../../context/cart";
import {
  addItemToCart,
  decreaseProductQuantity,
  removeItemFromCart,
} from "../../utils/cart.utils";

const CartItem = ({ item, showQuantity, showDelete }) => {
  const { cartItems, setCartItems } = CartState();
  return (
    <Box
      width="420px"
      height="100%"
      borderWidth="1px"
      borderColor="neutral.100"
      alignItems="center"
      p="5"
    >
      <HStack>
        <Image
          h="100px"
          w="100px"
          borderRadius="10px"
          src={item.commodity_main_image}
        />
        <VStack alignItems="left" spacing="1px" width="100%">
          <HStack width="100%">
            <Text fontWeight="bold" fontSize="1.2em">
              {item.commodity_name}
            </Text>
            <Spacer />
            {showQuantity && (
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
            )}
            <Spacer />
            {showDelete && (
              <DeleteIcon
                _hover={{ cursor: "pointer" }}
                onClick={() =>
                  removeItemFromCart(cartItems, item, setCartItems)
                }
              />
            )}
          </HStack>
          <HStack>
            <Text fontSize="1em" color="neutral.300">
              Ksh. {item.price}
            </Text>
            <Text fontSize="1em" color="neutral.300">
              unit: {item.pricing_unit}
            </Text>
          </HStack>
        </VStack>
      </HStack>
    </Box>
  );
};

export default CartItem;
