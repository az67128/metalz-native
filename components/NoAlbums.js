import React from "react";
import { View, Text } from "react-native";
import style from "../style/NoAlbums";

class NoAlbums extends React.Component {
  render() {
    return (
      <View style={style.noAlbums}>
        <Text style={style.text}>No metal releases for this month</Text>
      </View>
    );
  }
}

export default NoAlbums;
