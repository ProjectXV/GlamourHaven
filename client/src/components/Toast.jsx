import { useToast } from "@chakra-ui/react";

const Toast = (props) => {
  const toast = useToast();

  return toast({
    title: `${props.title}`,
    status: `${props.status}`,
    description: props.description ? props.description : "",
    duration: 3000,
    isClosable: true,
    position: "top",
  });
};

export default Toast;
