import React from "react";
import { Image, View, StyleSheet,Text } from "react-native";
import theme from '../theme.js';

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
            <Image  style={styles.image}  source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL3Hl5FXWpEFo9p7GTrCTz2jKeSpMPXQJ7JQ&usqp=CAU'}}></Image>
        </View>
    )
}

export default StyledLoginImage