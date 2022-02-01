import { Text,Box, Flex, VStack } from "@chakra-ui/react";
import React from "react"
import AboutForm from "./AboutForm";
import { }from "@chakra-ui/icons"

const AboutContainer = () => {
    
    return( 
        <Box>
            <Flex width="70vw" boxShadow="lg">
                <Box borderRightRadius="10px" height="90vh" width="40%" background="#EFF9F8">
                </Box>
                <VStack>
                <Text>Contact Information</Text>
                <Text>Fill in the form and our team will get back to you within 24 hours </Text>
                </VStack>
        
                <Box height="90vh" width="70%" bg="#ffffff" borderRightRadius="10px">
                    <AboutForm alignSelf="center"/>
                </Box>
            </Flex>
        </Box>
 
    )
}
export default AboutContainer;