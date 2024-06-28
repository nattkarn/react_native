import { View, FlatList, Text } from "react-native";
import { myStyle } from "./styles/myStyle";
import Person from "./components/Persons";
import { useState } from "react";

export default function App() {
  const [data, setData] = useState([
    { id: 1, name: "Nattkarn1", age: 29 },
    { id: 2, name: "Nattkarn2", age: 29 },
    { id: 3, name: "Nattkarn3", age: 29 },
  ]);

  return (
    <View style={myStyle.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => <Person props={item} />}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={
          <Text
            style={{
              alignSelf: "center",
              fontSize: 25,
              marginTop: 10,
              fontWeight: "bold",
            }}
          >
            ข้อมูลประชากร
          </Text>
        }
        // If Data is Empty
        ListEmptyComponent={
          <Text
            style={{
              alignSelf: "center",
              fontSize: 20,
              marginTop: 30,
            }}
          >
            ไม่มีข้อมูล
          </Text>
        }
      />
    </View>
  );
}
