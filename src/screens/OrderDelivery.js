import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import MapView from 'react-native-maps';
import OrderScreenRenderMap from '../component/OrderScreen/OrderScreenRenderMap';
import OrderScreenRenderButton from '../component/OrderScreen/OrderScreenRenderButton';

const OrderDelivery = ({navigation, route}) => {
  const [restaurant, setRestaurant] = React.useState(route.params.restaurant);
  const [gps, setGps] = React.useState({
    latitude: 20.718007,
    longitude: 105.890077,
  });
  const mapViewRef = React.useRef(null);

  const [zoom, setZoom] = React.useState({});
  const [luti, setLuti] = React.useState({});
  const [region, setRegion] = React.useState({});
  React.useEffect(() => {
    setZoom({
      latitudeDelta: Math.abs(restaurant.location.latitude - gps.latitude) * 2,
      longitudeDelta:
        Math.abs(restaurant.location.longitude - gps.longitude) * 2,
    });
    setLuti({
      latitude: (restaurant.location.latitude + gps.latitude) / 2,
      longitude: (restaurant.location.longitude + gps.longitude) / 2,
    });
    setRegion({
      latitude: (restaurant.location.latitude + gps.latitude) / 2,
      longitude: (restaurant.location.longitude + gps.longitude) / 2,
      latitudeDelta: Math.abs(restaurant.location.latitude - gps.latitude) * 2,
      longitudeDelta:
        Math.abs(restaurant.location.longitude - gps.longitude) * 2,
    });
  }, []);
  return (
    <View style={{flex: 1}}>
      <OrderScreenRenderMap
        luti={luti}
        restaurantGps={restaurant.location}
        gps={gps}
        zoom={zoom}
        mapViewRef={mapViewRef}
        region={region}
        setRegion={input => setRegion(input)}
      />
      <OrderScreenRenderButton
        restaurant={restaurant.location}
        zoom={zoom}
        luti={luti}
        setZoom={input => setZoom(input)}
        gps={gps}
        setRestaurant={input => setRestaurant(input)}
        mapViewRef={mapViewRef}
        region={region}
        setRegion={input => setRegion(input)}
      />
    </View>
  );
};

export default OrderDelivery;

const styles = StyleSheet.create({});
