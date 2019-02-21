import React, { Component } from 'react';
import { Modal, Text, TouchableOpacity, View, Button, ScrollView, Image } from 'react-native';
import genre from '../constants/genre';
import style from '../style/GenreSelect';
import translation from '../constants/translation';
import LeftIcon from '../assets/LeftIcon';

export default class ModalExample extends Component {
  render() {
    const { isVisible, toggle, selectGenre, genreFilter } = this.props;
    return (
      <Modal
        animationType="slide"
        transparent={false}
        visible={isVisible}
        onRequestClose={() => {}}>
        <View style={{ flex: 1 }}>
          <View style={style.topBar}>
            <TouchableOpacity onPress={toggle}>
              <LeftIcon style={style.icon} />
            </TouchableOpacity>

            <Text style={style.text}>{translation('selectGenre')}</Text>
            <Button
              onPress={() => selectGenre('')}
              title={translation('reset')}
              color="#B2102F"
              accessibilityLabel="ResetGenre"
            />
          </View>
          <View style={{ flex: 1 }}>
            <ScrollView style={style.scrollView}>
              {genre.map(item => (
                <View style={style.item} key={item}>
                  <TouchableOpacity onPress={() => selectGenre(item)}>
                    <Text style={[style.itemText, genreFilter === item ? style.active : {}]}>
                      {item}
                    </Text>
                  </TouchableOpacity>
                </View>
              ))}
            </ScrollView>
          </View>
        </View>
      </Modal>
    );
  }
}
