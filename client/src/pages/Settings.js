import React from "react";
import TopBar from "../components/TopBar";
import SideBar from "../components/Sidebar";
import { ChevronRightIcon, ChevronDownIcon } from "@chakra-ui/icons";
import {
  Box,
  HStack,
  Icon,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Stack,
  Center,
  Flex,
  Spacer,
  Avatar,
  FormControl,
  FormLabel,
  Button,
  useEditableControls,
  ButtonGroup,
  IconButton,
  Editable,
  EditableInput,
  EditablePreview,
} from "@chakra-ui/react";
import { CheckIcon, CloseIcon } from "@chakra-ui/icons";
import { MdEdit } from "react-icons/md";

function EditableControls() {
  const {
    isEditing,
    getSubmitButtonProps,
    getCancelButtonProps,
    getEditButtonProps,
  } = useEditableControls();

  return isEditing ? (
    <ButtonGroup justifyContent="center" size="sm">
      <IconButton icon={<CheckIcon />} {...getSubmitButtonProps()} />
      <IconButton icon={<CloseIcon />} {...getCancelButtonProps()} />
    </ButtonGroup>
  ) : (
    <Flex justifyContent="center">
      <IconButton
        size="sm"
        // ml={5}
        icon={<MdEdit />}
        {...getEditButtonProps()}
      />
    </Flex>
  );
}

const buttonStyles = {
  mt: "3vh",
  mb: "2vh",
  type: "submit",
  width: "30%",
  bg: "red",
  color: "white",
};

const editableStyles = {
  borderWidth: "1px",
  borderColor: "gray.200",
  borderRadius: "5px",
  p: "2",
  isPreviewFocusable: false,
};

const Settings = () => {
  return (
    <HStack>
      <SideBar />
      <Flex bg="#F9F9F9" direction="column" maxWidth="85vw">
        <TopBar />
        <Box h="88.5vh" overflowY="scroll">
          {/* NavBar */}
          <Center pb={5}>
            <HStack justifyContent="space-between">
              <Text>User Settings</Text>
              <Spacer />
              <Text>
                Account <Icon as={ChevronRightIcon} /> Jones Ferdinand{" "}
                <Icon as={ChevronDownIcon} />
              </Text>
            </HStack>
          </Center>

          {/* Accordion */}
          <Center>
            <Stack width="70%">
              <Accordion
                defaultIndex={[0]}
                allowMultiple
                bg="white"
                borderColor="white"
                borderRadius="10px"
              >
                <AccordionItem _expanded={{ width: "50vw" }}>
                  <h2>
                    <AccordionButton p={4} borderRadius="10px">
                      <Box flex="1" textAlign="left">
                        User Profile
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel p={30} width="inherit">
                    <Stack>
                      <Avatar size="xl" />

                      <form id="login-form">
                        <FormControl id="username" mt="5vh" isRequired>
                          <FormLabel>Username</FormLabel>
                          <Editable
                            defaultValue="Enter your username"
                            id="username"
                            {...editableStyles}
                          >
                            <HStack justifyContent="space-between">
                              <EditablePreview />
                              <EditableInput />
                              <EditableControls />
                            </HStack>
                          </Editable>
                        </FormControl>
                        <FormControl id="email" mt="3vh">
                          <FormLabel>Email Address</FormLabel>
                          <Editable
                            id="email"
                            placeholder="Enter your email address"
                            {...editableStyles}
                          >
                            <HStack justifyContent="space-between">
                              <EditablePreview />
                              <EditableInput />
                              <EditableControls />
                            </HStack>
                          </Editable>
                        </FormControl>
                        <FormControl id="phone_number" mt="3vh">
                          <FormLabel>Phone Number</FormLabel>
                          <Editable
                            id="phone_number"
                            placeholder="Enter your phone number"
                            {...editableStyles}
                          >
                            <HStack justifyContent="space-between">
                              <EditablePreview />
                              <EditableInput />
                              <EditableControls />
                            </HStack>
                          </Editable>
                        </FormControl>
                        <Button
                          {...buttonStyles}
                          _focus={{ outline: "none" }}
                          _active={{ outline: "none" }}
                        >
                          Save Changes
                        </Button>
                      </form>
                    </Stack>
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                  <h2>
                    <AccordionButton p={4}>
                      <Box flex="1" textAlign="left">
                        Billing Information
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4} p={30}>
                    <Text>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </Text>
                    <FormControl id="email" mt="3vh">
                      <FormLabel>Email Address</FormLabel>
                      <Editable
                        id="email"
                        placeholder="Enter your email address"
                        {...editableStyles}
                      >
                        <HStack justifyContent="space-between">
                          <EditablePreview />
                          <EditableInput />
                          <EditableControls />
                        </HStack>
                      </Editable>
                    </FormControl>
                    <FormControl id="phone_number" mt="3vh">
                      <FormLabel>Phone Number</FormLabel>
                      <Editable
                        id="phone_number"
                        placeholder="Enter your phone number"
                        {...editableStyles}
                      >
                        <HStack justifyContent="space-between">
                          <EditablePreview />
                          <EditableInput />
                          <EditableControls />
                        </HStack>
                      </Editable>
                    </FormControl>
                    <Button
                      {...buttonStyles}
                      _focus={{ outline: "none" }}
                      _active={{ outline: "none" }}
                    >
                      Save Changes
                    </Button>
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                  <h2>
                    <AccordionButton p={4}>
                      <Box flex="1" textAlign="left">
                        Advanced Settings
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4} p={30}>
                    <Stack textAlign="left">
                      <Text fontWeight="bold">Delete Account</Text>
                      <Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                      </Text>
                    </Stack>
                    <Button
                      {...buttonStyles}
                      _focus={{ outline: "none" }}
                      _active={{ outline: "none" }}
                      align="right"
                    >
                      Delete Account
                    </Button>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </Stack>
          </Center>
        </Box>
      </Flex>
    </HStack>
  );
};

export default Settings;
