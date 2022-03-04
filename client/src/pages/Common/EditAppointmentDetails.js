import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import React, { useState } from "react";
import GeneralLoading from "../../components/GeneralLoading";

const EditAppointmentDetails = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <>
      {isLoading ? (
        <GeneralLoading />
      ) : (
        <Modal
          shadow="base"
          rounded={[null, "md"]}
          overflow={{ sm: "hidden" }}
          isOpen={props.isOpen}
          onClose={props.onClose}
          isCentered
          motionPreset="slideInBottom"
          scrollBehavior="inside"
          size="3xl"
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Edit Profile</ModalHeader>
            <ModalCloseButton />
            <ModalBody></ModalBody>
          </ModalContent>
        </Modal>
      )}
    </>
  );
};

export default EditAppointmentDetails;
