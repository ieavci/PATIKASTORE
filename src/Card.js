import React from "react";
import { View,Text,Image } from "react-native";
import styles from './Card.style'
const Card =({prop}) => {
    return(
        <View style={styles.container}>
           <View style={styles.body}>
            <Image resizeMode="contain" style={styles.image}
            source={{uri:prop.imgURL}}/>
            
            <View style={styles.innercontainer}>
            <Text>{prop.title}</Text>
            <Text>{prop.price}</Text>
            </View>
            
        </View>
            
        </View>
    )
};

    

export default Card;