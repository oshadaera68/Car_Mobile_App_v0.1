import React from 'react';
import Login from './screen/Login';
import Signin from './screen/Signin';
import Loadingbar from './screen/Loadingbar';
import { NavigationContainer } from '@react-navigation/native';

function App() {
  return (
    <NavigationContainer>
      <Loadingbar />
      <Login />
      <Signin />
    </NavigationContainer>
  );
}
export default App;
