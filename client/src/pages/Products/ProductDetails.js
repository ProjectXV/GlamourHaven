import {
  Box,
  HStack,
  Text,
  SimpleGrid,
  Button,
  Icon,
  Stack,
  Tag,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { CheckCircleIcon, ChevronLeftIcon } from "@chakra-ui/icons";
import ImageCarousel from "../../components/ImageCarousel/ImageCarousel";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import GeneralLoading from "../../components/GeneralLoading";
import Toast from "../../components/Toast";
import { MdKeyboardArrowRight } from "react-icons/md";

const ProductDetails = () => {
  const navigate = useNavigate();
  const { product_id } = useParams();
  const [productDetails, setProductDetails] = useState([]);
  const [loading, setLoading] = useState(false);
  const SliderData = [];

  const fetchProductDetails = async () => {
    const token = localStorage.getItem("userInfo")
      ? JSON.parse(localStorage.getItem("userInfo")).token
      : null;

    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      setLoading(true);
      const response = await axios.get(
        `https://glamourhaven.herokuapp.com/glamourhaven/products/${product_id}/`,
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
        <Toast
          title="Error!"
          description={error.response.data}
          status="error"
        />;
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        console.log(error.request);
        <Toast title="Error!" description={error.request} status="error" />;
      } else {
        // Something happened in setting up the request and triggered an Error
        console.log("Error", error.message);
        <Toast title="Error!" description={error.messaget} status="error" />;
      }
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProductDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log(productDetails);
  productDetails?.map((product) => {
    return (
      SliderData.push({ image: product.commodity_main_image }),
      SliderData.push({ image: product.commodity_extra_image1 }),
      SliderData.push({ image: product.commodity_extra_image2 })
    );
  });
  console.log(SliderData);

  return (
    <Box bg="brand.200">
      {loading ? (
        <GeneralLoading />
      ) : (
        <>
          {productDetails.map((product) => {
            return (
              <>
                <HStack px={32} width="100%" pt={5}>
                  <Button
                    leftIcon={<ChevronLeftIcon />}
                    variant="ghost"
                    onClick={() => navigate("/products")}
                  >
                    Back to Shop
                  </Button>
                  <Breadcrumb
                    p={5}
                    fontSize="1em"
                    fontFamily="monospace"
                    textTransform="uppercase"
                    spacing="8px"
                    separator={<MdKeyboardArrowRight color="gray.500" />}
                  >
                    <BreadcrumbItem>
                      <BreadcrumbLink as={Link} to={{ pathname: `/products` }}>
                        Products
                      </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbItem>
                      <BreadcrumbLink>{product.category}</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbItem isCurrentPage>
                      <BreadcrumbLink>{product.commodity_name}</BreadcrumbLink>
                    </BreadcrumbItem>
                  </Breadcrumb>
                </HStack>

                <SimpleGrid
                  px="5vw"
                  columns={[null, null, null, 2]}
                  height="88vh"
                  w="100%"
                >
                  <ImageCarousel SliderData={SliderData} />
                  <Box my="5" mx="5">
                    <Text align="left" fontSize="3em">
                      {product.commodity_name}
                    </Text>
                    <HStack alignItems="center">
                      <Text fontSize="2em" color="red">
                        Ksh.{product.price}
                      </Text>
                      {product.number_in_stock > 0 ? (
                        <Tag colorScheme="messenger">In Stock</Tag>
                      ) : null}
                    </HStack>
                    <Text
                      align="left"
                      fontSize="1.3em"
                      textTransform="uppercase"
                      color="neutral.500"
                      mt="1vh"
                    >
                      Item Description
                    </Text>
                    <Text height="210px" align="left">
                      {product.description}
                      {"   "}
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Etiam congue in sapien ac ullamcorper. Nulla malesuada
                      magna nisl. Maecenas ultricies dapibus est, vel
                      sollicitudin orci viverra eu. Vestibulum est felis,
                      lobortis eget rutrum a, pretium et enim. Donec et lectus
                      varius leo placerat gravida. Proin congue vitae dui
                      faucibus interdum. Aliquam blandit arcu ut malesuada
                      vulputate. Phasellus quis pretium mauris. Sed velit ante,
                      rhoncus in pulvinar non, iaculis quis tellus. In varius
                      vehicula diam, in placerat magna mattis ut. Integer
                      hendrerit lorem felis, ut viverra mi finibus id.
                    </Text>
                    <HStack alignItems="left">
                      <Button my="3vh" width="15vw" bg="brand.300" color="#fff">
                        Add To Cart
                      </Button>
                    </HStack>
                    <Stack spacing="1vh" pt={6}>
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
              </>
            );
          })}
        </>
      )}
    </Box>
  );
};

export default ProductDetails;
