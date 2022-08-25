import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const RestaurantScreenHeader = props => {
  return (
    <View style={styles.header}>
      <TouchableOpacity
        style={styles.imageLeft}
        onPress={() => props.navigation.goBack()}>
        <Image
          resizeMode="contain"
          style={{width: 30, height: 30}}
          source={require('../../assets/icons/back.png')}
        />
      </TouchableOpacity>
      <View style={styles.addressContainer}>
        <View style={styles.addressPush}>
          <Text style={styles.addressText}>{props.restaurant.name}</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.imageRight}>
        <Image
          resizeMode="contain"
          style={{width: 30, height: 30}}
          source={require('../../assets/icons/list.png')}
        />
      </TouchableOpacity>
    </View>
  );
};

export default RestaurantScreenHeader;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    height: 60,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop:-15
  },
  imageLeft: {
    justifyContent: 'center',
    marginLeft: 20,
  },
  imageRight: {
    marginRight: 20,
  },
  addressContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addressPush: {
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#CDCDD2',
    height: '85%',
    borderRadius: 10,
  },
  addressText: {
    fontSize: 20,
    fontWeight: '600',
  },
});
