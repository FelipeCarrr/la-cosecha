import React from "react";
import { Image, View, StyleSheet,Text, DevSettings } from "react-native";
import theme from '../theme.js';

const styles = StyleSheet.create({
    image: {
        ...theme.imageLogin,
        marginTop:10
    },
    view:{
        justifyContent: 'center',
        alignItems: 'center',
    } 
});

const StyledProductImage =({data})=>{
    return(
        <View style={styles.view}>
            <Image  style={styles.image}  source={{uri: data}}></Image>
        </View>
    )
}

export default StyledProductImage;
