import { StyleSheet } from "react-native";
import { getStatusBarHeight, isIphoneX } from "react-native-iphone-x-helper";

const style = StyleSheet.create({
  item: { fontSize: 20, paddingTop: 10 },
  topBar: {
    backgroundColor: "#212121",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: isIphoneX() ? getStatusBarHeight() : 10,
    paddingBottom: 10,
  },
  text: { color: "white", fontSize: 20 },
  icon: { width: 22, height: 22, alignSelf: "center" },
});
export default style;
