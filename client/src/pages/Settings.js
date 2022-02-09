import React from "react";
import TopBar from "../components/TopBar";
import { ChevronRightIcon, ChevronDownIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  HStack,
  Icon,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Stack,
} from "@chakra-ui/react";

const Settings = () => {
  return (
    <Flex>
      <Box w="15vw">
        <Text>Hello World</Text>
      </Box>
      <Box bg="#F9F9F9">
        <TopBar />
        <Box h="88.5vh">
          <HStack>
            <Text>User Settings</Text>
            <Text>
              Acount <Icon as={ChevronRightIcon} /> Jones Ferdinand{" "}
              <Icon as={ChevronDownIcon} />
            </Text>
          </HStack>
          <Stack>
            <Accordion
              defaultIndex={[0]}
              allowMultiple
              bg="white"
              mx={200}
              p={4}
            >
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box flex="1" textAlign="left">
                      Section 1 title
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box flex="1" textAlign="left">
                      Section 2 title
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </Stack>
        </Box>
      </Box>
    </Flex>
  );
};

export default Settings;
