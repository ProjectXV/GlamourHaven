import React, { useState } from "react";
import { Image, Box, VStack, chakra, Flex } from "@chakra-ui/react";
import fallbackSrc from "../../assets/k.jpg";
import Arrow from "../ImageCarousel/Arrow";
// import ServiceDetails from "../ServiceDetails";

const ServiceCard = ({ service }) => {
  // const [hover, setHover] = useState(false);
  // const handleShow = () => {
  //   setHover(!hover);
  // };
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
      <Box
        h="250px"
        mb="30px"
        shadow="lg"
        w="230px"
        borderRadius={10}
        overflow="hidden"
      >
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
                fallbackSrc={fallbackSrc}
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
            Duration: {service.service_estimate_time}
          </chakra.h1>
          <chakra.h5 textAlign="left" noOfLines="3">
            {service.service_description}
          </chakra.h5>
        </VStack>
      </Box>
      {/* {hover && <ServiceDetails />} */}
    </>
  );
};

export default ServiceCard;
