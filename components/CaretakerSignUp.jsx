import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient'; // Import LinearGradient

const CaretakerSignUp = () => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  const handleLogin = () => {
    // Implement login functionality here
    console.log('Name:', name);
    console.log('Username:', username);
    console.log('Password:', password);
    // You can perform authentication logic here
  };

  return (
    <LinearGradient
      colors={['rgba(242,111,97,1)','rgba(246,144,56,1)']}
      start={{ x: 1, y: 0 }}
      end={{ x: 0, y: 1 }}
      locations={[0.3535, 0.9548]}
      style={styles.gradient}
    >
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <Text style={styles.header}>SafeMinder</Text>
          <TextInput
            style={styles.input}
            placeholder="Name"
            onChangeText={setName}
            value={username}
            placeholderTextColor="#666" // Adjust placeholder text color
          />
          <TextInput
            style={styles.input}
            placeholder="Username"
            onChangeText={setUsername}
            value={username}
            placeholderTextColor="#666" // Adjust placeholder text color
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            onChangeText={setPassword}
            value={password}
            secureTextEntry // Hides the entered text
            placeholderTextColor="#666" // Adjust placeholder text color
          />
            <Button
            title="Sign up"
            onPress={handleLogin}
            color="rgba(246,144,56,1)" // Orange color for the button
            />
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  inputContainer: {
    width: '100%',
    backgroundColor: 'white', // White background for input container
    borderRadius: 10, // Rounded corners
    paddingHorizontal: 20,
    paddingVertical: 30,
    marginBottom: 20,
  },
  header: {
    fontSize: 34,
    fontWeight: 'bold',
    color: 'rgba(242,111,97,1)', // Adjust header text color
    marginBottom: 20,
    textAlign: 'center'
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    color: '#333', // Adjust text color
  },
});

export default CaretakerSignUp;
