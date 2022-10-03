import React from 'react';
import { Box, NativeBaseProvider, Text } from 'native-base';

function Signin() {
    return (
        <NativeBaseProvider>
            <Box alignItems="center" >
                <Text>Sign in</Text>
            </Box>
        </NativeBaseProvider>
    );
}
export default Signin;