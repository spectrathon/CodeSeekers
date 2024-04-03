import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Modal, Button, TextInput } from 'react-native';
import { LinearGradient } from 'react-native-linear-gradient';
import NavigationBar from './NavigationBar';

const Maps = () => {
  const [modalVisible, setModalVisible] = useState(false);
//   const [latitude, setLatitude] = useState('');
//   const [longitude, setLongitude] = useState('');
  const [radius, setRadius] = useState('');

  const handleSubmit = () => {
    // console.log('Latitude:', latitude);
    // console.log('Longitude:', longitude);
    console.log('Radius:', radius);
    // Add functionality to handle submission
    setModalVisible(!modalVisible);
  };

  const handleOption1Press = () => {
    console.log('Option 1 Pressed from Medication');
    // Add functionality for Option 1
  };

  const handleOption2Press = () => {
    console.log('Option 2 Pressed from Medication');
    // Add functionality for Option 2
  };

  const handleOption3Press = () => {
    console.log('Option 3 Pressed from Medication');
    // Add functionality for Option 3
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
        <View style={styles.box}>
          <TouchableOpacity style={styles.modalButton} onPress={() => setModalVisible(true)}>
            <Text style={styles.modalButtonText}>Set Radius</Text>
          </TouchableOpacity>
          <Image
            source={require('../assets/map.png')}
            style={styles.image}
          />
          <TouchableOpacity style={styles.navigationButton}>
            <Text style={styles.navigationButtonText}>Navigate</Text>
          </TouchableOpacity>
        </View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(!modalVisible)}
        >
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Set Location</Text>
            {/* <TextInput
              style={styles.input}
              placeholder="Latitude"
              placeholderTextColor="lightgray"
              onChangeText={(text) => setLatitude(text)}
            />
            <TextInput
              style={styles.input}
              placeholder="Longitude"
              placeholderTextColor="lightgray"
              onChangeText={(text) => setLongitude(text)}
            /> */}
            <TextInput
              style={styles.input}
              placeholder="Radius"
              placeholderTextColor="lightgray"
              onChangeText={(text) => setRadius(text)}
            />
            <Button title="Submit" onPress={() => handleSubmit()} />
          </View>
        </Modal>
        <View style={styles.navbarContainer}>
          <NavigationBar
            style={styles.navbar}
            onPressOption1={handleOption1Press}
            onPressOption2={handleOption2Press}
            onPressOption3={handleOption3Press}
          />
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    flex: 1,
    justifyContent: 'flex-end',
  },
  gradient: {
    flex: 1,
  },
  box: {
    height: '85%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    paddingBottom: 20,
    margin: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '88%',
    resizeMode: 'contain',
    alignContent: 'center',
    zIndex:-1,
  },
  modalButton: {
    position: 'absolute',
    top: 50,
    right: 20,
    padding: 10,
    backgroundColor: '#2990e0',
    borderRadius: 5,
  },
  modalButtonText: {
    color: 'white',
    fontSize: 16,
  },
  navigationButton: {
    backgroundColor: 'rgba(246,144,56,1)',
    paddingVertical: 18,
    paddingHorizontal: 15,
    borderRadius: 10,
    width: '80%',
    marginTop: 0,
    marginHorizontal: 50,
    marginBottom: 22,
  },
  navigationButtonText: {
    fontSize: 24,
    color: 'white',
    textAlign: 'center',
  },
  modalView: {
    marginTop: 'auto',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 20,
    fontSize: 18,
    color: 'black',
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
    color: 'gray',
  },
  navbarContainer: {
    alignItems: 'center',
  },
  navbar: {
    alignSelf: 'flex-end',
  },
});

export default Maps;
