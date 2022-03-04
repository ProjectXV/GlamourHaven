import React from 'react';

import {
  Box,
  HStack,
  Text,
  SimpleGrid,
  Button,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import ImageCarousel from "../../../components/ImageCarousel/ImageCarousel";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import GeneralLoading from "../../../components/GeneralLoading";
import { MdKeyboardArrowRight } from "react-icons/md";

const AdminServiceDetails = () => {
  const navigate = useNavigate();
  const { service_id } = useParams();
  const [adminServiceDetails, setAdminServiceDetails] = useState([]);
  const [loading, setLoading] = useState(false);
  const SliderData = [];

  const fetchAdminServiceDetails = async () => {
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
        `https://glamourhaven.herokuapp.com/glamourhaven/services/${service_id}/`,
        config
      );
      if (response?.data) {
        setLoading(false);

        // Success 🎉
        console.log("response", response);
        setAdminServiceDetails(response.data);
        localStorage.setItem("adminservicedetails", JSON.stringify(response.data));
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
    fetchAdminServiceDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log(adminServiceDetails);

  adminServiceDetails?.map((service) => {
    
    return (
  SliderData.push({ image: service.service_main_image }),
  SliderData.push({ image: service.service_extra_image1 }),
  SliderData.push({ image: service.service_extra_image2 })
    );
    });

  console.log(SliderData);
  return (
    <Box bg="brand.200">
      {loading ? (
        <GeneralLoading />
      ) : (
        <>
          {adminServiceDetails.map((service) => {
            return (
              <>
                <HStack px={32} width="100%" pt={5}>
                  <Button
                    leftIcon={<ChevronLeftIcon />}
                    variant="ghost"
                    onClick={() => navigate("/service")}
                  >
                    Back to Services
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
                      <BreadcrumbLink as={Link} to={{ pathname: `/service` }}>
                        Services
                      </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbItem isCurrentPage>
                      <BreadcrumbLink>{service.service_title}</BreadcrumbLink>
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
                      {service.service_title}
                    </Text>
                    <HStack alignItems="center">
                      <Text fontSize="2em" color="red">
                        Ksh.{service.service_cost}
                      </Text>
                    </HStack>
                    <Text
                      align="left"
                      fontSize="1.3em"
                      textTransform="uppercase"
                      color="neutral.500"
                      mt="1vh"
                    >
                      Service Description
                    </Text>
                    <Text height="210px" align="left">
                      {service.service_description}
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

export default AdminServiceDetails;

