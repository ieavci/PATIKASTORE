import { StyleSheet,Dimensions } from "react-native"
export default StyleSheet.create({
    container:{
                
        width:Dimensions.get('window').width/2,
        flexDirection:"column",
        padding: 10,
        
      },
      body:{
        backgroundColor:"#ececec",
        marginVertical:10    ,
        borderRadius:10,
        padding:10,
        height:270,
        
      },
      
      image:{
        height:190,
        width:"100%",
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
        borderRadius:10

        
      },
      innercontainer:{
        margin:0,
        padding:5,
      },
      
        
});