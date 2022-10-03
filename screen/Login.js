/* eslint-disable no-undef */
import { Box, NativeBaseProvider, Text, Input, Button } from 'native-base';
import React from 'react';

function Login( {navigation} ) {
  return (
    <NativeBaseProvider>
      <Box alignItems="center">
        <Text fontSize="xl" color="#000000" top="100px">
          Log In
        </Text>
        <Input size="md" placeholder="User Name" top="130px" width="75%" />
        <Input size="md" type="password" placeholder="Password" top="160px" width="75%" />
        <Button size="sm" width="20%" height="40px" top="190px">
          Log In
        </Button>
        <Text fontSize="sm" color="#000000" top="300px"> Do You haven't an account ? </Text>
        <Button size="sm" width="20%" height="40px" top="310px" onPress={()=>{navigation.navigate('Sign in');}}>
          Sign In
        </Button>
        <Text italic fontSize="xs" top="400px"> Car App v0.1 </Text>
      </Box>
    </NativeBaseProvider>
  );
}

export default Login;
