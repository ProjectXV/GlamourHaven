import { Box, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import TeamList from "../../data/TeamList";
import TeamCard from "./TeamCard";
import Header from "../../components/Header";
const Team = () => {
  return (
    <Box overflowX="hidden">
      <Header />
      <Box px="5vw">
        <SimpleGrid mt="6vh" columns={[1, 2, 3, 4, 5, 6]} spacing="auto">
          {TeamList.map((team) => {
            return <TeamCard key={team.id} team={team} />;
          })}
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default Team;
