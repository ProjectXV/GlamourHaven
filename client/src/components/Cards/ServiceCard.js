import React, { useState } from "react";
import { Image, Box, VStack, chakra, Flex,useColorModeValue,Tooltip } from "@chakra-ui/react";
import Arrow from "../ImageCarousel/Arrow";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

// import ServiceDetails from "../ServiceDetails";

const ServiceCard = ({ service }) => {
  // const [hover, setHover] = useState(false);
  // const handleShow = () => {
  //   setHover(!hover);
  // };
  const MotionBox = motion(Box);
  const navigate = useNavigate();

  const slides = [
    { image: service.service_main_image },
    { image: service.service_extra_image1 },
    { image: service.service_extra_image2 },
  ];
  const [currentSlide, setCurrentSlide] = useState(0);
  const slidesCount = slides.length;

  const prevSlide = () => {
    setCurrentSlide((s) => (s === 0 ? slidesCount - 1 : s - 1));
  };
  const nextSlide = () => {
    setCurrentSlide((s) => (s === slidesCount - 1 ? 0 : s + 1));
  };

  const carouselStyle = {
    transition: "all .5s",
    ml: `-${currentSlide * 100}%`,
  };

  return (
    <>
      <MotionBox
        width="200px"
        mx="auto"
        bg={useColorModeValue("white", "gray.800")}
        shadow="lg"
        rounded="lg"
        mb="7vh"
        whileHover={{ scale: 1.04 }}
        overflow="hidden"
      >
      <Tooltip hasArrow label="Click to view more details" bg="brand.300">
          <Box
            px={4}
            py={0.5}
            onClick={() => navigate(`service-details/${service.id}`)}
            _hover={{ cursor: "pointer", color: "brand.300" }}
          >
            <chakra.h1
              color={useColorModeValue("gray.800", "white")}
              fontWeight="bold"
              fontSize="1l"
              textTransform="uppercase"
            >
              {service.service_title}
            </chakra.h1>
          </Box>
        </Tooltip>
        {/* <Flex borderRadius="5px" w="full" overflow="hidden"> */}
        <Flex pos="relative" h="110px" w="full" {...carouselStyle}>
          <Arrow direction="left" handleClick={prevSlide} />
          {slides.map((slide, sid) => (
            <Box key={`slide-${sid}`} flex="none" boxSize="full">
              <Image
                h="110px"
                w="full"
                borderRadiusTop={10}
                fit="cover"
                src={slide.image}
                backgroundSize="cover"
                boxSize="full"
              />
            </Box>
          ))}
          <Arrow direction="right" handleClick={nextSlide} />
        </Flex>
        {/* </Flex> */}

        <VStack spacing={0} alignItems="left" bg="white" p="3" h="100%">
          <chakra.h1
            color="dark"
            fontWeight="bold"
            fontSize="lg"
            textAlign="left"
          >
            {service.service_title}
          </chakra.h1>
          <chakra.h1 color="gray.400" textAlign="left" fontSize="14px">
            Duration: {service.service_estimate_time} Minutes
          </chakra.h1>
          <chakra.h5 textAlign="left" noOfLines="3">
            {service.service_description}
          </chakra.h5>
        </VStack>
      </MotionBox>
      {/* {hover && <ServiceDetails />} */}
    </>
  );
};

export default ServiceCard;
