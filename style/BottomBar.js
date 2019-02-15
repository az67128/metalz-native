import { StyleSheet } from "react-native";

const style = StyleSheet.create({
  bottomBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: 50,
    backgroundColor: "#212121",
    paddingLeft: 15,
    paddingRight: 20,
    // paddingBottom:15 iphone X
  },
  icon: { width: 26, height: 26, margin: 7, alignSelf: "center" },
  sortNumber: { color: "white", fontSize: 22, alignSelf: "center", width: 40 },
});
export default style;
