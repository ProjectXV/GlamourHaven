import React, { useState } from "react";
import {
  Box,
  Button,
  Divider,
  FormControl,
  FormLabel,
  HStack,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useForm } from "../utils/useForm";
import { FiEye, FiEyeOff } from "react-icons/fi";
import Logo from "../components/Logo";

const Login = () => {
  const [show, setShow] = useState(false);
  const handleShowPassword = () => {
    setShow(!show);
  };

  const {
    handleSubmit,
    handleChange,
    data: user,
    errors,
  } = useForm({
    // validations: {
    //   username: {
    //     custom: {
    //       isValid: (value) => value.length < 1,
    //       message: "The username needs to be at least 6 characters long.",
    //     },
    //     pattern: {
    //       value: "^[A-Za-z]*$",
    //       message:
    //         "You're not allowed to use special characters or numbers in your name.",
    //     },
    //   },
    //   email: {
    //     pattern: {
    //       value: "^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+$",
    //       message: "Please enter a valid email address",
    //     },
    //   },
    //   password: {
    //     custom: {
    //       isValid: (value) => value.length > 6,
    //       message: "The password needs to be at least 6 characters long.",
    //     },
    //   },
    // },

    onSubmit: () => {
      console.log("Submit has been pressed");
    },
  });

  const handleEnterKey = (e) => {
    if (e.keyCode === 13) {
      handleSubmit();
    }
  };

  return (
    <SimpleGrid columns={[null, null, null, 2]} height="100vh">
      <Box bg="blue">
        <Logo />
      </Box>
      <Box>
        <HStack>
          <Text>Already have an account?</Text>
          <Text>Sign in</Text>
        </HStack>
        <Stack>
          <Text>Login to your account</Text>
          <Text>
            Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem
            ipsum
          </Text>
          <FormControl id="username">
            <FormLabel>Username</FormLabel>
            <Input
              id="username"
              type="text"
              placeholder="Enter your username"
              width="70%"
              value={user.username || ""}
              onChange={handleChange("username")}
            />
          </FormControl>
          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <InputGroup width="70%">
              <Input
                id="password"
                type={show ? "text" : "password"}
                placeholder="Enter your password"
                value={user.password || ""}
                onChange={handleChange("password")}
              />
              <InputRightElement>
                {show ? (
                  <Icon as={FiEye} onClick={handleShowPassword} />
                ) : (
                  <Icon as={FiEyeOff} onClick={handleShowPassword} />
                )}
              </InputRightElement>
            </InputGroup>
          </FormControl>
          <Button onKeyDown={(e) => handleEnterKey(e)} onClick={handleSubmit}>
            Create an Account
          </Button>
          <HStack>
            <Divider />
            <Text>Or</Text>
            <Divider />
          </HStack>
          <Button>Sign in with Google</Button>
        </Stack>
      </Box>
    </SimpleGrid>
  );
};

export default Login;
