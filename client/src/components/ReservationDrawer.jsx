
import React from 'react';
import { Text, WrapItem, Avatar, Drawer, Button, DrawerOverlay, DrawerHeader, DrawerFooter, DrawerBody, DrawerCloseButton, DrawerContent, Stack, Checkbox, CheckboxGroup,Menu, MenuButton, MenuList, useDisclosure} from '@chakra-ui/react'
import {ChevronDownIcon} from '@chakra-ui/icons'

function ReservationDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

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
          <Menu closeOnSelect={false}>
  <MenuButton as={Button} bg='#EFF9F8' fontSize='16' width='500px'>
    Select service<ChevronDownIcon/>
  </MenuButton>
  <MenuList minWidth='240px'>
     <CheckboxGroup colorScheme='teal'>
  <Stack direction='column'>
    <Checkbox value='wash'><WrapItem>
    <Avatar size='md'name='wash and dry'src='https://d2j6dbq0eux0bg.cloudfront.net/images/17412649/1095109811.jpg'/>{<Text color='teal'fontWeight={'bold'} pr='35px'>Wash and Blowdry</Text>}{<Text fontSize='2xl'>$20</Text>}
  </WrapItem></Checkbox>
    <Checkbox value='waxing'><WrapItem>
    <Avatar
      size='md'
      name='waxing'
      src='https://media.istockphoto.com/photos/waxing-keeps-it-smoother-for-longer-picture-id1077178626?b=1&k=20&m=1077178626&s=170667a&w=0&h=Hiw2ZEcrQao8f5WHhimMebOzFsjjMi4jGPnRAUYdwvA='
    />{<Text color='teal'fontWeight={'bold'} >Waxing</Text>}{<Text fontSize='2xl'pl='139px'>$20</Text>}
  </WrapItem></Checkbox>
    <Checkbox value='haircut'><WrapItem>
    <Avatar
      size='md'
      name='haircut'
      src='https://i.pinimg.com/736x/47/8a/fe/478afe19968331b4148d9468cb2d2984.jpg'
    />{<Text color='teal'fontWeight={'bold'} >Haircut</Text>}{<Text fontSize='2xl'pl='141px'>$20</Text>}
  </WrapItem></Checkbox>
    <Checkbox value='massage'><WrapItem>
    <Avatar
      size='md'
      name='massage'
      src='https://images-prod.healthline.com/hlcmsresource/images/topic_centers/1296x728_HEADER_benefits-of-hot-stone-massage.jpg'
    />{<Text color='teal' fontWeight={'bold'}>Massage</Text>}{<Text  fontSize='2xl'pl='128px'>$20</Text>}
  </WrapItem></Checkbox>
    <Checkbox value='treatment'><WrapItem>
    <Avatar
      size='md'
      name='treatment'
      src='https://cdn.cdnparenting.com/articles/2019/03/24154001/1074870002-H.jpg'
    />{<Text color='teal' fontWeight={'bold'}>Treatment</Text>}{<Text  fontSize='2xl'pl='115px'>$20</Text>}
  </WrapItem></Checkbox>
    <Checkbox value='pedicure'><WrapItem>
    <Avatar
      size='md'
      name='pedicure'
      src='https://img.nailpro.com/files/base/allured/all/image/2015/01/np.Grass-misc_-2680.png?auto=format%2Ccompress&w=700'
    />{<Text color='teal' fontWeight={'bold'}>Pedicure</Text>}{<Text  fontSize='2xl'pl='129px'>$20</Text>}
  </WrapItem></Checkbox>
    <Checkbox value='manicure'>  
    <WrapItem>
    <Avatar
      size='md'
      name='manicure'
      src='https://media.istockphoto.com/photos/beauty-delicate-hands-with-manicure-holding-flower-lily-close-up-picture-id488108548?k=20&m=488108548&s=612x612&w=0&h=fJE57ZOuAHRXyF4SbpNXhbNoISyQha3BB4jlFnv1rbY='
    />{<Text color='teal' fontWeight={'bold'}>Manicure</Text>}{<Text  fontSize='2xl'pl='122px'>$20</Text>}
  </WrapItem></Checkbox>
    <Checkbox value='braiding'><WrapItem>
    <Avatar
      size='md'
      name='braiding'
      src='https://www.braidshairstylesforblackkids.com/wp-content/uploads/2020/12/octo-hairstyles-145.jpg'
    />{<Text color='teal' fontWeight={'bold'} >Braiding</Text>}{<Text fontSize='2xl'pl='131px'>$20</Text>}
  </WrapItem></Checkbox>
  </Stack>
</CheckboxGroup>
  </MenuList>
</Menu>

<Text fontSize='18' pt='5'>Would you like to book your appointment with a specific staff member?</Text>
          </DrawerBody>

          <DrawerFooter>
            <Button variant='outline' mr={3} onClick={onClose} >
              Cancel
            </Button>
            <Button colorScheme='teal'>Submit</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}
export default ReservationDrawer;