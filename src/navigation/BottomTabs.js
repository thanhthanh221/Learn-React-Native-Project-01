import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from '../screens/Home';
import Search from '../screens/Search';
import Like from '../screens/Like';
import User from '../screens/User';
import Svg from 'react-native-svg';
import {TabBarCustomButton} from './TabBarCustomButton';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: styles.TabNavigator,
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown:false,
          tabBarIcon: ({focused}) => (
            <Image
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? '#CF6D3F' : '#CDCDD2',
              }}
              source={require('../assets/icons/cutlery.png')}
              resizeMode="contain"
            />
          ),
          tabBarButton: props => <TabBarCustomButton {...props} />,
        }}
      />
      <Tab.Screen
        name="Search"
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? '#CF6D3F' : '#CDCDD2',
              }}
              source={require('../assets/icons/search.png')}
              resizeMode="contain"
            />
          ),
          tabBarButton: props => <TabBarCustomButton {...props} />,
        }}
        component={Search}
      />
      <Tab.Screen
        name="Like"
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? '#CF6D3F' : '#CDCDD2',
              }}
              source={require('../assets/icons/like.png')}
              resizeMode="contain"
            />
          ),
          tabBarButton: props => <TabBarCustomButton {...props} />,
        }}
        component={Like}
      />
      <Tab.Screen
        name="User"
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? '#CF6D3F' : '#CDCDD2',
              }}
              source={require('../assets/icons/user.png')}
              resizeMode="contain"
            />
          ),
          tabBarButton: props => <TabBarCustomButton {...props} />,
        }}
        component={User}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;

const styles = StyleSheet.create({
  TabNavigator: {
    left: 0,
    bottom: 0,
    right: 0,
    borderBottomWidth: 0,
    position: 'absolute',
    backgroundColor: 'transparent',
    elevation: 0,
  },
});
