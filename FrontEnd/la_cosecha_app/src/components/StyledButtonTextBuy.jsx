import React from "react";
import { StyleSheet } from "react-native";
import { Button, Text } from "react-native-paper";
import theme from "../theme";
import Ripple from "react-native-material-ripple";
import { View } from "react-native";

const styles=StyleSheet.create({
    view:{
        backgroundColor:theme.colors.primary,
        borderRadius:20,
        paddingVertical:15,
        width:'100%',
        justifyContent:'center',
        alignItems:'center'
    },
    variant:{
        mode:'text',
        
        textColor:theme.colors.primary
    },

    textPrice:{
        color:'#fff',
        fontWeight:'bold'
        
    },
});

const StyledButtonTextBuy=({style={},children,...props})=>{
    const buttonStyle={
        ...styles.view,
        ...style
    }
    return (
        <Ripple rippleDuration={600} rippleContainerBorderRadius={20} style={{justifyContent:'center', alignItems:'center', ...style}} {...props}>  
            <View style={styles.view}>
                <Text style={styles.textPrice} variant="headlineSmall">Comprar</Text>
            </View>
        </Ripple>
                
    )
}

export default StyledButtonTextBuy