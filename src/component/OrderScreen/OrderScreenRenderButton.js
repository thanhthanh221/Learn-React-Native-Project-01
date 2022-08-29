import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect} from 'react';

const OrderScreenRenderButton = props => {
  const ZoomIn = () => {
    const newRegion = {
      latitude: props.luti.latitude,
      longitude: props.luti.longitude,
      latitudeDelta: props.zoom.latitudeDelta / 2,
      longitudeDelta: props.zoom.longitudeDelta / 2,
    };
    props.mapViewRef.current.animateToRegion(newRegion, 200);
  };
  const ZoomOut = () => {
    const newRegion = {
      latitude: props.luti.latitude,
      longitude: props.luti.longitude,
      latitudeDelta: props.zoom.latitudeDelta * 2,
      longitudeDelta: props.zoom.longitudeDelta * 2,
    };

    props.mapViewRef.current.animateToRegion(newRegion, 200);
  };
  return (
    <View
      style={{
        width: 60,
        justifyContent: 'space-between',
        height: 120,
        position: 'absolute',
        bottom: 200,
        alignItems: 'center',
        right: 0,
      }}>
      {/* Tăng kích thước bản đồ */}
      <TouchableOpacity style={styles.button} onPress={() => ZoomIn()}>
        <Text style={{fontSize: 30, color: '#000'}}>+</Text>
      </TouchableOpacity>

      {/* Giảm kích thước bản đồ */}
      <TouchableOpacity style={styles.button} onPress={() => ZoomOut()}>
        <Text style={{fontSize: 30, color: '#000'}}>-</Text>
      </TouchableOpacity>
    </View>
  );
};

export default OrderScreenRenderButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#fff',
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
  },
});
