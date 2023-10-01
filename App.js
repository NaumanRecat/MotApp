import React from "react";
import { View, Text } from "react-native";
import SplashScreen from './screen/SplashScreen';
import Welcome1 from './screen/Welcome1';
import Welcome2 from "./screen/Welcome2";
import Welcome3 from "./screen/Welcome3";
import LoginScreen from "./screen/LoginScreen";
import Registration from './screen/Registration';

const App =()=>{
  return(
    <View>
      <Registration/>
    </View>
  )
}
export default App