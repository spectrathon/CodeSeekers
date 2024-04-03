import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigation from './navigation/AppNavigation';
import LoginProvider from './context/LoginProvider';


const App = () => {
  return (
    <LoginProvider>
    <NavigationContainer>
      <AppNavigation/>
    </NavigationContainer>
    </LoginProvider>
  );
};

export default App;
