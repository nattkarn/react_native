import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View
      style={{
        backgroundColor: "orange",
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <View style={{ backgroundColor: "blue", width: 80, height: 80, alignSelf:'flex-start'}}></View>
      <View style={{ backgroundColor: "yellow", width: 80, height: 80, alignSelf:'center' }}></View>
      <View style={{ backgroundColor: "green", width: 80, height: 80, alignSelf:'flex-end' }}></View>
    </View>
  );
}
