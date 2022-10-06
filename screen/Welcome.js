import { View, Text, Image, StyleSheet, Button } from 'react-native';
import React from 'react';
import { TouchableOpacity } from 'react-native';

function welcome({navigation}) {
    return (
        <View style={styles.main}>
            <View style={styles.sub1}>
                <Image style={styles.image} source={require('../assets/3.jpg')} />
            </View>
            <Text style={styles.text} alignItems="center">Nisala Car App</Text>

            <TouchableOpacity style={styles.textBtn} onPress={()=>{navigation.navigate('Signin')}}>
            <Text style={styles.link}>Get Started</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    main: {
        // flex: 1,
        // marginTop: 30,
        // flexDirection: 'column'
    },
    sub1: {
        width: '90%',
        height: '20%',
        // display:'flex'
    },
    image: {
        width: '100%',
        top: 12,
        left: '7%',
        resizeMode: 'contain'
    },
    text: {
        color: 'black',
        fontWeight: 'bold',
        // justifyContent:'center',
        left: '26%',
        fontSize: 20,
    },
    link:{
        color:'black',
        top:500,
        left:120,
        fontSize:20
    }
})


export default welcome;