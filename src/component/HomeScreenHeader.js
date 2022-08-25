import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

export const HomeScreenHeader = props => {
  const [currentLocation, setCurrentLocation] = React.useState(props.address);
  return (
    <View style={styles.header}>
      <TouchableOpacity style={styles.imageLeft}>
        <Image
          resizeMode="contain"
          style={styles.image}
          source={require('../assets/icons/nearby.png')}
        />
      </TouchableOpacity>
      <View style={styles.addressContainer}>
        <View style={styles.addressPush}>
          <Text style={styles.addressText}>{currentLocation.streetName}</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.imageRight}>
        <Image
          resizeMode="contain"
          style={styles.image}
          source={require('../assets/icons/shopping-basket.png')}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    height: 60,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  image: {
    height: 30,
    width: 30,
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
    width: '65%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#CDCDD2',
    height: '70%',
    borderRadius: 10,
  },
  addressText: {
    fontSize: 20,
    fontWeight: '600',
  },
});
