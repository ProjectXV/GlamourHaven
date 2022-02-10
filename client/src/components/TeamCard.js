import { Box, VStack, Image, chakra } from "@chakra-ui/react";
import React from "react";
const TeamCard = ({ team }) => {
  return (
    <>
      <Box width="250px" mx="auto" mb="7vh">
        <Image
          h={80}
          w="full"
          fit="cover"
          borderRadius="25px"
          mt={2}
          mb={2}
          src={team.commodity_main_image}
          alt={team.name}
        />
        <VStack>
          <chakra.h1
            textAlign="center"
            color="dark"
            fontWeight="bold"
            fontSize="lg"
          >
            {team.name}
          </chakra.h1>
          <chakra.h1 color="#70A7A5" fontSize="lg">
            {team.speciality}
          </chakra.h1>
        </VStack>
      </Box>
    </>
  );
};

export default TeamCard;
