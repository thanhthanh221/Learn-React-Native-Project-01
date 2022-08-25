import {Animated, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Dimensions} from 'react-native';

const RestaurantScreenDots = () => {
  const dotPosition = Animated.divide(
    scrollX(0),
    Dimensions.get('window').width,
  );
  
  return (
    <View>
      <Text>RestaurantScreenDots</Text>
    </View>
  );
};

export default RestaurantScreenDots;

const styles = StyleSheet.create({});
