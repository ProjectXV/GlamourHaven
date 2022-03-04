import React from "react";
import { Box, Badge, Text, Stack,
	 Button, Flex, Spacer }
	from "@chakra-ui/react";

function Treatment() {
    return(

		<Box p={5}>
		<Stack align="center">
			<Badge variant="solid" colorScheme="green"
			rounded="full" px={2}>
			GeeksForGeeks
			</Badge>
		</Stack>
		<Stack align="center">
			<Text as="h2" fontWeight="normal" my={2} >
			A Computer Science Portal for Geeks
			</Text>
			<Text fontWeight="light">
			A platform for students to study CSE concepts.
			</Text>
		</Stack>
		<Flex>
			<Spacer />
			<Button variant="solid"
			colorScheme="green" size="sm">
				Learn More
			</Button>
		</Flex>
		</Box>
);
}

export default Treatment;
