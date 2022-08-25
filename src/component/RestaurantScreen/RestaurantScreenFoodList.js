import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React, {useEffect} from 'react';

const RestaurantScreenFoodList = props => {
  const [countFood, setCountFood] = React.useState(0);
  const reduceFood = () => {
    if (countFood > 0) {
      setCountFood(countFood - 1);
    }
  };
  const increaseFood = () => {
    setCountFood(countFood + 1);
  };
  useEffect(() => {
    const foodOther = props.foodUserSelect
      ? props.foodUserSelect.filter(
          food => food.value.menuId !== props.food.menuId,
        )
      : [];

    const ArraysFoodOther = !foodOther ? [] : foodOther;
    if (countFood > 0) {
      const setFood = {
        count: countFood,
        value: props.food,
      };
      props.setFoodUserSelect([setFood].concat(ArraysFoodOther));
    } 
    else {
      props.setFoodUserSelect(ArraysFoodOther);
    }
  }, [countFood]);
  return (
    <View
      key={props.index}
      style={{width: 432, alignItems: 'center', marginVertical: 10}}>
      <View style={styles.body}>
        <Image
          style={styles.image}
          resizeMode="cover"
          source={props.food.photo}
        />
        <View style={styles.userSelectFood}>
          <TouchableOpacity style={styles.icon} onPress={() => reduceFood()}>
            <Text style={{fontSize: 35, color: '#000'}}>-</Text>
          </TouchableOpacity>
          <View style={{width: 30, alignItems: 'center'}}>
            <Text style={{fontSize: 20, color: '#000'}}>{countFood}</Text>
          </View>
          <TouchableOpacity style={styles.icon} onPress={() => increaseFood()}>
            <Text style={{fontSize: 25, color: '#000'}}>+</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Tên-Thông tin Sản phẩm */}
      <View style={styles.foodInfomation}>
        <Text
          style={{color: '#000', fontSize: 20, marginBottom: 5, marginTop: 3}}>
          {props.food.name}  -  {props.food.price.toFixed(3)}
        </Text>
        <Text style={{color: '#000', fontSize: 15, marginTop: 4}}>
          {props.food.description}
        </Text>
      </View>

      {/* Calo */}
      <View style={{flexDirection: 'row'}}>
        <Image
          style={{width: 20, height: 20, marginRight: 10}}
          source={require('../../assets/icons/fire.png')}
        />
        <Text style={{color: '#000'}}>
          {props.food.calories.toFixed(2)} cal
        </Text>
      </View>
    </View>
  );
};

export default RestaurantScreenFoodList;

const styles = StyleSheet.create({
  body: {
    width: '100%',
    alignItems: 'center',
  },
  image: {
    zIndex: 1,
    height: 350,
    width: 432,
  },
  userSelectFood: {
    zIndex: 2,
    position: 'absolute',
    flexDirection: 'row',
    height: 50,
    bottom: -20,
    backgroundColor: '#fff',
    alignItems: 'center',
    borderRadius: 25,
  },
  icon: {
    width: 50,
    alignItems: 'center',
  },
  foodInfomation: {
    marginVertical: 20,
    paddingTop: 7,
    height: 40,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
