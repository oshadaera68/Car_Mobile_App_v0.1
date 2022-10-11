import { Text, StyleSheet } from 'react-native';
import React from 'react';
import { NativeBaseProvider, Box, Input, Button } from 'native-base';

function Vehicle() {
    return (
        <NativeBaseProvider>
            <Box alignItems="center">
                <Text style={styles.text1}>Vehicle Form</Text>
                <Button style={styles.btn1} colorScheme="secondary"> Upload </Button>
                <Input mx="3" placeholder="code" w="75%" top="66%" />
                <Input mx="3" placeholder="type" w="75%" top="270" />
                <Input mx="3" placeholder="brand" w="75%" top="300" />
                <Input mx="3" placeholder="price" w="75%" top="330" />
                <Button style={styles.btn} colorScheme="secondary"> Save </Button>
            </Box>
        </NativeBaseProvider>
    );
}

const styles = StyleSheet.create({
    text1: {
        color: 'black',
        top: 23,
        fontWeight: 'bold',
        fontSize: 20
    },
    btn: {
        top: 360
    },
    btn1: {
        top: 200
    }
});

export default Vehicle;