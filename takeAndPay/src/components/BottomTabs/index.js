import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home, Favorites} from '../../screeens';

const Tab = createBottomTabNavigator();

// Kullanacağımız sayfaları <Tab.Screen /> componentinin name ve component proplarına geçiyoruz
function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Favorites" component={Favorites} />
    </Tab.Navigator>
  );
}

export {MyTabs};
