import { StyleSheet } from "react-native";

const style = StyleSheet.create({
  album: { height: 125, backgroundColor: "white", borderRadius: 5, marginTop: 8 },
  content: { flex: 1, flexDirection: "row" },
  description: { flex: 1, flexGrow: 1 },
  cover: {
    width: 100,
    height: 100,
    margin: 5,
  },

  authorWrap: { flexGrow: 1 },
  author: { fontSize: 20, fontWeight: "bold" },
  title: { fontSize: 16 },
  genre: { fontSize: 16 },
});
export default style;
