import React, { Component, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import CaretakerLogin from './components/CaretakerLogin';
import CaretakerSignUp from './components/CaretakerSignUp';
import NavigationBar from './components/NavigationBar';
import Maps from './components/Maps';
const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* <CaretakerLogin/> */}
      {/* <CaretakerSignUp/> */}
      {/* <NavigationBar/> */}
      <Maps/>
    </SafeAreaView>
  );
};

export default App;
