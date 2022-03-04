import { Box, Button, Center, Image, Text, VStack } from "@chakra-ui/react";
import React, { useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import notfound from "../../assets/Forgot password-cuate.svg";
import API from "../../utils/api";

const ActivateAccount = () => {
  const [verified, setVerified] = useState(false);
  const { uid, token } = useParams();
  const navigate = useNavigate();

  const verify_account = async (e) => {
    try {
      const { data } = await API.activateUser({
        uid: uid,
        token: token,
      });

      if (data) {
        console.log(data);
        setVerified(true);
      }
      alert("Activation successful");
      // .then(function())
    } catch (error) {
      setVerified(false);
      console.log("Error occurred");
      alert("Error occurred");
    }
    if (verified) navigate("/login");
  };

  if (verified) {
    return <Navigate to="/login" />;
  }

  return (
    <Box>
      <Center pt="48">
        <VStack>
          <Image height="40vh" src={notfound} />
          <Text>
            Were sorry. We dont know how you got here but we can find our way
            back. Click here to go back to the home page
          </Text>
          <Button
            type="submit"
            bg="brand.300"
            color="#fff"
            onClick={verify_account}
            py
          >
            Activate Account
          </Button>
        </VStack>
      </Center>
    </Box>
  );
};

export default ActivateAccount;
