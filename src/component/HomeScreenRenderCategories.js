import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';

export const HomeScreenRenderCategories = props => {
  const handleCategory = item => {
    if (!props.selectedCategory.find(it => it === item.id)) {
      props.setSelectedCategory([...props.selectedCategory, item.id]);
    } 
    else {
      const newCheck = props.selectedCategory.filter(it => it !== item.id);
      if (newCheck) {
        props.setSelectedCategory(newCheck);
      }
      else{
        props.setSelectedCategory([]);
      }
    }
  };
  return (
    <TouchableOpacity
      style={{
        marginVertical: 15,
        marginLeft: 10,
        backgroundColor: props.selectedCategory.find(p => p === props.item.id)
          ? '#FC6D3F'
          : '#ffffff',
        height: 120,
        alignItems: 'center',
        justifyContent: 'space-between',
        width: 70,
        borderRadius: 25,
      }}
      onPress={() => handleCategory(props.item)}>
      <View style={styles.containerImage}>
        <Image style={styles.image} source={props.item.icon} />
      </View>
      <Text style={styles.text}>{props.item.name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  body: {
    marginVertical: 15,
    marginLeft: 10,
    backgroundColor: '#ffffff',
    height: 120,
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 70,
    borderRadius: 25,
  },
  text: {
    fontWeight: '800',
    marginBottom: 20,
  },
  containerImage: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    backgroundColor: '#CDCDD2',
    borderRadius: 25,
    elevation: 1,
    width: 50,
    height: 50,
  },
  image: {
    width: 40,
    height: 40,
  },
});
