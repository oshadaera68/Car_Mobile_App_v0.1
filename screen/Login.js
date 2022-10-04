/* eslint-disable no-undef */
import { Box, NativeBaseProvider, Text, Input, Button, Alert } from 'native-base';
import { React, useState } from 'react';

function Login({ navigation }) {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const checkData = () => {
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        title: userName,
        body: password,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => {
        if (userName === '' && password === '') {
          Alert.alert('Please fill..');
        } else if (userName !== '' && password !== '') {
          console.log(response);
          Alert.alert('Log in Success..!');
        } else {
          if (userName === '') {
            Alert.alert('Please fill user name..!');
          } else if (password === '') {
            Alert.alert('Please Fill password...!');
          }
        }
      })
      .catch(_err => {
        Alert.alert('Error occured..!');
      });
  };

  return (
    <NativeBaseProvider>
      <Box alignItems="center">
        <Text fontSize="xl" color="#000000" top="100px">
          Log In
        </Text>
        <Input size="md" value={userName} onChangeText={e => { setUserName(e); }} placeholder="User Name" top="130px" width="75%" />
        <Input size="md" value={password} onChangeText={e => { setPassword(e); }} type="password" placeholder="Password" top="160px" width="75%" />
        <Button size="sm" width="20%" height="40px" top="190px" onPress={() => { checkData }}>
          Log In
        </Button>
        <Text fontSize="sm" color="#000000" top="300px"> Do You haven't an account ? </Text>
        <Button size="sm" width="20%" height="40px" top="310px" onPress={() => { navigation.navigate('Sign in'); }}>
          Sign In
        </Button>
        <Text italic fontSize="xs" top="400px"> Car App v0.1 </Text>
      </Box>
    </NativeBaseProvider>
  );
}

export default Login;
