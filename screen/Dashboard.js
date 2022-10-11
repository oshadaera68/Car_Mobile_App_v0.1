import { StyleSheet } from 'react-native';
import React from 'react';
import { NativeBaseProvider, Box, Image, Text, Button } from 'native-base';

function Dashboard({ navigation }) {
  return (
    <NativeBaseProvider>
      <Box alignItems="center">
        <Text fontWeight="bold" top="1"> Vehicle List </Text>
        <Image style={styles.image1} source={require('../assets/1.jpg')} alt="car image1" />
        <Button style={styles.btn} colorScheme="secondary"> Detail </Button>
        <Image style={styles.image2} source={require('../assets/1.jpg')} alt="car image1" />
        <Button style={styles.btn1} colorScheme="secondary"> Detail </Button>
        <Image style={styles.image3} source={require('../assets/1.jpg')} alt="car image1" />
        <Button style={styles.btn2} colorScheme="secondary"> Detail </Button>
        <Button style={styles.btn3} colorScheme="primary" onPress={()=>navigation.navigate('Vehicle')}> + Add </Button>
      </Box>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  image1: {
    left: 1,
    width: 155,
    height: 120,
    top: 15
  },
  btn: {
    top: 16
  },
  image2: {
    left: 1,
    width: 155,
    height: 120,
    top: 27
  },
  btn1: {
    top: 27
  },
  image3:{
    left: 1,
    width: 155,
    height: 120,
    top: 38
  },
  btn2:{
    top:39
  },
  btn3:{
    top:89,
    left:109,
    borderRadius:140
  }
})

export default Dashboard;
