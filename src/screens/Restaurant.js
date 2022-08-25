import {Platform, StatusBar, StyleSheet, View} from 'react-native';
import React, {useState} from 'react';

import RestaurantScreenHeader from '../component/RestaurantScreen/RestaurantScreenHeader';
import RestaurantScreenFoodInfo from '../component/RestaurantScreen/RestaurantScreenFoodInfo';
import RestaurantScreenRenderOrder from '../component/RestaurantScreen/RestaurantScreenRenderOrder';

const Restaurant = ({route, navigation}) => {
  const {restaurant, address} = route.params;
  const [foodUserSelect, setFoodUserSelect] = useState([]);
  return (
    <View
      style={{
        ...styles.body,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
      }}>
      <RestaurantScreenHeader restaurant={restaurant} navigation={navigation} />
      <RestaurantScreenFoodInfo
        setFoodUserSelect={input => setFoodUserSelect(input)}
        foodUserSelect={foodUserSelect}
        restaurant={restaurant}
        navigation={navigation}
      />
      <RestaurantScreenRenderOrder foodUserSelect={foodUserSelect} />
    </View>
  );
};

export default Restaurant;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#F6F6F7',
  },
});
