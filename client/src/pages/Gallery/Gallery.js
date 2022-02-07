import React from 'react';
import { ThemeProvider } from '@chakra-ui/core';
import { Box } from '@chakra-ui/core';
import TeamCard from '../Team/TeamCard';
function Gallery() {
    return (
        <Box>
            <ThemeProvider>
                <TeamCard />
            </ThemeProvider>
        </Box>
    );
}

export default Gallery;