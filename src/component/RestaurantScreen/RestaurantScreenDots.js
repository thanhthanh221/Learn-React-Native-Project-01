import {Animated, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Dimensions} from 'react-native';

const RestaurantScreenDots = props => {
  const dotPosition = Animated.divide(props.scrollX, Dimensions.get('window').width);
  const [restaurant, setRestaurant] = React.useState(props.restaurant);
  return (
    <View style={{height: 20}}>
      <View style={styles.bodyDots}>
        {restaurant.menu?.map((food, index) => {
          const opacity = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [0.6, 1, 0.6],
            extrapolate: 'clamp',
          });
          const dotColor = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: ['#CDCDD2', '#FC6D3F', '#CDCDD2'],
            extrapolate: 'clamp',
          });
          const dotSize = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [6.4, 8, 6.4],
            extrapolate: 'clamp',
          });
          return (
            <Animated.View
              key={`dot-${index}`}
              opacity={opacity}
              style={{
                borderRadius: 25,
                marginHorizontal: 6,
                width: dotSize,
                height: dotSize,
                backgroundColor: dotColor,
              }}
            />
          );
        })}
      </View>
    </View>
  );
};

export default RestaurantScreenDots;

const styles = StyleSheet.create({
  bodyDots: {
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
    height: 10,
  },
});
