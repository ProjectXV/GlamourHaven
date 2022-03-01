import React from 'react';

import {
  Box,
  HStack,
  Text,
  SimpleGrid,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Header from "../../../components/PageSections/Header";
import ImageCarousel from "../../../components/ImageCarousel/ImageCarousel";
import axios from "axios";
import { useParams } from "react-router-dom";
import GeneralLoading from "../../../components/GeneralLoading";

const AdminServiceDetails = () => {
  const { service_id } = useParams();
  const [adminServiceDetails, setAdminServiceDetails] = useState({});
  const [loading, setLoading] = useState(false);

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
        `https://glamourhaven.herokuapp.com/glamourhaven/services/${service_id}`,
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
  const SliderData = [];
  SliderData.push({ image: adminServiceDetails.service_main_image });
  SliderData.push({ image: adminServiceDetails.service_extra_image1 });
  SliderData.push({ image: adminServiceDetails.service_extra_image2 });

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
              {adminServiceDetails.service_title}
            </Text>
            <HStack alignItems="center">
            <Text fontSize="2em" color="bold">Service Cost</Text>
            <Text fontSize="2em" color="red">
              Ksh.{adminServiceDetails.service_cost}
              </Text>
            </HStack>
            <Text
              align="left"
              fontSize="1em"
              textTransform="uppercase"
              color="neutral.200"
              mt="1vh"
            >
              Service Description
            </Text>
            <Text align="left">{adminServiceDetails.service_title}</Text>
          </Box>
        </SimpleGrid>
      )}
    </Box>
  );
};

export default AdminServiceDetails;

