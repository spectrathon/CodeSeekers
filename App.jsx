import React, { Component, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigation from './navigation/AppNavigation';


const App = () => {
  return (
    <NavigationContainer>
      <AppNavigation/>
    </NavigationContainer>
  );
};

export default App;
