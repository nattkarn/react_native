import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "colum",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{color:'red', fontSize:20,fontWeight:'bold'}}>Hello React Native!!</Text>
      <Text style={{fontStyle:'italic'}}>Creator: Nattkarn</Text>
    </View>
  );
}
