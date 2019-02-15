import { StyleSheet } from "react-native";

const style = StyleSheet.create({
  album: { backgroundColor: "white", borderRadius: 5, marginTop: 8 },
  content: { flex: 1, flexDirection: "row" },
  description: { flex: 1, flexGrow: 1, marginBottom: 5 },
  cover: {
    width: 100,
    height: 100,
    margin: 5,
  },

  authorWrap: { flexGrow: 1 },
  author: { fontSize: 20, fontWeight: "bold" },
  title: { fontSize: 16 },
  genre: { fontSize: 16 },
  albumBar: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    borderTopColor: "#e0e0e0",
    borderTopWidth: 1,
    paddingRight: 5,
  },
  close: { width: 16, height: 16, margin: 7 },
  icon: { width: 26, height: 26, margin: 7, marginLeft: 15 },

  leftBar: { flexGrow: 1, flexDirection: "row" },
  rightBar: { flex: 1, flexDirection: "row", justifyContent: "flex-end" },
  listeners: { fontSize: 18, alignSelf: "center" },
});
export default style;
