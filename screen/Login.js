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
        <Button size="sm" width="30%" height="20%" top="190px" onPress={()=>{navigation.navigate('Home');}}>
          Log In
        </Button>
        <Text fontSize="xs" color="#000000" top="300px"> Do You haven't an account ? </Text>
        <Button size="sm" width="30%" height="20%" top="310px" onPress={()=>{navigation.navigate('Signin');}}>
          Sign In
        </Button>
      </Box>
    </NativeBaseProvider>
  );
}

export default Login;
