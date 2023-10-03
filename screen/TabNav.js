import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home';
import Recipients from './Recipients';
import Search from './Search';
import Settings from './Settings';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

const TabNav =()=> {
    console.disableYellowBox = false;
  return (
 
      <Tab.Navigator>
       
        <Tab.Screen name="Recipients" component={Recipients} options={{ headerShown: false }}/>
        <Tab.Screen name="Search" component={Search} options={{ headerShown: false }}/>
        <Tab.Screen name="Settings" component={Settings} options={{ headerShown: false }}/>
        <Tab.Screen name="Home" component={Home}
        options={{
          tabBarLabel: 'Updates',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
          tabBarBadge: 5,
        }}
      />
      </Tab.Navigator>

  );
}
export default TabNav