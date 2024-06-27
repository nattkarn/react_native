import { View, Text } from "react-native"


export default function person(props) {
    console.log("🚀 ~ person ~ props:", props)
    return (
        <View>
            <Text>Name: {props.name } | age: {props.age}</Text>
        </View>
    )
}