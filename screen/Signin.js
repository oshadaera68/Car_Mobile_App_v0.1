import { View, Text, StyleSheet,TextInput } from 'react-native';
import {Input} from 'native-base';
import React from 'react';

function Signin() {
  return (
    <View>
      <Text style={styles.text1} alignItems="center">Sign in</Text>
      <Input size="md" placeholder="md Input" />
    </View>
  );
}

const styles = StyleSheet.create({
  text1:{
    color:'black',
    left:'41%',
    fontWeight:'bold',
    fontSize:19,
    top:23
  }
})

export default Signin;