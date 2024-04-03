import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';
import LoaderAnimation from '../../Animation/Animation.json'

const Loading = () => {
    return (
        <LottieView source={LoaderAnimation} autoPlay loop />
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

export default Loading;
