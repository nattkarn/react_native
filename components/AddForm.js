import { View, TextInput, Button } from 'react-native'
import { myStyle } from '../styles/myStyle'
export default function AddForm(){
    return(
        <View>
            <TextInput
            placeholder='ป้อนชื่อ'
            keyboardType='default'
            style={myStyle.input}
            />
            <TextInput
            placeholder='อายุ'
            keyboardType='number-pad'
            style={myStyle.input}
            />
            <Button title='เพิ่มข้อมูล'/>
        </View>
    )
}