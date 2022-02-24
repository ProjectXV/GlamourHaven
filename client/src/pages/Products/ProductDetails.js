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
import React, { useEffect, useState } from "react";
import Header from "../../components/PageSections/Header";
import { CheckCircleIcon } from "@chakra-ui/icons";
import ImageCarousel from "../../components/ImageCarousel/ImageCarousel";
import axios from "axios";
import { useParams } from "react-router-dom";
import GeneralLoading from "../../components/GeneralLoading";

const ProductDetails = () => {
  const { product_id } = useParams();
  const [productDetails, setProductDetails] = useState({});
  const [loading, setLoading] = useState(false);

  const fetchProductDetails = async () => {
    const token = localStorage.getItem("userInfo")
      ? JSON.parse(localStorage.getItem("userInfo")).token
      : null;

    const config = {
      headers: {
        Authorization: `Token ${token}`,
      },
    };

    try {
      setLoading(true);
      const response = await axios.get(
        `https://glamourhaven.herokuapp.com/glamourhaven/products/${product_id}`,
        config
      );
      if (response?.data) {
        setLoading(false);

        // Success 🎉
        console.log("response", response);
        setProductDetails(response.data);
        localStorage.setItem("commoditydetails", JSON.stringify(response.data));
      }
    } catch (error) {
      setLoading(false);
      // Error 😨
      if (error.response) {
        /*
         * The request was made and the server responded with a
         * status code that falls out of the range of 2xx
         */
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        /*
         * The request was made but no response was received, `error.request`
         * is an instance of XMLHttpRequest in the browser and an instance
         * of http.ClientRequest in Node.js
         */
        console.log(error.request);
      } else {
        // Something happened in setting up the request and triggered an Error
        console.log("Error", error.message);
      }
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProductDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const SliderData = [];
  SliderData.push({ image: productDetails.commodity_main_image });
  SliderData.push({ image: productDetails.commodity_extra_image1 });
  SliderData.push({ image: productDetails.commodity_extra_image2 });

  console.log(SliderData);
  return (
    <Box>
      <Header />
      {loading ? (
        <GeneralLoading />
      ) : (
        <SimpleGrid px="5vw" columns={[null, null, null, 2]} height="88vh">
          <ImageCarousel SliderData={SliderData} />
          <Box my="auto" mx="auto">
            <Text align="left" fontSize="3em">
              {productDetails.commodity_name}
            </Text>
            <HStack alignItems="center">
              <Text fontSize="2em" color="red">
                Ksh.{productDetails.price}
              </Text>
              {productDetails.number_in_stock > 0 ? (
                <Tag colorScheme="messenger">In Stock</Tag>
              ) : null}
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
            <Text align="left">{productDetails.commodity_name}</Text>
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
      )}
    </Box>
  );
};

export default ProductDetails;
