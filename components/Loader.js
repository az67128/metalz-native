import React from "react";
import { View, Image, Animated, Easing } from "react-native";
import style from "../style/Loader";
import { observer } from "mobx-react";

class BottomBar extends React.Component {
  render() {
    // const { rotate } = this.state;
    // const spin = this.rotate.interpolate({
    //   inputRange: [0, 1],
    //   outputRange: ["0deg", "360deg"],
    // });
    return (
      <View style={style.loader}>
        <Image
          style={[style.loaderImage, { transform: [{ rotate: `45deg` }] }]}
          source={require("../assets/loader.png")}
        />
      </View>
    );
  }
}

export default observer(BottomBar);
