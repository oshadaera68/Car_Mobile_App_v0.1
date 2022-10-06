import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Welcome from './screen/Welcome';
import Signin from './screen/Signin';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Welcome" options={{headerShown: false}} component={Welcome}/>
        <Stack.Screen name="Signin" options={{headerShown: false}} component={Signin}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
