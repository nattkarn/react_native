
import { StyleSheet } from "react-native";


export const myStyle = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "colum",
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    color: "red",
    fontSize: 20,
    fontWeight: "bold",
  },
  content: {
    fontStyle: "italic",
  },
  image: {
    width:300,
    height: 300
  }
});