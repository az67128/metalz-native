import { StyleSheet } from "react-native";

const style = StyleSheet.create({
  topBar: {
    height: 75,
    backgroundColor: "#212121",
    flexDirection: "row",
    justifyContent: "space-between",
    // paddingTop: 30, iphone X
    paddingLeft: 15,
    paddingRight: 15,
  },
  icon: { width: 26, height: 26, margin: 7, alignSelf: "center", alignSelf: "center" },
  date: { color: "white", fontSize: 20, alignSelf: "center" },
});
export default style;
