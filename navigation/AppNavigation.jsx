import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Stack = createNativeStackNavigator();
const AppNavigation = () => {
    return (
        <View>
            <Text>AppNavigation</Text>
        </View>
    );
};


export default AppNavigation;
