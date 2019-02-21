import React from 'react';
import { View, TouchableOpacity, Image, Text } from 'react-native';
import style from '../style/BottomBar';
import { observer, inject } from 'mobx-react';
import YandexIcon from '../assets/YandexIcon';
import GoogleIcon from '../assets/GoogleIcon';
import GuitarIcon from '../assets/GuitarIcon';
import Sort123Icon from '../assets/Sort123Icon';
import SortAzIcon from '../assets/SortAzIcon';

class BottomBar extends React.Component {
  render() {
    const { store } = this.props;
    return (
      <View style={style.bottomBar}>
        <TouchableOpacity onPress={() => store.toggleFilter('isGenreSelect')}>
          <GuitarIcon style={style.icon} fill={store.genreFilter ? '#DD2C00' : 'white'} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => store.toggleFilter('isYandexActive')}>
          <YandexIcon style={style.icon} fill={store.isYandexActive ? '#DD2C00' : 'white'} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => store.toggleFilter('isGoogleActive')}>
          <GoogleIcon style={style.icon} fill={store.isGoogleActive ? '#DD2C00' : 'white'} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => store.toggleFilter('sortByRating')}>
          {store.sortByRating ? (
            <Sort123Icon style={style.icon} />
          ) : (
            <SortAzIcon style={style.icon} />
          )}
        </TouchableOpacity>
      </View>
    );
  }
}

export default inject('store')(observer(BottomBar));
