import { StyleSheet } from "react-native";

const style = StyleSheet.create({
  loader: { flex: 1, justifyContent: "center", backgroundColor: "#212121" },
  loaderImage: {
    alignSelf: "center",
    width: 90,
    height: 90,
  },
});
export default style;

// .loader svg {
//     animation-name: metal;
//     animation-duration: 2s;
//     animation-iteration-count: infinite;
//     animation-timing-function: cubic-bezier;
//     transform-origin: 37% 69%;
//   }
//   @keyframes metal {
//     0% {
//       transform: rotate(0deg);
//     }
//     50% {
//       transform: rotate(30deg);
//     }
//     100% {
//       transform: rotate(0deg);
//     }
