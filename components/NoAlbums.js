import React from 'react';
import { View, Text } from 'react-native';
import style from '../style/NoAlbums';
import translate from '../constants/translation';

class NoAlbums extends React.Component {
  render() {
    return (
      <View style={style.noAlbums}>
        <Text style={style.text}>{translate('noAlbums')}</Text>
      </View>
    );
  }
}

export default NoAlbums;
