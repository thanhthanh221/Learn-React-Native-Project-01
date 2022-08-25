import {FlatList, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {HomeScreenRenderCategories} from './HomeScreenRenderCategories';

export const HomeScreenCategories = props => {
  return (
    <View style={styles.body}>
      <Text style={styles.text}>Danh mục sản phẩm</Text>
      <FlatList style={styles.flatList}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        data={props.category}
        renderItem={({item, index}) => (
          <HomeScreenRenderCategories
            setSelectedCategory={input => props.setSelectedCategory(input)}
            selectedCategory={props.selectedCategory}
            item={item}
            index={index}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    paddingTop: 20,
  },
  text: {
    fontSize: 20,
    fontWeight: '700',
  },
  flatList: {
    marginRight:10
  }
});
