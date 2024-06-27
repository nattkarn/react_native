import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={myStyle.container}>
      <Text style={myStyle.header}>Hello React Native!!</Text>
      <Text style={myStyle.content}>Creator: Nattkarn</Text>
    </View>
  );
}

const myStyle = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "colum",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'orange'
  },
  header: {
    color: "red",
    fontSize: 20,
    fontWeight: "bold",
  },
  content: {
    fontStyle: "italic",
  },
});
