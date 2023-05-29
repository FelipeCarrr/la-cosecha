import React from "react";
import { Image, View, StyleSheet,Text } from "react-native";
import theme from '../theme.js';

const image=require('../../assets/images/login.png')

const styles = StyleSheet.create({
    image: theme.imageLogin,
    view:{
        justifyContent: 'center',
        alignItems: 'center',
    } 
});

const StyledLoginImage =()=>{
    return(
        <View style={styles.view}>
            <Image  style={styles.image}  source={image}></Image>
        </View>
    )
}

export default StyledLoginImage