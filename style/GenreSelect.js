import { StyleSheet } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { Platform } from "react-native";

const style = StyleSheet.create({
  item: { fontSize: 20, paddingTop: 5, paddingBottom: 5, paddingLeft: 10 },
  itemText: { fontSize: 20 },
  topBar: {
    backgroundColor: "#212121",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: Platform.OS === "ios" ? getStatusBarHeight() : 10,
    paddingBottom: 10,
  },

  text: { color: "white", fontSize: 20, marginLeft: 20 },
  icon: { width: 22, height: 22, alignSelf: "center" },
  active: {
    color: "#DD2C00",
  },
});
export default style;
