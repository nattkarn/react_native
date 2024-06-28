import { View, Text } from "react-native"
import { myStyle } from "../styles/myStyle"
import { TouchableOpacity } from "react-native"

export default function person({props, deleteData}) {
    
    return (
        <TouchableOpacity onPress={() => {
            deleteData(props.id)
        }}>
            <View style={myStyle.content}>
                <Text style={myStyle.header }> Name: {props.name } | age: {props.age}</Text>
            </View>
        </TouchableOpacity>
    )
}