import React from 'react'
import Sidebar from '../../../components/Sidebar';
import { Box,Text, Divider,Input, VStack,HStack, Stack, Button } from '@chakra-ui/react';

const AdminAddStaff = () => {
  return <>
  <HStack>
<Sidebar/>
<Box marginLeft='190px'  pb='50px'  bg='#EFF9F8' backgroundSize="auto">
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
  <Box align='left'>
  <select>
  <option value="Pedicure" >👣 Pedicure👣 </option>
  <option value="Manicure">💅Manicure💅</option>
  <option selected value="null">🔎 Choose Specialization</option>
  <option value="Treatment">💈Treatment💈</option>
  <option value="Wash and Blowdry">💈Wash and Blowdry💈</option>
  <option value="Haircut">✂Haircut✂</option>
  <option value="Massage">💆🏽‍♂️Massage💆🏽</option>
  <option value="Waxing">💈Waxing💈</option>
</select>
</Box>
<Box align='right' pt='40px'>
<HStack spacing={5} direction='row' alignContent='left' alignSelf='left' align align='right' pt='40'>
  
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
  </>;
};

export default AdminAddStaff;
