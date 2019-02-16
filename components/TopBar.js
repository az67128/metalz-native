import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import style from "../style/TopBar";
import { observer, inject } from "mobx-react";

const monthName = [
  "JAN",
  "FEB",
  "MAR",
  "APR",
  "MAY",
  "JUN",
  "JUL",
  "AUG",
  "SEP",
  "OCT",
  "NOV",
  "DEC",
];
class TopBar extends React.Component {
  render() {
    const { store } = this.props;
    return (
      <View style={style.topBar}>
        <TouchableOpacity onPress={() => store.changeMonth(-1)}>
          <Image style={style.icon} source={require("../assets/left.png")} />
        </TouchableOpacity>
        <Text style={style.date}>
          {monthName[store.date.getMonth()]} {store.date.getFullYear()}
        </Text>
        <TouchableOpacity onPress={() => store.changeMonth(1)}>
          <Image style={style.icon} source={require("../assets/right.png")} />
        </TouchableOpacity>
      </View>
    );
  }
}
export default inject("store")(observer(TopBar));
