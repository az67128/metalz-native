import React from "react";
import { View, Image, Animated, Easing, ActivityIndicator } from "react-native";
import style from "../style/Loader";
import { observer } from "mobx-react";

class BottomBar extends React.Component {
  render() {
    return (
      <View style={style.loader}>
        <ActivityIndicator size="large" color="#DD2C00" />
      </View>
    );
  }
}

// class BottomBar extends React.Component {
//   constructor() {
//     super();
//     this.RotateValueHolder = new Animated.Value(0);
//   }
//   componentDidMount() {
//     this.StartImageRotateFunction();
//   }
//   StartImageRotateFunction() {
//     this.RotateValueHolder.setValue(0);
//     Animated.timing(this.RotateValueHolder, {
//       toValue: 1,
//       duration: 1500,
//       easing: Easing.cubicBezier,
//     }).start(() => this.StartImageRotateFunction());
//   }
//   render() {
//     const RotateData = this.RotateValueHolder.interpolate({
//       inputRange: [0, 0.5, 1],
//       outputRange: ["0deg", "30deg", "0deg"],
//     });
//     return (
//       <View style={style.loader}>
//         <Animated.Image
//           style={[
//             style.loaderImage,
//             {
//               transform: [{ rotate: RotateData }, { translateX: 5 }],
//             },
//           ]}
//           source={require("../assets/loader.png")}
//         />
//       </View>
//     );
//   }
// }

export default observer(BottomBar);
