import React from 'react';
import { useDisclosure} from 'react-use-disclosure'
import{Modal,Button,Checkbox, CheckboxGroup, ModalFooter, ModalContent,ModalOverlay,ModalCloseButton,ModalHeader,Stack,Menu,MenuButton,MenuList} from '@chakra-ui/react';
import{ChevronDownIcon} from '@chakra-ui/icons'
function ReservationModal() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const initialRef = React.useRef()
    const finalRef = React.useRef()
    
  return (
    <>

      <Button colorScheme='teal' fontSize='12' onClick={onOpen}>Book Appointment</Button>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader fontSize='15'>NEW APPOINTMENT</ModalHeader>
          <ModalCloseButton />
          
                <Menu closeOnSelect={false}>
  <MenuButton as={Button} bg='#EFF9F8' fontSize='16'>
    Pick a service<ChevronDownIcon/>
  </MenuButton>
  <MenuList minWidth='240px'>
     <CheckboxGroup colorScheme='teal'>
  <Stack direction='column'>
    <Checkbox value='wash and blowdry'>Wash and Blowdry</Checkbox>
    <Checkbox value='waxing'>Waxing</Checkbox>
    <Checkbox value='haircut'>Haircut</Checkbox>
    <Checkbox value='massage'>Massage</Checkbox>
    <Checkbox value='treatment'>Treatment</Checkbox>
    <Checkbox value='pedicure'>Pedicure</Checkbox>
    <Checkbox value='manicure'>Manicure</Checkbox>
    <Checkbox value='braiding'>Braiding</Checkbox>
  </Stack>
</CheckboxGroup>
  </MenuList>
</Menu>
        

          <ModalFooter pt='40'>
            <Button colorScheme='teal' mr={3}>
              Submit
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}


export default ReservationModal;