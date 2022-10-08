// import { View, Text } from 'react-native';
import React from 'react';
import { NativeBaseProvider, Box } from 'native-base';

function Dashboard({ navigation }) {
  return (
    <NativeBaseProvider>
      <Box alignItems="center">Hello</Box>
    </NativeBaseProvider>
  );
}
export default Dashboard;
