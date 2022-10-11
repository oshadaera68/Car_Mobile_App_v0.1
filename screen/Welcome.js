import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';

function welcome({ navigation }) {
    return (
        <View>
            <View style={styles.sub1}>
                <Image style={styles.image} source={require('../assets/3.jpg')} />
            </View>
            <Text style={styles.text} alignItems="center">Nisala Car App</Text>

            <TouchableOpacity style={styles.textBtn} onPress={() => { navigation.navigate('Signin') }}>
                <Text style={styles.link}>Get Started</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    sub1: {
        width: '90%',
        height: '20%',
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
        left: '26%',
        fontSize: 20,
    },
    link: {
        color: 'black',
        top: 500,
        left: 120,
        fontSize: 20
    }
})


export default welcome;