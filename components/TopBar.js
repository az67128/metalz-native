import React from "react";
import { View, Text } from "react-native";
import style from "../style/TopBar";
import { observer } from "mobx-react";

class TopBar extends React.Component {
  render() {
    return (
      <View style={style.topBar}>
        <Text>test</Text>
      </View>
    );
  }
}
export default observer(TopBar);
