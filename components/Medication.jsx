import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity, SvgXml } from 'react-native';
import { LinearGradient } from 'react-native-linear-gradient';
import MedicationContent from './MedicationContent';
import NavigationBar from './NavigationBar';
import { Platform } from 'react-native';
// import DateTimePicker from '@react-native-community/datetimepicker';
import LeftImage from '../assets/logo_app.png';
import RightImage from '../assets/setting.png';
import DateTimePicker from '@react-native-community/datetimepicker'; // Import DateTimePicker

const defaultStartDate = 'From Date'; // Default start date text
const defaultEndDate = 'To Date'; // Default end date text
const defaultTime = 'Set Time'; // Default time format

const mealImages = {
  breakfast: require('../assets/breakfast.png'),
  lunch: require('../assets/Lunch.png'),
  snack: require('../assets/snack.png'),
  dinner: require('../assets/dinner.png'),
};

const selectedImages = {
  breakfast: require('../assets/breakfastActive.png'),
  lunch: require('../assets/lunchAcctive.png'),
  snack: require('../assets/snackActive.png'),
  dinner: require('../assets/dinnerActive.png'),
};

const Medication = () => {
  const [title, setTitle] = useState('');
  const [dateInput1, setDateInput1] = useState(defaultStartDate);
  const [dateInput2, setDateInput2] = useState(defaultEndDate);
  const [input4, setInput4] = useState(defaultTime); // Initialize with default time
  const [input5, setInput5] = useState('');
  const [showDatePicker1, setShowDatePicker1] = useState(false);
  const [showDatePicker2, setShowDatePicker2] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);

  const [mealState, setMealState] = useState({
    breakfast: false,
    lunch: false,
    snack: false,
    dinner: false,
  });

  const toggleMeal = (meal) => {
    setMealState((prevState) => ({
      ...prevState,
      [meal]: !prevState[meal],
    }));
  };

  const handleDateChange1 = (event, selectedDate) => {
    setShowDatePicker1(false);
    if (selectedDate) {
      const formattedDate = `${selectedDate.getDate()}/${selectedDate.getMonth() + 1}/${selectedDate.getFullYear()}`;
      setDateInput1(formattedDate);
    }
  };

  const handleDateChange2 = (event, selectedDate) => {
    setShowDatePicker2(false);
    if (selectedDate) {
      const formattedDate = `${selectedDate.getDate()}/${selectedDate.getMonth() + 1}/${selectedDate.getFullYear()}`;
      setDateInput2(formattedDate);
    }
  };

  const handleTimeChange = (event, selectedTime) => {
    setShowTimePicker(false);
    if (selectedTime) {
      const formattedTime = `${selectedTime.getHours()}:${selectedTime.getMinutes()}`;
      setInput4(formattedTime);
    }
  };

  const handleSubmit = () => {
    console.log('Title:', title);
    console.log('Input 1:', dateInput1);
    console.log('Input 2:', dateInput2);
    console.log('Input 4:', input4);
    // console.log('Input 5:', input5);
    // Add functionality to handle submission
  };

  return (
    <LinearGradient
      colors={['rgba(242,111,97,1)', 'rgba(246,144,56,1)']}
      start={{ x: 1, y: 0 }}
      end={{ x: 0, y: 1 }}
      locations={[0.3535, 0.9548]}
      style={styles.gradient}
    >
      <View style={styles.container}>
        <MedicationContent />
        <View style={styles.content}>
          <Image source={require('../assets/wireframe.png')} style={styles.frame} />
          <Text style={styles.contentText}>Choose the Medicine</Text>
          <View style={[styles.svgRow, {bottom: 220}]}>
            {Object.keys(mealImages).map((meal) => (
              <TouchableOpacity key={meal} onPress={() => toggleMeal(meal)}>
                <Image source={mealState[meal] ? selectedImages[meal] : mealImages[meal]} style={[styles.svgImage, {width: 40, height: 40}]} />
              </TouchableOpacity>
            ))}
          </View>
          <TextInput
            style={[styles.input, styles.whiteBackground, styles.blackText, {marginTop: 10, left: 52, bottom: 185}]}
            placeholder="Title"
            placeholderTextColor="gray"
            value={title}
            onChangeText={setTitle}
          />
          <View style={styles.inputRow}>
              <Image source={require('../assets/Calendar.png')} style={[styles.dateImage, { left: 15, bottom: 180}]} />
              <TouchableOpacity style={[styles.datePickerButton, styles.whiteBackground, {marginTop: 30, left: 5, bottom: 199}]} onPress={() => setShowTimePicker(true)}>
                <Text style={styles.datePickerButtonText}>{input4}</Text>
              </TouchableOpacity>
              {showTimePicker && (
                <DateTimePicker
                  value={new Date()}
                  mode="time"
                  display="spinner"
                  onChange={handleTimeChange}
                />
              )}
            </View>

          <View style={styles.inputTable}>
            <View style={styles.inputRow}>
              <Image source={require('../assets/Calendar.png')} style={[styles.dateImage, { left: 20, bottom: 180}]} />
              <TouchableOpacity style={[styles.datePickerButton, styles.whiteBackground, {marginTop: 30, left: 10, bottom: 199}]} onPress={() => setShowDatePicker1(true)}>
                <Text style={styles.datePickerButtonText}>{dateInput1}</Text>
              </TouchableOpacity>
              {showDatePicker1 && (
                <DateTimePicker
                  value={new Date()}
                  mode="date"
                  display="spinner"
                  onChange={handleDateChange1}
                />
              )}
            </View>
            <View style={styles.inputRow}>
              <Image source={require('../assets/Calendar.png')} style={[styles.dateImage, {right: 12 ,bottom: 180}]} />
              <TouchableOpacity style={[styles.datePickerButton, styles.whiteBackground, {marginTop: 30, right: 21, bottom: 199}]} onPress={() => setShowDatePicker2(true)}>
                <Text style={styles.datePickerButtonText}>{dateInput2}</Text>
              </TouchableOpacity>
              {showDatePicker2 && (
                <DateTimePicker
                  value={new Date()}
                  mode="date"
                  display="spinner"
                  onChange={handleDateChange2}
                />
              )}
            </View>
          </View>
          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
        </View>
        <NavigationBar />
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'justify',
    backgroundColor: '#FFF',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    marginBottom: -15,
    padding: 20,
    bottom: 16,
  },
  contentText: {
    fontSize: 18,
    left: 7,
    bottom: 230,
    // fontWeight: 'bold',
    color: 'gray',
    paddingBottom: 15,
  },
  svgRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    marginLeft: 25,
    marginRight: 25,
  },
  frame: {
    width: 420,
    height: 240,
    left: -34,
    top: 130,
  },
  svgImage: {
    width: 80,
    height: 100,
  },
  inputTable: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  inputRow: {
    flexDirection: 'row', // Change to row layout
    alignItems: 'center',
    justifyContent: 'center', // Align items horizontally
    width: '45%', // Adjust as needed
  },
  input: {
    width: '80%',
    height: 38,
    borderColor: 'gray',
    // borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  datePickerButton: {
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'gray',
    borderWidth: 0,
    borderRadius: 5,
    paddingHorizontal: 8,
    marginLeft: 5,
    marginBottom: -8,
  },
  whiteBackground: {
    backgroundColor: '#FFF', 
  },
  blackText: {
    color: 'black',
  },
  datePickerButtonText: {
    color: 'black',
  },
  dateLabel: {
    // Remove position: 'absolute'
    color: 'gray',
    fontSize: 17,
    marginLeft: 10, // Adjust as needed
    marginRight: 5, // Adjust as needed
  },
  dateImage: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  button: {
    backgroundColor: 'rgba(246, 144, 56, 1)',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 15,
    marginTop: 80,
    width: '96%',
    bottom: 240,
    left: 8,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 18,
    color: 'white',
  },
});

export default Medication;
