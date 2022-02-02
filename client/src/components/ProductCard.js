import {
  Box,
  Button,
  Image,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";
import { useNavigate } from "react-router-dom";
import CartIcon from "./CartIcon";

const ProductCard = ({ product }) => {
  const MotionBox = motion(Box);
  const navigate = useNavigate();
  return (
    <MotionBox
      whileHover={{ scale: 1.04 }}
      h="30vh"
      rounded="lg"
      shadow="lg"
      mb="7vh"
      ml="2.8vh"
      bg={useColorModeValue("white", "gray.800")}
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
      >
        {product.commodity_name}
      </Button>
      <Image
        mx="auto"
        width="90%"
        h="150px"
        borderRadius="10px"
        objectFit="cover"
        src={product.commodity_main_image}
      />

      <VStack p={3} spacing="0.5vh">
        <Text color="red" fontWeight="bold">
          {product.price}
        </Text>
        <Button
          px={5}
          width="80%"
          onClick={() => navigate("/cart")}
          rightIcon={
            <CartIcon color="#555" handleOpenCart={() => navigate("/cart")} />
          }
          textTransform="uppercase"
        >
          Add to cart
        </Button>
      </VStack>
    </MotionBox>
  );
};

export default ProductCard;
