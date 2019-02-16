import { StyleSheet } from "react-native";
import { isIphoneX } from "react-native-iphone-x-helper";

const style = StyleSheet.create({
  bottomBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: isIphoneX() ? 70 : 50,
    backgroundColor: "#212121",
    paddingLeft: 15,
    paddingRight: 20,
    paddingBottom: isIphoneX() ? 15 : 0,
  },
  icon: { width: 26, height: 26, margin: 7, alignSelf: "center" },
  sortNumber: { color: "white", fontSize: 22, alignSelf: "center", width: 40, height: 26 },
});
export default style;
