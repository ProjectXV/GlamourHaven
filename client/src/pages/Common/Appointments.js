import { AddIcon } from "@chakra-ui/icons";
import {
  Box,
  Divider,
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
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import AppointmentCard from "../../components/Cards/AppointmentCard";
import { AppointmentState } from "../../context";
import ReservationDrawer from "../../components/ReservationDrawer";

const AppointmentError = () => {
  return (
    <Text textAlign="left" p={10}>
      Create an appointment. Any appointment you create will appear here
    </Text>
  );
};

const Appointments = () => {
  const { appointments } = AppointmentState();
  const{isOpen,onClose,onOpen}=useDisclosure()
  return (
   <> <Box h="100vh">
      <HStack>
        <Text fontSize="1.4em" textAlign="left">
          Appointments
        </Text>
        <Spacer />
        <HStack>
          <Button onClick={()=>onOpen()}>Add</Button>
          <Icon as={AddIcon} />
        </HStack>
      </HStack>
      <Divider my={2} />
      <Flex>
        <Box width="100%" h="100vh">
          <Tabs
            h="100vh"
            variant="line"
            colorScheme="green"
            isLazy
            borderColor="transparent"
          >
            <TabList>
              <Tab>All</Tab>
              <Tab>Pending</Tab>
              <Tab>Confirmed</Tab>
              <Tab>Cancelled</Tab>
              <Tab>Postponed</Tab>
            </TabList>
            <TabPanels h="100vh">
              <TabPanel overflowY="scroll" h="inherit">
                {appointments && appointments.length !== 0 ? (
                  <div>
                    {appointments.map((appointment) => {
                      return (
                        <AppointmentCard
                          appointment={appointment}
                          key={appointment.id}
                        />
                      );
                    })}
                  </div>
                ) : (
                  <AppointmentError />
                )}
              </TabPanel>
              <TabPanel overflowY="scroll" h="inherit">
                {appointments && appointments.length !== 0 ? (
                  <div>
                    {appointments
                      .filter((appointment) => appointment.status === "pending")
                      .map((appointment) => {
                        return (
                          <AppointmentCard
                            appointment={appointment}
                            key={appointment.id}
                          />
                        );
                      })}
                  </div>
                ) : (
                  <AppointmentError />
                )}
              </TabPanel>
              <TabPanel overflowY="scroll" h="inherit">
                {appointments && appointments.length !== 0 ? (
                  <div>
                    {appointments
                      .filter(
                        (appointment) => appointment.status === "confirmed"
                      )
                      .map((appointment) => {
                        return (
                          <AppointmentCard
                            appointment={appointment}
                            key={appointment.id}
                          />
                        );
                      })}
                  </div>
                ) : (
                  <AppointmentError />
                )}
              </TabPanel>
              <TabPanel overflowY="scroll" h="inherit">
                {appointments && appointments.length !== 0 ? (
                  <div>
                    {appointments
                      .filter(
                        (appointment) => appointment.status === "cancelled"
                      )
                      .map((appointment) => {
                        return (
                          <AppointmentCard
                            appointment={appointment}
                            key={appointment.id}
                          />
                        );
                      })}
                  </div>
                ) : (
                  <AppointmentError />
                )}
              </TabPanel>
              <TabPanel overflowY="scroll" h="inherit">
                {appointments && appointments.length !== 0 ? (
                  <div>
                    {appointments
                      .filter(
                        (appointment) => appointment.status === "postponed"
                      )
                      .map((appointment) => {
                        return (
                          <AppointmentCard
                            appointment={appointment}
                            key={appointment.id}
                          />
                        );
                      })}
                  </div>
                ) : (
                  <AppointmentError />
                )}
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Flex>
    </Box>
   <ReservationDrawer
   isOpen={isOpen}
   onClose={onClose}
   
   
   />
    </>
  );
};

export default Appointments;
