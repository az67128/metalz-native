import React from "react";
import { View } from "react-native";
import style from "../style/BottomBar";
import { observer } from "mobx-react";

class BottomBar extends React.Component {
  render() {
    return <View style={style.bottomBar} />;
  }
}

export default observer(BottomBar);
