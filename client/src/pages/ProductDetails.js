import {
  Box,
  HStack,
  Text,
  SimpleGrid,
  Button,
  Icon,
  Stack,
  Tag,
} from "@chakra-ui/react";
import React from "react";
import Header from "../components/PageSections/Header";
import { CheckCircleIcon } from "@chakra-ui/icons";
import ImageCarousel from "../components/ImageCarousel/ImageCarousel";

const ProductDetails = () => {
  return (
    <Box>
      <Header />
      <SimpleGrid px="5vw" columns={[null, null, null, 2]} height="88vh">
        <ImageCarousel />
        <Box my="auto" mx="auto">
          <Text align="left" fontSize="3em">
            A Custom bottle for you- and no one else's
          </Text>
          <HStack alignItems="center">
            <Text fontSize="2em" color="red">
              $49.0
            </Text>
            <Tag colorScheme="messenger">in Stock</Tag>
          </HStack>
          <Text
            align="left"
            fontSize="1em"
            textTransform="uppercase"
            color="neutral.200"
            mt="1vh"
          >
            Item Description
          </Text>
          <Text align="left">
            Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem
            ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum v
            Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum v Lorem ipsum Lorem
            ipsum Lorem ipsum Lorem ipsum Lorem ipsum v Lorem ipsum v Lorem
            ipsum
          </Text>
          <HStack alignItems="left">
            <Button my="3vh" width="15vw" bg="brand.300" color="#fff">
              Add To Cart
            </Button>
          </HStack>
          <Stack spacing="1vh">
            <HStack>
              <Icon as={CheckCircleIcon} />
              <Text>Lorem ipsum lorem ipsum</Text>
            </HStack>
            <HStack>
              <Icon as={CheckCircleIcon} />
              <Text>Lorem ipsum lorem ipsum</Text>
            </HStack>
            <HStack>
              <Icon as={CheckCircleIcon} />
              <Text>Lorem ipsum lorem ipsum</Text>
            </HStack>
            <HStack>
              <Icon as={CheckCircleIcon} />
              <Text>Lorem ipsum lorem ipsum</Text>
            </HStack>
            <HStack>
              <Icon as={CheckCircleIcon} />
              <Text>Lorem ipsum lorem ipsum</Text>
            </HStack>
          </Stack>
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default ProductDetails;
