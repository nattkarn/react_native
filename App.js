import { View  } from "react-native";
import { myStyle } from "./styles/myStyle";
import Person from './components/Persons'

export default function App() {
  
  return (
    <View style={myStyle.container}>
      <Person/>
      <Person/>
      <Person/>
    </View>
  );
}
