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

<Box>
<Text  fontFamily= 'Work Sans' fontSize='30px'
verticalAlign='top'
  lineHeight='100px'
   align='left'
   borderBottomColor='gray.200'
   fontWeight="bold">
     Add New Staff Member
     </Text>
<Divider  bg="#EBEBEB" w="inherit" />
<Text fontWeight="bold" paddingTop="5" paddingBottom="5" fontFamily= 'Work Sans' fontSize='30px'align='left' verticalAlign='top' lineHeight='29px'lineHeight='100%'>
    Personal Information  
</Text>
<HStack>
<HStack>
<VStack pr='300px'>
<Text fontSize="16px" fontFamily="Inter">First Name</Text>
  <Input width='581' fontFamily="Inter" fontSize="14px" bg="white"placeholder='Enter you first name' size='sm' />
  <Text pt='15px'fontSize="16px" fontFamily="Inter">National ID Number</Text>
  <Input fontFamily="Inter" fontSize="14px" bg="white"placeholder='Enter national id number'size='sm'></Input>
</VStack>
</HStack>
<HStack>
<VStack pr='300px'>
  <Text fontSize="16px" fontFamily="Inter">Last Name</Text>
  <Input  fontFamily="Inter" fontSize="14px" bg="white"placeholder='Enter your last name'size='sm'></Input>
  <Text pt='17px'fontSize="16px" fontFamily="Inter">Phone Number</Text>
  <Input fontFamily="Inter" fontSize="14px" bg="white"placeholder='Enter phone number'size='sm'></Input>
</VStack>
</HStack>
</HStack>
        <Text align="left"  paddingTop="5"  paddingBottom="5" fontSize="20px" fontFamily="Work Sans">Specialization</Text>
  <Box align='left' pb='90px'>
  <select>
  <option value="pedicure" >👣 Pedicure👣 </option>
  <option value="manicure">💅Manicure💅</option>
  <option selected value="null"><Text fontFamily="Inter" fontSize="14px">🔎Choose Specialization</Text> </option>
  <option value="treatment">💈Treatment💈</option>
  <option value="wash and Blowdry">💈Wash and Blowdry💈</option>
  <option value="haircut">✂Haircut✂</option>
  <option value="massage">💆🏽‍♂️Massage💆🏽</option>
  <option value="waxing">💈Waxing💈</option>
  <option value="braiding">💈Braiding💈</option>
</select>
</Box>
<Box align='right'>
<HStack marginLeft='440' spacing={5} direction='row' alignItems='right' >
  
<Button colorScheme='teal' size='sm'>
    cancel
  </Button>
  <Button colorScheme='teal' size='sm' variant='outline'>
    Add new staff
  </Button>
  </HStack>
  </Box>
</Box>
</HStack>
  </Box>;
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
