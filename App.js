import React from 'react';
import Login from './screen/Login';
import Signin from './screen/Signin';
import Home from './screen/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Log in" options={{ headerShown: false }} component={Login} />
        <Stack.Screen name="Sign in" options={{ headerShown: false }} component={Signin} />
        <Stack.Screen name="Home" options={{ headerShown: false }} component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
