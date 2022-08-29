import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');
import RestaurantScreenDots from './RestaurantScreenDots';

const RestaurantScreenRenderOrder = props => {
  const CountFoodValue = () => {
    const CountFoodValue = props.foodUserSelect.reduce(
      (Sum, food) => Sum + food.count,
      0,
    );
    return CountFoodValue;
  };
  const CountMoneyFood = () => {
    const CountMoney = props.foodUserSelect.reduce(
      (Sum, food) => Sum + food.count * food.value.price,
      0,
    );
    return CountMoney;
  };
  return (
    <View>
      <RestaurantScreenDots
        restaurant={props.restaurant}
        scrollX={props.scrollX}
      />
      <View
        style={{height: 220, backgroundColor: '#fff', paddingHorizontal: 20}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 15,
          }}>
          <Text style={styles.text}>{CountFoodValue()} Sản phẩm </Text>
          <Text style={styles.text}>
            {CountMoneyFood() ? CountMoneyFood().toFixed(3) + ' VNĐ' : ''}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 27,
          }}>
          {/* Địa chỉ */}
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              style={{width: 30, height: 30, tintColor: '#000', marginRight: 5}}
              source={require('../../assets/icons/pin.png')}
            />
            <Text style={styles.text}>Địa chỉ</Text>
          </View>

          {/* Thanh toán */}
          <View style={{alignItems: 'center', flexDirection: 'row'}}>
            <Image
              style={{width: 30, height: 30, tintColor: 'red', marginRight: 10}}
              source={require('../../assets/icons/mastercard.png')}
            />
            <Text style={styles.text}>Thanh Toán</Text>
          </View>
        </View>

        {/* Nút đặt hàng */}
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            height: '62%',
          }}>
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              props.navigation.navigate('OrderMap', {
                restaurant: props.restaurant,
              })
            }>
            <Text style={{fontSize: 25, color: '#000'}}>Đặt hàng</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default RestaurantScreenRenderOrder;

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  button: {
    backgroundColor: '#FC6D3F',
    width: width * 0.8,
    alignItems: 'center',
    height: 55,
    justifyContent: 'center',
    borderRadius: 25,
  },
});
