import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import style from '../style/TopBar';
import { observer, inject } from 'mobx-react';
import translate from '../constants/translation';
import LeftIcon from '../assets/LeftIcon';
import RightIcon from '../assets/RightIcon';

class TopBar extends React.Component {
  render() {
    const { store } = this.props;
    return (
      <View style={style.topBar}>
        <TouchableOpacity onPress={() => store.changeMonth(-1)}>
          <LeftIcon style={style.icon} />
        </TouchableOpacity>
        <Text style={style.date}>
          {translate('month')[store.date.getMonth()]} {store.date.getFullYear()}
        </Text>
        <TouchableOpacity onPress={() => store.changeMonth(1)}>
          <RightIcon style={style.icon} />
        </TouchableOpacity>
      </View>
    );
  }
}
export default inject('store')(observer(TopBar));
