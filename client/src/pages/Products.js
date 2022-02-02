import { Box, Center, Stack, Text } from "@chakra-ui/react";
import React from "react";
import Header from "../components/Header";

const Products = () => {
  return (
    <Box>
      <Header />
      <Center>
        <Stack>
          <Text fontSize="100px">Products</Text>
          <Text fontSize="150px">Coming soon</Text>
        </Stack>
      </Center>
    </Box>
  );
};

export default Products;
