import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import Header from "../components/Header";
import ProductCard from "../components/ProductCard";
import ProductList from "../data/ProductList";

const Products = () => {
  return (
    <Box overflowX="hidden">
      <Header />
      <Box px="5vw">
        <Text textAlign="left" fontSize="50px">
          Products
        </Text>
        <SimpleGrid columns={[2, 2, 3, 4, 5, 6]} spacing="auto">
          {ProductList.map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })}
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default Products;
