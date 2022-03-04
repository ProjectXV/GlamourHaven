
import React,{useEffect, useState} from 'react';
import {Select,Box,ButtonGroup,PopoverTrigger,Popover,PopoverContent,PopoverFooter,PopoverHeader,PopoverArrow,PopoverBody,PopoverCloseButton,Text, WrapItem, Avatar, Drawer, Button, DrawerOverlay, DrawerHeader, DrawerFooter, DrawerBody, DrawerCloseButton,
   DrawerContent, useDisclosure, HStack, VStack} from '@chakra-ui/react'
import { CalendarIcon } from '@chakra-ui/icons'
import Date from './Date'
import Timestamp from './Timestamp'
import API from '../utils/api'




function ReservationDrawer() {
const [loading,setLoading] = useState(false)
const [services, setServices] = useState([])
const [staff,setStaff]=useState([])




  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  const fetchStaff = async () => {

    try {
      setLoading(true);
      const response = await API.getStaff()
      if (response.status===200) {
        setLoading(false);

        // Success 🎉
        console.log("response", response);
        setStaff(response.data);
      }
    } catch (error) {
      // Error 😨
      if (error.response) {
        /*
         * The request was made and the server responded with a
         * status code that falls out of the range of 2xx
         */
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        /*
         * The request was made but no response was received, `error.request`
         * is an instance of XMLHttpRequest in the browser and an instance
         * of http.ClientRequest in Node.js
         */
        console.log(error.request);
      } else {
        // Something happened in setting up the request and triggered an Error
        console.log("Error", error.message);
      }
      console.log(error);
    }
  };

  useEffect(() => {
    fetchStaff();
  }, []);


  const fetchServices = async () => {

    try {
      setLoading(true);
      const response = await API.getServices()
      if (response.status===200) {
        setLoading(false);

        // Success 🎉
        console.log("response", response);
        setServices(response.data);
      }
    } catch (error) {
      // Error 😨
      if (error.response) {
        /*
         * The request was made and the server responded with a
         * status code that falls out of the range of 2xx
         */
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        /*
         * The request was made but no response was received, `error.request`
         * is an instance of XMLHttpRequest in the browser and an instance
         * of http.ClientRequest in Node.js
         */
        console.log(error.request);
      } else {
        // Something happened in setting up the request and triggered an Error
        console.log("Error", error.message);
      }
      console.log(error);
    }
  };

  useEffect(() => {
    fetchServices();
  }, []);
  return (
    <>
    
      <Button ref={btnRef} colorScheme='teal' onClick={onOpen}>
        Book Now
      </Button>
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
        size='sm'
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader fontSize='17'>Fill Appointment Details</DrawerHeader>

          <DrawerBody>
          <Select placeholder='Select service'>
  {
    services?.map((service)=>{ 
      return(
    <option value='option1'>
   {service.service_title}
</option>)})
  }
  
</Select>

<Text fontSize='18' pt='5'>Would you like to book your appointment with a specific staff member?[optional]</Text>

<Select placeholder='Select staff [optional]'>
  {
    staff?.map((staff)=>{ 
      return(
    <option value='option1'>
            {staff.first_name}
    </option>)})
  }
  
</Select>




<Text fontWeight='bold' color='gray.700'mt='20px' mb='20px' bg='gray'
 pt='12px' pb='10px'>PICK A DATE <CalendarIcon/></Text>
<Select placeholder='Select date'onClick={console.log()}>
  <option value='date1'>Saturday,March 6,2022</option>
  <option value='date2'>Sunday,March 7,2022</option>
  <option value='date3'>Monday,March 8,2022</option>
  <option value='date4'>Tuesday,March 9,2022</option>
  <option value='date5'>Wednesday,March 10,2022</option>
  <option value='date6'>Thursday,March 11,2022</option>
  <option value='date7'>Friday,March 12,2022</option>
  <option value='date8'>Saturday,March 13,2022</option> 
</Select>

<Text fontWeight='bold' color='gray.700'mt='20px' mb='20px' bg='gray'
 pt='12px' pb='10px'>PICK A STARTING TIME <CalendarIcon/></Text>

<VStack>
<HStack spacing={4} direction='row' align='left'>
  <Button  stime='8:00am' etime='8:30am' id='btn1' value='8:00am' colorScheme='teal' size='xs'>
    8:00am
  </Button>
  <Button  stime='11:00am' etime='11:30am' value='11:00am'  colorScheme='teal' size='xs'>
    11:00am
  </Button>
  <Button  stime='2:00pm' etime='2:30pm' value='2:00pm' colorScheme='teal' size='xs'>
    2:00pm
  </Button>
  <Button  stime='5:00pm' etime='5:30pm' value='5:00pm'   colorScheme='teal' size='xs'>
   5:00pm
  </Button>
</HStack>

<HStack spacing={4} direction='row' align='center'>
  <Button stime='8:30am' etime='9:00am'value='8:30am'colorScheme='teal' size='xs'>
    8:30am
  </Button>
  <Button stime='11:30am' etime='12:00pm'value='11:30am'colorScheme='teal' size='xs'>
    11:30am
  </Button>
  <Button stime='2:30pm' etime='3:00pm'value='2:30pm'colorScheme='teal' size='xs'>
    2:30pm
  </Button>
  <Button stime='5:30pm' etime='6:00pm'value='5:30pm'colorScheme='teal' size='xs'>
   5:30pm
  </Button>
</HStack>
<HStack spacing={4} direction='row' align='center'>
  <Button stime='9:00am' etime='10:30am' value='9:00am'colorScheme='teal' size='xs'>
    9:00am
  </Button>
  <Button stime='12:00pm' etime='1:30pm'value='12:00pm'colorScheme='teal' size='xs'>
    12:00pm
  </Button>
  <Button stime='3:00pm' etime='3:30pm'value='3:00pm'colorScheme='teal' size='xs'>
    3:00pm
  </Button>
  <Button stime='6:00pm' etime='6:30pm'value=' 6:00pm'colorScheme='teal' size='xs'>
   6:00pm
  </Button>
</HStack>

<HStack spacing={4} direction='row' align='center'>
  <Button stime='9:30am' etime='10:00am' value='9:30am'colorScheme='teal' size='xs'>
    9:30am
  </Button>
  <Button stime='12:30pm' etime='1:00pm' value='12:30am' colorScheme='teal'size='xs'>
    12:30am
  </Button>
  <Button stime='3:30pm' etime='4:00pm'value=' 3:30pm'colorScheme='teal' size='xs'>
    3:30pm
  </Button>
  <Button stime='6:30pm' etime='7:00pm'value='6:30pm'colorScheme='teal' size='xs'>
    6:30pm
  </Button>
</HStack>
<HStack spacing={4} direction='row' align='center'>
  <Button stime='10:00am' etime='10:30am'value='10:00am'colorScheme='teal' size='xs'>
    10:00am
  </Button>
  <Button stime='1:00pm' etime='1:30pm'value='1:00pm'colorScheme='teal' size='xs'>
    1:00pm
  </Button>
  <Button stime='4:00pm' etime='4:30pm'value='4:00pm'colorScheme='teal' size='xs'>
    4:00pm
  </Button>
  <Button stime='7:00pm' etime='7:30am'value='7:00pm'colorScheme='teal' size='xs'>
    7:00pm
  </Button>
</HStack>

<HStack spacing={4} direction='row' align='center'>
  <Button stime='10:30am' etime='11:00am'value='10:30am'colorScheme='teal' size='xs'>
    10:30am
  </Button>
  <Button stime='1:30pm' etime='2:00pm'value='1:30pm'colorScheme='teal' size='xs'>
    1:30pm
  </Button>
  <Button stime='4:30pm' etime='5:00pm'value='4:30pm'colorScheme='teal' size='xs'>
    4:30pm
  </Button>
  <Button stime='7:30am' etime='8:00am'value='7:30pm'colorScheme='teal' size='xs'>
   7:30pm
  </Button>
</HStack>
</VStack>

<Timestamp/>
          </DrawerBody>

          <DrawerFooter>
            
            <Button width='290px' variant='outline' mr={3} onClick={onClose} >
              Cancel
            </Button>
            <Popover
      
      placement='bottom'
      closeOnBlur={false}
    >
      <PopoverTrigger>
        <Button>Add Appointment</Button>
      </PopoverTrigger>
      <PopoverContent color='white' bg='teal' borderColor='blue.800'>
        <PopoverHeader pt={4} fontWeight='bold' border='0'>
          Confirm Submission Details
        </PopoverHeader>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverBody>
      <Text>Client Name:  </Text>
<Text>Phone number: </Text>
<Text>Selected service:</Text>
<Text>Preferred staff:</Text>
<Text>Selected date:</Text>
<Text>Date of Appointment:</Text>
<Text>Time of Appointment:</Text>


        </PopoverBody>
        <PopoverFooter
          border='0'
          d='flex'
          alignItems='center'
          justifyContent='space-between'
          pb={4}
        >
          <Box fontSize='sm'>Thankyou!</Box>
          <ButtonGroup size='sm'>
            <Button variant='outline' onClick={onClose}>Cancel</Button>
            <Button colorScheme='red' >
              Confirm
            </Button>
          </ButtonGroup>
        </PopoverFooter>
      </PopoverContent>
    </Popover>
  )

        
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}
 
export default ReservationDrawer;