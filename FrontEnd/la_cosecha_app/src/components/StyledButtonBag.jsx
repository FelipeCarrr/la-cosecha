import React from "react";
import { StyleSheet } from "react-native";
import { Button } from "react-native-paper";
import { Feather } from '@expo/vector-icons';
import Ripple from "react-native-material-ripple";
import { View } from "react-native";
import theme from "../theme";

const styles=StyleSheet.create({
        view:{
            backgroundColor:theme.colors.primary,
            borderRadius:30,
            paddingVertical:20,
            width:'100%',
            justifyContent:'center',
            alignItems:'center'
        },
    
    variant:{
        mode:'text',
        
        textColor:theme.colors.primary
    }
});

const StyledButtonBag=({style={},children,...props})=>{
    const buttonStyle={
        ...styles.view,
        ...style
    }
    return (
        <Ripple rippleDuration={600} rippleContainerBorderRadius={30} style={{justifyContent:'center', alignItems:'center', ...style}} {...props}>  
            <View style={styles.view}>
                <Feather name="shopping-bag" size={24} color="white" />
            </View>
        </Ripple>
            
        
    )
}

export default StyledButtonBag