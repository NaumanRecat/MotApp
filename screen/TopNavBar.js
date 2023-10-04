import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Notes from './Notes';
import Voice from './Voice';
import Video from './Video';

const Tab = createMaterialTopTabNavigator();

const TopNavBar =()=> {
  return (
      <Tab.Navigator>
        <Tab.Screen name="Notes" component={Notes} options={{ headerShown: false }}/>
        <Tab.Screen name="Voice" component={Voice} options={{ headerShown: false }}/>
        <Tab.Screen name="Video" component={Video} options={{ headerShown: false }}/>
      </Tab.Navigator>
  );
}
export default TopNavBar