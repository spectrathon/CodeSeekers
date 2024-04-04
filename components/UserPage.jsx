import React,{useEffect, useState} from 'react';
import { View, StyleSheet, TouchableOpacity, Image, Linking } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useLogin } from '../context/LoginProvider';
import Voice from '@react-native-voice/voice';
const UserPage = ({navigation}) => {

  const [recognizedText, setRecognizedText] = useState('');
  const {userCurrentLocation} = useLogin();

  useEffect(()=>{
    if(recognizedText.includes("Take me Home")){
      Linking.openURL(`https://www.google.com/maps/dir/?api=1&destination=${userCurrentLocation[1]},${userCurrentLocation[0]}`);
    }
  },[recognizedText]);

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

  const handleSettingsPress = () => {
    // Add functionality for Settings image press
    console.log('Settings image pressed');
  };

  const handleHomePress = () => {
    // Add functionality for Home image press
    Linking.openURL(`https://www.google.com/maps/dir/?api=1&destination=${userCurrentLocation[1]},${userCurrentLocation[0]}`)
    console.log('Home image pressed');
  };

  const handleMedicinePress = () => {
    // Add functionality for Medicine image press
    navigation.navigate('MedHistory');
    console.log('Medicine image pressed');
  };

  const handleVoicePress = () => {
    // Add functionality for Voice image press
    startRecognition()
    console.log('Voice image pressed');
  };

  const handleDialOnePress = () => {
 
    Linking.openURL(`tel:${7498520221}`);
    console.log('Dial One image pressed');
  };

  const handleDialTwoPress = () => {
    Linking.openURL(`tel:${9997799769}`);
    console.log('Dial Two image pressed');
  };

  const handleSOSPress = () => {
    Linking.openURL(`tel:${88065705}`);
    // Add functionality for SOS image press
    console.log('SOS image pressed');
  };

  return (
    <LinearGradient
      colors={['rgba(181,181,182,1)', 'rgba(255,255,255,1)']}
      start={{ x: 1, y: 0 }}
      end={{ x: 0, y: 1 }}
      locations={[0.3535, 0.9548]}
      style={styles.gradient}
    >
      <View style={styles.container}>
        <View style={[styles.row, {top: 355}]}>
          <TouchableOpacity style={styles.gridItem} onPress={handleSettingsPress}>
            <View style={styles.imageView}>
              <Image source={require('../assets/Settings.png')} style={[styles.image, styles.settingsImage]} />
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.gridItem} onPress={handleHomePress}>
            <View style={styles.imageView}>
              <Image source={require('../assets/Home.png')} style={[styles.image, styles.homeImage]} />
            </View>
          </TouchableOpacity>
        </View>

        <View style={[styles.row, {top: 145}]}>
          <TouchableOpacity style={styles.gridItem} onPress={handleMedicinePress}>
            <View style={styles.imageView}>
              <Image source={require('../assets/Medicine.png')} style={[styles.image, styles.medicineImage]} />
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.gridItem} onPress={handleVoicePress}>
            <View style={styles.imageView}>
              <Image source={require('../assets/Voice.png')} style={[styles.image, styles.voiceImage]} />
            </View>
          </TouchableOpacity>
        </View>

        <View style={[styles.row, {top: -65}]}>
          <TouchableOpacity style={styles.gridItem} onPress={handleDialOnePress}>
            <View style={styles.imageView}>
              <Image source={require('../assets/dialOne.png')} style={[styles.image, styles.dialOneImage]} />
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.gridItem} onPress={handleDialTwoPress}>
            <View style={styles.imageView}>
              <Image source={require('../assets/dialTwo.png')} style={[styles.image, styles.dialTwoImage]} />
            </View>
          </TouchableOpacity>
        </View>

        <View style={[styles.row, {top: -250}]}>
          <TouchableOpacity style={[styles.gridItem, styles.bigImageContainer]} onPress={handleSOSPress}>
            <View style={[styles.imageView, styles.bigImageContainer]}>
              <Image source={require('../assets/SOS.png')} style={[styles.image, styles.sosImage]} />
            </View>
          </TouchableOpacity>
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
  },
  row: {
    flexDirection: 'row',
    width: '100%',
  },
  gridItem: {
    flex: 1,
    height: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageView: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '80%',
    height: '80%',
    resizeMode: 'contain',
  },
  bigImageContainer: {
    width: '100%',
    height: '50%',
  },
  settingsImage: {
    width: '80%',
    height: '80%',
  },
  homeImage: {
    width: '80%',
    height: '80%',
  },
  medicineImage: {
   width: '80%',
    height: '80%',
  },
  voiceImage: {
    width: '80%',
    height: '80%',
  },
  dialOneImage: {
    width: '80%',
    height: '80%',
  },
  dialTwoImage: {
    width: '80%',
    height: '80%',
  },
  sosImage: {
    width: '220%',
    height: '220%',
  },
});

export default UserPage;
