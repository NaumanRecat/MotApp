import React from "react";
import { View, Text } from "react-native";
import SplashScreen from './screen/SplashScreen';
import Welcome1 from './screen/Welcome1';
import Welcome2 from "./screen/Welcome2";
import Welcome3 from "./screen/Welcome3";
import LoginScreen from "./screen/LoginScreen";
import Registration from './screen/Registration';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App =()=>{

  return(
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="Registration" component={Registration} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default App