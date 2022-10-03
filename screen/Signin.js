import React from 'react';
import { Box, NativeBaseProvider, Text, Input, Button } from 'native-base';

function Signin({ navigation }) {
    return (
        <NativeBaseProvider>
            <Box alignItems="center" >
                <Text fontSize="xl" top="30%">Sign in</Text>
                <Input size="md" placeholder="id" top="130px" width="75%" />
                <Input size="md" placeholder="name" top="157px" width="75%" />
                <Input size="md" placeholder="email" top="187px" width="75%" />
                <Input size="md" placeholder="address" top="217px" width="75%" />
                <Input size="md" placeholder="contact" top="247px" width="75%" />
                <Button size="sm" width="30%" height="40px" top="267px" onPress={() => { navigation.navigate('Home'); }}>
                    Sign in
                </Button>
                <Text italic fontSize="xs" top="100%">Car App v0.1</Text>
            </Box>
        </NativeBaseProvider>
    );
}
export default Signin;