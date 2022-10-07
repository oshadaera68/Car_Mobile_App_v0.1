import { Text, StyleSheet } from 'react-native'
import React from 'react'
import { NativeBaseProvider, Box, Input, Button, Image } from 'native-base'

function SignUp({ navigation }) {
    return (
        <NativeBaseProvider>
            <Box alignItems="center">
                <Text style={styles.text1}>SignUp</Text>
                <Input mx="3" placeholder="Id" w="75%" top="30%" />
                <Input mx="3" placeholder="User Name" w="75%" top="38%" />
                <Input mx="3" placeholder="Contact No" w="75%" top="46%" />
                <Input mx="3" placeholder="email" w="75%" top="55%" />
                <Input mx="3" placeholder="password" type="password" w="75%" top="64%" />
                <Button style={styles.btn} onPress={() => navigation.navigate('Dashboard')}>Sign Up</Button>
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
        left: 4,
        top: 79,
        color: 'black',
        fontWeight: 'bold',
        fontSize: 23,
    },
    btn: {
        top: 260
    },
    text4: {
        color: 'black',
        top: 277
    },
    image1: {
        height: 50,
        width: 50,
        top: 287,
        left: 55
      },
      image2: {
        height: 50,
        width: 50,
        top: 240,
        left: 156
      },
      image3: {
        height: 50,
        width: 50,
        top: 189,
        left: 253
      }
})

export default SignUp;