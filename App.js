import { View, FlatList, Text, Alert } from "react-native";
import { myStyle } from "./styles/myStyle";
import Person from "./components/Persons";
import { useState } from "react";
import AddForm from "./components/AddForm";




export default function App() {
  const [data, setData] = useState([
    { id: 1, name: "Nattkarn1", age: 29 },
    { id: 2, name: "Nattkarn2", age: 29 },
    { id: 3, name: "Nattkarn3", age: 29 },
  ]);

  const deleteData=(id) => {
    setData((prevData)=> {
      return prevData.filter((item)=>item.id != id)
    })
    
  }

  const insertData=(name, age) => {
    if(name){
      setData((prevData)=>{
        return[
          {id:Math.random().toString(),name,age},
          ...prevData
        ]
      })
    }else{
      Alert.alert('กรุณาป้อนชื่อ')
    }

    if(age){

    }else{
      Alert.alert('กรุณาป้อนชื่อ')
    }

  }

  return (
    <View style={myStyle.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => <Person props={item} deleteData={deleteData} />}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={<Text style={{alignSelf: "center", fontSize: 25, marginTop: 10, fontWeight: "bold"}}>ข้อมูลประชากร</Text>
        }
        // If Data is Empty
        ListEmptyComponent={<Text style={{alignSelf: "center", fontSize: 20, marginTop: 30}}>ไม่มีข้อมูล</Text>
        }
      />
      <AddForm insertData={insertData}/>
    </View>
  );
}
