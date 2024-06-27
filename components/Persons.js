import { View, Text } from "react-native"
import { myStyle } from "../styles/myStyle"

export default function person(props) {
    
    return (
        <View style={myStyle.content}>
            <Text style={myStyle.header }> Name: {props.name } | age: {props.age}</Text>
        </View>
    )
}