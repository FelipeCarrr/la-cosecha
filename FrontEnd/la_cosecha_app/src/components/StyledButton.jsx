import React from "react";
import { StyleSheet,Text,View } from "react-native";
import Ripple from "react-native-material-ripple";
import theme from "../theme";

const styles= StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 15,
        paddingHorizontal: 32,
        borderRadius: 20,
        elevation: 5,
        marginBottom:0,
        backgroundColor:theme.colors.primary
      },
      text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
      },
      ripple:{
        marginBottom:10
      }
});



const StyledButton =({style ={}, ...props})=>{
    const buttonStyles={
        ...styles.button,
        ...styles.text,
        ...style
    }
    return (
            <Ripple 
            rippleDuration={800}
            rippleContainerBorderRadius={20}
            style={styles.ripple}
            {...props}>
                <View style={styles.button}>
                    <Text style={styles.text} {...props}>{props.title}</Text>
                </View>
            </Ripple>
        )
}

export default StyledButton