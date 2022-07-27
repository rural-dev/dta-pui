import React from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screen/Home';
import Pelajaran from '../screen/Pelajaran';
import PesanList from '../screen/PesanList';
import Profile from '../screen/Profile';
import { SvgChat, SvgCourse, SvgHome, SvgProfile } from '../svg/SVG';

const Tab = createBottomTabNavigator();

  
const HomeStack = () => {
  return (
    <Tab.Navigator screenOptions={{
        headerShown: false,
        tabBarStyle: {height: 60},
        tabBarLabelStyle: {fontFamily: 'Poppins-Medium', fontSize: 12},
        tabBarActiveTintColor: '#038B4A',
        tabBarInactiveTintColor: '#ADADAD'
      }}
      >
      <Tab.Screen name="Home" component={Home} options={{
        tabBarIcon: ({focused, color, size}: {focused: boolean, color: string, size: number}) => (
            <SvgHome size={size} color={color}/>
        )
      }}/>
      <Tab.Screen name="Pelajaran" component={Pelajaran} options={{
        tabBarIcon: ({focused, color, size}: {focused: boolean, color: string, size: number}) => (
            <SvgCourse size={size} color={color}/>
        )
      }}/>
      <Tab.Screen name="Pesan" component={PesanList} options={{
        tabBarIcon: ({focused, color, size}: {focused: boolean, color: string, size: number}) => (
            <SvgChat size={size} color={color}/>
        )
      }}/>
      <Tab.Screen name="Profile" component={Profile} options={{
        tabBarIcon: ({focused, color, size}: {focused: boolean, color: string, size: number}) => (
            <SvgProfile size={size} color={color}/>
        )
      }}/>
    </Tab.Navigator>
  );
}

export default HomeStack