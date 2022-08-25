import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import MapView from 'react-native-maps';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import BottomTabs from './src/navigation/BottomTabs';
import Restaurant from './src/screens/Restaurant';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="Home">
        <Stack.Screen name="Home" component={BottomTabs} />
        <Stack.Screen name='Restaurant' component={Restaurant} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  map: {
    width: '100%',
    height: 800,
  },
});
