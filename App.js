import React from "react";
import { SafeAreaView,Text, TextInput,StyleSheet, FlatList, View} from "react-native";
import Card from "./src/Card";
import Store from './Store.json'
//https://m2.material.io/design/color/dark-theme.html#ui-application

function App(){
  
  
  return(
    <SafeAreaView style={styles.container}>      
      <Text style={styles.BrandText}>PATIKASTORE</Text>
      
      <TextInput style={styles.searchBar}
        placeholder="Search"
        />
        <View style={styles.cardcontainer}>
        <FlatList 
       data={Store}
       renderItem={({item}) =><Card prop={item}/> } 
       
       contentContainerStyle={{flexDirection:"row",flexWrap:"wrap"}}
       />

        </View>
        
        
        
        

    </SafeAreaView>
  );
}

const styles=StyleSheet.create({
  searchBar:{
    
    height:45,
    marginLeft:10,
    marginRight:10,
    marginTop:1,
    padding:10,
    borderRadius:8,
    backgroundColor:'#ececec',   
    
    
  },
  cardcontainer:{
    
    
  },
  container:{
    flex: 1566,
    backgroundColor: '#FFFFFF', //'#121212'
    
  },
  searchBarText:{
    color: '#BB68BC'
  },
  BrandText:{
    fontWeight:"bold",    
    color:'#BB68BC',
    fontSize:40,
    marginBottom:6,
    marginLeft:10,
    marginRight:10,
    marginTop:25,
    
  },
  
})
export default App;