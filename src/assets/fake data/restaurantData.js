// price rating
export const affordable = 1;
export const fairPrice = 2;
export const expensive = 3;
export const restaurantDataFake = [
  {
    id: 1,
    name: 'Shop Gà',
    rating: 4.8,
    categories: [5, 7],
    priceRating: affordable,
    photo: require('../images/burger-restaurant.jpg'),
    duration: '30 - 45 min',
    location: {
      latitude: 1.5347282806345879,
      longitude: 110.35632207358996,
    },
    courier: {
      avatar: require('../images/avatar-1.jpg'),
      name: 'Quang',
    },
    menu: [
      {
        menuId: 1,
        name: 'Shop gà burger',
        photo: require('../images/crispy-chicken-burger.jpg'),
        description: 'Burger with crispy chicken, cheese and lettuce',
        calories: 200,
        price: 10,
      },
      {
        menuId: 2,
        name: 'Crispy Chicken Burger with Honey Mustard',
        photo: require('../images/honey-mustard-chicken-burger.jpg'),
        description: 'Crispy Chicken Burger with Honey Mustard Coleslaw',
        calories: 250,
        price: 15,
      },
      {
        menuId: 3,
        name: 'Crispy Baked French Fries',
        photo: require('../images/baked-fries.jpg'),
        description: 'Crispy Baked French Fries',
        calories: 194,
        price: 8,
      },
    ],
  },
  {
    id: 2,
    name: 'Shop Pizza',
    rating: 4.8,
    categories: [2, 4, 6],
    priceRating: expensive,
    photo: require('../images/pizza-restaurant.jpg'),
    duration: '15 - 20 min',
    location: {
      latitude: 1.556306570595712,
      longitude: 110.35504616746915,
    },
    courier: {
      avatar: require('../images/avatar-2.jpg'),
      name: 'Tạ Yến',
    },
    menu: [
      {
        menuId: 4,
        name: 'Shop Pizza',
        photo: require('../images/hawaiian-pizza.jpg'),
        description: 'Canadian bacon, homemade pizza crust, pizza sauce',
        calories: 250,
        price: 15,
      },
      {
        menuId: 5,
        name: 'Tomato & Basil Pizza',
        photo: require('../images/pizza.jpg'),
        description:
          'Fresh tomatoes, aromatic basil pesto and melted bocconcini',
        calories: 250,
        price: 20,
      },
      {
        menuId: 6,
        name: 'Tomato Pasta',
        photo: require('../images/tomato-pasta.jpg'),
        description: 'Pasta with fresh tomatoes',
        calories: 100,
        price: 10,
      },
      {
        menuId: 7,
        name: 'Mediterranean Chopped Salad ',
        photo: require('../images/salad.jpg'),
        description: 'Finely chopped lettuce, tomatoes, cucumbers',
        calories: 100,
        price: 10,
      },
    ],
  },
  {
    id: 3,
    name: 'Shop súc xích',
    rating: 4.8,
    categories: [3],
    priceRating: expensive,
    photo: require('../images/hot-dog-restaurant.jpg'),
    duration: '20 - 25 min',
    location: {
      latitude: 1.5238753474714375,
      longitude: 110.34261833833622,
    },
    courier: {
      avatar: require('../images/avatar-3.jpg'),
      name: 'Phương Yến',
    },
    menu: [
      {
        menuId: 8,
        name: 'Chicago Style Hot Dog',
        photo: require('../images/chicago-hot-dog.jpg'),
        description: 'Fresh tomatoes, all beef hot dogs',
        calories: 100,
        price: 20,
      },
    ],
  },
  {
    id: 4,
    name: 'Shop Sushi',
    rating: 4.8,
    categories: [8],
    priceRating: expensive,
    photo: require('../images/japanese-restaurant.jpg'),
    duration: '10 - 15 min',
    location: {
      latitude: 1.5578068150528928,
      longitude: 110.35482523764315,
    },
    courier: {
      avatar: require('../images/avatar-4.jpg'),
      name: 'Ahmad',
    },
    menu: [
      {
        menuId: 9,
        name: 'Sushi sets',
        photo: require('../images/sushi.jpg'),
        description: 'Fresh salmon, sushi rice, fresh juicy avocado',
        calories: 100,
        price: 50,
      },
    ],
  },
  {
    id: 5,
    name: 'Shop mì bún bánh đa',
    rating: 4.1,
    categories: [1, 2],
    priceRating: affordable,
    photo: require('../images/noodle-shop.jpg'),
    duration: '15 - 20 min',
    location: {
      latitude: 21.0052531,
      longitude: 105.8441894,
    },
    courier: {
      avatar: require('../images/avatar-5.jpg'),
      name: 'Minh Phương',
    },
    menu: [
      {
        menuId: 10,
        name: 'Kolo Mee',
        photo: require('../images/kolo-mee.jpg'),
        description: 'Noodles with char siu',
        calories: 200,
        price: 5,
      },
      {
        menuId: 11,
        name: 'Sarawak Laksa',
        photo: require('../images/sarawak-laksa.jpg'),
        description: 'Vermicelli noodles, cooked prawns',
        calories: 300,
        price: 8,
      },
      {
        menuId: 12,
        name: 'Nasi Lemak',
        photo: require('../images/nasi-lemak.jpg'),
        description: 'A traditional Malay rice dish',
        calories: 300,
        price: 8,
      },
      {
        menuId: 13,
        name: 'Nasi Briyani with Mutton',
        photo: require('../images/nasi-briyani-mutton.jpg'),
        description: 'A traditional Indian rice dish with mutton',
        calories: 300,
        price: 8,
      },
    ],
  },
];
