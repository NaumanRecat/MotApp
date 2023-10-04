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
import TabNav from './screen/TabNav';
import TopNavBar from './screen//TopNavBar';

const Stack = createNativeStackNavigator();

const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="TabNav" component={TabNav} options={{ headerShown: false }}/>
        <Stack.Screen name="TopNavBar" component={TopNavBar} options={{ headerShown: false }}/>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="Welcome1" component={Welcome1} />
        <Stack.Screen name="Welcome2" component={Welcome2} />
        <Stack.Screen name="Welcome3" component={Welcome3} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="Registration" component={Registration} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default App