/* eslint-disable no-undef */
import {
  Box,
  NativeBaseProvider,
  Text,
  Input,
  Button,
  Link
} from 'native-base';
import React from 'react';

function Login() {
  return (
    <NativeBaseProvider>
      <Box alignItems="center">
        <Text fontSize="xl" color="#FFFFFF" top="100px">
          Log In
        </Text>
        <Input size="md" placeholder="User Name" top="130px" width="75%" />
        <Input size="md" placeholder="Password" top="160px" width="75%" />
        <Button size="sm" width="30%" top="190px">
          Log In
        </Button>
        <Text fontSize="xs" color="#FFFFFF" top="300px">Do You haven't an account ? click <Link href='./Signin.js'>Sign in</Link></Text>
      </Box>
    </NativeBaseProvider>
  );
}

export default Login;
