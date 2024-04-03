import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React,{useState,useEffect} from 'react';
import CaretakerSignUp from '../components/Register/CaretakerSignUp';
import CaretakerLogin from '../components/Register/CaretakerLogin';
import {useLogin } from '../context/LoginProvider';
import Loading from '../components/Loading/Loading';
import AsyncStorage from '@react-native-async-storage/async-storage';
import UserSignUp from '../components/Register/UserSignUp';
import UserLogin from '../components/Register/UserLogin';
import UserHome from '../components/Home/UserHome';
import CaretakerHome from '../components/Home/CaretakerHome';
import Maps from '../components/Maps'
import Allbackgroundservices from '../components/Userbackgroundservices/Alluserbackgroundservices';
import Medication from "../components/Medication"

const Stack = createNativeStackNavigator();
const AppNavigation = () => {
  const { isLoggedIn,setIsLoggedIn,role,setRole,code,setCode,caretaker,setCaretaker,medication, setMedication} = useLogin();
  const [loading,setLoading] = useState(true);
  
  useEffect(()=>{
    storageAccess();
    setLoading(false);
 },[]);

 const storageAccess = async()=>{
    const tempRole = await AsyncStorage.getItem('role');
    const tempLogin = await AsyncStorage.getItem('login');
    const tempCode = await AsyncStorage.getItem('code');
    const tempCaretakerDetails = await AsyncStorage.getItem('caretakerDetails');
    const tempMedContent = await AsyncStorage.getItem('meds');
    setCaretaker(JSON.parse(tempCaretakerDetails));
    if (tempMedContent) {
      setMedication(JSON.parse(tempMedContent));
    }
    else {
      setMedication([]);
    }
    setCode(tempCode);
    setRole(tempRole);
    if(tempLogin==="true"){
        setIsLoggedIn(true);
    }
    // console.log("tempCode : ",tempCode,"| tempLogin : ",tempLogin," | tempRole : ",tempRole);
    // console.log("Code : ",code,"| isLoggedIn : ",isLoggedIn," | role : ",role);
    // console.log("Caretaker : ",caretaker);

 }

 if (loading) {
  return (
      <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName="Loading"  >
           <Stack.Screen name="Loading" component={Loading}/>
       </Stack.Navigator>
  );
}

if(!isLoggedIn){
  return (
      <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName="UserLogin"  >
          <Stack.Screen name="UserLogin"  component={UserLogin} /> 
            <Stack.Screen name="CaretakerLogin" component={CaretakerLogin}/>
            <Stack.Screen name="CaretakerSignUp" component={CaretakerSignUp}/>
       </Stack.Navigator>
  )
}
else if (isLoggedIn && role==="user") {
   return (
       <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName="Allbackgroundservices">
        <Stack.Screen name="Allbackgroundservices" component={Allbackgroundservices}/>
        <Stack.Screen name="UserHome" component={UserHome}/>
       </Stack.Navigator>
   );
}
else if (isLoggedIn && role==="caretaker" && !code){
  return (
      <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName="UserSignUp" >
        <Stack.Screen name="UserSignUp" component={UserSignUp}/>
      </Stack.Navigator>
  );
}
else if (isLoggedIn && role==="caretaker" && code){
  return (
      <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName="CaretakerHome" >
        <Stack.Screen name="CaretakerHome" component={CaretakerHome}/>
        <Stack.Screen name="Maps"  component={Maps}/>
        <Stack.Screen name="Medication"  component={Medication}/>
      </Stack.Navigator>
  );
}
}

export default AppNavigation;