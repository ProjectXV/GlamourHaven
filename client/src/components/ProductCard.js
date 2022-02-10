import {
  Box,
  Image,
  useColorModeValue,
  useDisclosure,
  chakra,
  Flex,
  Tooltip,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";
import { useNavigate } from "react-router-dom";
import Cart from "../pages/Cart";
import { AppState } from "../context/AppProvider";
import { addItemToCart } from "../utils/cart.utils";

const ProductCard = ({ product }) => {
  const MotionBox = motion(Box);
  const navigate = useNavigate();
  const { isOpen, onClose, onOpen } = useDisclosure();
  const { setCartItems, cartItems } = AppState();

  return (
    <>
      <MotionBox
        // maxW="xs"
        width="200px"
        mx="auto"
        bg={useColorModeValue("white", "gray.800")}
        shadow="lg"
        rounded="lg"
        mb="7vh"
        whileHover={{ scale: 1.04 }}
      >
        <Tooltip hasArrow label="Click to view more details" bg="brand.300">
          <Box
            px={4}
            py={0.5}

            onClick={() => navigate(`product-detais/${product.id}`)}

            onClick={() => navigate(`product-details/${product.id}`)}

            _hover={{ cursor: "pointer", color: "brand.300" }}
          >
            <chakra.h1
              color={useColorModeValue("gray.800", "white")}
              fontWeight="bold"
              fontSize="1l"
              textTransform="uppercase"
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
              onOpen();
            }}
          >
            Add to cart
          </chakra.button>
        </Flex>
      </MotionBox>
      <Cart isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default ProductCard;
