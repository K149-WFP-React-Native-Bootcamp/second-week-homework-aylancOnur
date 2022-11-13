import React from 'react';
import {
  FlatList,
  Image,
  Text,
  View,
  TouchableOpacity,
  Button,
} from 'react-native';
// import {FlashList} from '@shopify/flash-list';
import PropTypes from 'prop-types';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './styles';

const DATA = [
  {
    title: 'First Item',
    image:
      'https://productimages.hepsiburada.net/s/203/200-200/110000176085382.jpg',
    price: '999,99',
  },
  {
    title: 'Second Item',
    image:
      'https://productimages.hepsiburada.net/s/128/200-200/110000078076147.jpg',
    price: '999,99',
  },
  {
    title: 'Third Item',
    image:
      'https://productimages.hepsiburada.net/s/37/200-200/10535529054258.jpg',
    price: '999,99',
  },
  {
    title: 'Fourth Item',
    image:
      'https://productimages.hepsiburada.net/s/86/200-200/110000028292419.jpg',
    price: '999,99',
  },
  {
    title: 'Third Item',
    image:
      'https://productimages.hepsiburada.net/s/191/200-200/110000158504254.jpg',
    price: '999,99',
  },
  {
    title: 'Fourth Item',
    image:
      'https://productimages.hepsiburada.net/s/192/200-200/110000159031047.jpg',
    price: '999,99',
  },
  {
    title: 'Third Item',
    image:
      'https://productimages.hepsiburada.net/s/14/320-320/8842800332850.jpg',
    price: '999,99',
  },
];

const Favorites = () => {
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('@storage_Key');
      if (value !== null) {
        // value previously stored
        console.log(value);
      }
    } catch (e) {
      // error reading value
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({item}) => (
          <View style={styles.card}>
            <Image style={styles.image} source={{uri: item.image}} />
            <Text style={styles.price}>{item.price} TL</Text>
            <Text style={styles.title}>{item.title}</Text>
            <TouchableOpacity style={styles.button}>
              <Text>SEPETE EKLE</Text>
            </TouchableOpacity>
          </View>
        )}
        estimatedItemSize={200}
        numColumns={2}
      />
      {/* <Button onPress={() => getData()} title={'Get Data'} /> */}
    </View>
  );
};

Favorites.defaultProps = {
  extraData: 'Data is undefined',
};

Favorites.propTypes = {
  extraData: PropTypes.string,
};

export {Favorites};
