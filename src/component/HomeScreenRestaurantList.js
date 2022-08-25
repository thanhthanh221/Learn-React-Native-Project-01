import {FlatList, StyleSheet} from 'react-native';
import React from 'react';
import HomeScreenRenderRestaurant from './HomeScreenRenderRestaurant';

export const HomeScreenRestaurantList = props => {
  return (
    <FlatList
      style={styles.flatList}
      horizontal={false}
      showsVerticalScrollIndicator={false}
      data={props.selectRestaurant}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({item, index}) => (
        <HomeScreenRenderRestaurant
          item={item}
          index={index}
          address={props.address}
          navigation={props.navigation}
          nameCategories={input => props.nameCategories(input)}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({
  flatList: {
    marginTop: 20,
    flex: 1,
    margin: 0,
    paddingHorizontal: 10,
    marginBottom: 60,
  },
});
