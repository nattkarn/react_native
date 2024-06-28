import { StyleSheet } from "react-native";

export const myStyle = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor:"pink",
    marginTop:50,
    marginBottom:50,
    marginLeft: 10,
    marginRight:10
  },
  header: {
    color: "red",
    fontSize: 20,
    fontWeight: "bold",
  },
  content: {
    backgroundColor:'orange',
    padding: 25,
    marginTop:15,
    borderWidth:2,
    borderColor:"black",
    borderRadius:10,

  },
  input:{
    borderBottomColor:'#ddd',
    borderBottomWidth:1,
    paddingHorizontal:8,
    paddingVertical:6,
    marginBottom:15,
    fontSize:15
    

  },
  inputButton:{

  }
  
});
