import React, { useRef } from "react";
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
  AvatarBadge,
} from "@chakra-ui/react";
import { CheckIcon, CloseIcon } from "@chakra-ui/icons";
import { MdEdit } from "react-icons/md";
import { BiImageAdd } from "react-icons/bi";
import avatar from "../../assets/k.jpg";
import { useAuthState } from "../../context";

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
      <IconButton icon={<MdEdit />} {...getEditButtonProps()} />
    </Flex>
  );
}

const buttonStyles = {
  mt: "3vh",
  mb: "2vh",
  type: "submit",
  width: "30%",
  color: "white",
};

const accordionButtonStyles = {
  borderBottomWidth: "1px",
  borderColor: "neutral.200",
  p: "4",
};

const editableStyles = {
  borderWidth: "1px",
  borderColor: "gray.200",
  borderRadius: "5px",
  p: "2",
  isPreviewFocusable: false,
};

const Settings = () => {
  const inputFile = useRef(null);

  const onButtonClick = () => {
    // `current` points to the mounted file input element
    inputFile.current.click();
  };

  const { userDetails } = useAuthState();
  function emailUsername(emailAddress) {
    return emailAddress.match(/^(.+)@/)[1];
  }

  return (
    <Stack spacing={0} overflowY="scroll" h="100%">
      <input
        type="file"
        id="file"
        ref={inputFile}
        style={{ display: "none" }}
      />

      <Center pb={5} width="inherit">
        <HStack
          width="90%"
          justifyContent="space-between"
          alignSelf="center"
          mt="4"
        >
          <Text>User Settings</Text>

          <Text>
            Account <Icon as={ChevronRightIcon} />{" "}
            {emailUsername(`${userDetails?.email}`)}
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
                <AccordionButton
                  {...accordionButtonStyles}
                  borderTopRadius="10px"
                >
                  <Box flex="1" textAlign="left">
                    User Profile
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel p={30} width="inherit">
                <Stack>
                  <Avatar
                    alignSelf="center"
                    size="2xl"
                    src={avatar}
                    borderWidth="3px"
                    borderColor="neutral.100"
                  >
                    <AvatarBadge
                      as={IconButton}
                      onClick={onButtonClick}
                      size="sm"
                      rounded="full"
                      colorScheme="blue"
                      aria-label="remove Image"
                      icon={<BiImageAdd color="#fff" />}
                    />
                  </Avatar>

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
                      bg="brand.300"
                    >
                      Save Changes
                    </Button>
                  </form>
                </Stack>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton
                  {...accordionButtonStyles}
                  _expanded={{
                    borderTopWidth: "0px",
                    borderBottomWidth: "1px",
                  }}
                >
                  <Box flex="1" textAlign="left">
                    Billing Information
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} p={30}>
                <Text>
                  Fill in the bank information into which you would want your
                  transaction return and bonuses
                </Text>
                <FormControl id="cardNumber" mt="3vh">
                  <FormLabel>Card Number</FormLabel>
                  <Editable
                    id="cardNumber"
                    placeholder="Enter your card Number"
                    {...editableStyles}
                  >
                    <HStack justifyContent="space-between">
                      <EditablePreview />
                      <EditableInput />
                      <EditableControls />
                    </HStack>
                  </Editable>
                </FormControl>
                <HStack alignContent="center" mt="3vh">
                  <FormControl id="expirydate">
                    <FormLabel>Expiry date</FormLabel>
                    <Editable
                      id="expirydate"
                      placeholder="DD/MM/YYYY"
                      {...editableStyles}
                    >
                      <HStack justifyContent="space-between">
                        <EditablePreview />
                        <EditableInput />
                        <EditableControls />
                      </HStack>
                    </Editable>
                  </FormControl>
                  <FormControl id="CVC/CVV">
                    <FormLabel>CVC/CVV</FormLabel>
                    <Editable
                      id="CVC-CVV"
                      placeholder="..."
                      {...editableStyles}
                    >
                      <HStack justifyContent="space-between">
                        <EditablePreview />
                        <EditableInput />
                        <EditableControls />
                      </HStack>
                    </Editable>
                  </FormControl>
                </HStack>

                <Button
                  {...buttonStyles}
                  _focus={{ outline: "none" }}
                  _active={{ outline: "none" }}
                  bg="brand.300"
                >
                  Save Changes
                </Button>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton
                  {...accordionButtonStyles}
                  _expanded={{
                    borderTopWidth: "0px",
                    borderBottomWidth: "1px",
                  }}
                >
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
                    This means that all your information will be lost and
                    history of appointments. Your account will also be deleted
                    permanently. Please be sure you would like tio do this
                    before you proceed
                  </Text>
                </Stack>
                <Box alignItems="right">
                  <Button
                    {...buttonStyles}
                    _focus={{ outline: "none" }}
                    _active={{ outline: "none" }}
                    bg="red"
                  >
                    Delete Account
                  </Button>
                </Box>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Stack>
      </Center>
    </Stack>
  );
};

export default Settings;
