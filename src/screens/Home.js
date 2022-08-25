import {StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';

import {HomeScreenHeader} from '../component/HomeScreenHeader';
import {HomeScreenCategories} from '../component/HomeScreenCategories';
import {HomeScreenRestaurantList} from '../component/HomeScreenRestaurantList';
import {categoryDataFake} from '../assets/fake data/categoryData';
import {restaurantDataFake} from '../assets/fake data/restaurantData';

const Home = ({navigation}) => {
  const initialCurrentLocation = {
    streetName: 'Hà Nội',
    gps: {
      latitude: 20.7166016,
      longitude: 105.8712797,
    },
  };

  const [address, setAddress] = React.useState(initialCurrentLocation);

  const [category, setCategory] = useState(categoryDataFake);

  const [selectedCategory, setSelectedCategory] = React.useState([1]);

  const [restaurantData, setRestaurantData] = useState(restaurantDataFake);

  const [selectRestaurant, setSelectRestaurant] = React.useState([]);

  const nameCategories = React.useCallback(
    listCategories => {
      const listCategoriesName = new Array();
      if (listCategories) {
        listCategories.forEach(categoryId => {
          const filterCategory = category.filter(
            cate => cate.id === categoryId,
          );
          listCategoriesName.push(filterCategory);
        });
        return listCategoriesName;
      } else {
        return [];
      }
    },
    [selectedCategory],
  );

  const selectCategoriesId = () => {
    const newSelectRestaunt = new Array();
    setSelectRestaurant([]);
    if (selectedCategory) {
      selectedCategory.forEach(item => {
        const check = restaurantData.filter(restaurant =>
          restaurant.categories.includes(item),
        );
        if (check) {
          check.forEach(res => {
            if (!newSelectRestaunt || !newSelectRestaunt.includes(res)) {
              newSelectRestaunt.push(res);
            }
          });
        }
        setSelectRestaurant(newSelectRestaunt);
      });
    }
    console.log(newSelectRestaunt.length);
  };
  useEffect(() => {
    selectCategoriesId();
  }, [selectedCategory]);
  return (
    <View style={styles.body}>
      <HomeScreenHeader address={address} />
      <HomeScreenCategories
        category={category}
        selectedCategory={selectedCategory}
        setSelectedCategory={input => setSelectedCategory(input)}
      />
      <HomeScreenRestaurantList
        selectRestaurant={selectRestaurant}
        address={address}
        navigation={navigation}
        nameCategories={input => nameCategories(input)}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#F8F8F9',
  },
});
