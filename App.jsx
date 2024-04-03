import React, { Component, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native';
import firestore from '@react-native-firebase/firestore';
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
