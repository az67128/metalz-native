import React from "react";
import { View, TouchableWithoutFeedback, Image, Text } from "react-native";
import style from "../style/BottomBar";
import { observer, inject } from "mobx-react";

class BottomBar extends React.Component {
  render() {
    const { store } = this.props;
    return (
      <View style={style.bottomBar}>
        <TouchableWithoutFeedback onPress={() => store.toggleFilter("isYandexActive")}>
          <Image style={style.icon} source={require("../assets/guitarwhite.png")} />
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => store.toggleFilter("isYandexActive")}>
          {store.isYandexActive ? (
            <Image style={style.icon} source={require(`../assets/yandexred.png`)} />
          ) : (
            <Image style={style.icon} source={require(`../assets/yandexwhite.png`)} />
          )}
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => store.toggleFilter("isGoogleActive")}>
          {store.isGoogleActive ? (
            <Image style={style.icon} source={require(`../assets/googlered.png`)} />
          ) : (
            <Image style={style.icon} source={require(`../assets/googlewhite.png`)} />
          )}
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => store.toggleFilter("sortByRating")}>
          <Text style={style.sortNumber}>{store.sortByRating ? "123" : "A-Z"}</Text>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

export default inject("store")(observer(BottomBar));
