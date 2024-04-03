import React, { Component, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import CaretakerLogin from './components/CaretakerLogin';
import CaretakerSignUp from './components/CaretakerSignUp';
const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* <CaretakerLogin/> */}
      <CaretakerSignUp/>
    </SafeAreaView>
  );
};

export default App;
