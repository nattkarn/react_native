import { Text, View, Image } from "react-native";
import { myStyle } from "./styles/myStyle"


const logo = require("./assets/cat.jpg");


export default function App() {
  return (
    <View style={myStyle.container}>
      <Image source={require("./assets/cat.jpg")} style={myStyle.image}></Image>
      <Text style={myStyle.header}>Hello React Native!!</Text>
      <Text style={myStyle.content}>Creator: Nattkarn</Text>
      <Image
        source={{
          uri: "https://fastly.picsum.photos/id/20/3670/2462.jpg?hmac=CmQ0ln-k5ZqkdtLvVO23LjVAEabZQx2wOaT4pyeG10I",
        }}
        style={myStyle.image}
      ></Image>
    </View>
  );
}
