import {Image, StyleSheet, Text, View} from 'react-native';
import React, { useEffect } from 'react';
import MapView, {Marker} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import {Dimensions} from 'react-native';

const OrderScreenRenderMap = props => {
  const width = Dimensions.get('window').width;
  const height = Dimensions.get('window').height;

  return (
    <View>
      <MapView
        ref={props.mapViewRef}
        style={{width: width, height: height}}
        region={props.region}>
        {/* Vị trí ô tô (Người bán) */}
        <Marker flat={true} coordinate={props.restaurantGps}>
          <Image
            style={{width: 40, height: 40}}
            source={require('../../assets/icons/car.png')}
            anchor={{x: 0.5, y: 0.5}}
            rotation={70}
          />
        </Marker>

        {/* Vị trí của người dùng */}
        <Marker coordinate={props.gps}>
          <View
            style={{
              width: 40,
              height: 40,
              borderRadius: 20,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              style={{width: 40, height: 40, tintColor: '#FC6D3F'}}
              source={require('../../assets/icons/pin.png')}
            />
          </View>
        </Marker>
      </MapView>
    </View>
  );
};

export default OrderScreenRenderMap;

const styles = StyleSheet.create({});
