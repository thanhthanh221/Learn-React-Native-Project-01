import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const HomeScreenRenderRestaurant = props => {
  const [categoriesName, setCategoriesName] = React.useState(
    props.nameCategories(props.item.categories),
  );
  return (
    <TouchableOpacity
      onPress={() =>
        props.navigation.navigate('Restaurant', {
          restaurant: props.item,
          address: props.address,
        })
      }
      style={styles.body}>
      <View>
        <Image
          style={styles.image}
          resizeMode="cover"
          source={props.item.photo}
        />
        <View style={styles.duration}>
          <Text style={styles.text}>{props.item.duration}</Text>
        </View>
      </View>
      <Text style={styles.name}>{props.item.name}</Text>
      <View style={styles.itemInfomation}>
        <Image
          style={styles.star}
          source={require('../assets/icons/star.png')}
        />
        <Text style={styles.rating}>{props.item.rating}</Text>
        {categoriesName.map(value => (
          <Text style={styles.categoryName}>{value[0].name}</Text>
        ))}
        <View style={styles.priceRating}>
          {[1, 2, 3].map((priceRating, index) => (
            <Text
              key={index}
              style={{
                color: index + 1 <= props.item.priceRating ? '#000' : '#CDCDD2',
                marginRight: 1,
              }}>
              $
            </Text>
          ))}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default HomeScreenRenderRestaurant;

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200,
    borderRadius: 25,
  },
  body: {
    marginBottom: 30,
  },
  duration: {
    position: 'absolute',
    bottom: 0,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#CDCDD2',
    width: 120,
    borderBottomLeftRadius: 25,
    borderTopRightRadius: 25,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 1,
  },
  text: {
    fontWeight: '900',
    color: '#000',
  },
  star: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  itemInfomation: {
    flexDirection: 'row',
    marginTop: 10,
  },
  name: {
    marginTop: 10,
    fontSize: 17,
    fontWeight: '300',
    color: '#000',
  },
  rating: {
    marginRight: 15,
  },
  categoryName: {
    marginLeft: 5,
    color: '#000',
  },
  priceRating: {
    flexDirection: 'row',
    marginLeft: 5,
  },
});
