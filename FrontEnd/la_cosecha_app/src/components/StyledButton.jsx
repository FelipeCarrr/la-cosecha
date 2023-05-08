import React from "react";
import { StyleSheet,Text, Pressable, TouchableHighlight } from "react-native";
import theme from "../theme";

const styles= StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 15,
        paddingHorizontal: 32,
        borderRadius: 20,
        elevation: 5,
        marginBottom:10
      },
      text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
      },
});



const StyledButton =({style ={}, ...props})=>{
    const buttonStyles={
        ...styles.button,
        ...styles.text,
        ...style
    }
    return (
            <Pressable style={({pressed})=>[{
                backgroundColor: pressed ? theme.colors.primaryDark : theme.colors.primary,
                },buttonStyles
                ]} {...props}>
                <Text style={styles.text} {...props}>{props.title}</Text>
            </Pressable>
        )
}

export default StyledButton