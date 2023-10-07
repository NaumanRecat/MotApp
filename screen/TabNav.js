import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home';
import Recipients from './Recipients';
import Search from './Search';
import Settings from './Settings';
import TopNavBar from './TopNavBar';

const Tab = createBottomTabNavigator();

const TabNav =()=> {
    console.disableYellowBox = false;
  return (
 
      <Tab.Navigator>
        <Tab.Screen name="TopNavBar" component={TopNavBar} options={{ headerShown: false }}/>
        <Tab.Screen name="Recipients" component={Recipients} options={{ headerShown: false }}/>
        <Tab.Screen name="Search" component={Search} options={{ headerShown: false }}/>
        <Tab.Screen name="Settings" component={Settings} options={{ headerShown: false }}/>
      </Tab.Navigator>

  );
}
export default TabNav