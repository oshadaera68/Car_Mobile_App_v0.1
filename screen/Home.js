import { NativeBaseProvider, Text, Box } from 'native-base';

import { React } from 'react';
import { Image, StyleSheet } from 'react-native';

function Home() {
    return (
        <NativeBaseProvider>
            <Box alignItems="center" top="5%"><Text fontSize="sm">Vehicle List</Text></Box>
            <Image style={styles.car1} source={require('../assets/1.jpg')} />
            <Box alignItems="center" top="1px"><Text fontSize="sm">Toyota Axio</Text></Box>
            <Image style={styles.car1} source={require('../assets/2.jpg')} />
            <Box alignItems="center" top="1px"><Text fontSize="sm">Honda Vezel</Text></Box>
        </NativeBaseProvider>
    );
}

const styles = StyleSheet.create({
    car1: {
        width: 105,
        height: 83,
        top:60,
        left:12
    }
});

export default Home;
