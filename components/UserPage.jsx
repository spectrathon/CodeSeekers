import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const UserPage = () => {
  const images = [
    { source: require('../assets/Settings.png'), style: styles.settingsImage },
    { source: require('../assets/Home.png'), style: styles.homeImage },
    { source: require('../assets/Medicine.png'), style: styles.medicineImage },
    { source: require('../assets/Voice.png'), style: styles.voiceImage },
    { source: require('../assets/dialOne.png'), style: styles.dialOneImage },
    { source: require('../assets/dialTwo.png'), style: styles.dialTwoImage },
    { source: require('../assets/SOS.png'), style: styles.sosImage },
  ];

  return (
    <LinearGradient
      colors={['rgba(181,181,182,1)', 'rgba(255,255,255,1)']}
      start={{ x: 1, y: 0 }}
      end={{ x: 0, y: 1 }}
      locations={[0.3535, 0.9548]}
      style={styles.gradient}
    >
      <View style={styles.container}>
        <View style={styles.grid}>
          {images.map((item, index) => (
            <TouchableOpacity key={index} style={[styles.gridItem, index === 6 && styles.bigImageContainer]}>
              <View style={[styles.imageView, index === 6 && styles.bigImageContainer]}>
                <Image source={item.source} style={[styles.image, item.style]} />
              </View>
            </TouchableOpacity>
          ))}
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
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
  },
  gridItem: {
    width: '50%',
    height: '25%',
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
    width: '106%',
    height: '50%',
  },
  settingsImage: {
    top: 67,
  },
  homeImage: {
    top: 67,
  },
  medicineImage: {
    top: 30,
  },
  voiceImage: {
    top: 30,
  },
  dialOneImage: {
    // top: 0,
    bottom: 7.3,
  },
  dialTwoImage: {
    // top: 0,
    bottom: 10,
  },
  sosImage: {
    bottom: 150,
    left: -11,
    justifyContent: 'center',
    alignContent: 'center',
  },
});

export default UserPage;
