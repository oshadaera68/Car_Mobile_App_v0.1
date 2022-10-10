import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Welcome from './screen/Welcome';
import Signin from './screen/Signin';
import Dashboard from './screen/Dashboard';
import Signup from './screen/Signup';
import Vehicle from './screen/Vehicle';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Welcome" options={{headerShown: false}} component={Welcome}/>
        <Stack.Screen name="Signin" options={{headerShown: false}} component={Signin}/>
        <Stack.Screen name="Signup" options={{headerShown:false}} component={Signup}/>
        <Stack.Screen name="Dashboard" options={{headerShown:false}} component={Dashboard}/>
        <Stack.Screen name="Vehicle" options={{headerShown:false}} component={Vehicle}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
