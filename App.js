import { View  } from "react-native";
import { myStyle } from "./styles/myStyle";
import Person from './components/Persons'

export default function App() {
  
  return (
    <View style={myStyle.container}>
      <Person name={'Nattkarn'} age={29} />
      <Person name={'Nattkarn2'} age={29}/>
      <Person name={'Nattkarn3'} age={29}/>
    </View>
  );
}
