import React from "react";
import {
  chakra,
  Box,
  Image,
  Flex,
  Icon,
  useColorModeValue,
  HStack,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Text,
  Stack,
} from "@chakra-ui/react";
import OrderList from "../../data/OrderList.json";
import AppointmentCard from "../../components/Cards/AppointmentCard";
import AppointmentData from "../../data/AppointmentData.json";
import { MdHeadset, MdEmail, MdLocationOn } from "react-icons/md";
import { BsFillBriefcaseFill } from "react-icons/bs";
import Table from "../../components/Table/Table";

const UserProfile = () => {
  const customerTableHead = [
    "id",
    "Amount",
    "Client",
    "Date Placed",
    "Date Delivered",
  ];

  const renderHead = (item, index) => <th key={index}>{item}</th>;

  const renderBody = (item, index) => (
    <tr key={index}>
      <td>{item.transaction_id}</td>
      <td>{item.order_value}</td>
      <td>{item.placer}</td>
      <td>{item.date_placed}</td>
      <td>{item.date_delivered}</td>
    </tr>
  );
  return (
    <HStack spacing={10} alignItems="initial">
      <Box
        w="xs"
        bg={useColorModeValue("white", "gray.800")}
        shadow="lg"
        rounded="lg"
        overflow="hidden"
        h="100%"
      >
        <Image
          w="full"
          h={56}
          fit="cover"
          objectPosition="center"
          src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
          alt="avatar"
        />

        <Flex alignItems="center" px={6} py={3} bg="gray.900">
          <Icon as={MdHeadset} h={6} w={6} color="white" />

          <chakra.h1 mx={3} color="white" fontWeight="bold" fontSize="lg">
            Focusing
          </chakra.h1>
        </Flex>

        <Box py={4} px={6}>
          <chakra.h1
            fontSize="xl"
            fontWeight="bold"
            color={useColorModeValue("gray.800", "white")}
            textAlign={"left"}
          >
            Patterson johnson
          </chakra.h1>

          <Flex
            alignItems="center"
            mt={4}
            color={useColorModeValue("gray.700", "gray.200")}
          >
            <Icon as={BsFillBriefcaseFill} h={6} w={6} mr={2} />

            <chakra.h1 px={2} fontSize="sm">
              Choc UI
            </chakra.h1>
          </Flex>

          <Flex
            alignItems="center"
            mt={4}
            color={useColorModeValue("gray.700", "gray.200")}
          >
            <Icon as={MdLocationOn} h={6} w={6} mr={2} />

            <chakra.h1 px={2} fontSize="sm">
              California
            </chakra.h1>
          </Flex>
          <Flex
            alignItems="center"
            mt={4}
            color={useColorModeValue("gray.700", "gray.200")}
          >
            <Icon as={MdEmail} h={6} w={6} mr={2} />

            <chakra.h1 px={2} fontSize="sm">
              patterson@example.com
            </chakra.h1>
          </Flex>
        </Box>
      </Box>
      <Tabs variant="soft-rounded">
        <TabList>
          <Tab>Orders</Tab>
          <Tab>Appointments</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Box h="80vh">
              <Box bg="white" borderRadius="5px" height="100%" w="100%" p={5}>
                <Table
                  limit="6"
                  headData={customerTableHead}
                  renderHead={(item, index) => renderHead(item, index)}
                  bodyData={OrderList}
                  renderBody={(item, index) => renderBody(item, index)}
                />
              </Box>
            </Box>
          </TabPanel>
          <TabPanel>
            {AppointmentData && AppointmentData.length !== 0 ? (
              <Stack w="100%">
                {AppointmentData.filter(
                  (appointment) => appointment.status === "pending"
                ).map((appointment) => {
                  return (
                    <AppointmentCard
                      appointment={appointment}
                      key={appointment.id}
                    />
                  );
                })}
              </Stack>
            ) : (
              <Text textAlign="left" p={10}>
                Create an appointment. Any appointment you create will appear
                here
              </Text>
            )}
          </TabPanel>
        </TabPanels>
      </Tabs>
    </HStack>
  );
};

export default UserProfile;
