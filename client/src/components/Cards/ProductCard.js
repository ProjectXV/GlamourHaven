import {
  Box,
  Image,
  useColorModeValue,
  chakra,
  Flex,
  Tooltip,
  Badge,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";
import { useNavigate } from "react-router-dom";
import { CartState } from "../../context/cart";
import { addItemToCart } from "../../utils/cart.utils";

const ProductCard = ({ product }) => {
  const MotionBox = motion(Box);
  const navigate = useNavigate();
  const { setCartItems, cartItems } = CartState();

  return (
    <Flex flexDir="row" p={2}>
      <MotionBox
        // maxW="xs"
        width="200px"
        mx="auto"
        bg={useColorModeValue("gray.800", "white")}
        shadow="lg"
        rounded="lg"
        position="relative"
        mb="7vh"
        whileHover={{ scale: 1.04 }}
      >
        {/* {product.number_in_stock > 0 && (
          <Badge
            size="10px"
            position="absolute"
            top={12}
            right={2}
            bg="#1EE164"
            color="white"
            rounded="full"
            px="2"
            fontSize="0.8em"
          >
            -50%
          </Badge>
        )} */}
        {product.number_in_stock && (
          <Badge
            size="10px"
            position="absolute"
            top={12}
            right={2}
            bg={product.number_in_stock > 0 ? "#1EE164" : "red"}
            color="white"
            rounded="md"
            px="2"
            fontSize="0.8em"
          >
            {product.number_in_stock > 0 ? "In Stock" : "Out Of Stock"}
          </Badge>
        )}
        <Tooltip hasArrow label="Click to view more details" bg="brand.300">
          <Box
            px={4}
            py={1}
            textAlign="center"
            onClick={() => navigate(`product-details/${product.id}`)}
            _hover={{ cursor: "pointer", color: "brand.300" }}
          >
            <chakra.h1
              color={useColorModeValue("white", "gray.800")}
              fontWeight="bold"
              fontSize="1l"
              textTransform="uppercase"
              noOfLines={1}
              isTruncated
            >
              {product.commodity_name}
            </chakra.h1>
          </Box>
        </Tooltip>

        <Image
          h={48}
          w="full"
          fit="cover"
          mt={2}
          src={product.commodity_main_image}
          alt={product.commodity_name}
        />

        <Flex
          alignItems="center"
          justifyContent="space-between"
          px={4}
          py={2}
          bg="gray.900"
          roundedBottom="lg"
        >
          <chakra.h1 color="white" fontWeight="bold" fontSize="lg">
            Ksh.{product.price}
          </chakra.h1>
          <chakra.button
            px={2}
            py={1}
            bg="white"
            fontSize="xs"
            color="gray.900"
            fontWeight="bold"
            rounded="lg"
            textTransform="uppercase"
            _hover={{
              bg: "gray.200",
            }}
            _focus={{
              bg: "gray.400",
            }}
            onClick={() => {
              addItemToCart(cartItems, product, setCartItems);
            }}
          >
            Add to cart
          </chakra.button>
        </Flex>
      </MotionBox>
    </Flex>
  );
};

export default ProductCard;
