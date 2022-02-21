import { Center, Spinner, VStack } from "@chakra-ui/react";
import React from "react";
import Logo from "./Logo";

const GeneralLoading = () => {
  return (
    <Center p={50} my="auto" mx="auto">
      <VStack>
        <Logo />
        <Spinner size="lg" />
      </VStack>
    </Center>
  );
};

export default GeneralLoading;
