import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import Voice from '@react-native-voice/voice';

const Speechtotext = () => {
  const [recognizedText, setRecognizedText] = useState('');

  const startRecognition = async () => {
    try {
      await Voice.start('en-US');
    } catch (error) {
      console.error(error);
    }
  };

  const stopRecognition = async () => {
    try {
      await Voice.stop();
    } catch (error) {
      console.error(error);
    }
  };

  const onSpeechResults = (event) => {
    setRecognizedText(event.value[0]);
  };

  Voice.onSpeechResults = onSpeechResults;

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{recognizedText}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Start Recognition" onPress={startRecognition} style={styles.button} />
        <Button title="Stop Recognition" onPress={stopRecognition} style={styles.button} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  textContainer: {
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 20,
  },
  button: {
    width: 150,
    margin: 5,
  },
});

export default Speechtotext;
