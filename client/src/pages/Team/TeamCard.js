import { Box, VStack, Image, chakra, Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";
const TeamCard = ({ team }) => {
  const MotionBox = motion(Box);

  return (
    <>
      <MotionBox
        // maxW="xs"
        width="200px"
        mx="auto"
        shadow="lg"
        rounded="lg"
        mb="7vh"
        whileHover={{ scale: 1.04 }}
      >
        <Image
          h={48}
          w="full"
          fit="cover"
          borderRadius="25px"
          mt={2}
          mb={2}
          src={team.commodity_main_image}
          alt={team.name}
        />

        <Flex alignItems="center" justifyContent="space-between" px={4} py={2}>
          <VStack>
            <chakra.h1 color="dark" fontWeight="bold" fontSize="lg">
              {team.name}
            </chakra.h1>
            <chakra.h1 color="#70A7A5" fontWeight="bold" fontSize="lg">
              {team.speciality}
            </chakra.h1>
          </VStack>
        </Flex>
      </MotionBox>
    </>
  );
};

export default TeamCard;
