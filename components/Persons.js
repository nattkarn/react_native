import { View, Text } from "react-native";
import { myStyle } from "../styles/myStyle";
import { TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function person({ props, deleteData }) {
  return (
    <View style={myStyle.content}>
      <Text style={myStyle.header}>
        Name: {props.name} | age: {props.age}
      </Text>
      <TouchableOpacity
        onPress={() => {
          deleteData(props.id);
        }}
      >
        <MaterialIcons name="delete" size={30} />
      </TouchableOpacity>
    </View>
  );
}
