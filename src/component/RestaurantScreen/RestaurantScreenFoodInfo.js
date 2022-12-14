import {
  Animated,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import RestaurantScreenFoodList from './RestaurantScreenFoodList';

const RestaurantScreenFoodInfo = props => {
  return (
    <Animated.ScrollView
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      onScroll={Animated.event(
        [{nativeEvent: {contentOffset: {x: props.scrollX}}}],
        {
          useNativeDriver: false,
        },
      )}>
      {props.restaurant?.menu.map((food, index) => (
        <RestaurantScreenFoodList
          setFoodUserSelect={input => props.setFoodUserSelect(input)}
          foodUserSelect={props.foodUserSelect}
          food={food}
          index={index}
        />
      ))}
    </Animated.ScrollView>
  );
};

export default RestaurantScreenFoodInfo;

const styles = StyleSheet.create({});
