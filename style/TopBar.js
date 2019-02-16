import { StyleSheet } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

const style = StyleSheet.create({
  topBar: {
    height: 75,
    backgroundColor: "#212121",
    flexDirection: "row",
    justifyContent: "space-between",
    // paddingTop: 30, iphone X
    paddingTop: getStatusBarHeight(),
    paddingLeft: 15,
    paddingRight: 15,
  },
  icon: { width: 26, height: 26, margin: 7, alignSelf: "center" },
  date: { color: "white", fontSize: 20, alignSelf: "center" },
});
export default style;
