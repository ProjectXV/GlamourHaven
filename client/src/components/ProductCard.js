import {
  Badge,
  Box,
  Button,
  Image,
  Text,
  useColorModeValue,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";
import { useNavigate } from "react-router-dom";
import CartIcon from "./CartIcon";
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
        whileHover={{ scale: 1.04 }}
        h="30vh"
        rounded="lg"
        shadow="md"
        mb="7vh"
        ml="2.8vh"
        bg={useColorModeValue("white", "gray.800")}
        // borderWidth="1px"
        width="200px"
        height="290px"
        position="relative"
        alignItems="center"
      >
        <Button
          variant="link"
          fontWeight="extrabold"
          p={3}
          onClick={() => navigate(`product-details/${product.id}`)}
          color="#555"
        >
          {product.commodity_name}
        </Button>
        <Image
          mx="auto"
          width="90%"
          h="160px"
          borderRadius="5px"
          objectFit="cover"
          src={product.commodity_main_image}
        />
        <Badge
          size="10px"
          position="absolute"
          top={12}
          right={4}
          bg="red.500"
          color="white"
          rounded="full"
          px="2"
          fontSize="0.8em"
        >
          -50%
        </Badge>
        <Badge
          size="10px"
          position="absolute"
          top={48}
          right={3}
          bg="brand.500"
          color="white"
          rounded="full"
          px="2"
          fontSize="0.8em"
        >
          in Stock
        </Badge>

        <VStack px={3} pt={3} spacing="0.5vh">
          <Text fontWeight="bold">Ksh.{product.price}</Text>
          <Button
            px={10}
            width="100%"
            onClick={() => addItemToCart(cartItems, product, setCartItems)}
            rightIcon={
              <CartIcon color="#555" handleOpenCart={() => onOpen()} />
            }
            textTransform="uppercase"
          >
            Add to cart
          </Button>
        </VStack>
      </MotionBox>
      <Cart isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default ProductCard;
