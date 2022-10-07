import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Input, NativeBaseProvider, Box, Button, Image } from 'native-base'
import React from 'react';

function Signin({ navigation }) {
  function navigator() {
    navigation.navigate('Signup');
  }
  return (
    <NativeBaseProvider>
      <Text style={styles.text1} alignItems="center">Sign in</Text>
      <Box alignItems={'center'}>
        <Input mx="3" placeholder="User Name" w="75%" top="45%" />
        <Input mx="3" placeholder="Password" type="password" w="75%" top="58%" />
        <Button style={styles.btn} onPress={() => navigation.navigate('Dashboard')} colorScheme="secondary"> Log in </Button>
        <Text style={styles.text2}>Do you haven't the account ?</Text>
        <TouchableOpacity style={styles.textBtn} onPress={navigator}>
          <Text style={styles.text3}>Sign up</Text>
        </TouchableOpacity>
        <Text style={styles.text4}>Or</Text>
      </Box>
      <Image source={require('../assets/107175_circle_facebook_icon.png')} style={styles.image1} alt="facebook" />
      <Image source={require('../assets/7089163_gmail_google_icon.png')} style={styles.image2} alt="gmail" />
      <Image source={require('../assets/294709_circle_twitter_icon.png')} style={styles.image3} alt="gmail" />
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  text1: {
    color: 'black',
    left: '37%',
    fontWeight: 'bold',
    fontSize: 25,
    top: 110
  },
  btn: {
    top: 260,
  },
  text2: {
    color: '#000000',
    top: 304
  },
  text3: {
    color: '#000000',
    top: 318,
    fontWeight: 'bold'
  },
  text4: {
    color: 'black',
    top: 335
  },
  image1: {
    height: 50,
    width: 50,
    top: 350,
    left: 55
  },
  image2: {
    height: 50,
    width: 50,
    top: 302,
    left: 156
  },
  image3: {
    height: 50,
    width: 50,
    top: 252,
    left: 253
  }
})

export default Signin;