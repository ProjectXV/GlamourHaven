import { AddIcon } from "@chakra-ui/icons";
import {
  Box,
  // Divider,
  HStack,
  Icon,
  Spacer,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  Flex,
} from "@chakra-ui/react";
import React from "react";
import AppointmentCard from "../components/Cards/AppointmentCard";
import AppointmentData from "../data/AppointmentData.json";

const Appointments = () => {
  return (
    <Box>
      <HStack>
        <Text fontSize="1.4em" textAlign="left">
          Appointments
        </Text>
        <Spacer />
        <HStack>
          <Text>Add</Text>
          <Icon as={AddIcon} />
        </HStack>
      </HStack>

      <Flex>
        <Box width="50%">
          {/* <Divider/> */}
          <Tabs h="100%">
            <TabList>
              <Tab>All</Tab>
              <Tab>Pending</Tab>
              <Tab>Confirmed</Tab>
              <Tab>Cancelled</Tab>
              <Tab>Postponed</Tab>
            </TabList>
            <TabPanels>
              <TabPanel h="100%" overflowY="scroll">
                <Box overflowY="scroll">
                  {AppointmentData.map((appointment) => {
                    return (
                      <AppointmentCard
                        appointment={appointment}
                        key={appointment.id}
                      />
                    );
                  })}
                </Box>
              </TabPanel>
              <TabPanel>Pending</TabPanel>
              <TabPanel>Confirmed</TabPanel>
              <TabPanel>Cancelled</TabPanel>
              <TabPanel>Cancelled</TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
        <Box width="50%">
          <Text>Appointment Details</Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default Appointments;
