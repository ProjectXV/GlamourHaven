import {
  Box,
  Button,
  Center,
  HStack,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
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
          <HStack>
            {CategoryList?.map((category) => {
              return (
                <Button borderRadius="50px" key={category.id}>
                  {category.label}
                </Button>
              );
            })}
          </HStack>
        </Center>
        <SimpleGrid mt="6vh" columns={[2, 2, 3, 4, 5, 6]} spacing="auto">
          {ProductList.map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })}
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default Products;
