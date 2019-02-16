import React, { Component } from "react";
import { Modal, Text, TouchableOpacity, View, Button, ScrollView, Image } from "react-native";
import genre from "../constants/genre";
import style from "../style/GenreSelect";

export default class ModalExample extends Component {
  render() {
    const { isVisible, toggle, selectGenre } = this.props;
    return (
      <Modal
        animationType="slide"
        transparent={false}
        visible={isVisible}
        onRequestClose={() => {}}>
        <View>
          <View style={style.topBar}>
            <TouchableOpacity onPress={toggle}>
              <Image style={style.icon} source={require("../assets/left.png")} />
            </TouchableOpacity>
            <Text style={style.text}>Select genre</Text>
            <Button
              onPress={() => selectGenre("")}
              title="Reset"
              color="#B2102F"
              accessibilityLabel="ResetGenre"
            />
          </View>
          <View>
            <ScrollView>
              {genre.map(item => (
                <TouchableOpacity onPress={() => selectGenre(item)} key={item}>
                  <Text style={style.item}>{item}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        </View>
      </Modal>
    );
  }
}
