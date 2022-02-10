import React from "react";
import { chakra, Icon, Flex } from "@chakra-ui/react";
import { HiOutlineShoppingBag } from "react-icons/hi";

export default function CartIcon({ number, handleOpenCart, color }) {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      onClick={handleOpenCart}
      _hover={{ cursor: "pointer" }}
    >
      <chakra.span pos="relative" display="inline-block">
        <Icon
          boxSize={6}
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke={color}
          as={HiOutlineShoppingBag}
        />
        {number > 0 && (
          <chakra.span
            pos="absolute"
            top="-1px"
            right="-1px"
            px={2}
            py={1}
            fontSize="xs"
            fontWeight="bold"
            lineHeight="none"
            color="white"
            transform="translate(50%,-50%)"
            bg="red.600"
            rounded="full"
          >
            {number}
          </chakra.span>
        )}
      </chakra.span>
    </Flex>
  );
}
