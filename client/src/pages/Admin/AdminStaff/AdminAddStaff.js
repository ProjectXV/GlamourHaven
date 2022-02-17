import React from "react";
import {
  Box,
  Text,
  Input,
  VStack,
  HStack,
  Button,
  Select,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";

const AdminAddStaff = () => {
  return (
    <Box overflowY="scroll" h="100%">
      <HStack>
        <Box>
          <Text fontSize="1.5em" textAlign="left" fontWeight="bold">
            Add Staff Member
          </Text>
          <Text
            fontWeight="bold"
            paddingTop="3"
            paddingBottom="3"
            fontSize="18px"
            align="left"
          >
            Personal Information
          </Text>
          <HStack spacing={40}>
            <HStack>
              <VStack spacing="4vh">
                <FormControl>
                  <FormLabel>First Name</FormLabel>
                  <Input
                    width="400px"
                    fontSize="14px"
                    bg="white"
                    placeholder="Enter you first name"
                  />
                </FormControl>

                <FormControl>
                  <FormLabel>National ID Number</FormLabel>
                  <Input
                    width="400px"
                    fontSize="14px"
                    bg="white"
                    type="number"
                    placeholder="Enter national id number"
                  />
                </FormControl>
              </VStack>
            </HStack>
            <HStack>
              <VStack spacing="4vh">
                <FormControl>
                  <FormLabel>Last Name</FormLabel>
                  <Input
                    width="400px"
                    fontSize="14px"
                    bg="white"
                    textAlign="left"
                    placeholder="Enter your last name"
                  />
                </FormControl>

                <FormControl>
                  <FormLabel>Phone Number</FormLabel>
                  <Input
                    width="400px"
                    bg="white"
                    type="number"
                    placeholder="Enter phone number"
                  />
                </FormControl>
              </VStack>
            </HStack>
          </HStack>
          <Text
            fontWeight="bold"
            paddingTop="3"
            paddingBottom="3"
            fontSize="18px"
            align="left"
          >
            Specialization
          </Text>
          <Box align="left" pb="90px">
            <Select width="400px">
              <option value="Pedicure">👣 Pedicure👣 </option>
              <option value="Manicure">💅Manicure💅</option>
              <option selected value="null">
                🔎 Choose Specialization
              </option>
              <option value="Treatment">💈Treatment💈</option>
              <option value="Wash and Blowdry">💈Wash and Blowdry💈</option>
              <option value="Haircut">✂Haircut✂</option>
              <option value="Massage">💆🏽‍♂️Massage💆🏽</option>
              <option value="Waxing">💈Waxing💈</option>
            </Select>
          </Box>
          <Box align="right">
            <HStack ml="730" spacing={5} direction="row" alignItems="right">
              <Button colorScheme="teal" variant="outline">
                Cancel
              </Button>
              <Button colorScheme="teal">Add New Staff</Button>
            </HStack>
          </Box>
        </Box>
      </HStack>
    </Box>
  );
};

export default AdminAddStaff;
