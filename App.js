import { Text, View, Image, Button, Alert } from "react-native";
import { myStyle } from "./styles/myStyle";
import { useState } from "react";

const logo = require("./assets/cat.jpg");

export default function App() {
  const [developer, setDeveloper] = useState ({ name:"Nattkarn", year: 2024});
  

  return (
    <View style={myStyle.container}>
      <Image source={require("./assets/cat.jpg")} style={myStyle.image}></Image>
      <Text style={myStyle.header}>Hello React Native!!</Text>
      <Text style={myStyle.content}>Creator: {developer.name} | {developer.year}</Text>
      <Image
        source={{
          uri: "https://fastly.picsum.photos/id/20/3670/2462.jpg?hmac=CmQ0ln-k5ZqkdtLvVO23LjVAEabZQx2wOaT4pyeG10I",
        }}
        style={myStyle.image}
      ></Image>
      <Button
        title="Update Detail"
        color={"red"}
        onPress={() => {
          console.log("If See this. Button is Work");
          setDeveloper({ name:"ARM" , year: 2567});
        }}
      ></Button>
    </View>
  );
}
