import { Box, Button, Center, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import Header from "../components/Header";
import ProductCard from "../components/ProductCard";
import ProductList from "../data/ProductList";
import { CategoryList } from "../data/CategoryList";

const Products = () => {
  return (
    <Box overflowX="hidden">
      <Header />
      <Box px="5vw">
        <Text fontSize="50px" py={5}>
          Shop
        </Text>

        <Center>
          <SimpleGrid columns={[4, 8]} spacing={2}>
            {CategoryList?.map((category) => {
              return (
                <Button
                  borderRadius={["10px", "50px"]}
                  // mx="1vw"
                  width="100%"
                  key={category.id}
                >
                  {category.label}
                </Button>
              );
            })}
          </SimpleGrid>
        </Center>
        <SimpleGrid mt="6vh" columns={[1, 2, 3, 4, 5, 6]} spacing="auto">
          {ProductList.map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })}
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default Products;
