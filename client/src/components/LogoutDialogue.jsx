import React from "react";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Button,
} from "@chakra-ui/react";
import { logOut, useAuthDispatch } from "../context";
import { useNavigate } from "react-router-dom";

export const LogoutDialogue = (props) => {
  const navigate = useNavigate();
  const cancelRef = React.useRef();
  const dispatch = useAuthDispatch();

  return (
    <AlertDialog
      isOpen={props.isOpen}
      leastDestructiveRef={cancelRef}
      onClose={props.onClose}
    >
      <AlertDialogOverlay>
        <AlertDialogContent>
          <AlertDialogHeader fontSize="lg" fontWeight="bold">
            Log Out
          </AlertDialogHeader>

          <AlertDialogBody>
            Are you sure you would like to log out? You can't undo this action
            afterwards.
          </AlertDialogBody>

          <AlertDialogFooter>
            <Button colorScheme="green" ref={cancelRef} onClick={props.onClose}>
              Cancel
            </Button>
            <Button
              colorScheme="red"
              onClick={async () => {
                await logOut(dispatch);
                navigate("/login");
              }}
              ml={3}
            >
              Proceed to Log Out
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
};
