import React from 'react';
import { Box,HStack,Text, Textarea, VStack, Button, Divider } from '@chakra-ui/react';
import {
  FormControl,
  FormLabel,
  Input
} from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../../../utils/api";

const buttonStyles = {
  padding: "10px",
  borderRadius: "50px",
  borderWidth: "1px",
  borderColor: "brand.300",
  borderStyle: "solid",
  width: "200px",
  height: "40px",
};
const AdminAddService = () => {
  const navigate = useNavigate();

  const [servicetitle, setserviceTitle] = useState("");
  const [servicedescription, setserviceDescription] = useState("");
  const [servicetime, setServiceTime] = useState(null);
  const [servicecost, setServiceCost] = useState(null);
  const [imagemain, setImageMain] = useState(null);
  const [extraimage1, setExtraImage1] = useState(null);
  const [extraimage2, setExtraImage2] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let form_data = new FormData();
    form_data.append("service_title", servicetitle);
    form_data.append("service_description", servicedescription);
    form_data.append("service_cost", servicecost);
    form_data.append("service_estimate_time",servicetime);
    form_data.append("service_main_image", imagemain, imagemain?.name);
    form_data.append("service_extra_image1", extraimage1, extraimage1?.name);
    form_data.append("service_extra_image2", extraimage2, extraimage2?.name);

    console.log(form_data);

    try {
      const { data } = await API.createService(form_data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
    // navigate("/admin/inventory");
  };

  const handleCancel = () => {
    navigate(`/admin/inventory`);
  };
  return (
    <Box>
      <Box textAlign="left">
        <Box textAlign="left">
          <VStack textAlign="left">
            <Text textAlign="left" fontWeight="bold">
              Add New Service
            </Text>
            <Text textAlign="left">
              With all of the styling tool options available in today's market{" "}
            </Text>
            <Divider orientation="horizontal" />
          </VStack>
        </Box>
        <Box>
          <Text fontWeight="bold">Service Information</Text>
          <Text>
            With all of the styling tool options available in today's market
          </Text>
        </Box>
      </Box>
      <Box>
        <HStack>
          <VStack>
            <FormControl id="service_title" isRequired>
              <FormLabel fontWeight="bold">Service Title</FormLabel>
              <Input
                onChange={(e) => setserviceTitle(e.target.value)}
                variant="filled"
                width="600px"
                bg="white"
              />
            </FormControl>
            <FormControl id="service_time" isRequired>
              <FormLabel fontWeight="bold">Service Estimate Time</FormLabel>
              <Input
                id="service_name"
                onChange={(e) => setServiceTime(e.target.value)}
                placeholder="Enter the estimated service time"
                bgColor="white"
              />
            </FormControl>
            <FormControl id="service_cost" isRequired>
              <FormLabel fontWeight="bold">Service Cost</FormLabel>
              <Input
                id="service_name"
                onChange={(e) => setServiceCost(e.target.value)}
                placeholder="Enter the estimated cost"
                bgColor="white"
              />
            </FormControl>
          </VStack>
          <VStack>
            <FormControl id="dervice_description" isRequired>
              <FormLabel fontWeight="bold">Service Description</FormLabel>
              <Textarea
                onChange={(e) => setserviceDescription(e.target.value)}
                variant="filled"
                width="500px"
                height="220px"
                bg="white"
              />
            </FormControl>
          </VStack>
        </HStack>
      </Box>
      <Box textAlign="left" mt="30px">
        <Text fontWeight="bold">Add Images</Text>
        <HStack>
          <FormControl id="unit" isRequired>
            <FormLabel>Service main image</FormLabel>
            <input
              type="file"
              accept="image/png, image/jpeg"
              onChange={(e) => {
                setImageMain(e.target.files[0]);
              }}
              width="100%"
              style={{
                "border-width": "2px",
                padding: "5px",
                "border-radius": "5px",
              }}
            />
          </FormControl>
          <FormControl id="unit" isRequired>
            <FormLabel>Service extra image1</FormLabel>
            <input
              type="file"
              accept="image/png, image/jpeg"
              onChange={(e) => {
                setExtraImage1(e.target.files[0]);
              }}
              width="100%"
              style={{
                "border-width": "2px",
                padding: "5px",
                "border-radius": "5px",
              }}
            />
          </FormControl>
          <FormControl id="unit" isRequired>
            <FormLabel>Service extra image2</FormLabel>
            <input
              type="file"
              accept="image/png, image/jpeg"
              onChange={(e) => {
                setExtraImage2(e.target.files[0]);
              }}
              width="100%"
              style={{
                "border-width": "2px",
                padding: "5px",
                "border-radius": "5px",
              }}
            />
          </FormControl>
        </HStack>
      </Box>
      <HStack alignItems="right" mt="20px">
        <Button
          {...buttonStyles}
          onClick={handleCancel}
          background="#ffffff"
          color="brand.300"
          colorScheme="teal"
          variant="outline"
        >
          Cancel
        </Button>
        <Button
          {...buttonStyles}
          background="brand.300"
          variant="solid"
          color="white"
          onClick={handleSubmit}
        >
          Add New Service
        </Button>
      </HStack>
    </Box>
  );
}

export default AdminAddService;
