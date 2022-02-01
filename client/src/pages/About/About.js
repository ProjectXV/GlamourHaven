import React from "react";
import { Box } from "@chakra-ui/react";
import AboutForm from "./subs/AboutForm";
import AboutContainer from "./subs/AboutContainer";


const About = () => {
  return (
    <div>
    <Box>
    <AboutContainer/>
    </Box>
    <Box >
      <AboutForm />
       </Box>
      </div>
  );
  }
export default About;
