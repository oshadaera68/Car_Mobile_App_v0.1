import React from 'react';
import { Box, NativeBaseProvider, Text } from 'native-base';

function Home() {
    return (
        <NativeBaseProvider>
            <Box alignItems="center">
                <Text fontSize="xl" color="#000000" top="67px">Home</Text>
            </Box>
        </NativeBaseProvider>
    );
}
export default Home;
